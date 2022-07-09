import React, { useState } from "react";
import styled from "styled-components";
import { BiNews } from "react-icons/bi";
import { RiSave2Fill } from "react-icons/ri";
import { BsBook, BsPlusCircle } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import DisplayMenu from "../DisplayHead/DisplayMenu";
import { useDispatch, useSelector } from 'react-redux';
import { createPost, signOut } from "../../GlobalState/GlobalState";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from 'sweetalert2';
import Loading from '../loading/LoadingState';
import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { BiBookAdd, BiBook } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
// import Rectangle from ""

const Post = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newUser = useSelector((state) => state.user);
  const post = useSelector((state) => state.posted);
  const id = newUser?._id;
  // console.log(user.token, id);

  const [ image, setImage ] = useState("/image/fred.png");
  const [ avatar, setAvatar ] = useState("");
  let [ myLoading, setMyLoading ] = useState(false);
  const loadChange = () => {
    setMyLoading(true);
  };

  const handleImage = (e) => {
    const file = e.target.files[ 0 ];
    const save = URL.createObjectURL(file);
    setImage(save);
    setAvatar(file);
  };

  const formSchema = yup.object().shape({
    word: yup.string().required("This field cannot be empty"),
    userDefinition: yup.string(),
    useCase: yup.string().required("This field cannot be empty")
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = handleSubmit(async (value) => {
    console.log(value);
    const { word, userDefinition, useCase } = value;
    const mainURL = "https://pidgin-backend.herokuapp.com";
    const url = `${mainURL}/pidgin/post/${id}/createPosts`;

    setMyLoading(true);

    await axios.post(url, { word, userDefinition, useCase }).then((res) => {

      setMyLoading(false);
      console.log(res.data.data);
      dispatch(createPost(res.data.data));
    }).catch((err) => {
      if (err) {
        alert(err.message);
      } else {
        alert("Success");
      }
    });
    Swal.fire(
      'Good job!',
      'Clicke Ok to continue',
      'success'
    );

    navigate("/NewsFeedDashBoard");
  });

  return (
    <>
      {
        myLoading ? (<Loading />) : null
      }
      <Container>
        <SideBar>
          { newUser ? (
            <ContentHolder>
              <div >
                { newUser?.avatar ? (<NavImage src={ newUser?.avatar } />) :
                  <NavImage src="/image/images.png" /> }
              </div>
              <span>{ newUser?.fullName }</span>
            </ContentHolder>
          ) : null }
          <MiddleNav>
            <Navs to="/NewsFeedDashBoard">
              <span>
                <AiOutlineHome />
              </span>
              NewsFeed
            </Navs>
            <Navs to="/Post">
              <span>
                <BiBookAdd />
              </span>
              AddWord
            </Navs>
            <Navs to="/">
              <span>
                <BiBook />
              </span>Dictionary
            </Navs>
            <Navs to="/Profile">
              <span>
                <CgProfile />
              </span>
              Profile
            </Navs>
            <Navs to="/EditProfile">
              <span>
                <AiOutlineSetting />
              </span>
              Account Settings
            </Navs>
          </MiddleNav>
          <LogoutButton to="/UserSignIn" onClick={ () => {
            dispatch(signOut());
          } }>
            <span>
              <AiOutlineLogout />
            </span>
            Logout
          </LogoutButton>
        </SideBar>
        <MainView>

          <Header >
            { newUser ? (
              <HeaderImg>
                <img src={ newUser?.avatar } alt="" />
                <HeadText>
                  Welcome Back <span>{ newUser?.fullName }</span>
                </HeadText>
              </HeaderImg>) : null }
            <BurgerLink>
              <BarIcon
                id="bar"
                onClick={ () => {
                  document.getElementById("display").style.top = "0px";
                  document.getElementById("bar").style.display = "none";
                  document.getElementById("times").style.display = "block";
                } }
              />
              <CancleIcon
                id="times"
                onClick={ () => {
                  document.getElementById("display").style.top = "-1000px";
                  document.getElementById("bar").style.display = "block";
                  document.getElementById("times").style.display = "none";
                } }
              />
            </BurgerLink>
          </Header>
          <CardHold onSubmit={ onSubmit }>
            <Card>
              <HeadText2>Post Beta Word Make People See</HeadText2>
              <LabelHold>
                <Label>
                  <LabelText>Put Word:</LabelText>
                  <Inputs placeholder="How Far" { ...register('word') } />
                </Label>
                <Label>
                  <LabelText>Definition:</LabelText>
                  <Inputs placeholder="How are you" { ...register('userDefinition') } />
                </Label>
                <Label2>
                  <LabelText2>Use am make sentence for English</LabelText2>
                  <Inputs2 placeholder="He asked how you where doing?..." { ...register('useCase') } />
                </Label2>
              </LabelHold>
              {/* <HoldLink2 to="/NewsFeedDashBoard"> */ }
              <Submit type="submit"> Add Word</Submit>
              {/* </HoldLink2> */ }
            </Card>
          </CardHold>
        </MainView>
      </Container>
      <SideMenu id="display">
        <DisplayMenu />
      </SideMenu>
    </>
  );
};

export default Post;

const CancleIcon = styled(FaTimes)`
  font-size: 25px;
  color: rgba(0, 0, 0, 0.8);
  display: none;
`;
const BarIcon = styled(FaBars)`
  font-size: 25px;
  color: rgba(0, 0, 0, 0.8);
`;
const SideMenu = styled.div`
  width: 250px;
  height: 650px;
  background-color: #f1f1f1;
  position: fixed;
  top: -3000px;
  z-index: 1000;
  transition: all 2s ease;
`;
const BurgerLink = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeadText = styled.div`
  font-size: 14px;
  span {
    font-weight: 600;
    font-size: 17px;
  }
  @media screen and (max-width: 425px) {
    font-size: 12px;
    span {
      font-weight: 600;
      font-size: 15px;
    }
  }
`;

const HeaderImg = styled.div`
  width: 240px;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin: 5px;
  }
  @media screen and (max-width: 425px) {
    width: 220px;
  }
`;

const Header = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 70px;
    padding-right: 10px;
    background-color: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin-bottom: 30px; */
    position: fixed;
    top: 0;
  }
