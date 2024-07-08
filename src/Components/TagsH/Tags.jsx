import React from "react";
import "./Tags.css";

export default function Tags() {
  const Tags = [
    { id: 1, tagName: "Free Courses" },
    { id: 2, tagName: "Marketing" },
    { id: 3, tagName: "Idea" },
    { id: 4, tagName: "LMS" },
    { id: 5, tagName: "Learn Press" },
    { id: 5, tagName: "Instructor" },
  ];

  return (
    <>
      {/* <p className="SHaaban-remove-margin">Tags:</p> */}

      {Tags.map((tag) => {
        return (
          <>
            <span key={tag.id} className="SHaaban-tag-styling">
              {tag.tagName}
            </span>
          </>
        );
      })}
    </>
  );
}
