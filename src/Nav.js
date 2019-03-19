import { Link } from "@reach/router";
import React from "react";
import { firebase } from "./firebase";
import useCollection from "./useCollection";

function Nav({ user }) {
  const channels = useCollection("channels");

  return (
    <div className="Nav">
      <div className="User">
        <img className="UserImage" alt="whatever" src={user.photoUrl} />
        <div>
          <div>{user.displayName}</div>
          <div>
            <button
              onClick={() => {
                firebase.auth().signOut();
              }}
              className="text-button">
              log out
            </button>
          </div>
        </div>
      </div>
      <nav className="ChannelNav">
        {channels.map((channel, index) => (
          <Link key={channel.id} to={`/channel/${channel.id}`}>
            # {channel.id}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Nav;
