import React from "react";

import { files } from "./test-data";
import "./index.css";
import FileListItem from "./FileListItem";

export default function FileList() {
  return (
    <table>
      <tbody>
        {files.map((file) => (
          <tr className="file" key={file.id}>
            <FileListItem file={file} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
