import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import SidebarOption from "./SidebarOption";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Face4Icon from "@mui/icons-material/Face4";

function Sidebar() {
  return (
    <div className="sidebar">
      <Face4Icon className="sidebar_twitterIcon" />
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      {/* można użyć <i>#</i> */}
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={ExpandMoreIcon} text="More" />

      <Button variant="outlined" className="sidebar_tweet" fullWidth>
        Post
      </Button>
    </div>
  );
}

export default Sidebar;
