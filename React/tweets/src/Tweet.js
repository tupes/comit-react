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
  const tweet = {
    message: "Something about cats",
    gravatar: "xyz",
    author: {
      handle: "catperson",
      name: "IAMA Cat Person",
    },
    likes: 8,
    retweets: 4,
    timestamp: "2016-07-30 21:24:37",
  };

  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <div>
          <Author author={tweet.author} />
          <Time time={tweet.timestamp} />
        </div>

        <Message message={tweet.message} />

        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
};
