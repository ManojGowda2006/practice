import React from 'react'
import "../App.css"

function EmployeeCard({data}){
    const filtered = data.filter((item) => item.jobPosition != "Software Engineer")
  return(
    <div className='container '>
      {
        data.map((item,i) => (
            <div key={i} className='card'>
                <img src={item.photo}/>
                 <p>Name : {item.fullName}</p>
                 <p>Email : {item.email}</p>
                 <p>Job : {item.jobPosition}</p>
                 <p>Description : {item.department}</p>
            </div>
        ))
      }
    </div>
  )
}

export default EmployeeCard