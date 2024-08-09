
// ** createBrowserRouter => This will enable client side routing for our web app.
// **  Every Object is represente WebPage

import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "../pages/productsLayout/RootLayout";
import Home from "../pages/productsLayout/Home";
import Price from "../pages/productsLayout/Price";
import Features from "../pages/productsLayout/Features";

const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<RootLayout/>}>
    <Route index element={<Home />} />
    <Route path="price" element={<Price />} />
    <Route path="features" element={<Features />} />
    </Route>
    </>
));


export default router;

