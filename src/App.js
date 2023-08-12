import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner.js"
import {useState} from "react";
import satData from "./components/satData.js";
import "./App.js";


function App() {
  const[sat, setSat] = useState(satData);
  //The Set method prevents duplicate elements. We are using it because there are only three types of orbitTypes: Low, Medium, and High. This will eventually create three buttons. If we only used map, we would create 10 buttons, and many of them would be duplicates
  const displaySats = [... new Set(satData.map((data) => data.orbitType))];


  //update the displaySats variable using the filter method.
// filter is similar to map, in that it will iterate through a collection until it finds the desired element.
// filter requires a callback, call the callback newSatDisplay.
// The filter function will return the newSatDisplay.orbitType that is equal to currentType.
// Close the filter function’s return statement.
// Before closing the arrow function, we want to update setSat by passing it the newly updated displaySats.
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
       return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
 };

  return (
    <>
      <Banner />
      <Buttons 
      filterByType={filterByType}
      setSat={setSat}
      displaySats={displaySats}
      />
      <Table 
      sat={sat} />
      {/* {console.log(sat)} */}
      
    </>
  );
}

export default App;
