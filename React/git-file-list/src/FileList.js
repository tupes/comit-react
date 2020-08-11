import React from "react";

import { files } from "./test-data";
import "./index.css";
import FileListItem from "./FileListItem";

export default function FileList() {
  return (
    <table className="file-list">
      <tbody>
        {files.map((file) => (
          <tr key={file.id}>
            <FileListItem file={file} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
