import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Form from "../project/Form";
import Home from "../project/Home";
import List from "../project/List";
import Login from "../project/Login";

import styles from "./styles.module.css";
function RouterAll() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <div>
      <BrowserRouter>
        {/* NAVIGATION */}
        <ul className={styles.navigation}>
          <li className={styles.link}>
            <Link to="/home">Home</Link>
          </li>
          <li className={styles.link}>
            <Link to="/form">Form</Link>
          </li>
          <li className={styles.link}>
            <Link to="/list">List</Link>
          </li>
          <div className={styles.login1}>
          <li className={styles.link}>
               <Link to="/" onClick={()=>setIsLogin(false)}>{ !isLogin ? 'Login' : 'Logout'}</Link>
          </li>
          </div>
        </ul>

        {/* ROUTES SETTINGS */}
        <Routes>
          <Route path='/' element={<Login setIsLogin={setIsLogin}/>}/>
          <Route path="/form" element={<Form />} />
          {/* update user  */}
          <Route path="/form/:id" element={<Form />} />
          <Route path="/list" element={<List />} />
          <Route path="/home" element={<Home />} />
          
          {/* NO MATCH ROUTE */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 Page not found</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouterAll;
