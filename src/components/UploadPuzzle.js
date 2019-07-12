import React, {useCallback} from 'react';
import '../css/App.css';
import {faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useDispatch, useSelector } from 'react-redux'
import {
  puzzleUploaded
} from '../actions'
import { getCurrentSessionId, isPuzzleDisplayed } from '../selectors';
import { Redirect } from "react-router-dom";
import {useDropzone} from 'react-dropzone'




export default function UploadPuzzle() {
  const dispatch = useDispatch();
  const currentSessionId = useSelector(getCurrentSessionId)
  const puzzleIsDisplayed = useSelector(isPuzzleDisplayed)

  const onDrop = useCallback(onUpload);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  
  function onUpload(file){
    dispatch(puzzleUploaded(file))
  }

  if (puzzleIsDisplayed) {
    return <Redirect to={`/${currentSessionId}`} />
  } 

  return (
    <div className="choosepuzzle">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <FontAwesomeIcon icon={faCloudUploadAlt} size="2x" />
              :
              <p>Drag a <strong> .puz </strong> file here to play!</p>
          }
        </div>
    </div>
  );

}
