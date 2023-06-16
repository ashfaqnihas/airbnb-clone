import Search from '../Search/Search';
import { Button } from '@material-ui/core'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Banner.css";

const Banner = () => {

      const [showSerach, setShowSerach] = useState(false);
     
     const history= useNavigate();

  return (
      <div className="banner">
      <div className="banner__search">
        <Button
          className="banner__searchButton"
          variant="outlined"
          onClick={() => setShowSerach((prev) => !prev)}
        >
          {showSerach ? "Hide" : "Search Dates"}
        </Button>
        {showSerach && <Search />}
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you
        </h5>
        <Button variant="outlined" onClick={() => history("/search")}>
          Explore Nearby
        </Button>
      </div>
    </div>
  )
}

export default Banner
