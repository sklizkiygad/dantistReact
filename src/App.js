import React from "react";

import {BrowserRouter,Routes,Route} from "react-router-dom";

import './assets/css/style.css';
import './assets/css/media.css';

import {routes} from "./router";





function App() {
  return (

        <BrowserRouter>
            <Routes>
                {routes.map((route,index)=>
                    <Route key={index}
                           path={route.path}
                           element={route.element}
                           exact={route.exact}
                    />
                )}



            </Routes>

        </BrowserRouter>




  );
}

export default App;
