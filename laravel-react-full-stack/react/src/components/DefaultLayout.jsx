import React, { useEffect } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import "../index.css";
import axiosClient from "../axios-client";

const DefaultLayout = () => {
    const { user, token, setUser, setToken } = useStateContext();
    if (!token) {
        return <Navigate to="/login" />;
    }
    const onLogout = (ev) => {
        ev.preventDefault();
        axiosClient
            .post("/logout")
            .then(() => {
                setUser({});
                setToken(null);
                console.log(response.data.message);
            })
            .catch((error) => {
                console.error("Logout error:", error);
            });
    };
    useEffect(() => {
        axiosClient.get("/user").then(({ data }) => {
            setUser(data);
        });
    }, []);
    return (
        <div id="defaultLayout">
            <aside>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/users">Users</Link>
            </aside>
            <div className="content">
                <header>
                    <div>Header</div>
                    <div>{user.name}</div>
                    <a href="#" onClick={onLogout} className="btn-logout">
                        Logout
                    </a>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DefaultLayout;
