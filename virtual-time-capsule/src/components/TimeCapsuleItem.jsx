import React from "react";
import "../styles/item.css";

function TimeCapsuleItem({ capsule }) {
  return (
    <div className="capsule-card">
      <h2>
        {capsule.title} - {capsule.userName}
      </h2>
      {capsule.imageUrl && <img src={capsule.imageUrl} />};
      <p>{capsule.content}</p>
      <p>Date Submitted: {capsule.id}</p>
      {capsule.imageFile && (
        <div>
          <p>Image:</p>
          <img
            src={URL.createObjectURL(capsule.imageFile)} // Generate the preview URL for the uploaded image
            alt="Capsule Image"
            style={{ width: "100px", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
}

export default TimeCapsuleItem;
