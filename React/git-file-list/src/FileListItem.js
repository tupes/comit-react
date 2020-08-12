import React from "react";
import moment from "moment";

import FileName from "./FileName";

export default function FileListItem(props) {
  return (
    <>
      <td className="file-title">
        <FileName fileType={props.file.type} fileName={props.file.name} />
      </td>
      <td className="message">{props.file.latestCommit.message}</td>
      <td className="time">{moment(props.file.updated_at).fromNow()}</td>
    </>
  );
}
