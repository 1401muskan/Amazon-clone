import React from 'react';
import "./Content.css";
import { useState } from 'react';
import Product from './Product';
import Data from './Data.json';

export const Content=()=>{
  
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

  // let list=[];
  //  shoes.forEach((shoe) => {
  //   list.push(<Product
  //     name={shoe.name}
  //     price={shoe.price}
  //     star={shoe.star}
  //     delivery={shoe.delivery}
  //     image={shoe.image}
  //     rating={shoe.rating}
  //   />)});
  
  return (
    <>
    <div>
    <div className='page'>
      <div className='pageName'>BANGTAN SHOE COMPANY</div>
      <div className='pageInfo'>It's okay to be a little obsessed with shoes.<br></br>
        Rescue the pair of shoes of your liking trapped in this store.</div>
      </div>
    
    
    <form>
    <div className='search'>
      <div class="inputIcons">
      <i class="fa fa-search icon"></i>
      <input class="input-field" type="text" onChange={inputHandler}></input>
      <button class="searching" type='search'>search</button>
      </div>
    </div>
    <div className='container'>
      <div className='row'>
        {/* {list}   */}
      </div>
    </div>

    </form>
  
    
    <div className="album py-5 bg-light" id="albumm">
        <div className="container">
          <div className="row second">
            <div className="col-8"><h2 id="totalproduct">{filteredData.length} Products</h2></div>
            <div className="container">
              <div className="row list" id="repeat">
                {filteredData.map((shoe) => (
                  <Product
                    id={shoe.id}
                    name={shoe.name}
                    price={shoe.price}
                    star={shoe.star}
                    delivery={shoe.delivery}
                    image={shoe.image}
                    rating={shoe.rating}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     
    </>

  )
}

export default Content;