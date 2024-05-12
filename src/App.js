import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import { Outlet } from 'react-router-dom';
//if you are using a return for functional compnonent,it should be in urly braces { return --}
//else  just component in ()
import Header from './Components/Header';
import Body from './Components/Body';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Error from './Components/Error';
import Cart from './Components/Cart';
import ResturantMenu from './Components/RestuarantMenu';
import { Provider } from 'react-redux';
import ourStore from './utils/ourStore';

const AppLayout = () => {
    return (
    <Provider store={ourStore}>
        <div className="app">
        <Header/>  
        <Outlet />
        </div> 
    </Provider>
    )
}

const Router = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/about",
                element : <AboutUs/>
            },
            {
                path : "/contactus",
                element : <ContactUs/>
            },
            {
                path : "/cart",
                element : <Cart/>
            },
            {
                path : "/restuarants/:resId",
                element : <ResturantMenu/>
            },
        ],
        errorElement : <Error/>
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< RouterProvider router={Router}/>);