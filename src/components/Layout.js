import React from "react";
import "../css/App.css";
import { Route } from "react-router-dom";
import Puzzle from "./Puzzle";
import TopBar from "./TopBar";
import UploadPuzzle from "./UploadPuzzle";

export default function Layout() {
  return (
    <>
      <TopBar />
      <Route exact path="/" component={UploadPuzzle} />
      <Route path="/:id" component={Puzzle} />
    </>
  );
}
