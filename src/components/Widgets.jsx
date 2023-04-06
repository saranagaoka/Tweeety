import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <TravelExploreIcon className="widgets_searchIcon" />
        <input placeholder="Search" type="text" />
      </div>

      <div className="widgets_widgetsContainer">
        <h2>What's happening?</h2>

        <TwitterTweetEmbed tweetId={"858551177860055040"} />
        <TwitterTimelineEmbed
          className="twitter_timeline"
          sourceType="profile"
          screenName="KonfliktyPL"
          options={{ height: 400 }}
        />

        <TwitterShareButton options={{ text: "I <3 #reactJS" }} />
      </div>
    </div>
  );
}

export default Widgets;
