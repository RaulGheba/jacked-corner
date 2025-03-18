import React from "react";

function Sidebar(props) {
  return (
    <div className="row-span-full">
      <img
        className="img-fluid w-full h-40"
        src={"/logo.png"}
        alt={props.title}
      />
    </div>
  );
}

export default Sidebar;
