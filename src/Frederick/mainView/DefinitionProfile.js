import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const DefinitionProfile = ({ props, userInfo, name, myImage }) => {

    const id = props.user;

    const [ user, setUser ] = useState({});

    const getUserInfo = async () => {
        const localURL = "https://pidgin-backend.herokuapp.com";

        const url = `${localURL}/pidgin/user/${id}`;
        await axios.get(url).then((res) => {
            setUser(res.data.data);
        });
    };

    useEffect(() => {
        getUserInfo();
    }, []);
    return (
        <div>
            <Div>By: { userInfo ? user?.fullName : null }</Div>
        </div>
    );
};

export default DefinitionProfile;

const Div = styled.div``;