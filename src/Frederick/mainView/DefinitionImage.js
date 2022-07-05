import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const DefinitionProfile = ({ props, image, name, myImage }) => {

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
        <Contain>
            { image ? (<Image src={ user?.avatar } alt="" />) : null }
        </Contain>
    );
};

export default DefinitionProfile;

const Contain = styled.div`
    width: 90px;
    height: 90px;

    border-radius: 50%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;