import React, { useState } from "react";
import styled from "styled-components";
import { BiNews } from "react-icons/bi";
import { RiSave2Fill } from "react-icons/ri";
import { BsBook, BsPlusCircle } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import DisplayMenu from "../DisplayHead/DisplayMenu";
import { createPost, signOut } from "../../GlobalState/GlobalState";
import { useSelector, useDispatch } from "react-redux";
import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { BiBookAdd, BiBook } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
const Profile = () => {

  // const newUser = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [ image, setImage ] = useState("/image/Buzz Cut.png");
  const [ avatar, setAvatar ] = useState("");
  const newUser = useSelector((state) => state.user);
  const handleImage = (e) => {
    const file = e.target.files[ 0 ];
    const save = URL.createObjectURL(file);
    setImage(save);
    setAvatar(file);
  };
  console.log(newUser.post);

  return (
    <>
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
          <Header>
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
          <Holder>
            { newUser ? (
              <TopProfile>
                <ProfileImage src={ newUser?.avatar } />
                <SideProfile>
                  <SideName>{ newUser?.fullName }</SideName>
                  <SideLabel>Bio:</SideLabel>
                  <SideContent>{ newUser?.bio }</SideContent>
                  <SideLabel>Email:</SideLabel>
                  <SideContent>{ newUser?.email }</SideContent>
                  <SideGender>{ newUser?.gender }</SideGender>
                </SideProfile>
              </TopProfile>) : null }
            <TotalPost>
              { newUser.post.length > 1 ? (<div>
                { newUser?.post?.map((props) => (
                  <Card key={ props._id }>
                    <Top2>
                      <CardWord>{ props.word }</CardWord>
                    </Top2>
                    <Middle>
                      <CardWordDefinition>
                        { props.userDefinition }
                      </CardWordDefinition>
                      <CardWordSentence>
                        { props.useCase }
                      </CardWordSentence>
                    </Middle>
                  </Card>
                )) }
              </div>) : (
                <Card>
                  <Top2>
                    <CardWord>{ newUser?.post?.word }</CardWord>
                  </Top2>
                  <Middle>
                    <CardWordDefinition>
                      { newUser?.post?.userDefinition }
                    </CardWordDefinition>
                    <CardWordSentence>
                      { newUser?.post?.useCase }
                    </CardWordSentence>
                  </Middle>
                </Card>) }
            </TotalPost>
          </Holder>
        </MainView>
      </Container>
      <SideMenu id="display">
        <DisplayMenu />
      </SideMenu>
    </>
  );
};

export default Profile;

const Holder = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  @media screen and (max-width: 768px) {
    padding-top: 500px;
  }
`;
const CardWordSentence = styled.div`
  font-style: italic;
  margin-bottom: 10px;
`;

const CardWordDefinition = styled.div`
  width: 100%;
  text-align: left;
  margin: 5px 0px;
`;

const Middle = styled.div`
  width: 90%;
  height: auto;
  color: gray;
  font-size: 14px;
`;

const CardWord = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: #a33737;
`;

const Top2 = styled.div`
  width: 90%;
  margin: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Card = styled.div`
  width: 400px;
  height: auto;
  background-color: white;
  margin: 10px 10px;
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(214, 214, 214);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 350ms;
  transform: scale(1);
  :hover {
    cursor: pointer;
    transform: scale(1.015);
  }
`;

const TotalPost = styled.div`
  width: 90%;
  height: 350px;
  /* background-color: red; */
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 425px) {
    width: 80%;
  }
`;
const SideGender = styled.div`
  font-size: 12px;
  color: #a33737;
  font-style: italic;
  font-weight: 700;
  margin-bottom: 10px;
`;

const SideContent = styled.div`
  margin-bottom: 10px;
`;

const SideLabel = styled.div`
  font-size: 17px;
  font-weight: 500;
  font-style: italic;
  color: rgba(0, 0, 0, 0.8);
  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;

const SideName = styled.div`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
  @media screen and (max-width: 425px) {
    font-size: 23px;
  }
`;

const SideProfile = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgb(214, 214, 214);
  /* background-color: white; */
  margin-right: 30px;
  @media screen and (max-width: 768px) {
    margin-right: 0px;
  }
`;

const TopProfile = styled.div`
  width: 70%;
  height: 250px;
  border-bottom: 2px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
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


const MainView = styled.div`
  margin-left: 290px;
  width: 75%;
  height: auto;
  display: flex;
  /* flex-direction: column; */
  // background-color: gray;
  justify-content: center;
  align-items: center;
  /* justify-content: center; */
  padding: 20px;
  /* align-items: center; */
  flex-wrap: wrap;
  /* background: lightgrey; */
  /* border-left: 1px solid lightgrey; */
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
