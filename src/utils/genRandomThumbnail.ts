const passArray = [
  "/randomThumbnail/1.jpg",
  "/randomThumbnail/2.jpg",
  "/randomThumbnail/3.avif",
  "/randomThumbnail/4.webp",
  "/randomThumbnail/5.jpg",
];

export const genThumbnail = () => {
  const randomIndex = Math.floor(Math.random() * passArray.length);
  return passArray[randomIndex];
};
