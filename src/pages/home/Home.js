import './Home.css';
import { useEffect, useState } from 'react';
import { listTiers, createTierList, listTiersContent } from '../../kv/kvConnections';
import { useNavigate } from 'react-router-dom';
import * as React from "react";

function Home() {
  return (
    <div className="home">
      <div className='header'>
        <div className="header1">
          <ul className='header1-list'>
            <li><a href='/'>APPLY NOW</a></li>
            <li><a href='/'>CONTACT US</a></li>
            <li><a href='/'><span class="mag"></span></a></li>
          </ul>
        </div>
        <div className='header2'>
          <div className='header2-logo'>
            <img className='header2-img' src='./public/KPULogo.png'/>
          </div>
          <h1 className='header2-title'>SEEK THE FUTURE<br></br>UNIVERSITY</h1>
          <div className='header2-options'>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
