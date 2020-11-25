import React from 'react'
import User from '../Users/User/User'

const users = (props) =>
{
    //map fonsksiyonunu döngü olarak kullanabiliriz. Aslında map fonksiyonu ile userlardan oluşan bir liste yaratıyoruz.
    return(
     props.person.map((u,index)=>{
          return <User 
          deleteClicked= {()=>{props.deleteClicked(index)}}
          name={u.name}
          age = {u.age}
          key = {u.id}
          textChanged = {(event)=>props.textChanged(event,u.id)} >
          </User>
      })
    )
}

export default users;