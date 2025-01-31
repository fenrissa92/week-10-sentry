// src/components/RandomMemory.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const RandomMemory = ({ memories }) => {
  const [randomMemory, setRandomMemory] = useState(null);

  useEffect(() => {
    const random = memories[Math.floor(Math.random() * memories.length)];
    setRandomMemory(random);
  }, [memories]);

  return (
    randomMemory && (
      <RandomMemoryContainer>
        <h2>Random Memory</h2>
        <MemoryCard>
          {randomMemory.mediaType === "image" && (
            <MemoryImage src={randomMemory.mediaUrl} alt={randomMemory.title} />
          )}
          {randomMemory.mediaType === "video" && (
            <MemoryVideo controls>
              <source src={randomMemory.mediaUrl} type="video/mp4" />
            </MemoryVideo>
          )}
          {randomMemory.mediaType === "audio" && (
            <MemoryAudio controls>
              <source src={randomMemory.mediaUrl} type="audio/mp3" />
            </MemoryAudio>
          )}
          <MemoryContent>
            <h3>{randomMemory.title}</h3>
            <p>{randomMemory.message}</p>
            <small>{randomMemory.username}</small>
          </MemoryContent>
        </MemoryCard>
      </RandomMemoryContainer>
    )
  );
};

const RandomMemoryContainer = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const MemoryCard = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MemoryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const MemoryVideo = styled.video`
  width: 100%;
  max-height: 200px;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const MemoryAudio = styled.audio`
  width: 100%;
  max-height: 200px;
`;

const MemoryContent = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.small};

  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.accent};
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }

  small {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textDark};
  }
`;

export default RandomMemory;
