import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Definition from './Definition';
import LikeComp from "../mainView/LikeComp";
import { useDispatch, useSelector } from "react-redux";
import PersonalDisplay from '../UserFolder/PersonalDisplay';
import axios from "axios";
import { createUser, createbio, signOut, addSaved, createPost } from "../../GlobalState/GlobalState";
import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { BiBookAdd, BiBook } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DisplayMenu from "../DisplayHead/DisplayMenu";

const NewsFeedDashBoard = () => {

  const dispatch = useDispatch();

  const newUser = useSelector(state => state.user);
  const myPost = useSelector((state) => state.testPost);
  const myBio = useSelector((state) => state.bio);
  const [ toggle, setToggle ] = useState(true);


  const change = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  const [ myData, setMyData ] = useState([]);
  const [ dislayMyData, setDisplayMyData ] = useState([]);
  const [ user, setUser ] = useState({});




  const getPost = async () => {

    const mainURL = "https://pidgin-backend.herokuapp.com";
    const url = `${mainURL}/pidgin/post/`;

    await axios.get(url).then((res) => {
      // setData(res.data.data);
      // dispatch(createPost(res.data.data));
      setMyData(res.data.data);
    });;
  };

  useEffect(() => {
    getPost();
  }, []);

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

          <Header >
            { newUser ? (
              <HeaderImg>
                <img src={ newUser?.avatar } alt="" />
                <HeadText>
                  <span>{ newUser?.fullName }</span>
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
            { myData?.map((props) => (
              <Card key={ props._id }>
                <Top2>
                  <CardWord>{ props.word }</CardWord>
                  <CardPersonalDetails>
                    <PersonalDisplay props={ props } fullName avatar />
                  </CardPersonalDetails>
                </Top2>

                <Middle>
                  <CardWordDefinition>
                    { props.userDefinition }
                  </CardWordDefinition>
                  <CardWordSentence>
                    { props.useCase }
                  </CardWordSentence>
                  {/* <CardWordSentence2>
                    my gee <span>how far</span>, make I follow you
                  </CardWordSentence2> */}
                </Middle>
                {/* <Bottom>
                  <LikeHolder>
                    <LikeComp props={ props } like />
                  </LikeHolder>
                  <Link to={ `/detail/${props._id}` } style={ { textDecoration: "none" } }>
                    <Def>{ props.definition.length }

                    </Def>
                    <MoreOptions>more definition</MoreOptions>
                  </Link>

                </Bottom> */}
                <LikesDefinition>
                  <Likes>{ props.like.length } likes
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


const CardWordSentence = styled.div`
  font-style: italic;
  margin-bottom: 10px;
`;

const CardWordDefinition = styled.div`
  width: 100%;
  text-align: left;
  margin: 15px 0px;
`;

const Middle = styled.div`
  width: 90%;
  height: auto;
  color: gray;
  font-size: 14px;
  @media screen and (max-width: 425px) {
    font-size: 13px;
  }
  @media screen and (max-width: 320px) {
    font-size: 13px;
  }
`;


const CardPersonalDetails = styled.div`
  /* width: 150px; */
  height: 90%;
  display: flex;
  align-items: center;
`;

const CardWord = styled.div`
  font-size: 35px;
  font-weight: 600;
  color: #a33737;
  @media screen and (max-width: 425px) {
    font-size: 22px;
    font-weight: 700;
    color: #a33737;
  }
  @media screen and (max-width: 320px) {
    font-size: 20px;
    font-weight: 700;
    color: #a33737;
  }
`;

const Top2 = styled.div`
  width: 90%;
  height: 60px;
  margin: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 425px) {
    width: 90%;
    margin: 5px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (max-width: 320px) {
    width: 90%;
    margin: 5px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Card = styled.div`
  width: 500px;
  height: auto;
  background-color: white;
  margin: 20px 20px;
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(214, 214, 214);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1024px) {
    width: 450px;
  }
  @media screen and (max-width: 1024px) {
    width: 90%;
    height: auto;
    background-color: white;
    margin: 10px 10px;
    border-radius: 5px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid rgb(214, 214, 214);
    display: flex;
    flex-direction: column;
    align-items: center;
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

const Def = styled.div`
font-size:13px;
`;

const LikesDefinition = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const Likes = styled.div`

font-size:13px;
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
  /* background-color: #f1f1f1; */
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
