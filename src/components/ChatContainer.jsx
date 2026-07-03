import { useEffect, useRef, useState } from "react";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

function ChatContainer() {
  const socketReference = useRef(null);

  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socketReference.current = socket;

    socket.onopen = () => {
      console.log("Connected to WebSocket Server");
    };

    socket.onmessage = (event) => {
      const response = JSON.parse(event.data);

      if (response.type === "history") {
        setMessages(response.messages);
      }

      if (response.type === "message") {
        setMessages((previousMessages) => [
          ...previousMessages,
          response.message,
        ]);
      }
    };

    socket.onclose = () => {
      console.log("Disconnected");
    };

    return () => {
      socket.close();
    };
  }, []);

  const handleSendMessage = (userName, messageText) => {
    if (!userName || !messageText) {
      return;
    }

    setCurrentUser(userName);

    socketReference.current.send(
      JSON.stringify({
        userName,
        text: messageText,
      })
    );
  };

  const updatedMessages = messages.map((message) => ({
    ...message,
    isOwnMessage: message.userName === currentUser,
  }));

  return (
    <main className="chat-page">
      <section className="chat-card">
        <ChatHeader />

        <MessageList messages={updatedMessages} />

        <MessageInput onSendMessage={handleSendMessage} />
      </section>
    </main>
  );
}

export default ChatContainer;