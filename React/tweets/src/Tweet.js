import React from "react";

import "./index.css";
import Avatar from "./Avatar";
import Author from "./Author";
import Time from "./Time";
import Message from "./Message";
import ReplyButton from "./ReplyButton";
import RetweetButton from "./RetweetButton";
import LikeButton from "./LikeButton";
import MoreOptionsButton from "./MoreOptionsButton";

export const Tweet = () => {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <div>
          <Author />
          <Time />
        </div>

        <Message />

        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
};
