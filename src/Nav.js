import React, { useEffect, useState } from "react";
import { db } from "./firebase";

function Nav() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("channels").onSnapshot(snapshot => {
      const docs = [];
      snapshot.forEach(doc => {
        docs.push({
          ...doc.data(),
          id: doc.id
        });
      });
      setChannels(docs);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="Nav">
      <div className="User">
        <img
          className="UserImage"
          alt="whatever"
          src="https://placekitten.com/64/64"
        />
        <div>
          <div>Xu Yj</div>
          <div>
            <button className="text-button">log out</button>
          </div>
        </div>
      </div>
      <nav className="ChannelNav">
        {channels.map((channel, index) => (
          <a key={channel.id} href={`/channel/${channel.id}`}>
            # {channel.id}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default Nav;
