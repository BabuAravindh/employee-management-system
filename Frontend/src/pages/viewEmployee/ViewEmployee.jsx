import { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from 'axios'
export default function viewEmployee(){
  const [employee,setEmployee] = useState({})
  const navigate = useNavigate()
  const {id} = useParams()
  console.log(id)
   useEffect(() =>{

    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/employee/${id}`)
        console.log(response.data)
        setEmployee(response.data.formattedResults[0])
      } catch (error) {
        console.log(error)
      }
    }
    fetchEmployee()
   },[]) 

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
        <img src={employee.imageURL} alt="" className="rounded"  width="100" height="100"/>
      </div>
      <div className="row">
        <div className="col-auto">
          <div className="row g-5">
            {
              [
                {label:'Name',value:employee.name},
                {label:'Employee Id',value:employee.employeeId},
                {label:'Department',value:employee.department},
                {label:'Designation',value:employee.designation},
                {label:'Project',value:employee.project},
                {label:'Type',value:employee.type},
                {label:'Status',value:employee.status},
              ].map((field,index) => (
                <div key={index} className="col-md-6 border-bottom p-2">
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