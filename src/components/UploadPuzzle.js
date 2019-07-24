import React, { useCallback } from "react";
import "../css/App.css";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { useDropzone } from "react-dropzone";
import { puzzleUploaded } from "../actions";

export default function UploadPuzzle() {
  const dispatch = useDispatch();

  function onUpload(file) {
    dispatch(puzzleUploaded(file));
  }

  const onDrop = useCallback(onUpload);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <FontAwesomeIcon icon={faCloudUploadAlt} size="2x" />
      ) : (
        <p>
          Click or drag a <strong> .puz </strong> file here to play!
        </p>
      )}
    </div>
  );
}
