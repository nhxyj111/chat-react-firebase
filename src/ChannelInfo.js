import React from "react";

function ChannelInfo() {
  return (
    <div className="ChannelInfo">
      <div className="Topic">
        Topic: <input type="text" className="TopicInput" />
      </div>
      <div className="ChannelName">#general</div>
    </div>
  );
}

export default ChannelInfo;
