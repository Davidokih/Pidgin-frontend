import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import moment from "moment";

import { useDispatch, useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import axios from "axios";

const PostDefinition = ({ props, definition }) => {
    const [ data, setData ] = useState({});

    console.log(props._id);
    const getDefinition = async (ID) => {

        const mainURL = "https://pidgin-backend.herokuapp.com";
        const url = `${mainURL}/pidgin/definition/${props.user}/${props._id}/${ID}`;
        await axios.get(url).then((res) => {
            setData(res.data.data);
            // dispatch(createDefinition(res.data.data));
            console.log(ID);
        });
    };
    return (
        <div>
            <Div>Definition</Div>
        </div>
    );
};

export default PostDefinition;

const Div = styled.div``;