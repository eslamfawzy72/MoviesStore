import React, { useContext, useEffect } from 'react'
import { Row, Col } from "react-bootstrap";
import { moviesContext } from '../Context/movieContextProvider'
import Button from 'react-bootstrap/Button';
import '../styles/movies.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
export default function Movies() {
    const { moviesArr, filteredMovies } = useContext(moviesContext)
    const navigate=useNavigate()
    // Determine which movies to show
    const moviesToShow = filteredMovies && filteredMovies.length >= 0 ? filteredMovies : moviesArr;
    
    // console.log(moviesToShow)
    
    // useEffect(() => {
    //     if (moviesArr && moviesArr.length > 0) {
    //         console.log("Movies fetched:", moviesArr)
    //     }
    // }, [moviesArr])

    return (
        <div>
          <br></br>
          <br></br>
            {moviesToShow?.length > 0 ? (
               <Row className="g-4">
  {moviesToShow.map(movie => (
    <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text className="flex-grow-1">
            {movie.overview}
          </Card.Text>
          <Button variant="primary" onClick={()=>navigate(`/movies/${movie.id}`)}>See More..</Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

            ) : (
                <p>No movies found.</p>
            )}
        </div>
    )
}