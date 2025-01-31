// src/data.js
export const initialMemories = [
  {
    id: new Date().toISOString(),
    username: "JohnDoe",
    title: "First Memory",
    message: "This is my first memory.",
    mediaType: "image",
    mediaUrl: "https://via.placeholder.com/150",
  },
  {
    id: new Date().toISOString(),
    username: "JaneDoe",
    title: "Second Memory",
    message: "This is another memory.",
    mediaType: "audio",
    mediaUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: new Date().toISOString(),
    username: "Alice",
    title: "Music Video Memory",
    message: "A nostalgic moment.",
    mediaType: "video",
    mediaUrl: "https://www.w3schools.com/html/movie.mp4",
  },
];
