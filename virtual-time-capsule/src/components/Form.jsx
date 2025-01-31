import React, { useState } from "react";
import "./form.css";

const Form = ({ addMemory }) => {
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [mediaType, setMediaType] = useState("image");
  const [mediaFile, setMediaFile] = useState(null);

  const handleMediaChange = (event) => {
    const file = event.target.files[0];
    setMediaFile(URL.createObjectURL(file));

    if (file.type.startsWith("video")) {
      setMediaType("video");
    } else if (file.type.startsWith("audio")) {
      setMediaType("audio");
    } else {
      setMediaType("image");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMemory = {
      id: new Date().toISOString(),
      username,
      title,
      message,
      mediaType,
      mediaUrl: mediaFile,
    };

    addMemory(newMemory);

    setUsername("");
    setTitle("");
    setMessage("");
    setMediaFile(null);
    setMediaType("image");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={username}
          placeholder="Name"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        <textarea
          value={message}
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>
      <label>
        <input
          className="media-input"
          type="file"
          onChange={handleMediaChange}
          accept="image/*,audio/*,video/*"
          required
        />
      </label>
      <button type="submit">Add Memory</button>
    </form>
  );
};

export default Form;
