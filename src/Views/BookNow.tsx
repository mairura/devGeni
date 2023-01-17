import React from 'react'
import {prev} from "../icons"
import {Link} from "react-router-dom"
import "./css/booknow.css"

function BookNow() {
  return (
    <>
    <div className='top-navigator'>
        <Link to="/">{prev}</Link>
    </div>
    <div className='top-title-desc'>
        <h2>DEVGENI</h2>
        <p>team and skills matching engine</p>
    </div>
    <div className='form-container'>
        <form>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
        </form>
    </div>
    </>
  )
}

export default BookNow