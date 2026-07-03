import { useEffect, useRef } from "react";
import MessageItem from "./MessageItem";

function MessageList({ messages }) {
  const bottomReference = useRef(null);

  useEffect(() => {
    bottomReference.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="message-list">
      {messages.length === 0 ? (
        <div className="empty-chat">
          <h2>No Messages Yet</h2>
          <p>Start the conversation.</p>
        </div>
      ) : (
        messages.map((message) => (
          <MessageItem
            key={message.id}
            message={message}
          />
        ))
      )}

      <div ref={bottomReference}></div>
    </div>
  );
}

export default MessageList;