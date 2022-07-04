import React from "react";
import styled from "styled-components";
import { BiNews } from "react-icons/bi";
import { RiSave2Fill } from "react-icons/ri";
import { BsBook, BsPlusCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import { createPost, updatePost, signOut } from "../GlobalState/GlobalState";
import { useDispatch, useSelector } from 'react-redux';

const DisplayMenu = () => {

  const dispatch = useDispatch();
  return (
    <Container>
      <Wrapper>
        <h3>PIDGIN</h3>
        <NavHolder>
          <Hold>
            <Navs to="/NewsFeedDashBoard">
              <span>
                <BiNews />
              </span>
              NewsFeed
            </Navs>
            <Navs to="/Post">
              <span>
                <BsPlusCircle />
              </span>
              Post
            </Navs>
            {/* <Navs to="/Saved">
              <span>
                <RiSave2Fill />
              </span>
              Saved
            </Navs> */}
            <Navs to="/Profile">
              <span>
                <BiNews />
              </span>
              Profile
            </Navs>
            <Navs to="/EditProfile">
              <span>
                <BiNews />
              </span>
              Account Settings
            </Navs>
            <Navs to="/Notes">
              <span>
                <BsBook />
              </span>
              Notes
            </Navs>
          </Hold>
        </NavHolder>
        <Nav to="/UserSignIn" onClick={ () => {
          dispatch(signOut());
        } }>
          <span>
            <BsBook />
          </span>
          Logout
        </Nav>
      </Wrapper>
    </Container>
  );
};

export default DisplayMenu;

const Nav = styled(NavLink)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  width: 100%;
  align-items: left;
  font-size: 14px;
  font-weight: 600;
  margin-left: 35px;
  margin-top: 30px;
  span {
    font-size: 20px;
    display: flex;
    align-items: center;
    margin-right: 15px;
  }
  transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(1.015);
    cursor: pointer;
    opacity: 0.9;
  }
`;

const Navs = styled(NavLink)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: left;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 15px;
  span {
    font-size: 20px;
    display: flex;
    align-items: center;
    margin-right: 15px;
  }
  transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(1.015);
    cursor: pointer;
    opacity: 0.9;
  }
`;

const Hold = styled.div`
  margin-left: 20px;
  width: 100%;
  /* background-color: aqua; */
`;

const NavHolder = styled.div`
  height: 350px;
  width: 100%;
  margin-top: 20px;
  /* background-color: gray; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  line-height: 3;

  h3 {
    margin: -10px;
    font-size: 35px;
    font-weight: 900;
    /* border-bottom: 1px solid white; */
  }
`;
const Container = styled.div`
  width: 100%;
  padding: 20px 0px;
`;
