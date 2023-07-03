import { Card, CardMedia } from "@mui/material";


function MovieCard ({deleteMovie, movie}) {

return (
<div>

        <Card
          sx={{
            textAlign: "center",
            backgroundColor: "white",
            width: 600,
            margin: "0 auto",
            height: 490
          }}
          variant="outlined"
        >
          <Card className="wishlist-card">
            <p>
              {movie.title}
              <button
                className="delete"
                onClick={() => deleteMovie(movie.id)}
              >
                🗑️ 
              </button>
            </p>
            <CardMedia
              component="img"
              alt={movie.title}
              height="20"
              image={movie.image}
              style={{ display: "block", margin: "0 auto" }}
            />
          </Card>
          </Card>
    </div>
)
}

export default MovieCard;