import React from "react";
import "../CSS/Widget.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterShareButton,
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";

const Widget = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widget__container">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId="1316835923867447297" />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="iamneerajgudi"
          options={{ height: 400 }}
        />
        <TwitterShareButton />
      </div>
    </div>
  );
};

export default Widget;
