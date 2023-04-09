import React from 'react'
import { Link } from 'react-router-dom'
import Dumbbells from "../assets/images/Dumbbells.gif";

function Title() {
  return (
    <Link to="/">
        <h2 className="title">
        <span
          style={{
            color: '#FF1E56',
            fontSize: '8rem',
            fontFamily: 'Josefin Sans',
            position: 'relative',
            left: '40px'
          }}>
        <em className='title-F-span'>F</em></span><em>it</em>nessia
        </h2>
        <img className="nav-img" src={Dumbbells} alt="logo" />
      </Link>
  )
}

export default Title