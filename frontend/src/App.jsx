import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [msgs, setMsgs] = useState([]);

  const handleMessage = async () => {
    if(inputText.trim()  === '') return;
    const userMsg = {
      id: Date.now(),
      timeStamp: new Date().toLocaleTimeString(),
      text: inputText,
      sender: "user",
    };
    setMsgs((previous) => [...previous, userMsg]);

    const {data} = await axios.post(
      "http://localhost:3000/api/chat/response",
      {
        prompt: inputText,
      }
    );
    setInputText('')

    const botMsg = {
      id: Date.now(),
      timeStamp: new Date().toLocaleTimeString(),
      text: data.aiResponse,
      sender: "bot",
    };
    setMsgs((previous) => [...previous, botMsg]);
  };

  return (
    <div className="app-cont">
      <div className="chat-screen">
        {msgs.length === 0 ? (
          <p className="blank-chat-text">Start a new conversation</p>
        ) : (
          msgs.map((msg, idx) => {
            return (
              <div key={idx} className={`${msg.sender} message`}>
                <p>{msg.text}</p>
                <span className="timeStamp">{msg.timeStamp}</span>
              </div>
            );
          })
        )}
      </div>
      <div className="msg-sender">
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          type="text"
          placeholder="enter something.."
        />
        <button onClick={handleMessage}>Send</button>
      </div>
    </div>
  );
};

export default App;
