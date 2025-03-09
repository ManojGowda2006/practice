import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Employees from "./data"
import EmployeeCard from './components/employeeCard'
import Example from "./components/example"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/em" element={<EmployeeCard data={Employees}/>}/>
        <Route path="/check" element={<Example/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
