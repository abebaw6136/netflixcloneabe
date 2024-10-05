/*import React, { useEffect, useState } from 'react'; // Ensure this is correct
import './row.css';
import axios from '../../../utils/axios';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const Row = ({Title,fetchUrl,isLargeRow}) => {
    const [movies, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const base_url = "https://image.tmdb.org/t/p/original";


    useEffect(() => {
        async function fetchData() {
          try {
            const request = await axios.get(`http://localhost:3000/api/${fetchUrl}`);
            setMovie(request.data.results);
          } catch (error) {
            console.error("Error fetching movies: ", error);
          }
        }

    
        fetchData();
    },[fetchUrl]);
    const handleClick =(movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.title || movie?.original_name)
            .then(url =>{
                console.log(url)
                const urlParams =new URLSearchParams(new URL(url).search)
                console.log(urlParams)
                console.log(urlParams.get('v'))
                setTrailerUrl(urlParams.get('v'));

            })

        }
    }
    //const opts ={
      //  height: '390',
       // width: "100%",
       // playerVars: {
         //   autoplay: 1,
      //  }
    }
    return(
        <div className='row'>
            <h1>title</h1>
            <div className="row_posters">
            { movies?.map((movie, index) => (
                <img
                  onClick={() => handleClick(movie)}
                 key={index} src={'${base_url}${isLargeRow ? movie.poster_path : movi.backdrop_path}'} alt={movie.name}
                  className={'row_poster $ {isLargeRow && "row_posterLarg"}'}
                 />

            )) 

             } </div>
            { <div style={{ padding: '40px'}}>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>} 
        {}
        </div>
      }  </div>
    );
    }

    
export default Row; */



import React, { useEffect, useState } from 'react'; // Ensure this is correct
import './row.css';
import axios from '../../../utils/axios';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original";

  // Fetch the movies using the provided fetchUrl
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error("Error fetching movies: ", error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  // Handle movie click to fetch trailer URL
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || movie?.original_title || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.error("Error fetching trailer: ", error));
    }
  };

  // YouTube player options
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
          />
        ))}
      </div>
      {trailerUrl && (
        <div style={{ padding: '40px' }}>
          <YouTube videoId={trailerUrl} opts={opts} />
        </div>
      )}
    </div>
  );
};

export default Row;

