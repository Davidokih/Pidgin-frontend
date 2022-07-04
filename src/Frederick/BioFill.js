import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createbio, createUser } from '../GlobalState/GlobalState';

const BioFill = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const id = user?._id;
  // console.log(user.token, id);

  const navigate = useNavigate();

  const [ image, setImage ] = useState("/image/images.png");
  const [ avatar, setAvatar ] = useState("");

  const formSchema = yup.object().shape({
    bio: yup.string(),
    gender: yup.string(),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleImage = (e) => {
    const file = e.target.files[ 0 ];
    const save = URL.createObjectURL(file);
    setImage(save);
    setAvatar(file);
  };

  const onSubmit = handleSubmit(async (value) => {
    console.log(value);
    const { bio, gender } = value;
    const mainURL = "https://pidgin-backend.herokuapp.com";
    const url = `${mainURL}/pidgin/user/${id}`;

    const formData = new FormData();
    formData.append("bio", bio);
    formData.append("gender", gender);
    formData.append("avatar", avatar);

    const config = {
      "content-type": "multipart/form-data",
      onUploadProgress: (ProgressEvent) => {
        const { loaded, total } = ProgressEvent;
        const percent = Math.floor((loaded * 100) / total);
        console.log(percent);
      },
    };

    await axios.patch(url, formData, config).then((res) => {
      console.log("Error Data: ", res.data.data);
      dispatch(createUser(res.data.data));
    });

    navigate("/NewsFeedDashBoard");
  });
  return (
    <Container>
      <Card onSubmit={ onSubmit } type="multipart/form-data">
        <Image src={ image } />
        <LabelHolder>
          <Input type="file" id="pix" onChange={ handleImage } />
          <Upload htmlFor="pix">Add Your Image</Upload>
        </LabelHolder>
        <Holder>
          <LabelText>Bio:</LabelText>
          <BioInput placeholder="Enter your Bio" { ...register("bio") } />
          <LabelText>Gender:</LabelText>
          <Inputs placeholder="Enter your Bio" { ...register("gender") } />
          <NextButton type="submit">Next</NextButton>
          <SkipButton to="/NewsFeedDashBoard">Skip</SkipButton>
        </Holder>
      </Card>
    </Container>
  );
};

export default BioFill;

const SkipButton = styled(NavLink)`
  text-decoration: none;
  width: 99%;
  text-align: right;
  margin-top: 20px;
  font-weight: 600;
  font-size: 13px;
  opacity: 0.6;
  color: gray;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    opacity: 0.9;
  }

  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`;

const NextButton = styled.button`
  background-color: white;
  margin-top: 20px;
  font-weight: 500;
  color: gray;
  transition: all 350ms;
  transform: scale(1);
  border: 0;
  :hover {
    transform: scale(1.011);
    cursor: pointer;
    opacity: 0.9;
  }
`;

const LabelText = styled.label`
  width: 99%;
  /* margin-right: 10px; */
  font-size: 12px;
  color: gray;
  text-align: left;
`;
const BioInput = styled.textarea`
  width: 97%;
  height: 90px;
  resize: none;
  outline: none;
  border-radius: 3px;
  padding-left: 5px;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  color: rgba(0, 0, 0, 0.7);

  ::placeholder {
    opacity: 0.6;
    font-size: 12px;
  }
  :focus {
    outline: 2px solid rgb(76, 216, 250);
    border: none;
  }

@media screen and (max-width:768px){
  height: 70px;
}
@media screen and (max-width:425px){
  height: 70px;
}
`;

const Inputs = styled.textarea`
  width: 97%;
  height: 40px;
  resize: none;
  outline: none;
  border-radius: 3px;
  padding-left: 5px;
  border: 1px solid lightgray;
  color: rgba(0, 0, 0, 0.7);

  ::placeholder {
    opacity: 0.6;
    font-size: 12px;
  }
  :focus {
    outline: 2px solid rgb(76, 216, 250);
    border: none;
  }
`;

const Holder = styled.div`
  width: 93%;
  height: 230px;
  margin-top: 30px;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px){
    margin-top: 15px;
    height: 220px;
  }
`;

const Upload = styled.div`
  padding: 11px 30px;
  background-color: #0074f8;
  color: white;
  font-family: cursive;
  margin-top: 10px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 50px;
  transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(1.015);
    cursor: pointer;
    opacity: 0.9;
  }

  @media screen and (max-width: 375px) and (min-width: 320px) {
    font-size: 12px;
    padding: 10px 30px;
  }
`;

const Input = styled.input`
  display: none;
`;

const LabelHolder = styled.label``;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-top: 20px;
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width: 375px) and (min-width: 320px) {
    width: 180px;
    height: 180px;
  }
`;

const Card = styled.form`
  width: 510px;
  height: 560px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  @media screen and (max-width: 768px) {
    width: 450px;
    height: 530px;
  }

  @media screen and (max-width: 425px) {
    width: 400px;
    height: 520px;
  }
  @media screen and (max-width: 375px) and (min-width: 320px) {
    width: 310px;
    height: 480px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
