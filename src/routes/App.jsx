import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from "../containers/Layout";
import { NewPassword } from "../pages/NewPassword";
import { Recovery } from "../pages/Recovery";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import '../styles/global.css';
import { Login } from "../pages/Login";
import { CreateAccount } from "../pages/CreateAccount";
import { SendEmail } from "../pages/SendEmail";
import { MyAccount } from "../pages/MyAccount";
import { Checkout } from "../pages/Checkout";
import { Orders } from "../pages/Orders";
import { AppContext } from "../context/AppContext";
import { useInitialState } from '../hooks/useInitialState';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <HashRouter >
                <Layout>
                    <Routes>
                        <Route path="./" element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path="account" element={<MyAccount />} />
                        <Route path="Checkout" element={<Checkout />} />
                        <Route path="Orders" element={<Orders />} />
                        <Route path="new-Password" element={<NewPassword />} />
                        <Route path="send-Email" element={<SendEmail />} />
                        <Route path="signup" element={<CreateAccount />} />
                        <Route path="/password-recovery" element={<Recovery />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </HashRouter>
        </AppContext.Provider>
    );

};


export { App };

