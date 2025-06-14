import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function UpdateEmployeeForm() {
  const navigate = useNavigate()
  const { id } = useParams()

  const [formData, setFormData] = useState({
    name: 'Mark otto',
    employeeId: "1234567",
    department: "engineering",
    designation: "frontend developer",
    project: "project",
    type: "full-time",
    status: "active",
    image: null
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Updated Employee :', formData)
    navigate('/')
  }

  return (
    <div style={{ padding: '2rem', borderRadius: '10px' }} >
      <div className="top-bar d-flex align-items-center">
        <i className="bi bi-chevron-left me-3" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}></i>
        <h3 className="fw-bold mb-0">Edit Employee Details</h3>
      </div>

      <div className="tab-bar mt-5 mb-3">
        <div className="bi bi-personfill me-2">
          <span className="tab-text active">
            Personal Information
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="employee-form">
        <div className="d-flex justify-content-start mb-4">
          <div className="upload-box text-center">
            <label htmlFor="imageUpload">
              <i className="bi bi-camera fs-3 text-muted"></i>
            </label>
            <input type="file" id='imageupload' name='image' onChange={handleChange} hidden />
          </div>
        </div>

        <div className="row">
          <div className="col-md-9">
            <div className="row g-5">


              <div className="col-md-6">
                <label htmlFor="name" className="fs-7 fw-bold mb-2">Name</label>
                <input type="text" id='name' name="name" placeholder='Enter name' value={formData.name} onChange={handleChange} className="form-control h-75" required />
              </div>


              <div className="col-md-6">
                <label htmlFor="employeeId" className="fs-7 fw-bold mb-2"></label>
                <input type="text" id='employeeId' name='employeeId' placeholder='Enter employee Id' value={formData.employeeId} onChange={handleChange} className="form-control h-75" required />
              </div>


              <div className="col-md-6">
                <label htmlFor="department" className="fs-7 fw-bold mb-2">Department</label>
                <select id="department" className='form-select h-75' value={formData.department} name='department' onChange={handleChange}>
                  <option value="">Select Department</option>
                  <option value="engineering">Engineering</option>
                  <option value="HR">HR</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </div>



              <div className="col-md-6">
                <label htmlFor="designation" className="fs-7 fw-bold mb-2">Designation</label>
                <select id="designation" name='designation' className='form-select h-75' value={formData.designation} onChange={handleChange} required>
                  <option value="">Select Designation</option>
                  <option value="frontend developer">Developer</option>
                  <option value="Designer">Designer</option>
                  <option value="Manager">Manager</option>
                </select>
              </div>

              <div className="col-md-6">
                <label htmlFor="project" className="fs-7 fw-bold mb-2">Project</label>
                <input type="text" id='project' name='project' placeholder='Enter the project'
                  value={formData.project} onChange={handleChange} className="form-control h-75" />
              </div>

              <div className="col-md-6">
                <label htmlFor="type" className="fs-7 fw-bold mb-2">Type*</label>
                <select id="type" name='type' className="form-select h-75" value={formData.type} onChange={handleChange}>
                  <option value="">Select Type</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                </select>
              </div>


              <div className="col-md-6">
                <label htmlFor="status" className="fs-7 fw-bold mb-2">Status*</label>
                <select id="status" className="form-select h-75" value={formData.status} name='status' onChange={handleChange}>
                  <option value="">Select Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>


            </div>
          </div>
        </div>
        <div className="mt-4 text-end d-flex flex-row justify-content-end gap-2">
          <button type='button' className="btn btn-outline-secondary px-4" onClick={() => navigate('/')}>
            Cancel
          </button>
          <button type='submit' className="btn btn-primary px-4">
            Update
          </button>
        </div>
      </form>
    </div>
  )
}
