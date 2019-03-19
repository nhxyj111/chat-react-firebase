import React from "react";

function ChatInputBox() {
  return (
    <form
      className="ChatInputBox"
      onSubmit={event => {
        event.preventDefault();
        const value = event.target.elements[0].value;
        console.log(value);
      }}>
      <input name="message" className="ChatInput" placeholder="Message #" />
    </form>
  );
}

export default ChatInputBox;
