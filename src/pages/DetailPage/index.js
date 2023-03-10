import React, { useState, useEffect } from 'react'
import axios from '../../api/axios';
import { useNavigate, useParams } from 'react-router-dom';

const DetailPage = () => {
  let { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `movie/${movieId}`
        );
        console.log(response);
        setMovie(response.data);
      } catch (error) {
        console.log('안나온다구요!!!!!!!!!!!!!!!!!!!!!!!!!!');
        navigate(-1);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <section>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt="poster"
      />
    </section>
  )
}

export default DetailPage