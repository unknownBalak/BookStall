import React from 'react'
import './Card.css';
function Card({ bookName, author, price, rating}) {
    let arr = new Array(Math.round(rating)).fill(2);
     if(author.length>10){
         author = author.slice(0,16) + "....";
     }


    return (
             <div className="books__details">
                 {/* img */}
                 <img src = "https://via.placeholder.com/190" alt="dummyImg" loading="lazy" />
                 {/* Author Name */}
                 <h3>{author}</h3>
                 {/* Rating  */}
                 <p className='rating__inStar'>
                     {arr.map((item,key)=>
                       <span key={key} className="fa fa-star"></span>
                     )}           
                 </p> 
                 {/* Price */}
                 <p>{price}$ </p>
                 {/* <button id="button" className="cart__button" >Add To Cart</button> */}
             </div>  
    )
}

export default Card
