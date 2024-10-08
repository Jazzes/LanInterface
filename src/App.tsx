import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import UserLayout from "./components/layout/UserLayout";
import NoAuthLayout from "./components/layout/NoAuthLayout";
import {UserContext} from "./context/Context";
import MainPage from "./pages/mainPage/MainPage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {

    const {auth} = useContext(UserContext)

    return (
        <Routes>
            {auth ?
                <Route element={<UserLayout/>}>
                    <Route path="/" index element={<MainPage/>}/>
                </Route>
                :
                <Route element={<NoAuthLayout/>}>
                    <Route path="/" index element={<Login/>}/>
                    <Route path="/login" element={<Login/>}/>

                    <Route path="/register" element={<Register/>}/>
                </Route>
            }
        </Routes>
    );
}

export default App;
