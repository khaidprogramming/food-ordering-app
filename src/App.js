import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
// import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import  UserContext  from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/store";
import Cart from "./components/Cart";

const Contact = lazy(()=> import("./components/Contact"))






const AppLayout = () => {
  
  const[user,setUser] = useState("m")
  return (
    <Provider store={appStore}>
  <UserContext.Provider value={{userName:user,setUser}}>
<div className="app">
      <Header />
     <Outlet/>
    </div>

   </UserContext.Provider>
    </Provider>
 
          
  );
};

const appRoute = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/home",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Suspense fallback={()=><h1>loading</h1>}><Contact/></Suspense>
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      },
      {
        path:"/cart",
        element:<Cart/>
        

      }

    ],
    errorElement: <Error/>
  }
  
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute}/>);
