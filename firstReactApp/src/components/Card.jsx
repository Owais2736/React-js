import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div className='card'>
        <img width={285} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR23hVJDRwORZETPdBEX3aXkWXKwAW2wmWDlg&s" alt="" srcset="" />
<h1>{props.title}</h1>
<p>{props.discription}</p>
      
    </div>
  )
}

export default Card
