import { BrowserRouter, Routes, Route, } from "react-router-dom";
import {LoginPage} from '../pages/LoginPage/LoginPage'
import {SignUp} from '../pages/SignUp/SignUp'
import { Header } from "../components/Header/Header";
import { PostsPage } from './../pages/PostsPage/PostsPage';
import { CommentsPage } from "../pages/CommentsPage/CommentsPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route 
          path="/cadastrar" 
          element={(
            <>
              <Header/>
              <SignUp />
            </>
          )} 
        />
        <Route
          path="/posts"
          element={
            <>
              <Header/>
              <PostsPage />
            </>
          } 
        />
        <Route
          path="/posts/:postId"
          element={
            <>
              <Header/>
              <CommentsPage/>
            </>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
};