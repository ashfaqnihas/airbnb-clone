import React from 'react';
import { Search, Language, ExpandMore} from "@material-ui/icons";
import {Avatar, } from '@material-ui/core';
import './Header.css';

const Header = () => {

     //const history= useNavigate();

     return (
         
          <div className='header'>
         
              <img className='header_icon'
              src= 'https://media.designrush.com/inspiration_images/135187/conversions/_1511452487_364_Airbnb-mobile.jpg'
              alt='' 
                 
              />
         
              <div className='header_cender'>
                   <input type='text' />
                   <Search />
              </div>
              <div className='header_right'>
                  <p>Become a host</p>
                  <Language />
                  <ExpandMore />
                  
                  <Avatar />
                 
                 
              </div>
          </div>
        
     )
}

export default Header
