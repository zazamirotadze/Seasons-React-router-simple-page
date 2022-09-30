import React from 'react'
import {Link,  useOutletContext} from "react-router-dom"

const Seasons = () => {
  
  const {words}=useOutletContext()
  return (
    <>
    
    <div>
      <img src={words}  className="secondary-img"></img>
       <Link to="/seasons/seasonsintro/spring"><button>გაზაფხული</button></Link>
       <Link to="/seasons/seasonsintro/summer"><button>ზაფხული</button></Link>
       <Link to="/seasons/seasonsintro/autumn"><button>შემოდგომა</button></Link>
       <Link to="/seasons/seasonsintro/winter"><button>ზამთარი</button></Link>
    </div>
    </>
  )
}

export default Seasons
