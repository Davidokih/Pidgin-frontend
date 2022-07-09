import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillHome, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LikeComp = ({ props, like }) => {
  const user = useSelector((state) => state.user);
  const myPost = useSelector((state) => state.myPost);
  const [ postData, setPostData ] = useState([]);

  const likePost = async (id) => {
    const localURL = "https://pidgin-backend.herokuapp.com";

    const url = `${localURL}/pidgin/like/${user._id}/${id}/`;

    await axios.post(url).then((res) => {
      setPostData(res.data.data);
    });
  };
  // console.log(user._id);

  const dislikePost = async (id) => {
    const localURL = "https://pidgin-backend.herokuapp.com";

    const url = `${localURL}/pidgin/like/${user._id}/${id}/`;

    await axios.delete(url).then((res) => {
      setPostData(res.data.data);
    });
  };
  return (
    <Container>
      { user ? (<Like>
        <span>{ props.like.includes(user._id) ? (
          <LoveIcon1
            onClick={ () => {
              dislikePost(props._id);
              window.location.reload();
            } }
          />
        ) : (
          <LoveIcon
            onClick={ () => {
              likePost(props._id);
              window.location.reload();
            } }
          />
        ) }</span>{ props.like.length }
      </Like>) : (<Like>
        <Link to="/UserSignUp" style={ { textDecoration: "none" } }>
          <span>Likes</span>{ props.like.length }
        </Link>
      </Like>) }
      {/* <Mid></Mid> */ }
      {/* <DisLike>
        <span>R</span>200
      </DisLike> */}
    </Container>
  );
};

export default LikeComp;

const LoveIcon1 = styled(AiFillHeart)`
	font-size: 30px;
	transition: all 350ms;
	color: gray;
	margin-right: 20px;
	color: red;
	:hover {
		cursor: pointer;
		color: silver;
	}
`;

const LoveIcon = styled(AiOutlineHeart)`
	font-size: 30px;
	transition: all 350ms;
	color: gray;
	margin-right: 20px;
	:hover {
		cursor: pointer;
		color: silver;
	}
`;

const DisLike = styled.div`
  width: 65px;
  height: 100%;
  border-left: 1px solid rgb(214, 214, 214);
  border-radius: 0px 50px 50px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 350ms;
  color: rgba(0, 0, 0, 0.8);
  span {
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    margin-right: 5px;
  }
  :hover {
    background-color: rgb(214, 214, 214);
  }
`;
const Like = styled.div`
  width: 130px;
  height: 100%;
  border-radius: 50px ;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 350ms;
  color: rgba(0, 0, 0, 0.8);
  span {
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    margin-right: 5px;
  }
  /* :hover {
    background-color: rgb(214, 214, 214);
  } */
`;

const Container = styled.div`
  width: 130;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;
