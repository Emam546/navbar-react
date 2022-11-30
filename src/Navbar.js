import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'
const Navbar = () => {
  const [showCon,setShowCon]=useState(false)
  return <div>
    <div className='nav-center'>

      <div className='nav-header'>
        <img src={logo} alt="logo"/>
        <button className={`nav-toggle ${showCon&&"toggled"}`} onClick={()=>setShowCon(!showCon)}>
          <FaBars/>
        </button>
      </div>
      <div className={`links-container ${showCon&&"show-container"}`}>
        <ul className='links'>
          {links.map(({id,text,url})=>{
            return <li><a key={id} href={url}>{text}</a></li>
          })}
        </ul>
      </div>
      <ul className='social-icons'>
        {social.map(({id,icon,url})=>{
            return <a key={id} href={url}>{icon}</a>
          })}
      </ul>
    </div>
  </div>
}

export default Navbar
