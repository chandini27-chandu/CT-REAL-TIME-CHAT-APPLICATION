function ChatHeader() {
  return (
    <header className="chat-header">
      <div className="header-content">
        <h1>Real-Time Chat</h1>
        <p>WebSocket Powered Messaging</p>
      </div>

      <div className="connection-status">
        <span className="status-indicator"></span>
        <span>Connected</span>
      </div>
    </header>
  );
}

export default ChatHeader;