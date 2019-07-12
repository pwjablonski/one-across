import React from 'react';
import '../css/App.css';
import { useSelector } from 'react-redux'
import {
  getCurrentPuzzleAuthor,
  getCurrentPuzzleDate,
  getCurrentPuzzleTitle,
} from '../selectors'

export default function PuzzleHeader() {
  const author = useSelector(getCurrentPuzzleAuthor);
  const date = useSelector(getCurrentPuzzleDate);
  const title = useSelector(getCurrentPuzzleTitle);

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
        <div className="puzzle_header">

        </div>
    </div>
  );
}