import React from 'react';
import { useParams } from "react-router-dom";
import Data from './Data.json';
import logo from "./Star 1.png";
import s3 from "./shoe-3.png";
import s5 from "./shoe-5.png";
import s6 from "./shoe-6.png";

export const Checkout=()=> {
  
  let { id } = useParams();
  let im;
  if(id==1||id==4||id==7){
    im=s5;
  }
  else if(id==2||id==5||id==8){
    im=s6;
  }
  else if(id==3||id==6||id==9){
    im=s3;
  }

  return(
    
      <div classNameName="container-fluid">
        <div className="row">
          <div className="col">
            <img class="image" src={im} alt="" width={500} ></img>
          </div><br></br>
          <div className="col">
            <h2 className="row">{Data[id-1].name}</h2>
            <p className="row">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br></br>
            <h3 className="row">{Data[id-1].price}</h3><br></br>
            <h5 className="row">{Data[id-1].delivery}</h5>
            <h5 className="row"><img class="star" src={logo} alt="star" width={20}></img>{Data[id-1].rating}</h5><br></br>
            <h4 className="row">Qty</h4><br></br>
            <div className="row">
              <button className="col" type="button" name="button">-</button>
              <input className="col"type="text" name="add" value=""></input>
              <button className="col" type="button" name="button">+</button>
            </div>
            <button className="row" type="submit" name="button">Add to Cart</button>
          </div>
        </div>
      </div>
  )
}
  
