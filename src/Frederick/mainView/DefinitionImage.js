import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const DefinitionProfile = ({ props, image, name, myImage }) => {

    const id = props.user;

    const [ user, setUser ] = useState({});

    const getUserInfo = async () => {
        const localURL = "http://localhost:2008";

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
            { image ? (<Image src={ user?.avatar } alt="" />) : null }
        </div>
    );
};

export default DefinitionProfile;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
`;