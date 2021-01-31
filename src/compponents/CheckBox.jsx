import React  from 'react' 
function CheckBox({arr,name,onchange}) {
 const arr1 = ["Average_rating"];

     let list = [];
      for(let i=0;i<arr.length;i++){
       list.push(<><label key={arr[i]}> <input type='radio' value={arr[i]} name="sort" /> {name[i]} </label> <br></br> </>); 
                
      }
      let sortedByItemName;
      function collectName(e){
          console.log(e.target.value);
          if(arr1.includes(e.target.value)){
            sortedByItemName= prompt(`Enter the name of ${e.target.value}`)
          }
           if(!sortedByItemName){
         let  sentArray = [e.target.value , "default"];
          onchange(sentArray);
              
           } else{
               let sentArray = [e.target.value , sortedByItemName];      
               onchange(sentArray);
           }
        }


    return (
        <div className="column__checkBox">
            <form className="columnForm" onChange={e=> collectName(e) 
            }  > 
            <h3 style={{borderBottom:"1px solid", marginBottom:"15px"}} >Choose Any Option to see Magic!!</h3>
                {list}
          </form>
        </div>
    )
}

export default CheckBox
