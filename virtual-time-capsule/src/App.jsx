import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./globalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import MemoryList from "./components/MemoryList";
import RandomMemory from "./components/RandomMemory";
import { initialMemories } from "./data";

function App() {
  const [memories, setMemories] = useState(initialMemories);

  const addMemory = (newMemory) => {
    setMemories([newMemory, ...memories]);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <Header />
        <Form addMemory={addMemory} />
        <RandomMemory memories={memories} />
        <MemoryList memories={memories} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
