import React, { forwardRef } from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import CheckIcon from "@mui/icons-material/Check";
import ChatIcon from "@mui/icons-material/Chat";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

const Post = forwardRef(
  ({ getDisplayName, userName, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post_avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post_body">
          <div className="post_header"></div>
          <div className="post_headerText">
            <h3>
              {getDisplayName} {""}
              <span className="post_headerSpecial">
                {verified && <CheckIcon className="post_badge" />}
                {userName}
              </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>{text}</p>
          </div>
          {image && <img src={image} alt="your pic" />}
          <div className="post_footer">
            <ChatIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
