import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ROUTES } from "constants/routes"
import Layout from "./Layout/Layout"
import Home from "./Home/Home"
import Weathers from "./Weathers/Weathers"



function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTES.ERROROUTPUT} element="Page Not Found" />
          <Route path={ROUTES.HOME} element={<Home/>}/>
          <Route path={ROUTES.WEATHERS} element={<Weathers/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )

}

export default App
