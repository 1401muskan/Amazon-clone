import React from 'react';
import "./Product.css"
import { Link } from 'react-router-dom';

function Product(props) {
  return (
    
    <div class="shoe col-4">
    <Link to={{pathname: `/checkout/${props.id}/${props.name}`}}>

        {/* SHOE DETAILS */}

        <div class="shoeData fiveStarRating">
            <div class="shoeImg">
                <img src={props.image} alt="shoe1">
                </img>
            </div>
            <hr class="horizontalLine">
            </hr>
            <div class="nameAndRating">
                <p class="shoeName">{props.name}</p>
                <div class="rating">
                    <img class="starImg" src={props.star} alt="star">
                    </img>
                    <p class="ratingNumber">&nbsp;{props.rating}</p>
                </div>
            </div>
                <p class="price">{props.price}</p>
                 <p class="delivery">{props.delivery}</p>
        </div>
    </Link>
    </div>
    )
}

export default Product;