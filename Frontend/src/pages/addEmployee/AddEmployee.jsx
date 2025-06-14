import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import './addemployee.css'
export default function addEmployee(){
  const navigate = useNavigate()
  const [formData,setFormData] = useState({
    name:'',
    employeeId:'',
    department:'',
    designation:'',
    project:'',
    type:'',
    status:'',
    image:null,
  })

  const handleChange = (e) =>{
    const {name,value,files} = e.target
    setFormData({
      ...formData,
      [name]:files ? files[0] : value,
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(formData)
    navigate('/')
  }

  return(
    <div className="add-employee-container">
      <div className="top-bar d-flex align-items-center">
        <i className="bi bi-chevron-left me-3
        "
        style={{cursor:'pointer'}}
        onClick={() => navigate('/')}
         > </i>
        <h3 className="fw-bold mb-0">Add New Employee</h3>
      </div>
      <div className="tab-bar mt-5 mb-3">
        <i className="bi bi-person-fill me-2"></i>
        <span className="tab-text active">
          Personal Information
        </span>
      </div>
      <form onSubmit={handleSubmit} className="employee-form">
        <div className="d-flex justify-content-start mb-4">
            <div className="upload-box text-center">
              <label htmlFor="imageUpload">
                <i className="bi bi-camera fs-3 text-muted"></i>
              </label>
              <input type="file" id="imageUpload" name="image" onChange={handleChange} hidden />
            </div>
          </div>
        <div className="row">
          <div className="col-md-9">
            <div className="row g-5">
              <div className="col-md-6">
                <label className="fs-7 fw-bold mb-2">Name*</label>
                <input type="text" className="form-control h-75"  placeholder="Enter Name" onChange={handleChange}/>
              </div>
              <div className="col-md-6">
                <label className="fs-7 fw-bold mb-2">Employee Id*</label>
                <input type="text" className="form-control h-75"  placeholder="Enter EmployeeID" onChange={handleChange}/>
              </div>
              <div className="col-md-6">
                <label htmlFor="department" className="fs-7 fw-bold mb-2">Department *</label>
                <select id="department" className="form-select h-75" onChange={handleChange} required>
                  <option value="">Select Department</option>
                  <option value="Engineering">Engineering</option>
                  <option value="HR">HR</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="designation" className="fs-7 fw-bold mb-2">Designation*</label>
                <select id="designation" className="form-select h-75" onChange={handleChange} required>
                  <option value="" >Select Designation</option>
                  <option value="Devloper" >Developer</option>
                  <option value="designer">Designer</option>
                  <option value="Manager">Manager</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="designation" className="fs-7 fw-bold mb-2">Project</label>
                <input type="text" className="form-control h-75" placeholder="enter project" onChange={handleChange}/>
              </div>
              <div className="col-md-6">
                <label htmlFor="type" className="fs-7 fw-bold mb-2">Type*</label>
                <select id="type" className="form-select h-75" onChange={handleChange} required>
                  <option value="" >Select Type</option>
                  <option value="office">Office</option>
                  <option value="home">Home</option>
                </select>
              </div>

              <div className="col-md-6">
                <label htmlFor="status" className="fs-7 fw-bold mb-2"></label>
                <select  className="form-select h-75" onChange={handleChange}>
                  <option value="">Select Status</option>
                  <option  value="permanent">Permanent</option>
                  <option value="Temporary">Temporary</option>
                </select>
              </div>
            </div>
          </div>
        </div>

      </form>
    </div>
  )
}