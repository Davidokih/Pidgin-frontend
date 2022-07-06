import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";

const BioFill = () => {
  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);
  // const id = user?._id;
  // // console.log(user.token, id);

  // const navigate = useNavigate();

  const [image, setImage] = useState("/image/images.png");
  const [avatar, setAvatar] = useState("");

  // const formSchema = yup.object().shape({
  //   bio: yup.string(),
  //   gender: yup.string(),
  // });

  // const {
  //   register,
  //   reset,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(formSchema),
  // });

  const handleImage = (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);
    setAvatar(file);
  };

  // const onSubmit = handleSubmit(async (value) => {
  //   console.log(value);
  //   const { bio, gender } = value;
  //   const mainURL = "https://pidgin-backend.herokuapp.com";
  //   const url = `${mainURL}/pidgin/user/${id}`;

  //   const formData = new FormData();
  //   formData.append("bio", bio);
  //   formData.append("gender", gender);
  //   formData.append("avatar", avatar);

  //   const config = {
  //     "content-type": "multipart/form-data",
  //     onUploadProgress: (ProgressEvent) => {
  //       const { loaded, total } = ProgressEvent;
  //       const percent = Math.floor((loaded * 100) / total);
  //       console.log(percent);
  //     },
  //   };

  //   await axios.patch(url, formData, config).then((res) => {
  //     console.log("Error Data: ", res.data.data);
  //     dispatch(createUser(res.data.data));
  //   });

  //   navigate("/NewsFeedDashBoard");
  // });
  return (
    <Container>
      <Left>
        {" "}
        <LabelHolder>
          <Image htmlFor="pix">
            <img src={image} />
          </Image>
          <Input type="file" id="pix" onChange={handleImage} />
        </LabelHolder>
      </Left>
      <Right>
        <Holder>
          <LabelText>Bio:</LabelText>
          <BioInput placeholder="Enter your Bio" />
          <LabelText>Gender:</LabelText>
          <TotalHold>
            <Hold>
              <Inputs placeholder="Gender" />
              {/* <Text>Male</Text> */}
            </Hold>
            {/* <Hold>
              <Inputs type="checkbox" />
              <Text>Female</Text>
            </Hold>
            <Hold>
              <Inputs type="checkbox" />
              <Text>Others</Text>
            </Hold> */}
          </TotalHold>
          <NextButton type="submit">Next</NextButton>
          {/* <SkipButton to="/">Skip</SkipButton> */}
        </Holder>
      </Right>
    </Container>
  );
};

export default BioFill;

const SkipButton = styled(NavLink)`
  text-decoration: none;
  width: 99%;
  text-align: right;
  margin-top: 20px;
  font-weight: 600;
  font-size: 13px;
  opacity: 0.6;
  color: gray;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    opacity: 0.9;
  }

  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`;

const NextButton = styled.button`
  background-color: white;
  margin-top: 50px;
  font-weight: 500;
  color: gray;
  transition: all 350ms;
  transform: scale(1);
  border: 0;
  :hover {
    transform: scale(1.011);
    cursor: pointer;
    opacity: 0.9;
  }

  @media screen and (max-width: 655px) {
    margin-top: 25px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

const LabelText = styled.label`
  width: 99%;
  /* margin-right: 10px; */
  font-size: 12px;
  color: gray;
  text-align: left;
`;
const BioInput = styled.textarea`
  width: 97%;
  height: 90px;
  resize: none;
  outline: none;
  border-radius: 3px;
  padding-left: 5px;
  margin-bottom: 20px;
  border: 1px solid lightgray;
  color: rgba(0, 0, 0, 0.7);

  ::placeholder {
    opacity: 0.6;
    font-size: 12px;
  }
  :focus {
    outline: 2px solid rgb(76, 216, 250);
    border: none;
  }

  @media screen and (max-width: 768px) {
    height: 70px;
  }
  @media screen and (max-width: 425px) {
    height: 70px;
  }
`;

const Text = styled.div`
  font-weight: 600;
  color: gray;
  margin-left: 5px;
  font-size: 13px;
`;

const Inputs = styled.input`
  width: 200px;
  height: 30px;
  padding: 5px;
  outline: none;
  border-radius: 5px;
  border: 1px solid lightgray;
  color: rgba(0, 0, 0, 0.7);
  ::placeholder {
    opacity: 0.6;
    font-size: 12px;
  }
`;

const Hold = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const TotalHold = styled.div`
  width: 100%;
  display: flex;
  margin-top: 5px;
`;

const Holder = styled.div`
  width: 93%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: 15px;
    height: 220px;
  }

  @media screen and (max-width: 425px) and (min-width: 320px) {
    margin-top: 5px;
    height: 240px;
  }
`;

const Input = styled.input`
  display: none;
`;

const LabelHolder = styled.label``;

const Image = styled.div`
  width: 450px;
  height: 450px;
  object-fit: cover;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid rgb(214, 214, 214);
  }

  img:hover {
    cursor: pointer;
    transition: all 350ms;
    border: 3px solid lightblue;
  }
  @media screen and (max-width: 1024px) {
    width: 300px;
    height: 300px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      border: 3px solid rgb(214, 214, 214);
    }
  }
  @media screen and (max-width: 930px) {
    width: 250px;
    height: 250px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      border: 3px solid rgb(214, 214, 214);
    }
  }
  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      border: 3px solid rgb(214, 214, 214);
    }
  }
  @media screen and (max-width: 655px) {
    width: 180px;
    height: 180px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      border: 3px solid rgb(214, 214, 214);
    }
  }

  @media screen and (max-width: 425px) and (min-width: 320px) {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      border: 3px solid rgb(214, 214, 214);
    }
  }
`;

const Right = styled.div`
  width: 600px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 930px) {
    width: 500px;
    margin-left: 30px;
  }
  @media screen and (max-width: 826px) {
    width: 450px;
    margin-left: 30px;
  }
  @media screen and (max-width: 768px) {
    width: 430px;
    margin-left: 20px;
  }

  @media screen and (max-width: 655px) {
    width: 70%;
    height: 230px;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 90%;
    height: 220px;
    margin-left: 0px;
  }
`;

const Left = styled.div`
  width: 500px;
  height: 500px;
  margin-right: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    width: 300px;
    height: 200px;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 930px) {
    width: 200px;
    height: 200px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 655px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 425px) {
    width: 80%;
    height: 250px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 655px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
