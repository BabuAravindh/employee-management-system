import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function EmployeeList() {
  const navigate = useNavigate()
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
              <tr>
                <td>
                                    <img
                                        src="https://images.pexels.com/photos/17264401/pexels-photo-17264401/free-photo-of-close-up-photo-of-a-evarcha-spider-crawling-on-a-twig.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                        alt="employee"
                                        className="rounded-circle"
                                        width="40"
                                        height="40"
                                    />
                                    <span className='ms-2 fw-light'>Babuaravindh</span>

                </td>
                <td className="fw-light">1234</td>
                <td className="fw-light">Engineering</td>
                <td className="fw-light">Frontend Developer</td>
                <td className="fw-light">
                  Project
                </td>
                <td className="fw-light">
                  Full-time
                </td>
                <td className="fw-light">
                  Permanent
                </td>
                <td>
                  <div className="d-flex">
                    <button className="btn" 
                      onClick={()=>navigate('/view/1')}
                    >
                      <i className="bi bi-eye">
                      </i>
                    </button>
                    <button className="btn"
                    onClick={() => navigate('/update/1')} 
                    >
                      <i className="bi bi-pencil-square">
                      </i>
                    </button>
                    <button className="btn"
                    
                    >
                      <i className="bi bi-trash">
                      </i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                                    <img
                                        src="https://images.pexels.com/photos/17264401/pexels-photo-17264401/free-photo-of-close-up-photo-of-a-evarcha-spider-crawling-on-a-twig.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                        alt="employee"
                                        className="rounded-circle"
                                        width="40"
                                        height="40"
                                    />
                                    <span className='ms-2 fw-light'>Babuaravindh</span>

                </td>
                <td className="fw-light">1234</td>
                <td className="fw-light">Engineering</td>
                <td className="fw-light">Frontend Developer</td>
                <td className="fw-light">
                  Project
                </td>
                <td className="fw-light">
                  Full-time
                </td>
                <td className="fw-light">
                  Permanent
                </td>
                <td>
                  <div className="d-flex">
                    <button className="btn" title='view'>
                      <i className="bi bi-eye">
                      </i>
                    </button>
                    <button className="btn" title='view'>
                      <i className="bi bi-pencil-square">
                      </i>
                    </button>
                    <button className="btn" title='view'>
                      <i className="bi bi-trash">
                      </i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                                    <img
                                        src="https://images.pexels.com/photos/17264401/pexels-photo-17264401/free-photo-of-close-up-photo-of-a-evarcha-spider-crawling-on-a-twig.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                        alt="employee"
                                        className="rounded-circle"
                                        width="40"
                                        height="40"
                                    />
                                    <span className='ms-2 fw-light'>Babuaravindh</span>

                </td>
                <td className="fw-light">1234</td>
                <td className="fw-light">Engineering</td>
                <td className="fw-light">Frontend Developer</td>
                <td className="fw-light">
                  Project
                </td>
                <td className="fw-light">
                  Full-time
                </td>
                <td className="fw-light">
                  Permanent
                </td>
                <td>
                  <div className="d-flex">
                    <button className="btn" title='view'>
                      <i className="bi bi-eye">
                      </i>
                    </button>
                    <button className="btn" title='view'>
                      <i className="bi bi-pencil-square">
                      </i>
                    </button>
                    <button className="btn" title='view'>
                      <i className="bi bi-trash">
                      </i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
