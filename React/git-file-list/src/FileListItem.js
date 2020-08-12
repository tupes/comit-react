import React from "react";
import moment from "moment";

import FileName from "./FileName";

export default function FileListItem({ file }) {
  return (
    <>
      <td className="file-title">
        <FileName fileType={file.type} fileName={file.name} />
      </td>
      <td className="message">{file.latestCommit.message}</td>
      <td className="time">{moment(file.updated_at).fromNow()}</td>
    </>
  );
}
