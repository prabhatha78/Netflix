import React, { useEffect, useState } from "react";
import "./RowPost.css";
import { API_KEY, imageUrl } from "../../Constants/constants";
import axios from "../../axios";
import YouTube from "react-youtube";

function RowPost(props) {
  const [movie, setMovie] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setMovie(response.data.results);
    });
  }, []);
  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    axios
      .get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        }
      });
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movie.map((obj) => (
          <img
            onClick={() => {
              handleMovie(obj.id);
            }}
            className={props.isSmall ? "small_poster" : "poster"}
            src={`${imageUrl + obj.poster_path}`}
            alt="poster"
          />
        ))}
      </div>

      {urlId && <YouTube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default RowPost;
