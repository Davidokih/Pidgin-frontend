import React, { useEffect } from "react";
import styled from "styled-components";
import { BiNews } from "react-icons/bi";
import { BsBook, BsPlusCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import DisplayMenu from "./DisplayMenu";
// import { createUser } from '../Frederick/GlobalState/Global';

const DisplayHead = () => {
  // const dispatch = useDispatch();

  // const user = useSelector((state) => state.user);

  // const getUser = () => {

  //   const mainURL = "http://localhost:2008";
  //   const url = `${mainURL}/pidgin/user/${user._id}`;

  //   await axios.get(url).then((res) => {
  //     dispatch(createUser());
  //   });
  // };

  // useEffect(() => {
  //   getUser();
  // }, []);
  return (
    <>
      <Container>
        <MainView>
          <Header>
            <HeaderImg>
              <img src="/image/images.png" alt="" />
              <HeadText>
                <span>Precious</span>
              </HeadText>
            </HeaderImg>
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
        </MainView>
      </Container>
      <SideMenu id="display">
        <DisplayMenu />
      </SideMenu>
    </>
  );
};

export default DisplayHead;

const CancleIcon = styled(FaTimes)`
  font-size: 30px;
  display: none;
`;
const BarIcon = styled(FaBars)`
  font-size: 30px;
`;
const SideMenu = styled.div`
  width: 300px;
  height: 650px;
  background-color: #f1f1f1;
  position: fixed;
  top: -3000px;
  z-index: 1;
  transition: all 2s ease;
`;
const BurgerLink = styled.div`
  width: 30px;
  height: 30px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
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
  width: 140px;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin: 5px;
    border: 1px solid rgb(214, 214, 214);
  }
  /* @media screen and (max-width: 425px) {
    width: 220px;
  } */
`;

const Header = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 70px;
    background-color: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
  }
`;

const MainView = styled.div`
  margin-left: 160px;
  width: 85%;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 20px;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-top: 0px;
    padding-right: 0px;
    padding-left: 0px;
    padding-bottom: 20px;
    margin-left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  background: white;
  font-family: Poppins;
`;
