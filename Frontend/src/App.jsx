
import './App.css'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import EmployeeList from './pages/employeeList/EmployeeList'
import AddEmployee from './pages/addEmployee/AddEmployee'
import ViewEmployee from './pages/viewEmployee/ViewEmployee'
import UpdateEmployeeForm from './pages/updateEmployeeForm/UpdateEmployeeForm'
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout/>}>
        <Route path='/' element={<EmployeeList/>}/>
        <Route path='/add' element={<AddEmployee/>}/>
        <Route path='/view/:id' element={<ViewEmployee/>}/>
        <Route path='/update/:id' element={<UpdateEmployeeForm/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
