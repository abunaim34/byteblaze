import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import { Outlet } from 'react-router-dom'



const MainLayouts = () => {
    return (
        <div>
            <div className='h-16'>
                <Nav></Nav>
            </div>
            <div className='min-h-[calc(100vh-117px)]'>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayouts;