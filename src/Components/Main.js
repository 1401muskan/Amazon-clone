import React, { useState } from 'react';
import Product from "./Product";
// import  from './MOCK_DATA.json';


export const Main=()=>{
  
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const filteredData = Data.filter((el) => {
    //if no input the return the original
    if (inputText === '') {
        return el;
    }
    //return the item which contains the user input
    else {
        return el.name.toLowerCase().includes(inputText)
    }
  })
  
  return(
    <div>
      <div className="header shadow heady">
        <h1 className="text-center" >Shoe Company Name</h1>
        <p className="text-center">ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
        <form className="d-flex">
          <input className="form-control me-2 searchme" type="search" placeholder="Search" aria-label="Search"  onChange={inputHandler}></input>
          <button className="btn btn-warning" type="submit" >Search</button>
        </form>
      </div>

      <div className="album py-5 bg-light" id="albumm">
        <div className="container">
          <div className="row second">
            <div className="col-8"><h2 id="totalproduct">{filteredData.length} Products</h2></div>
            <div className="container">
              <div className="row list" id="repeat">
                {filteredData.map((shoe) => (
                  <Card
                    id={shoe.id}
                    name={shoe.name}
                    price={shoe.price}
                    star={shoe.star}
                    time={shoe.time}
                    image={shoe.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
