import { useEffect, useState } from "react";
import io from "socket.io-client";
import "./Chat.css";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";

let socket;

const Chat = (props) => {
  const { location } = props;

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { name, room } = location.state;

    // Socket configuation
    socket = io(ENDPOINT, {
      transports: ["websocket", "polling", "flashsocket"],
    });

    setName(name);
    setRoom(room);

    // Emit join action
    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.state]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, []);

  // Sending message
  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outer-container">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
