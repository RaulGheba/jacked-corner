import React from "react";

function Sidebar(props) {
  return (
    <div className="row-span-full bg-red-400">
      <img
        className="img-fluid w-full h-50"
        src={"/logo.png"}
        alt={props.title}
      />
    </div>
  );
}

export default Sidebar;
