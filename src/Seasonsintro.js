import React from 'react'
import {Link} from "react-router-dom"
import { Outlet } from 'react-router-dom'

const Seasonsintro = () => {
    
  return (
    <div>
      <Link to="/seasons/seasonsintro"><button>როგორ მომწონს წელიწადის 4 დროოო</button></Link>
      <Outlet context={{words:
            "https://thumbs.dreamstime.com/b/tree-four-seasons-tree-four-seasons-spring-summer-autumn-winter-life-cycle-tree-118470231.jpg"
        }}/>
    </div>
  )
}

export default Seasonsintro
