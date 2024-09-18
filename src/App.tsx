import React from "react"
import "./App.css"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import IndexPage from "./app/pages/index"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
   return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<IndexPage/>} />
      </Routes>
    </BrowserRouter>
   )
}

export default App
