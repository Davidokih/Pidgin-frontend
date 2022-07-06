import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FcLike } from "react-icons/fc";
import { BsBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Personal from "./Personal";
import Header from "./Header";
import { createUser, createbio, signOut, addSaved, createPost } from "../../GlobalState/GlobalState";
import { useSelector, useDispatch } from "react-redux";
// import Rectangle from ""
import axios from "axios";

const MainView = () => {

  const dispatch = useDispatch();

  const newUser = useSelector(state => state.user);
  const myPost = useSelector((state) => state.testPost);
  const myBio = useSelector((state) => state.bio);
  // const Definition = useSelector((state) => state.definitions);
  // console.log(myPost._id);

  const [ toggle, setToggle ] = useState(true);
  const [ searchData, setSearchData ] = useState([]);


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
  const [ postData, setPostData ] = useState([]);
  const getPost = async () => {

    const mainURL = "https://pidgin-backend.herokuapp.com";
    const url = `${mainURL}/pidgin/post`;

    await axios.get(url).then((res) => {
      setPostData(res.data.data);
      // dispatch(createPost(res.data.data));
      console.log(res.data.data);
    });;
  };
  const [ inputValue, setInputValue ] = useState('');
  const getWord = async (query) => {
    try {

      setInputValue(query);
      if (!query) {
        return;
      }

      await axios.get(`http://localhost:2008/pidgin/post/word?search=${inputValue}`).then((result) => {
        console.log('this is the search word', result.data);
        setSearchData(result.data);
      });

    } catch (error) {
      console.log('this is erro in search data');
    }

  };
  console.log(postData);


  useEffect(() => {
    getPost();
    getWord();
  }, []);

  return (
    <div>
      <Header />
      <TotalHolder>
        <LeftWrapper>
          <SearchHolder>
            <Input placeholder="Search " onChange={ (e) => { getWord(e.target.value); } } />
          </SearchHolder>

          {
            inputValue ? (
              <div>

                {
                  searchData.map((props) => (
                    <Card key={ props._id }>
                      <ContentHolder>
                        <Word>Word:</Word>
                        <Text>{ props.word }</Text>
                        <Word>Definition:</Word>
                        <Text>
                          <div>{ props.definition.map((data) => (
                            <div key={ data._id }>
                              <div>{ data.meaning }</div>
                            </div>
                          )) }</div>
                        </Text>
                        <Word>Sentence:</Word>
                        <Text>
                          { props.useCase }
                        </Text>
                      </ContentHolder>

                    </Card>
                  ))
                }
              </div>
            ) : (
              <div>
                {
                  postData.map((props) => (
                    <Card key={ props._id }>
                      <ContentHolder>
                        <Word>Word:</Word>
                        <Text>{ props.word }</Text>
                        <Word>Definition:</Word>
                        <Text>
                          <div>{ props.definition.map((data) => (
                            <div key={ data._id }>
                              <div>{ data.meaning }</div>
                            </div>
                          )) }</div>
                        </Text>
                        <Word>Sentence:</Word>
                        <Text>
                          { props.useCase }
                        </Text>
                      </ContentHolder>

                    </Card>
                  ))
                }
              </div>)
          }
          {/* <MostHolder>
            <WordOfDay>Words Of The Day</WordOfDay>
            <MostTrend>Most Trends</MostTrend>
          </MostHolder> */}
        </LeftWrapper>
        <RightWrapper>

          {
            inputValue ? (
              <div>

                {
                  searchData.map((props) => (
                    <Card key={ props._id }>
                      <ContentHolder>
                        <Word>Word:</Word>
                        <Text>{ props.word }</Text>
                        <Word>Definition:</Word>
                        <Text>
                          <div>{ props.definition.map((data) => (
                            <div key={ data._id }>
                              <div>{ data.meaning }</div>
                            </div>
                          )) }</div>
                        </Text>
                        <Word>Sentence:</Word>
                        <Text>
                          { props.useCase }
                        </Text>
                      </ContentHolder>

                    </Card>
                  ))
                }
              </div>
            ) : (
              <div>
                {
                  postData.map((props) => (
                    <Card key={ props._id }>
                      <ContentHolder>
                        <Word>Word:</Word>
                        <Text>{ props.word }</Text>
                        <Word>Definition:</Word>
                        <Text>
                          <div>{ props.definition.map((data) => (
                            <div key={ data._id }>
                              <div>{ data.meaning }</div>
                            </div>
                          )) }</div>
                        </Text>
                        <Word>Sentence:</Word>
                        <Text>
                          { props.useCase }
                        </Text>
                      </ContentHolder>

                    </Card>
                  ))
                }
              </div>)
          }
        </RightWrapper>
      </TotalHolder>
    </div>
  );
};

export default MainView;

const Icons = styled.div`
  width: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
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
const RightWrapper = styled.div`
  width: 550px;
  height: auto;
  margin-top: 40px;
  margin-left: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* background-color: white; */
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    margin-left: 0;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 375px) and (min-width: 320px) {
    width: 100%;
    margin-left: 0;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MostTrend = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  font-family: cursive;
  transition: all 350ms;
  transform: scale(1);
  :hover {
    cursor: pointer;
    transform: scale(1.025);
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: rgba(0, 0, 0, 0.8);
  }
`;

const WordOfDay = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  font-family: cursive;
  transition: all 350ms;
  transform: scale(1);
  :hover {
    cursor: pointer;
    transform: scale(1.025);
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: rgba(0, 0, 0, 0.8);
  }
`;

const MostHolder = styled.div`
  width: 90%;
  height: 40px;
  /* background-color: white; */
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 90%;
  height: 100%;
  outline: none;
  border-radius: 4px;
  padding-left: 5px;
  border: 1px solid lightgray;

  ::placeholder {
    opacity: 0.8;
    font-size: 13px;
  }
  :focus {
    outline: 2px solid rgb(76, 216, 250);
    border: none;
  }
`;

const SearchHolder = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftWrapper = styled.div`
  width: 350px;
  height: 100vh;
  /* background-color: lightgray; */
  position: sticky;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    /* display: no */
  }
`;

const TotalHolder = styled.div`
  width: 100%;
  height: auto;
  /* background-color: gray; */
  padding-top: 50px;
  padding-bottom: 80px;

  @media (max-width: 768px){
    display: flex;
    /* flex-direction: row-reverse; */
  }
`;
