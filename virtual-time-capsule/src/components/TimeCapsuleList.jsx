import React from "react";
import TimeCapsuleItem from "./TimeCapsuleItem";

function TimeCapsuleList({ capsules }) {
  return (
    <div className="capsule-list">
      {capsules.length === 0 ? (
        <p>No capsules yet. Add one!</p>
      ) : (
        capsules.map((capsule) => (
          <TimeCapsuleItem key={capsule.id} capsule={capsule} />
        ))
      )}
    </div>
  );
}

export default TimeCapsuleList;
