import { createBrowserRouter } from "react-router-dom";
import Layout from "../common/Layout";
import Header from "../Block/Header";
import MainApp from "../Pages/MainApp";
import Game1 from "../Pages/Game1";
import Game3 from "../Pages/game3";
import Game2 from "../Pages/Game2";

export const mainRouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
              index:true,
              element:<MainApp/>
            },
            {
                path:"/home",
                element:<MainApp/>
             },
            {
               path:"/game1",
               element:<Game1/>
            },
            {
                path:"/game2",
                element:<Game2/>
             },
             {
                path:"/game3",
                element:<Game3/>
             }
        ]
    }
])