import React from "react";
import { db } from "./firebase";

function ChatInputBox({ user, channelId }) {
  return (
    <form
      className="ChatInputBox"
      onSubmit={event => {
        event.preventDefault();
        const text = event.target.elements[0].value;
        db.collection("channels")
          .doc(channelId)
          .collection("messages")
          .add({
            text,
            createdAt: new Date(),
            user: db.collection("users").doc(user.uid)
          });
        event.target.reset();
      }}>
      <input name="message" className="ChatInput" placeholder="Message #" />
    </form>
  );
}

export default ChatInputBox;
