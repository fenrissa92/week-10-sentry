import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

const MemoryList = ({ memories }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <MemoryListContainer>
      <h2>All Memories</h2>
      <StyledSlider {...settings}>
        {memories.map((memory) => (
          <MemoryCard key={memory.id}>
            {memory.mediaType === "image" && (
              <MemoryImage src={memory.mediaUrl} alt={memory.title} />
            )}
            {memory.mediaType === "video" && (
              <MemoryVideo controls>
                <source src={memory.mediaUrl} type="video/mp4" />
              </MemoryVideo>
            )}
            {memory.mediaType === "audio" && (
              <MemoryAudio controls>
                <source src={memory.mediaUrl} type="audio/mp3" />
              </MemoryAudio>
            )}
            <MemoryContent>
              <h3>{memory.title}</h3>
              <p>{memory.message}</p>
              <small>{memory.username}</small>
            </MemoryContent>
          </MemoryCard>
        ))}
      </StyledSlider>
    </MemoryListContainer>
  );
};

const MemoryListContainer = styled.div`
  max-width: 900px;
  margin-top: 20px;
  text-align: center;
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    padding: 10px;
  }
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

export default MemoryList;
