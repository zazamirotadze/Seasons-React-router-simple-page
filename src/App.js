import Spring from "./seasons/Spring";
import Summer from "./seasons/Summer";
import Autumn from "./seasons/Autumn";
import Winter from "./seasons/Winter";
import Seasons from "./seasons/Seasons";
import Home from "./Home";
import Seasonsintro from "./Seasonsintro";
import NotFound from "./NotFound";


import {Route, Routes, Link ,  useRoutes} from "react-router-dom"



function App() {
  
  const element = useRoutes(
      [
        {path:"/seasons/seasonsintro/spring", element: <p>spring</p>},
        {path:"/seasons/seasonsintro/summer", element: <p>summer</p>},
        {path:"/seasons/seasonsintro/autumn", element: <p>autumn</p>},
        {path:"/seasons/seasonsintro/winter", element: <p>winter</p>}
      ])
  return (
    <>
      
        
        <Link to="/" ><button >მთავარი</button></Link>
        <br></br>
        <Link to="/seasons"><button>სეზონები</button></Link>
        
        
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/seasons"  element={<Seasonsintro/>}>
          <Route path="seasonsintro/"  element={<Seasons/>}/>
          <Route path="seasonsintro/spring"  element={<Spring/>}/>
          <Route path="seasonsintro/summer"  element={<Summer/>}/>
          <Route path="seasonsintro/autumn" element={<Autumn/>} />
          <Route path="seasonsintro/winter"  element={<Winter/>}/>
        </Route>
        <Route path="*"  element={<NotFound/>}/>
      </Routes>
      {element}
    </>
  );
}

export default App;
