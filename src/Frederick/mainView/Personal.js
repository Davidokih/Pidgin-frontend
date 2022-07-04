import React, { useEffect, useState } from "react";
import { BiNews } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { removePost } from "../../GlobalState/GlobalState";
import axios from "axios";
import moment from "moment";

const Personal = ({ props, fullName, avatar }) => {

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  // const post = useSelector((state) => state.post);

  // console.log(props._id);

  const [ data, setData ] = useState({});
  const [ toggle, setToggle ] = useState(true);

  const change = () => {
    setToggle(!toggle);
  };

  const getUser = async () => {

    const mainURL = "http://localhost:2008";
    const url = `${mainURL}/pidgin/user/${props.user}`;

    await axios.get(url).then((res) => {
      // console.log(res.data.data);
      setData(res.data.data);
    });
  };

  // console.log(data.avatar);

  const deleteUser = async () => {

    const mainURL = "http://localhost:2008";
    const url = `${mainURL}/pidgin/post/${user._id}/${props._id}`;

    await axios.delete(url).then((res) => {
      console.log(res.data.data);
      dispatch(removePost());
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <Container>
        <Holder>
          <ImageHold>
            { avatar ? (<Image src={ data?.avatar } alt="" />) : null }
          </ImageHold>
          <NameHolder>
            { fullName ? (<NameText>By: { data?.fullName }</NameText>) : null }
            <Time>Posted { moment(props.createdAt).fromNow() }</Time>
          </NameHolder>
          {/* { fullName ? (<Dots onClick={ change }>
            <BiNews />
          </Dots>) : null } */}
        </Holder>
        { !toggle ? (
          <Box>
            <EditPost to={ `/EditPost/${props._id}` }>EditPost</EditPost>
            <Line></Line>
            <DeletePost onClick={ deleteUser }>DeletePost</DeletePost>
          </Box>
        ) : null }
        {/* change ():() */ }
      </Container>
    </div>
  );
};

export default Personal;

const DeletePost = styled.div`
  font-size: 12px;
  color: gray;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    text-decoration: underline;
    transition: all 350ms;
  }
`;

const Line = styled.div`
  border: 1px solid lightgray;
  width: 30%;
  margin-top: 8px;
  margin-bottom: 8px;
`;
const EditPost = styled(NavLink)`
  font-size: 12px;
  color: gray;
  cursor: pointer;
  transition: all 350ms;
  text-decoration: none;
  tex :hover {
    transition: all 350ms;
    text-decoration: underline;
  }
`;

const Box = styled.div`
  width: 110px;
  height: 80px;
  position: absolute;
  margin-right: -490px;
  margin-top: -60px;
  border-radius: 20px 20px 20px 0px;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 8);
  align-items: center;
  justify-content: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  @media screen and (max-width: 425px) {
    width: 100px;
    height: 80px;
    margin-right: -215px;
    margin-top: -60px;
    border-radius: 20px 20px 0px 20px;
  }
  @media screen and (max-width: 375px) and (min-width: 320px) {
    width: 100px;
    height: 75px;
    margin-right: -160px;
    margin-top: -60px;
    border-radius: 20px 20px 0px 20px;
  }
`;

const Dots = styled.div`
  width: 40px;
  height: 40px;
  /* background-color: gray; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  position: relative;
  cursor: pointer;
  @media screen and (max-width: 425px) {
    width: 30px;
    height: 30px;
  }
  @media screen and (max-width: 375px) and (min-width: 320px) {
    width: 30px;
    height: 30px;
  }
`;

const Time = styled.div`
  font-size: 11px;
  color: gray;
  font-weight: 600;
  font-family: consolas;
`;

const NameText = styled.div`
  font-weight: 700;
  font-family: cursive;
  width: 200px;
  height: 45px;
  @media screen and (max-width: 375px) and (min-width: 320px) {
    font-size: 13px;
  }
`;

const NameHolder = styled.div`
  width: 200px;
  height: 45px;
  /* background-color: white; */
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  @media screen and (max-width: 375px) and (min-width: 320px) {
    width: 150px;
    height: 35px;
    margin-left: 10px;
    /* flex: 0; */
  }
`;

const ImageHold = styled.div`
  height: 55px;
  width: 55px;
  background-color: red;
  border-radius: 200px;
  /* margin-top: -30px; */
  /* margin-right: -30px; */
  @media screen and (max-width: 375px) and (min-width: 320px) {
    height: 45px;
    width: 45px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
`;

const Holder = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* background-color: aqua; */
  padding: 7px;
  @media screen and (max-width: 425px) {
    width: 350px;
  }
  @media screen and (max-width: 375px) and (min-width: 320px) {
    width: 290px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
