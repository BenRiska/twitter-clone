import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
  TwitterShareButton,
} from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" />
      </div>
      <div className="widgets__widgetsContainer">
        <h2>What's Happening?</h2>
        <TwitterTweetEmbed tweetId={"1306991980354834433"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url="https://www.instagram.com/featurefield/?hl=en"
          options={{ text: "Check out FeatureField", via: "elonmusk" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
