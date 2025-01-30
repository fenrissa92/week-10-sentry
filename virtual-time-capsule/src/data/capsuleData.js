// array of objects with id, name, title, content, imageurl, datesubmitted, opendate
// could use uuidv4() for generating IDs
const formattedDate = new Date(Date.now()).toLocaleDateString("en-GB");

const capsules = [
  {
    id: formattedDate,
    userName: "Kit Jones",
    title: "Memories Remix",
    content: "A memory of releasing my remix of Memories",
    imageUrl: "/memories.png",
  },
];

export default capsules;
