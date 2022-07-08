import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FcLike } from "react-icons/fc";
import { BsBookmarkFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import DefinitionPage from '../mainView/DefinitionPage';

import { AiFillHome, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import moment from "moment";

import DefinitionProfile from "./DefinitionProfile";
import DefinitionImage from "./DefinitionImage";
import { useDispatch, useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import axios from "axios";
import { createUser, createbio, signOut, addSaved, createDefinition, createPost } from "../../GlobalState/GlobalState";

const DetailPage = ({ props }) => {

  const dispatch = useDispatch();
  const { id } = useParams();

  const newUser = useSelector(state => state.user);
  const myPost = useSelector((state) => state.testPost);
  const Def = useSelector((state) => state.definition);
  const [ toggle, setToggle ] = useState(true);
  const [ data, setData ] = useState({});

  const change = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  const getPost = async () => {

    const mainURL = "https://pidgin-backend.herokuapp.com";
    const url = `${mainURL}/pidgin/post/${newUser._id}/${id}`;

    await axios.get(url).then((res) => {
      setData(res.data.data);
    });
  };
  const likePost = async (ID) => {
    const localURL = "https://pidgin-backend.herokuapp.com";

    const url = `${localURL}/pidgin/like/${newUser._id}/${id}/${ID}`;

    await axios.post(url);
  };

  const dislikePost = async (ID) => {
    const localURL = "https://pidgin-backend.herokuapp.com";

    const url = `${localURL}/pidgin/like/${newUser._id}/${id}/${ID}`;

    await axios.delete(url);
  };

  useEffect(() => {
    getPost();
  }, []);
  return (
    <div>
      <Cont>
        <Wrap>

          <Word >
            <UserWord>Word: { data.word }</UserWord>
          </Word>
          { data?.definition?.map((props) => (
            <Card key={ props._id }>
              <TextHolder>
                <Others>
                  <NameText>
                    <span><DefinitionProfile props={ props } userInfo /></span>
                  </NameText>
                  <WordDefintion>
                    <span>Definition:</span> <br />{ props?.meaning }
                  </WordDefintion>
                </Others>
                <ImageHold>
                  <DefinitionImage props={ props } image />
                </ImageHold>
              </TextHolder>
              <LikesDefinition>
                <Likes>{ props.like.length }likes</Likes>
              </LikesDefinition>
              <Icons>
                { props?.like.includes(newUser._id) ? (
                  <LoveIconComment1
                    onClick={ () => {
                      dislikePost(props._id);
                      console.log("file deleted");
                    } }
                  />
                ) : (
                  <LoveIconComment
                    onClick={ () => {
                      likePost(props._id);
                    } }
                  />
                ) }
                <Book />
              </Icons>
              <Time> define { moment(props.createdAt).fromNow() }</Time>
            </Card>
          )) }
        </Wrap>
      </Cont>
    </div>
  );
};

export default DetailPage;

const Time = styled.div`
color: silver;
	text-transform: uppercase;
	font-size: 12px;
	margin-left: 20px;
	margin-top: 10px;
	margin-bottom: 10px;
`;
const LoveIconComment1 = styled(AiFillHeart)`
	font-size: 18px;
	transition: all 350ms;
	color: gray;
	margin-right: 5px;
	color: red;
	:hover {
		cursor: pointer;
		color: silver;
	}
`;

const LoveIconComment = styled(AiOutlineHeart)`
	font-size: 18px;
	transition: all 350ms;
	color: gray;
	margin-right: 5px;
	:hover {
		cursor: pointer;
		color: silver;
	}
`;

const Cont = styled.div`
  width: 100%;
  height: 100%;
  font-family: cursive;
  display: flex;
  justify-content: center;
`;

const Wrap = styled.div`
  width: 85%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`;

const Word = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 600px;

  @media (max-width: 800px) {
    width: 85%;
  }
`;

const UserWord = styled.div`
  font-size: 25px;
  font-weight: 700;
  @media screen and (max-width: 425px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 320px) {
    width: 100%;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Others = styled.div``;


const Card = styled.div`
  width: 95%;
  /* height: 200px; */
  margin: 20px 20px;
  color: black;
  padding: 10px;
  font-family: cursive;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  @media screen and (max-width: 425px) {
    width: 330px;
    /* height: 180px; */
  }
  @media screen and (max-width: 320px) {
    width: 95%;
    /* height: 180px; */
  }
`;

const ImageHold = styled.div`
  height: 90px;
  width: 90px;
  background-color: red;
  border-radius: 50%;
  @media screen and (max-width: 425px) {
    width: 70px;
    height: 70px;
  }
`;


const NameText = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: 700;
`;

const WordDefintion = styled.div`
  font-size: 13px;
  margin-top: 20px;
  /* width: 400px; */
  // background-color: red;
  span{
    font-weight: 700;
  }
`;

const LikesDefinition = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const Likes = styled.div``;

const TextHolder = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

const Love = styled(FcLike)`
  margin-left: 10px;
  font-size: 25px;
  color: red;
`;

const Book = styled(BsBookmarkFill)`
  font-size: 25px;
  margin-right: 10px;
  color: red;
`;