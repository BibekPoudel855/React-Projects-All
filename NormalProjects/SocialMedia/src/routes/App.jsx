import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import SideBar from "./../components/SideBar";
import CreatePost from "./../components/CreatePost";
import PostList from "./../components/PostLists";
import { PostListProvider } from "./../store/PostsListStore";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <PostListProvider>
    <div className="wholeAppContainer">
      <SideBar />
      <div className="mainBodyContainer">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
    </PostListProvider>
  );
}
export default App;