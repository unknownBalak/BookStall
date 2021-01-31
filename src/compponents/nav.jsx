import './nav.css';
import React from 'react'

function findInput(){
     let input = document.getElementById('nav__input').value;
      console.log(input);
      let i= document.querySelector('#search');
     i.classList.add('nav__class');   
    }
 document.addEventListener('transitionend',() =>{
     let i= document.querySelector('#search');
      i.classList.remove('nav__class');
 })

function nav() {
    
    return (
        <div className="nav" >
            
            <ul  className="nav__component">
                <li><input type="text" id="nav__input" className='input'/>
               <i className="fa fa-search" onClick={findInput} id="search" style={{fontSize:"20px"}}></i>
               
               </li> 
               
               <li>
               <i className="fa fa-shopping-cart"></i>
                   Cart</li>
            </ul>
        </div>
    )
}


export default nav
