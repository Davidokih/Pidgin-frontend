import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from "../../GlobalState/GlobalState";
import { BsBookmarkFill } from "react-icons/bs";
import { BsBook, BsPlusCircle } from "react-icons/bs";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { createDefinition } from '../../GlobalState/GlobalState.js';

const Definition = ({ props, def }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const post = useSelector((state) => state.newPost);
  const Def = useSelector((state) => state.definition);
  const id = user?._id;
  // console.log(props._id);

  const [ toggle, setToggle ] = useState(true);
  const [ meaning, setComment ] = useState("");

  const change = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  // const formSchema = yup.object().shape({
  //   meaning: yup.string().required("This field cannot be empty"),
  // });

  // const {
  //   register,
  //   reset,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(formSchema),
  // });

  const makeComments = async (ID) => {
    // console.log(value);
    // const { meaning } = value;
    const mainURL = "https://pidgin-backend.herokuapp.com";
    const url = `${mainURL}/pidgin/definition/${id}/${ID}/definitions`;

    await axios.post(url, { meaning }).then((res) => {
      console.log(res.data.data);
      // dispatch(createDefinition(res.data.data));
      setComment("");
    });

    navigate(`/detail/${Def._id}`);
  };
  return (
    <Container>
      <span>
        Add definition
        <BsPlusCircle onClick={ change } />
      </span>

      { !toggle ? (<Card>
        {/* <HeadText2>Post Beta Word Make People See</HeadText2> */ }
        <Label>
          <LabelText>Definition:</LabelText>
          <Inputs placeholder="How are you"
            value={ meaning }
            onChange={ (e) => {
              setComment(e.target.value);
            } } />
        </Label>
        {/* <HoldLink2 to="/NewsFeedDashBoard"> */ }
        <Submit onClick={ () => {
          makeComments(props._id);
          console.log("Click: ", props._id);
        } }> Add Word</Submit>
        {/* </HoldLink2> */ }
      </Card>) : null }
    </Container>
  );
};

export default Definition;

const Submit = styled.button`
  width: 30%;
  height: 40px;
  background-color: #0074f8;
  border-radius: 50px;
  border: none;
  color: white;
  /* margin: 20px 0px; */
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity:
  
   1;
  transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(1.015);
    cursor: pointer;
    opacity: 0.9;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Card = styled.form`
  width: 400px;
  height: 80px;
  /* margin: 10px 20px; */
  color: black;
  padding: 10px;
  font-family: cursive;
  display: flex;
  align-items: center;
  /* background-color: red; */
  /* position: absolute; */
  /* justify-content: center; */
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; */

  @media screen and (max-width: 425px) {
    width: 300px;
    height: 500px;
  }
`;
const LabelText = styled.label`
  width: 100%;
  /* margin-right: 10px; */
  font-size: 12px;
  color: gray;
  text-align: left;
`;

const LabelHold = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.div`
  width: 95%;
  height: 60px;
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Inputs = styled.textarea`
  width: 95%;
  height: 55%;
  outline: none;
  border-radius: 3px;
  resize: none;
  padding-left: 5px;
  border: 1px solid lightgray;

  ::placeholder {
    opacity: 0.6;
    font-size: 12px;
  }
  :focus {
    outline: 2px solid rgb(76, 216, 250);
    border: none;
  }
`;

const Container = styled.div`
  width: 80%;
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  font-family: cursive;
  flex-direction: column;
  position: relative;
  right: 0px;

  span{
    /* background-color: green; */
    width: 150px;
  }
  /* right: 100px; */
  /* z-index: 100; */
`;