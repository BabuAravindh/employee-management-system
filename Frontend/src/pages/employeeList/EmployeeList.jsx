import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Modal from '../../components/modals/Modal'
export default function EmployeeList() {
  const navigate = useNavigate()
   const [employee,setEmployee] = useState([])
   const [isModal,setModalOpen] = useState(false)
   const [searchTerm,setSearchTerm] = useState('')
   const [deleteId,setDeleteId] = useState(null)
   useEffect(() => {

    const fetchEmployee = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/employee')
      console.log(response.data)
      setEmployee(response.data.formattedResults)
      } catch (error) {
        console.log(error)
      } 
    }
    fetchEmployee()

  },[])

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/employee/${deleteId}`)
      setEmployee((prev => prev.filter(emp => emp.employeeId !== deleteId)))
      setModalOpen(false)
      setDeleteId(null)
    } catch (error) {
      console.error("deleted failed",error)
    }
  }

  const filteredEmployees = employee.filter((emp) => 

emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
emp.employeeId.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
emp.department.toLowerCase().includes(searchTerm.toLowerCase())||
emp.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
emp.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
emp.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
emp.status.toLowerCase().includes(searchTerm.toLowerCase)
  )

  return (
    <div className="container mt-4">
      <div className=" row align-items-center">
        <div className="col-md-6">
          <h2 className="fw-bold">
            Employee
          </h2>
        </div>
        <div className="col-md-6 d-flex justify-content-center gap-4">
          <input type="search"
           className="form-control w-50"
           placeholder='search Employee'
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
           />
           <button
              type='button'
              className='btn btn-primary'
              onClick={()=> navigate('/add')}
           >
            <i className="bi bi-plus-circle">
             </i>
             <span className='ms-2'>Add New Employee</span>
           </button>
        </div>
      </div>
      <div className="container mt-5">
        <div className="border rounded p-3">
          <table className="table mb-0">
            <thead>
              <tr>
                <th className="fs-6 fw-lighter">
                  Employee Name
                </th>
                <th className="fs-6 fw-lighter">
                  Employee Id
                </th>
                <th className="fs-6 fw-lighter">
                  Department
                </th>
                <th className="fs-6 fw-lighter">
                  Designation
                </th>
                <th className="fs-6 fw-lighter">
                  Project
                </th>
                <th className="fs-6 fw-lighter">
                  Type
                </th>
                <th className="fs-6 fw-lighter">
                  Status
                </th>
                <th className="fs-6 fw-lighter">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((emp, index) => (
    <tr key={index}>
      <td className="d-flex align-items-center">
        <img
          src={emp.imageURL || "https://via.placeholder.com/40"} // fallback image
          alt="employee"
          className="rounded-circle"
          width="40"
          height="40"
        />
        <span className="ms-2 fw-light">{emp.name}</span>
      </td>
      <td className="fw-light">{emp.employeeId || 'N/A'}</td>
      <td className="fw-light">{emp.department}</td>
      <td className="fw-light">{emp.designation}</td>
      <td className="fw-light">{emp.project}</td>
      <td className="fw-light">{emp.type}</td>
      <td className="fw-light">{emp.status}</td>
      <td>
        <div className="d-flex">
          <button className="btn" onClick={() => navigate(`/view/${emp.employeeId}`)}>
            <i className="bi bi-eye"></i>
          </button>
          <button className="btn" onClick={() => navigate(`/update/${emp.employeeId}`)}>
            <i className="bi bi-pencil-square"></i>
          </button>
<button className="btn" onClick={() => {
  setDeleteId(emp.employeeId); 
  setModalOpen(true);         
}}>
  <i className="bi bi-trash"></i>
</button>

        </div>
      </td>
    </tr>
  ))}

            </tbody>
          </table>
        </div>
      <Modal show={isModal} onClose={() => setModalOpen(false)} >
          <div className="d-flex flex-column text-center">
            <i className="bi bi-trash text-primary" style={{fontSize:'50px'}}></i>
            <span>Are you sure you want to delete this employee</span>
          </div>
          <div className="d-flex mt-4 gap-2">
            <button className="btn btn-danger w-50" onClick={() => setModalOpen(false)}>Cancel</button>
            <button className="btn btn-primary w-50" onClick={handleDelete}>Yes</button>
          </div>
      </Modal>

      </div>
    </div>
  )
}
