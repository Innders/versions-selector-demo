import * as Styled from "../App.styled";

const getRandomImage = (seed) => {
  // if no seed create one
  if (!seed) {
    seed = Math.floor(Math.random() * 100).toString();
  }

  const randomImage = `https://picsum.photos/seed/${seed}/1920/1080`;

  return randomImage;
};

const VersionImage = ({ id }) => {
  return (
    <Styled.VersionImg
      src={getRandomImage(id)}
      alt={`Version ${id}`}
    ></Styled.VersionImg>
  );
};

export default VersionImage;
