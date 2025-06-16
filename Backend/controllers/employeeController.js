const db = require('../config/db')
const BASE_URL = `http://localhost:5000`


exports.createEmployee = async (req, res) => {
    const { name, department, designation, project, type, status, employeeId } = req.body
    const image = req.file ? req.file.filename : null
    if (!name || !department || !designation || !project || !type || !status) {
        return res.status(400).json({ message: "All fields are required including image." });
    }
    const query = `insert into employee (employeeId,name, department, designation, project, type, status, image) Values (? ,?, ?, ?, ?, ?, ?, ?)`;

    db.query(query, [employeeId, name, department, designation, project, type, status, image], async (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ message: "internal server error" })
        }
        res.status(201).json({ message: "Employee created successfully" })
    })

}

exports.getallEmployee = async (req, res) => {

    const query = 'select * from employee'
    db.query(query, async (err, results) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ message: "internal server error" })
        }
        const formattedResults = results.map(emp => ({
            ...emp,
            imageURL: emp.image ? `${BASE_URL}/uploads/${emp.image}` : null
        }));
        res.status(201).json({ formattedResults })
    })
}


exports.updateEmployee = async (req, res) => {
    const { id } = req.params
    const { name, department, designation, project, type, status, employeeId } = req.body

    const image = req.file ? req.file.filename : null

    const updates = []
    const values = []

    if (name) {
        updates.push('name = ?')
        values.push(name)
    }
    if (department) {
        updates.push('department = ?')
        values.push(department)
    }
    if (designation) {
        updates.push('designation = ?')
        values.push(designation)
    }

    if (project) {
        updates.push('project = ?')
        values.push(project)
    }
    if (type) {
        updates.push('type = ?')
        values.push(type)
    }
    if (status) {
        updates.push('status = ?')
        values.push(status)
    }
    if (image) {
        updates.push('image = ?')
        values.push(image)
    }
    if (updates.length === 0) {
        return res.status(400).json({ message: "No valide fields to update" })
    }

    const sql = `update employee set ${updates.join(', ')} where employeeID = ?`
    values.push(id)


    db.query(sql, values, async (err, result) => {
        if (err) {
            console.error('error update employee:', err)
            return res.status(500).json({ message: "internal server error" })
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Employee not found" })
        }
        res.status(200).json({ message: "Employee updated successfully" })
    })
}

exports.getEmployee = async (req, res) => {
    const { id } = req.params
    const query = `select * from employee where employeeId=${id}`
    db.query(query, async (err, results) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ message: "internal server error" })
        }
        if (results.length === 0) {
            return res.status(404).json({ message: "user not found" })
        }
        const formattedResults = results.map(emp => ({
            ...emp,
            imageURL: emp.image ? `${BASE_URL}/uploads/${emp.image}` : null

        }))

        res.status(201).json({ formattedResults })
    })
}

exports.deleteEmployee = async (req, res) => {
    const { id } = req.params

    const query = `delete from employee where employeeId=${id}`
    db.query(query, async (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ message: "Internal server error" })
        }
        if (result.length === 0) {
            return res.status(404).json({ message: "user not found" })
        }
        return res.status(201).json({ message: "Employee deleted successfully" })
    })
}

