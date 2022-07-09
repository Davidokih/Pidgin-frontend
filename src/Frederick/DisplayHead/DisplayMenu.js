import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { BiBookAdd, BiBook } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { createPost, signOut } from "../../GlobalState/GlobalState";

// import { createPost, updatePost, signOut } from "../GlobalState/GlobalState";
import { useDispatch, useSelector } from 'react-redux';

const DisplayMenu = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Wrapper>
        <ImageHold>
          <Logo src="/logo.png" />
          <span>PIDGIN</span>
        </ImageHold>
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
        <LogoutButton onClick={ () => {
          dispatch(signOut());
        } }>
          <span>
            <AiOutlineLogout />
          </span>
          Logout
        </LogoutButton>
      </Wrapper>
    </Container>
  );
};

export default DisplayMenu;

const LogoutButton = styled.div`
  width: 100%;
  height: 55px;
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
  width: 99%;
  height: 55px;
  text-decoration: none;
  display: flex;
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

const ImageHold = styled.div`
  display: flex;
  align-items: center;
  span {
    height: 90px;
    display: flex;
    align-items: flex-end;
    font-size: 20px;
    font-weight: bold;
    color: black;
  }
`;

const Logo = styled.img`
  width: 65px;
  height: 70px;
  object-fit: cover;
  margin: 20px 0px 0px 0px;
  border-radius: 3px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  line-height: 3;

  h3 {
    margin: -10px;
    font-size: 35px;
    font-weight: 900;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 500px;
  font-family: Poppins;
`;