`;

const CardHold = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: calc(100vh - 200px);
    /* margin-top: 30px; */
    /* padding-bottom: 80px; */
    /* margin-bottom: 20px; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

const HoldLink2 = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

const Submit = styled.button`
  width: 30%;
  height: 40px;
  background-color: #0074f8;
  border-radius: 50px;
  border: none;
  color: white;
  margin: 20px 0px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
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

const Inputs2 = styled.textarea`
  width: 98%;
  height: 75%;
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

const LabelText2 = styled.label`
  width: 100%;
  /* margin-right: 10px; */
  font-size: 12px;
  color: gray;
  text-align: left;
`;
const Inputs = styled.textarea`
  width: 98%;
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
const Label2 = styled.div`
  width: 95%;
  height: 120px;
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const HeadText2 = styled.div`
  margin: 30px 0px;
  display: flex;
  align-items: center;
  font-weight: 600;
  justify-content: center;
`;

const Card = styled.div`
  width: 400px;
  height: 450px;
  /* margin: 10px 20px; */
  color: black;
  padding: 10px;
  font-family: cursive;
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; */

  @media screen and (max-width: 425px) {
    width: 300px;
    height: 500px;
  }
`;

const MainView = styled.div`
  margin-left: 160px;
  width: 85%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  /* align-items: center; */
  flex-wrap: wrap;
  /* background: lightgrey; */
  /* border-left: 1px solid lightgrey; */
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-top: 0px;
    padding-right: 0px;
    padding-left: 0px;
    padding-bottom: 20px;
    margin-left: 0px;
  }
`;

const LogoutButton = styled(NavLink)`
  width: 100%;
  height: 55px;
  text-decoration: none;
  background-color: #5d00ff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: 500;
  span {
    font-size: 20px;
    font-weight: 600;
    margin-right: 5px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  :hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    transition: all 350ms;
  }
`;

const Navs = styled(NavLink)`
  width: 100%;
  height: 55px;
  display: flex;
  text-decoration: none;
  align-items: center;
  border-top: 1px solid rgb(214, 214, 214);
  border-bottom: 1px solid rgb(214, 214, 214);
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  font-weight: 500;
  span {
    font-size: 20px;
    font-weight: 600;
    margin-left: 30px;
    margin-right: 5px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  :hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.6);
    transition: all 350ms;
  }
`;

const MiddleNav = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const NavImage = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgb(214, 214, 214);
  background-color: white;
`;

const ContentHolder = styled.div`
  width: 90%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    font-weight: 600;
    font-size: 20px;
    margin-top: 5px;
  }
`;

const SideBar = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-right: 1px solid lightgray;
  background-color: #fff; 
  position: fixed;
  left: 0;
  font-family: Poppins;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  background: white;
  font-family: cursive;
`;
