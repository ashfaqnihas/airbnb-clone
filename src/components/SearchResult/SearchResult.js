import React from 'react';
import {FavoriteBorder,Star} from "@material-ui/icons"
import "./SearchResult.css";

const SearchResult = ({
     img,
     location,
     title,
     description,
     price,
     star,
     total,
}) => {
     return (
          <div className="searchResult">
               <img src={img} alt="" />
               <FavoriteBorder className="searchResult_heart" />
               <div className='searchResult_info'>
                  <div className="searchResult_infoTop">
                       <p>{location}</p>
                       <h3>{title}</h3>
                       <p>_______</p>
                       <p>{description}</p>
                  </div>
                  <div className="searchResult_infoBottom">
                    <div className="searchResult_stars">
                        <Star className="searchResult_star">
                             <p>
                                  <strong>
                                       {star}
                                  </strong>
                             </p>
                        </Star>
                    </div>
                    <div className="searchResult_Price">
                          <h2>{price}</h2>  
                          <p>{total}</p> 
                    </div>
                  </div>
               </div>
          </div>
     )
}

export default SearchResult
