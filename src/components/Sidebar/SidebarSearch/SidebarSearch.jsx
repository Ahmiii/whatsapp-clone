import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./SidebarSearch.css";

const SidebarSearch = () => {
  return (
    <div className="sidebar__search">
      <div className="sidebar__searchContainer">
        <SearchIcon />
        <input placeholder="search or start new chat" type="text"></input>
      </div>
    </div>
  );
};

export default SidebarSearch;
