import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const RootLayout =()=>{
    return(
        <div className="root-layout">
            <Navbar/>
            <div className="container mx-auto text-center">
            <Outlet /> {/* Outlet => To Understant it's childern (contant && about)*/}
            </div>
          
        </div>
    );
};

export default RootLayout;