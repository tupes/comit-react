import React from "react";

import { files } from "./test-data";
import "./index.css";
import FileListItem from "./FileListItem";

export default function FileList() {
  const rows = [];
  for (let file of files) {
    rows.push(
      <tr className="file" key={file.id}>
        <FileListItem file={file} />
      </tr>
    );
  }

  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
}
