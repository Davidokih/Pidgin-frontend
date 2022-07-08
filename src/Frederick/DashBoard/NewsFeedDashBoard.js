import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BiNews } from "react-icons/bi";
import { RiNurseFill, RiSave2Fill } from "react-icons/ri";
import { BsBook, BsPlusCircle } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { BsBookmarkFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import DisplayMenu from "../DisplayMenu";
import Personal from "../mainView/Personal";
import Definition from './Definition';
import LikeComp from "../mainView/LikeComp";
import { useDispatch, useSelector } from "react-redux";
import PostDefinition from "./PostDefinition";
// import { useSelector } from "react-redux";
import axios from "axios";
import { createUser, createbio, signOut, addSaved, createPost } from "../../GlobalState/GlobalState";
// import Rectangle from ""

const NewsFeedDashBoard = () => {

  const dispatch = useDispatch();

  const newUser = useSelector(state => state.user);
  const myPost = useSelector((state) => state.testPost);
  const myBio = useSelector((state) => state.bio);
  // const Definition = useSelector((state) => state.definitions);
  // console.log(myPost._id);

  const [ toggle, setToggle ] = useState(true);
  // const [ data, setData ] = useState([]);


  const change = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  // console.log(myPost._id);

  // const getUser = async () => {

  //   const mainURL = "http://localhost:2008";
  //   const url = `${mainURL}/pidgin/user/${newUser._id}`;

  //   await axios.get(url).then((res) => {
  //     dispatch(createUser(res.data.data));
  //     // console.log(res.data.data);
  //   });
  // };
  const getPost = async () => {

    const mainURL = "https://pidgin-backend.herokuapp.com";
    const url = `${mainURL}/pidgin/post/`;

    await axios.get(url).then((res) => {
      // setData(res.data.data);
      dispatch(createPost(res.data.data));
      console.log(res.data.data);
    });;
  };
  // console.log(data);
  // const getDef = async (ID) => {

  //   const mainURL = "http://localhost:2008";
  //   const url = `${mainURL}/pidgin/post/${newUser._id}/${myPost._id}/${ID}`;

  //   await axios.get(url).then((res) => {
  //     // dispatch(createPost(res.data.data));
  //     console.log(res.data.data);
  //   }).catch((err) => {
  //     if (err) {
  //       alert(err.message);
  //     } else {
  //       alert("Sucess");
  //     }
  //   });
  // };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <Container>
        <SideBar>
          { newUser ? (
            <Top>

              <div >
                { newUser?.avatar ? (<ImagePro src={ newUser?.avatar } />) : <ImagePro src={ newUser?.avatar } /> }
                <LabelHolder>
                  <Input type="file" id="pix" />
                  {/* <Add htmlFor="pix">+</Add> */ }
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
                {/* <Navs to="/Notes">
                  <span>
                    <BsBook />
                  </span>
                  Notes
                </Navs> */}
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
            {/* <Logo src={"/image/mainLogo.png"} /> */ }
          </Mid>
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
          <CardHold>
            { myPost?.map((props) => (
              <Card key={ props._id }>
                <PersonalHolder>
                  <Personal props={ props } fullName avatar />
                </PersonalHolder>
                <ContentHolder>
                  <Word>Word:</Word>
                  <Text>{ props.word }</Text>
                  <Word>Definition:</Word>
                  <Text>
                    { props.userDefinition }
                  </Text>
                  <Word>Sentence:</Word>
                  <Text>
                    { props.useCase }
                  </Text>
                </ContentHolder>
                <LikesDefinition>
                  <Likes>{ props.like.length }likes
                    <span>
                      <LikeComp props={ props } like />
                    </span>
                  </Likes>
                  <Link to={ `/detail/${props._id}` } style={ { textDecoration: "none" } }>
                    <Def>{ props.definition.length }

                    </Def>
                    <Def>more definition</Def>
                  </Link>
                </LikesDefinition>
                <Icons>

                  <span>
                    <Definition props={ props } def />
                  </span>
                  {/* <Book onClick={ () => {
                    dispatch(addSaved(props));
                  } } /> */}
                </Icons>

              </Card>
            )) }
          </CardHold>
          {/* <Space></Space> */ }
        </MainView>
      </Container>
      <SideMenu id="display">
        <DisplayMenu />
      </SideMenu>
    </>
  );
};

export default NewsFeedDashBoard;

const Others = styled.div``;

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
    z-index: 100;
  }
`;

const Icons = styled.div`
  width: 100%;

  span{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // cursor: pointer;
  }
`;

const Love = styled(FcLike)`
  margin-left: 10px;
  font-size: 25px;
  color: red;
  cursor: pointer;
`;

const Book = styled(BsBookmarkFill)`
  font-size: 25px;
  margin-right: 10px;
  color: #979393;
  cursor: pointer;
`;

const Def = styled.div``;

const LikesDefinition = styled.div`
  width: 98%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const Likes = styled.div``;

const Text = styled.div`
  font-size: 12px;
  font-family: consolas;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.8);
  @media screen and (max-width: 425px) {
    font-size: 12px;
  }
  @media screen and (max-width: 375px) and (min-width: 320px) {
    font-size: 12px;
  }
`;
const Word = styled.div`
  font-weight: 800;
  font-size: 14px;
  margin-bottom: 5px;
  @media screen and (max-width: 425px) {
    font-size: 12px;
  }
  @media screen and (max-width: 375px) and (min-width: 320px) {
    font-size: 12px;
  }
`;

const ContentHolder = styled.div`
  width: 100%;
  height: auto;
`;

const PersonalHolder = styled.div`
  margin-bottom: 20px;
`;

const Card = styled.div`
  width: 400px;
  height: auto;
  margin: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */
  color: black;
  padding: 10px;
  font-family: cursive;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  @media screen and (max-width: 425px) {
    width: 350px;
    height: auto;
    margin: 10px 5px;
  }
  @media screen and (max-width: 375px) and (min-width: 320px) {
    width: 290px;
    height: auto;
    margin: 10px 5px;
  }
`;

const Space = styled.div`
width: 100%;
height: 20px;
background-color: red;
margin-top: 40px;
`;

const CardHold = styled.div`
  width: 85%;
  height: auto;
  /* height: 100%; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  /* background-color: aqua; */
  @media screen and (max-width: 768px) {
    width: 100%;
    /* height: auto; */
    /* padding-top: 310px; */
    padding-bottom: 20px;
    height: calc(100vh - 200px);
    /* margin-top: 30px; */
    /* padding-bottom: 80px; */
    /* margin-bottom: 20px; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    /* padding-top: 70px; */
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

const MainView = styled.div`
  margin-left: 290px;
  width: 65%;
  height: auto;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  padding: 20px;
  /* align-items: center; */
  flex-wrap: wrap;
  /* background: grey; */
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
    /* padding-bottom: 20px; */
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
