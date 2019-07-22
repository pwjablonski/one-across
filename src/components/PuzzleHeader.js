import React from "react";
import "../css/App.css";
import { useSelector } from "react-redux";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  getCurrentPuzzleAuthor,
  getCurrentPuzzleDate,
  getCurrentPuzzleTitle,
  getCurrentSessionId
} from "../selectors";
import makeShareUrl from "../util/makeShareUrl";
import createMailToHref from "../util/createMailToHref";

export default function PuzzleHeader() {
  const author = useSelector(getCurrentPuzzleAuthor);
  const date = useSelector(getCurrentPuzzleDate);
  const title = useSelector(getCurrentPuzzleTitle);
  const sessionId = useSelector(getCurrentSessionId);
  const shareUrl = makeShareUrl(sessionId);
  const mailToHref = createMailToHref(shareUrl);

  return (
    <div className="puzzle_header">
      <div className="puzzle_header-details">
        <div className="puzzle_header-details-date">
          <span>{title}</span> {date}
        </div>
        <div className="puzzle_header-details-byline">
          The Daily Crossword <span>By {author}</span>
        </div>
      </div>
      <div className="puzzle_header-tools">
        <div className="puzzle_header-tools-button">
          <a href={mailToHref}>
            <FontAwesomeIcon icon={faShare} />
            <span>Share</span>
          </a>
        </div>
      </div>
    </div>
  );
}
