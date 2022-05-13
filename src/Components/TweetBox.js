import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "../CSS/Tweetbox.css";
import db from "../firebase";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    if (!tweetMessage) return;
    db.collection("posts").add({
      displayName: "Neeraj Gudi",
      userName: "iamneerajgudi",
      verified: true,
      text: tweetMessage,
      avatar:
        "https://lh3.googleusercontent.com/ogw/ADGmqu_mylSztXwhLfcfDzjWYh15B7yTfgWlwgs8nW-Ihg=s83-c-mo",
    });

    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu_mylSztXwhLfcfDzjWYh15B7yTfgWlwgs8nW-Ihg=s83-c-mo" />
          <input
            type="text"
            value={tweetMessage}
            placeholder="What's happening?"
            onChange={(e) => setTweetMessage(e.target.value)}
          />
          {/* <input placeholder="Post an image" /> */}
        </div>
        <Button
          onClick={sendTweet}
          className="tweetBoc__tweetBtn"
          disabled={!tweetMessage}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
