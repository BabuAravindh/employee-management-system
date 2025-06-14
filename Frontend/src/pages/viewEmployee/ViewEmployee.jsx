import { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
 const employee = {
    name: 'Mark Otto',
    employeeId: 'EMP001',
    department: 'Engineering',
    designation: 'Frontend Developer',
    project: 'Project X',
    type: 'Full-Time',
    status: 'permanent',
    imageURL: 'https://images.pexels.com/photos/17264401/pexels-photo-17264401/free-photo-of-close-up-photo-of-a-evarcha-spider-crawling-on-a-twig.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  };
export default function viewEmployee(){
  const navigate = useNavigate()
 return(
  <>
  <div style={{ padding:'2rem', borderRadius:'10px'}}>
    <div className="top-bar d-flex align-items-center">
      <i className="bi bi-chevron-left me-3" style={{cursor:'pointer'}} onClick={()=>navigate('/')}></i>
      <h3 className="fw-bold mb-0">View Employee Details</h3>
    </div>
      <div className="tab-bar mt-5 mb-3">
        <i className="bi bi-person-fill me-2"></i>
        <span className="tab-text active">Personal Information</span>
      </div>
      <div className="mb-3">
        <img src="https://images.pexels.com/photos/17264401/pexels-photo-17264401/free-photo-of-close-up-photo-of-a-evarcha-spider-crawling-on-a-twig.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="rounded"  width="100" height="100"/>
      </div>
      <div className="row">
        <div className="col-auto">
          <div className="row g-5">
            {
              [
                {label:'Name',value:'babu'},
                {label:'Employee Id',value:'12345'},
                {label:'Department',value:'Engineering'},
                {label:'Designation',value:'Developer'},
                {label:'Project',value:'project'},
                {label:'Type',value:'full-time'},
                {label:'Status',value:'permanent'},
              ].map((field,index) => (
                <div className="col-md-6 border-bottom p-2">
                  <label  className="fs-7 fw-bold mb-1">
                    {field.label}
                  </label>
                  <div className="form-control-plaintext">
                    {field.value}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
  </div>

  </>
 )
}