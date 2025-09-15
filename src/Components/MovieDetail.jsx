// src/Pages/MovieDetail.jsx
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { moviesContext } from "../Context/movieContextProvider";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function MovieDetail() {
  const { id } = useParams(); // get movie id from URL
  const { moviesArr } = useContext(moviesContext);
    const navigate=useNavigate()
  // find movie by id
  const movie = moviesArr.find(m => m.id.toString() === id);

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  return (
    <Card className="m-4">
      <Card.Img
        variant="top"
        style={{ width: "150px", height: "225px", objectFit: "cover", margin: "0 auto" }}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.overview}</Card.Text>
        <Button variant="primary" onClick={()=>navigate("/")}>Back to Movies</Button>
      </Card.Body>
    </Card>
  );
}
