import React, { useEffect } from "react";
import SidebarHeader from "./SidebarHeader/SidebarHeader";
import SidebarSearch from "./SidebarSearch/SidebarSearch";
import SidebarChat from "./SidebarChat/SidebarChat";
import whatsappdb from "../../firebase/firebase";
import "./Sidebar.css";
const Sidebar = (props) => {
  useEffect(() => {
    whatsappdb.collection("rooms").onSnapshot((snapshot) => {
      return props.setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="sidebar">
      <SidebarHeader />
      <SidebarSearch />
      <SidebarChat rooms={props.rooms} />
    </div>
  );
};

export default Sidebar;
