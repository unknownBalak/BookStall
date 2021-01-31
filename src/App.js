import "./App.css";
import Navingation from "./compponents/nav.jsx";
import Home from "./compponents/Home.jsx";
import FetchAPI from "./compponents/FetchAPI";
// const { item } = fetchAPI;
import { useState } from "react";
function App() {
  const [data, isData] = useState("");
  // console.log(item);
  let { fetchAPI } = FetchAPI;
  console.log(fetchAPI);
  return (
    <div className="App">
      {/* //Navigation Bar 
                Search 
                Cart option will be there
      */}
      {/* <FetchAPI /> */}
      <Navingation />
      {/* Home page which will contain
          Cards(Books details) 
          It will 3/4 of total screen while in laptop mode
      */}
      <Home />
      {/* {console.log(data)} */}
      {/* <fetchAPI /> */}
      {/*
          and 1/4 will be for a column which will contain sorted
           book details according to their rating.
            highest rating will be on top.      
       */}
    </div>
  );
}

export default App;
