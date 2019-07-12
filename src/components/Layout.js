import React from 'react';
import '../css/App.css';
import Puzzle from './Puzzle';
import TopBar from './TopBar';
import UploadPuzzle from './UploadPuzzle'
import {Route} from "react-router-dom";


export default function Layout() {
  return (
    <>
      <TopBar/>
      <Route exact path="/" component={UploadPuzzle}/>
      <Route path="/:id" component={Puzzle} />
    </>
  );
}
