import React from "react";
import styled from "styled-components";
import LikeComp from "./LikeComp";
import DisplayHead from "../DisplayHead/DisplayHead";

const NewsFeed = () => {
  return (
    <>
      <Container>
        <SideBar>
          <ContentHolder>
            <NavImage src="/image/images.png" />
            <span>Frederick</span>
          </ContentHolder>
          <MiddleNav>
            <Navs>
              <span>I</span>NewsFeed
            </Navs>
            <Navs>
              <span>I</span>AddWord
            </Navs>
            <Navs>
              <span>I</span>Dictionary
            </Navs>
            <Navs>
              <span>I</span>Profile
            </Navs>
            <Navs>
              <span>I</span>Account Settings
            </Navs>
          </MiddleNav>
          <LogoutButton>
            <span>I</span>Logout
          </LogoutButton>
        </SideBar>
        <MainView>
          <Header>
            <DisplayHead />
          </Header>
          <CardHold>
            <Card>
              <Top2>
                <CardWord>How Far</CardWord>
                <CardPersonalDetails>
                  <PersonalName>Frederick</PersonalName>
                  <PersonalImage src="/image/images.png" />
                </CardPersonalDetails>
              </Top2>
              <Middle>
                <CardWordDefinition>
                  Aenean massa. Praesent porttitor, nulla vitae posuere iaculis,
                  arcu nisl dignissim dolor, a pretium mi sem ut ipsum.
                  Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id,
                  metus. In dui magna, posuere eget, vestibulum et, tempor
                  auctor, justo. Quisque id mi. Nulla neque dolor, sagittis
                  eget, iaculis quis, molestie non, velit.
                </CardWordDefinition>
                <CardWordSentence>
                  She asked how you were doing
                </CardWordSentence>
                <CardWordSentence2>
                  my gee <span>how far</span>, make I follow you
                </CardWordSentence2>
              </Middle>
              <Bottom>
                <LikeHolder>
                  <LikeComp />
                </LikeHolder>
                <MoreOptions>dots</MoreOptions>
              </Bottom>
            </Card>
            <Card>
              <Top2>
                <CardWord>Wetin</CardWord>
                <CardPersonalDetails>
                  <PersonalName>David</PersonalName>
                  <PersonalImage src="/image/images.png" />
                </CardPersonalDetails>
              </Top2>
              <Middle>
                <CardWordDefinition>
                  Aenean massa. Praesent porttitor, nulla vitae posuere iaculis,
                  arcu nisl dignissim dolor, a pretium mi sem ut ipsum.
                  Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id,
                  metus. In dui magna, posuere eget, vestibulum et, tempor
                  auctor, justo. Quisque id mi. Nulla neque dolor, sagittis
                  eget, iaculis quis, molestie non, velit.
                </CardWordDefinition>
                <CardWordSentence>
                  She asked how you were doing
                </CardWordSentence>
                <CardWordSentence2>
                  my gee <span>how far</span>, make I follow you
                </CardWordSentence2>
              </Middle>
              <Bottom>
                <LikeHolder>
                  <LikeComp />
                </LikeHolder>
                <MoreOptions>dots</MoreOptions>
              </Bottom>
            </Card>
            <Card>
              <Top2>
                <CardWord>Una well done</CardWord>
                <CardPersonalDetails>
                  <PersonalName>Precious</PersonalName>
                  <PersonalImage src="/image/images.png" />
                </CardPersonalDetails>
              </Top2>
              <Middle>
                <CardWordDefinition>
                  Aenean massa. Praesent porttitor, nulla vitae posuere iaculis,
                  arcu nisl dignissim dolor, a pretium mi sem ut ipsum.
                  Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id,
                  metus. In dui magna, posuere eget, vestibulum et, tempor
                  auctor, justo. Quisque id mi. Nulla neque dolor, sagittis
                  eget, iaculis quis, molestie non, velit.
                </CardWordDefinition>
                <CardWordSentence>
                  She asked how you were doing
                </CardWordSentence>
                <CardWordSentence2>
                  my gee <span>how far</span>, make I follow you
                </CardWordSentence2>
              </Middle>
              <Bottom>
                <LikeHolder>
                  <LikeComp />
                </LikeHolder>
                <MoreOptions>dots</MoreOptions>
              </Bottom>
            </Card>
          </CardHold>
        </MainView>
      </Container>
    </>
  );
};

export default NewsFeed;

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
    position: fixed;
    top: 0;
    z-index: 100;
  }
`;

const MoreOptions = styled.div`
  color: gray;
  font-weight: 600;
  cursor: pointer;
  transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(1.012);
  }
`;

const LikeHolder = styled.div`
  width: 130px;
  height: 45px;
  border-radius: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(214, 214, 214);
`;

const Bottom = styled.div`
  width: 90%;
  height: 60px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardWordSentence2 = styled.div`
  font-style: italic;
  margin-bottom: 10px;
  span {
    font-weight: 600;
    text-decoration: underline;
  }
`;
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

const CardHold = styled.div`
  width: 85%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-bottom: 20px;
    height: calc(100vh - 200px);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    height: calc(100vh - 200px);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

const MainView = styled.div`
  margin-left: 250px;
  width: 65%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 0px;
    padding-right: 0px;
    padding-left: 0px;
    margin-left: 0px;
  }
`;

const LogoutButton = styled.div`
  width: 100%;
  height: 55px;
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

const Navs = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
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
`;
