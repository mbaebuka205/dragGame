import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./Router/MainRouter";
function App () {
  return(
      <RouterProvider router={mainRouter
      }/>
  )
}
export default App;