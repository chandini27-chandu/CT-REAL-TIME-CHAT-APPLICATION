function MessageItem({ message }) {
  return (
    <div className="message received">
      <div className="message-content">
        <h4 className="sender-name">
          {message.userName}
        </h4>

        <p className="message-text">
          {message.text}
        </p>

        <span className="message-time">
          {message.time}
        </span>
      </div>
    </div>
  );
}

export default MessageItem;