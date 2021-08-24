import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import HomeContainer from "./home/home.container";

const CustomBrowserRouter = () => {
    return (
        <BrowserRouter>
            <Route path="/home" component={HomeContainer}/>
        </BrowserRouter>
    )
};

export default CustomBrowserRouter;