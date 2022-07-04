import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Confirm from "./Confirm";
import Hero from "./Hero/Hero";
import NewsFeedDashBoard from "./DashBoard/NewsFeedDashBoard";
import Profile from "./DashBoard/Profile";
import Saved from "./DashBoard/Saved";
import Post from "./DashBoard/Post";
import Notes from "./DashBoard/Notes";
import UserSignUp from "./UserSignUp";
import UserSignIn from "./UserSignIn";
import AuthRegister from "./AuthRegister";
import MainView from "./mainView/MainView";
import EditProfile from "./DashBoard/EditProfile";
import EditPost from "./DashBoard/EditPost";
import DetailPage from "./mainView/DetailPage";
import Personal from "./mainView/Personal";
import BioFill from "./BioFill";
import Private from './Private';

const DisplayPidgin = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <MainView /> } />
          <Route path="/detail/:id" element={ <Private>
            <DetailPage />
          </Private> } />
          <Route path="/Personal" element={ <Private>
            <Personal />
          </Private> } />
          <Route path="/" element={ <Hero /> } />

          <Route path="/UserSignUp" element={ <UserSignUp /> } />
          <Route path="/Confirm" element={ <Confirm /> } />
          <Route path="/auth/:id/:token" element={ <AuthRegister /> } />
          <Route path="/UserSignIn" element={ <UserSignIn /> } />

          <Route path="/BioFill" element={ <Private>
            <BioFill />
          </Private> } />
          <Route path="/NewsFeedDashBoard" element={ <Private>
            <NewsFeedDashBoard />
          </Private> } />
          <Route path="/Saved" element={ <Saved /> } />
          <Route path="/EditProfile" element={ <Private>
            <EditProfile />
          </Private> } />
          <Route path="/EditPost/:id" element={ <Private>
            <EditPost />
          </Private> } />
          <Route path="/Notes" element={ <Notes /> } />
          <Route path="/Post" element={ <Private>
            <Post />
          </Private> } />
          <Route path="/Profile" element={ <Private>
            <Profile />
          </Private> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default DisplayPidgin;
