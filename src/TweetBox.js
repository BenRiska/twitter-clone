import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";
import "./TweetBox.css";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi");

    db.collection("posts").add({
      displayName: "Ben Taylor",
      username: "BenTaylor",
      avatar:
        "https://avatars3.githubusercontent.com/u/46921146?s=460&u=97c3266ed5d5e0f46e3b1707a0ee9aefa40d6ba8&v=4",
      image: imageUrl,
      text: tweetMessage,
      verified: true,
    });

    setTweetMessage("");
    setImageUrl("");
  };

  return (
    <div className="tweetbox">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="tweetbox__input">
          <Avatar src="https://avatars3.githubusercontent.com/u/46921146?s=460&u=97c3266ed5d5e0f46e3b1707a0ee9aefa40d6ba8&v=4" />
          <input
            placeholder="Whats's happening?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.currentTarget.value)}
          />
        </div>
        <input
          value={imageUrl}
          className="tweetbox__imageInput"
          placeholder="Optional: Enter image URL"
          onChange={(e) => setImageUrl(e.currentTarget.value)}
        />
        <Button type="submit" className="tweetbox__button">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
