import React, { useEffect, useState } from "react";
import { BiNews } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { removePost } from "../../GlobalState/GlobalState";
import axios from "axios";
import moment from "moment";

const PersonalDisplay = ({ props, fullName, avatar }) => {

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  // const post = useSelector((state) => state.post);

  // console.log(props._id);

  const [ data, setData ] = useState({});
  const [ toggle, setToggle ] = useState(true);
  // const [ user, setUser ] = useState({});

  const change = () => {
    setToggle(!toggle);
  };

  const getUser = async () => {

    const mainURL = "https://pidgin-backend.onrender.com";
    const url = `${mainURL}/pidgin/user/${props.user}`;

    await axios.get(url).then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
    });
  };
  console.log(props.user);

  // const getUserInfo = async () => {
  //   const localURL = "https://pidgin-backend.onrender.com";

  //   const url = `${localURL}/pidgin/user/${props.user}`;
  //   await axios.get(url).then((res) => {
  //     setUser(res.data.data);
  //   });
  // };

  // console.log(data);

  // console.log(data.fullName);

  const deleteUser = async () => {

    const mainURL = "https://pidgin-backend.onrender.com";
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
    <Container>
      <CardPersonalDetails>
        { fullName ? (<PersonalName>{ data?.fullName }</PersonalName>) : null }
        { avatar ? (<PersonalImage src={ data?.avatar } alt="" />) : null }
      </CardPersonalDetails>
      {/* { !toggle ? (
                  <Box>
                      <EditPost to={ `/EditPost/${props._id}` }>EditPost</EditPost>
                      <Line></Line>
                      <DeletePost onClick={ deleteUser }>DeletePost</DeletePost>
                  </Box>
              ) : null } */}
    </Container>
  );
};

export default PersonalDisplay;

const Container = styled.div``;
const PersonalImage = styled.img`
  width: 40px;
  height: 40px;
  border: 1px solid rgb(214, 214, 214);
  border-radius: 50%;
  margin-left: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;

  @media screen and (max-width: 425px) {
    width: 35px;
    height: 35px;
  }
  @media screen and (max-width: 320px) {
    width: 30px;
    height: 30px;
  }
`;

const PersonalName = styled.div`
  font-weight: 600;
  font-size: 16px;

  @media screen and (max-width: 425px) {
    font-size: 14px;
    font-weight: 600;
  }
  @media screen and (max-width: 320px) {
    font-size: 13px;
    font-weight: 600;
  }
`;

const CardPersonalDetails = styled.div`
  /* width: 150px; */
  height: 90%;
  display: flex;
  align-items: center;
`;