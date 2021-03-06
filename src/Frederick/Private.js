import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
    const user = useSelector((state) => state.user);

    return user ? children : <Navigate to="/UserSignUp" />;
};

export default Private;