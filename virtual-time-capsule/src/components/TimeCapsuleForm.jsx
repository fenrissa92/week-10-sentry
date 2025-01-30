import React, { useState } from "react";
import "../styles/form.css";

const TimeCapsuleForm = ({ onAddCapsule }) => {
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [id, setDateSubmitted] = useState("");

  // handle file input change
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("---selected file", file);
      setImageFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDate = new Date(Date.now()).toLocaleDateString("en-GB");
    const newCapsule = {
      id: formattedDate,
      userName,
      title,
      content,
      imageFile,
    };

    onAddCapsule(newCapsule);
    setUserName("");
    setTitle("");
    setContent("");
    setImageFile(null);
    setDateSubmitted("");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <textarea
          value={content}
          placeholder="Content"
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Image URL (must be jpeg or png): </label>
        <input
          type="file"
          accept="image/jpeg, image/png"
          onChange={handleImageUpload}
          required
        />
      </div>
      {imageFile && (
        <div>
          <p>Image Preview:</p>
          <img
            src={URL.createObjectURL(imageFile)} // Create a URL for preview
            alt="Preview"
            style={{ width: "100px", height: "auto", marginTop: "10px" }}
          />
        </div>
      )}
      <div>
        <label>Date Submitted: </label>
        <input
          type="date"
          value={id}
          onChange={(e) => setDateSubmitted(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Memory</button>
    </form>
  );
};

export default TimeCapsuleForm;
