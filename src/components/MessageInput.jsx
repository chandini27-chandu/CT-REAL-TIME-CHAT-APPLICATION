import { useState } from "react";

function MessageInput({ onSendMessage }) {
  const [userName, setUserName] = useState("");
  const [messageText, setMessageText] = useState("");

  const sendMessage = () => {
    const trimmedUserName = userName.trim();
    const trimmedMessage = messageText.trim();

    if (!trimmedUserName || !trimmedMessage) {
      return;
    }

    onSendMessage(trimmedUserName, trimmedMessage);

    setMessageText("");
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="message-input-container">
      <input
        type="text"
        className="message-input"
        placeholder="Enter your name"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />

      <input
        type="text"
        className="message-input"
        placeholder="Type your message..."
        value={messageText}
        onChange={(event) => setMessageText(event.target.value)}
        onKeyDown={handleEnterKey}
      />

      <button
        className="send-button"
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  );
}

export default MessageInput;