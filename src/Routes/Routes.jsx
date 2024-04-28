import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import RootPage from "../Pages/RootPage";
import SignUpPage from "../Pages/SignUpPage";

import {createBrowserRouter} from 'react-router-dom'



const router = createBrowserRouter([
    {
        path:'/',
        element : <RootPage/>,
        children:[
            {
                path: '/',
                element : <HomePage/>
            },
            {
                path : '/login',
                element : <LoginPage/>
            },
            {
                path : '/signup',
                element : <SignUpPage/>
            }
        ]
    }
])

export default router