import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profiles/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



const App = (props) => {



  return (
    <BrowserRouter>
      <div className="app-wrap">
        <Header />
        <Nav />
        <div className="app-wrap-content">
          <Routes>
            <Route path="/profile" element={<Profile state={props.state.profilePage} />} />
            <Route path="/dialogs/*" element={<Dialogs state={props.state.messagePage} />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
