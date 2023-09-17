import React, { useEffect, useState } from "react";
import axiosClient from "../axios-client";
const Users = () => {
    const [user, setUsers] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        setLoading(true);
        axiosClient
            .get("/users")
            .then(({ data }) => {
                setLoading(false);
                console.log(data);
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    };

    return <div>Users</div>;
};

export default Users;
