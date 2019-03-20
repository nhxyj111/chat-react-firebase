import React from "react";
import useCollection from "./useCollection";

function Members({ channelId }) {
  // useEffect(() => {
  //   db.collection('users').where(`channels.${channelId}`, '==', true).onSnapshot(snapshot => {
  //     snapshot.forEach(doc => {

  //     })
  //   })
  // })
  const members = useCollection("users", undefined, [
    `channels.${channelId}`,
    "==",
    true
  ]);

  console.log(members);

  return (
    <div className="Members">
      <div>
        {members.map((member, index) => (
          <div className="Member" key={index}>
            <div className="MemberStatus online" />
            {member.displayName}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;
