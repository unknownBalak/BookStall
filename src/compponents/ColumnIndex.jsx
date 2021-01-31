import React from 'react'
import './ColumnIndex.css';
function ColumnIndex({rating,src,price}) {
  //  console.log(typeof rating);

    // console.log('rating is',rating)

    let arr = new Array(Math.round(rating)).fill(2);
    return (
        <div className="columnChild">
             {/* 
                It will have 3 column */} 
                    {/* a) img of book. */}
                    <div className="img">
                        <img src={src} alt ="dummyImg" />
                    </div>
                    {/* b) rating of that book(It will bold); */}
                    <p className='column__ratingStar'>                     
                      {arr.map((item,index)=>
                        <span key={index} className="fa fa-star"></span>
                      )}           
                  </p> 
                    {/* c) Price. */}
                    <p className="column_price"> ${price} </p>
        </div>
    )
}
export default ColumnIndex
