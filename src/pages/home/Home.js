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
            <li>APPLY NOW</li>
            <li>CONTACT US</li>
            <li><i class="fa-solid fa-magnifying-glass"></i></li>
          </ul>
        </div>
        <div className='header2'>
          <div className='header2-logo'>
            <img className='header2-img' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
