import React from "react";
import styled from "styled-components";
// import logo from "./mainLogo.png";
import { useNavigate, NavLink } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";

const UserSignin = () => {

  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const formSchema = yup.object().shape({
    fullName: yup.string().required("This field cannot be empty"),
    email: yup.string().email().required("This field cannot be empty"),
    password: yup.string().required("This field cannot be empty"),
    confirm: yup
      .string()
      .oneOf([ yup.ref("password"), null ], "Password must match"),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = handleSubmit(async (value) => {
    console.log(value);
    const { email, password, fullName } = value;
    const mainURL = "https://pidgin-backend.herokuapp.com";
    const url = `${mainURL}/pidgin/user/register`;

    await axios.post(url, { fullName, email, password }).then((res) => {
      console.log(res.data.data);
      // dispatch(createUser(res.data.data));
    });

    navigate("/Confirm");
  });

  return (
    <Container>
      <Wrapper>
        <Card1>
          <InnerCard1>
            <ImageHold>
              <Logo src="/WhatsApp_Image_2022-07-04_at_1.31.10_PM-removebg-preview.png" />
              <span>PIDGIN</span>
            </ImageHold>
            <Text>Enter Make U See Beta Pidgin Words And Wetin E Mean</Text>
            <Text2>
              Abi you don get before?
              <HoldLink to="/UserSignIn">
                <span>Sign in</span>
              </HoldLink>
            </Text2>
          </InnerCard1>
        </Card1>
        <Card2 onSubmit={ onSubmit } >
          <HeadText>Make You Create Your Account</HeadText>
          <Label>
            <LabelText>Enter Username:</LabelText>
            {/* <Error>{ errors.message && errors?.message.fullName }</Error> */ }
            <Inputs placeholder="Precious" { ...register("fullName") } />
          </Label>
          <Label>
            <LabelText>Enter your email:</LabelText>
            {/* <Error>{ errors.message && errors?.message.email }</Error> */ }
            <Inputs placeholder="test@gmail.com" { ...register("email") } />
          </Label>
          <Label>
            <LabelText>Enter your password:</LabelText>
            {/* <Error>{ errors.message && errors?.message.password }</Error> */ }
            <Inputs
              placeholder="6+ characters"
              type="password"
              { ...register("password") }
            />
          </Label>
          <Label>
            <LabelText>Confirm your password:</LabelText>
            {/* <Error>{ errors.message && errors?.message.confirm }</Error> */ }
            <Inputs
              placeholder="6+ characters"
              type="password"
              { ...register("confirm") }
            />
          </Label>
          {/* <HoldLink2 to=""> */ }
          <Submit type="submit">Sign Up</Submit>
          {/* </HoldLink2> */ }
          <Text3>
            Abi you don get before?
            <HoldLink to="/UserSignIn">
              <span>Sign In</span>
            </HoldLink>
          </Text3>
        </Card2>
      </Wrapper>
    </Container>
  );
};

export default UserSignin;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) and (min-width: 300px) {
    width: 100%;
    min-height: 100vh;
  }
  /* @media screen and (max-width: 425px) and (min-width: 300px) {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    padding: 0;
  } */
`;

const Wrapper = styled.div`
  width: 750px;
  height: 500px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  @media screen and (max-width: 1024px) and (min-width: 768px) {
    width: 410px;
    height: 500px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 766px) and (min-width: 300px) {
    width: 350px;
    height: 500px;
    background-color: grey;
    border-radius: 5px;
    box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Text3 = styled.div`
  display: none;
  @media screen and (max-width: 1024px) and (min-width: 300px) {
    width: 70%;
    display: flex;
    font-weight: 400;
    color: black;
    font-size: 13px;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    /* margin: 20px 0px 0px 30px; */
    span {
      font-size: 13px;
      font-weight: 500;
      margin-left: 2px;
      color: blue;
      cursor: pointer;
    }
  }
`;

const HoldLink2 = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;
const HoldLink = styled(NavLink)`
  text-decoration: none;
`;

const Text2 = styled.div`
  width: 180px;
  display: flex;
  font-weight: 250;
  flex-direction: column;
  color: white;
  font-size: 13px;
  margin: 100px 0px 0px 20px;
  text-decoration: none;
  span {
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    color: white;
  }
`;

const Text = styled.div`
  width: 250px;
  display: flex;
  font-weight: 600;
  flex-direction: column;
  color: white;
  font-size: 20px;
  margin: 15px 0px 0px 20px;
`;
const ImageHold = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  span {
    height: 70px;
    display: flex;
    align-items: flex-end;
    font-size: 20px;
    font-weight: bold;
    color: white;
  }
`;
const Logo = styled.img`
 width: 65px;
  height: 70px;
  /* background-color: red; */
  object-fit: cover;
  margin: 20px 0px 0px 20px;
  border-radius: 3px;
`;

const InnerCard1 = styled.div`
  width: 300px;
  height: 70%;
  background-color: white;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Card1 = styled.div`
  background-image: url("/image/Shadow-Fall-Background.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: black;
  width: 375px;
  height: 100%;
  border-radius: 5px 0px 0px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1024px) and (min-width: 300px) {
    display: none;
  }
`;

const Submit = styled.button`
  width: 80%;
  height: 40px;
  border: none;
  background-color: #0074f8;
  border-radius: 3px;
  color: white;
  margin: 20px 0px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(1.015);
    cursor: pointer;
    opacity: 0.9;
  }
`;

const Inputs = styled.input`
  width: 98%;
  height: 55%;
  outline: none;
  border-radius: 3px;
  padding-left: 5px;
  border: 1px solid lightgray;

  ::placeholder {
    opacity: 0.6;
    font-size: 12px;
  }
  :focus {
    outline: 2px solid rgb(76, 216, 250);
    border: none;
  }
`;

const Error = styled.div`
  color: red;
  font-weight: 500;
  font-size: 12px;
`;

const LabelText = styled.label`
  width: 100%;
  /* margin-right: 10px; */
  font-size: 12px;
  color: gray;
  text-align: left;
`;

const Label = styled.div`
  width: 80%;
  height: 60px;
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  span {
    color: red;
    font-size: 12px;
  }
`;

const HeadText = styled.div`
  margin: 30px 0px;
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const Card2 = styled.form`
  width: 375px;
  height: 100%;
  background-color: white;
  border-radius: 0px 5px 5px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1024px) and (min-width: 300px) {
    width: 360px;
    height: 100%;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
  }
`;
