import React ,{useState, useEffect} from 'react'
import './Home.css';
import Card from './Card';
function Home() {
     const [error, setError]= useState(null);
     const [isLoaded, setIsLoaded]= useState(false);
     const [items, setItems]= useState([]);
     const [i, setI] = useState(0); 
     useEffect(() => {
 fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json")
         .then(response => response.json())
         .then(data =>
            {
                setIsLoaded(true);
                 setItems(data);
            }).catch(error =>{
                setError(error);
            }).catch(error => console.log(error));
    },[])
    let newArr =[...new Set( items.map(item => item.average_rating))];
        newArr= newArr.sort((a,b) => b-a)
    let sortedArrInBiggerRating= []
     for(let i of newArr){
         for(let j of items){
                   if(i===j.average_rating){
                         sortedArrInBiggerRating.push(j);
                   }
         }
     }

    //   sentBack(sortedArrInBiggerRating);
 if(error){
       return <div>Error: {error.message}</div>
    }else if(!isLoaded){
            return <div>Loading .....</div>
    }else{
        return (
           <div className="container">
           <div className='card'>
           {            
          }
           {
               sortedArrInBiggerRating.map((item,index)=>{
                    
                   if(index<i+30){ 
                              return  <Card key={item.bookID} bookName={item.title} author={item.authors} price={item.price} rating={item.average_rating}/>
                              }
               })
           }
                    <div><input className="card__button" onClick={(e)=>setI(i+5)} type='Button' value="Load More"  />
                    </div>
               </div>
             </div>  
       )
        
    }   
} 
export default Home
