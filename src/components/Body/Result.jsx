import { useEffect } from "react";

const Result = ({
  token,
  trackData,
  isCorrect,
  albumImgURL,
  setAlbumImgURL,
}) => {
  useEffect(() => {
    fetch("https://api.spotify.com/v1/tracks/05wIrZSwuaVWhcv5FfqeH0", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((track) => {
        console.log(track);
        setAlbumImgURL(track.album.images[0].url);
      });
  }, [isCorrect]);

  console.log(trackData);
  return (
    <div>
      <img src={albumImgURL} width="100px" alt="album cover" />
      <h3>{trackData[0]}</h3>
      <h3>{trackData[1]}</h3>
    </div>
  );
};

export default Result;
