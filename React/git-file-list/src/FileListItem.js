import React from "react";

import FileName from "./FileName";
import CommitMessage from "./CommitMessage";
import Time from "./Time";

export default function FileListItem({ file }) {
  return (
    <>
      <FileName name={file.name} type={file.type} />
      <CommitMessage message={file.latestCommit.message} />
      <Time time={file.updated_at} />
    </>
  );
}
