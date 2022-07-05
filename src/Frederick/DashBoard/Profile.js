import React, { useState } from "react";
import styled from "styled-components";
import { BiNews } from "react-icons/bi";
import { RiSave2Fill } from "react-icons/ri";
import { BsBook, BsPlusCircle } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import DisplayMenu from "../DisplayMenu";
import { useSelector } from "react-redux";

const Profile = () => {

  // const newUser = useSelector(state => state.user);

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
          { newUser ? (<Holder>
            <LeftHolder>
              <ImageHold>
                <img src={ newUser?.avatar } alt="" />
              </ImageHold>
            </LeftHolder>
            <RightHolder>
              <Head>{ newUser?.fullName }</Head>
              <Title>Bio</Title>
              <Context>
                { newUser?.bio }
              </Context>
              <Title>Email</Title>
              <Context>{ newUser?.email }</Context>
              {/* <Title>PhoneNumber</Title>
              <Context>09162822742 </Context> */}
              {/* <Link to="/EditProfile">
                <Button>Edit Profile</Button>
              </Link> */}
            </RightHolder>
          </Holder>) : null }
        </MainView>
      </Container>
      <SideMenu id="display">
        <DisplayMenu />
      </SideMenu>
    </>
  );
};

export default Profile;

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

const Context = styled.div`
  width: 85%;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 25px;
  text-align: left;
  font-family: consolas;
  @media screen and (max-width: 425px) {
    width: 90%;
    text-align: center;
  }
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  @media screen and (max-width: 425px) {
    font-size: 16px;
    font-weight: 600px;
  }
`;
const Head = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
const Button2 = styled.div`
  padding: 12px 25px;
  color: #fff;
  border-radius: 50px;
  border: 0;
  font-size: 13px;
  outline: none;
  background-color: #000;
  font-family: cursive;
  cursor: pointer;
  @media screen and (max-width: 425px) {
    padding: 12px 30px;
    color: #fff;
    cursor: pointer;
    border-radius: 50px;
    border: 0;
    font-size: 12px;
    outline: none;
    background-color: #000;
    font-family: cursive;
  }
`;
const Button = styled.button`
  padding: 12px 25px;
  color: #fff;
  border-radius: 50px;
  border: 0;
  outline: none;
  background-color: #0074f8;
  font-family: cursive;
  cursor: pointer;
  @media screen and (max-width: 425px) {
    padding: 12px 30px;
    color: #fff;
    border-radius: 50px;
    border: 0;
    font-size: 12px;
    outline: none;
    background-color: #000;
    font-family: cursive;
    cursor: pointer;
  }
`;

const Input = styled.input`
  display: none;
`;

const LabelHolder = styled.label``;

const ImageHold = styled.div`
  width: 360px;
  height: 360px;
  border-radius: 50%;
  border: 1px solid lightgray;
  margin-bottom: 20px;
  object-fit: cover;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 260px;
    height: 260px;
    border-radius: 50%;
    /* background-color: red; */
    margin-bottom: 20px;
  }
`;
const Holder = styled.div`
 width: 100%;
  // height: 100%; 
  margin-top: 40px;
  display: flex;
  justify-content: center;
  // background-color: red;
  align-items: center;
  @media screen and (max-width: 1024px) {
    /* margin-top: 80px; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    margin-top: 70px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 425px) {
    margin-top: 80px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const LeftHolder = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 35%;
  }
  @media screen and (max-width: 425px) {
    margin-top: 190px;
    width: 60%;
  }
`;
const RightHolder = styled.div`
margin-left: 30px;
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  // background-color: red;
  @media screen and (max-width: 768px) {
    width: 50%;
    display: flex;
    margin-left: 20px;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
  @media screen and (max-width: 425px) {
    margin-top: 20px;
    width: 95%;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
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

const Line = styled.div`
  width: 2px;
  height: 60%;
  background-color: rgba(0, 0, 0, 0.3);
  margin-left: 30px;
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

// const Input = styled.input`
//   display: none;
// `;

// const LabelHolder = styled.label``;

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
