import React, { useState } from "react";
import "./TweetBox.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import db from "../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    db.collection("posts").add({
      getDisplayName: "Guest",
      userName: "@guest",
      verified: true,
      text: tweetMessage,
      avatar:
        "https://image.shutterstock.com/image-vector/avatar-social-media-isolated-icon-260nw-1414687187.jpg",
      image: tweetImage,
      timeStamp: new Date().toISOString(),
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="https://image.shutterstock.com/image-vector/avatar-social-media-isolated-icon-260nw-1414687187.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="Yaa wassup?"
            type="text"
          ></input>
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweeBox_imageInput"
          placeholder="Enter image URL"
          type="text"
        ></input>
        <Button onClick={sendTweet} className="tweetBox_tweetButton">
          Post
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
