import React from "react";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import '../styles/global.css';

const App = () => {
    return (
        // Abre y cierra porque tiene hijos y resibe valores
        <Layout>
            {/* Se autocierra porque no recibe ningun valor */}
            <Login />
        </Layout>
    );
}

export default App;