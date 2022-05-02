import React from "react";
import { BrowserRouter, Switch, Router } from 'react-router-dom';
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import '../styles/global.css';

const App = () => {
    return (
        // encapsular Layout
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Router exact path="/" component={Home} />
                    <Router exact path="/Login" component={Login} />
                    <Router exact path="/recovery-password" component={RecoveryPassword} />
                    <Router component={NotFound} />
                </Layout>
            </Switch>
        </BrowserRouter>
    );
}

export default App;