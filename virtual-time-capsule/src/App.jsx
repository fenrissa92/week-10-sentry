import { useState } from "react";
import capsulesData from "./data/capsuleData";
// import TimeCapsuleItem from "./components/TimeCapsuleItem";
import TimeCapsuleList from "./components/TimeCapsuleList";
import TimeCapsuleForm from "./components/TimeCapsuleForm";

import "./Index.css";

function App() {
  const [capsules, setCapsules] = useState(capsulesData);
  // const [selectedCapsule, setSelectedCapsule] = useState(capsulesData[0]);

  const addCapsule = (newCapsule) => {
    setCapsules((prevCapsules) => [...prevCapsules, newCapsule]); // Add the new capsule to the array
  };

  return (
    <>
      <h1>Virtual Time Capsule</h1>
      <TimeCapsuleForm onAddCapsule={addCapsule} />
      <TimeCapsuleList capsules={capsules} />
    </>
  );
}

export default App;
