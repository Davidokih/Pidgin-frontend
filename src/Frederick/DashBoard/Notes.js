import React, { useState } from "react";
import styled from "styled-components";
import { BiNews } from "react-icons/bi";
import { RiSave2Fill } from "react-icons/ri";
import { BsBook, BsPlusCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { BsBookmarkFill } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import DisplayMenu from "../DisplayMenu";
import { useSelector } from "react-redux";

const Post = () => {
  const [ image, setImage ] = useState("/image/Buzz Cut.png");
  const [ avatar, setAvatar ] = useState("");

  const newUser = useSelector((state) => state.user);
  const handleImage = (e) => {
    const file = e.target.files[ 0 ];
    const save = URL.createObjectURL(file);
    setImage(save);
    setAvatar(file);
  };

  return (
    <>
      <Container>
        <SideBar>
          { newUser ? (
            <Top>

              <div >
                <ImagePro src={ newUser?.avatar } />
                <LabelHolder>
                  <Input type="file" id="pix" />
                  <Add htmlFor="pix">+</Add>
                </LabelHolder></div>
              {/* <span>Welcome Back😊</span> */ }
              <Name>{ newUser?.fullName }</Name>
            </Top>
          ) : null }
          <Mid>
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
                <Navs to="/Saved">
                  <span>
                    <RiSave2Fill />
                  </span>
                  Saved
                </Navs>
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
            <Nav to="/UserSignIn">
              <span>
                <BsBook />
              </span>
              Logout
            </Nav>
            {/* <Logo src={"/image/mainLogo.png"} /> */ }
          </Mid>
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
          <Card>
            In 1971, at the age of seventeen, for reasons unknown to me then or
            now, I began to keep a journal on human behavior. I catalogued all
            sorts of “nonverbals”—what is more generally called body language.
            At first it was the quirky things people did: why did they roll
            their eyes when they were disbelieving or reach for their neck when
            they heard bad news?
            <Icons>
              <Book />
            </Icons>
          </Card>
          <Card>
            In 1971, at the age of seventeen, for reasons unknown to me then or
            now, I began to keep a journal on human behavior. I catalogued all
            sorts of “nonverbals”—what is more generally called body language.
            At first it was the quirky things people did: why did they roll
            their eyes when they were disbelieving or reach for their neck when
            they heard bad news?
            <Icons>
              <Book />
            </Icons>
          </Card>
          {/* <CardHold>
          </CardHold> */}
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

const Icons = styled.div`
  width: 98%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 5px;
`;

const Book = styled(BsBookmarkFill)`
  font-size: 25px;
  margin-right: 10px;
  color: #979393;
  cursor: pointer;
`;

const Card = styled.div`
  width: 90%;
  height: auto;
  /* margin: 10px 20px; */
  margin-bottom: 10px;
  color: black;
  font-size: 14px;
  padding: 10px;
  font-family: cursive;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  @media screen and (max-width: 425px) {
    width: 90%;
    height: auto;
    font-size: 13px;
    margin-bottom: 10px;
  }
`;

const MainView = styled.div`
  margin-left: 290px;
  width: 75%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Nav = styled(NavLink)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  width: 100%;
  align-items: left;
  font-size: 14px;
  font-weight: 600;
  margin-left: 35px;
  margin-bottom: 20px;
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
  margin-bottom: 20px;
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
  height: 55%;
  width: 100%;
  /* background-color: gray; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Mid = styled.div`
  width: 100%;
  height: 63%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 20px;
  font-family: cursive;
`;

const Add = styled.div`
  width: 45px;
  height: 45px;
  top: 30px;
  right: 70px;
  cursor: pointer;
  position: absolute;
  background-color: red;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 400;
  color: white;
  background-color: #0074f8;
`;

const Input = styled.input`
  display: none;
`;

const LabelHolder = styled.label``;

const ImagePro = styled.img`
  object-fit: cover;
  width: 170px;
  height: 170px;
  margin-bottom: 10px;
  border-radius: 50%;
  background-color: red;
  position: relative;
`;

const Top = styled.div`
  width: 95%;
  height: 45%;
  /* background: lightgrey; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border-radius: 0px 30px 30px 0px; */
  ${"" /* margin-top: 20px; */}
  span {
    font-weight: 600;
  }
`;

const SideBar = styled.div`
  width: 290px;
  height: 100%;
  display: flex;
  background-color: #f1f1f1;
  flex-direction: column;
  justify-content: space-between;
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
