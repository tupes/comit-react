import React from "react";

export default function FileName(props) {
  return (
    <>
      <i
        className={`fa ${
          props.fileType === "folder" ? "fa-folder" : "fa-file-text-o"
        }`}
      />
      <span className="file-name">{props.fileName}</span>
    </>
  );
}
