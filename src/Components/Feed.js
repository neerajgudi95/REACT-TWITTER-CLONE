import React, { useEffect, useState } from "react";
import "../CSS/Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "../firebase";
import FlipMove from "react-flip-move";

export const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
    // return () => {
    //   cleanup
    // }
  }, []);

  console.log("POSTS>>>", posts);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      {posts.map((post, idx) => (
        <FlipMove>
          <Post
            key={idx}
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />
        </FlipMove>
      ))}
    </div>
  );
};
