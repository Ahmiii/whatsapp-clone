import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import whatsappdb from "../../firebase/firebase";

const SidebarComponent = () => {
  const [rooms, setRooms] = useState([]);

  return <Sidebar rooms={rooms} setRooms={setRooms} />;
};

export default SidebarComponent;
