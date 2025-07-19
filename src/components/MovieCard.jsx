// import React, { useEffect, useState } from 'react';

// const MovieCard = ({ movie }) => {
//   const [isInWatchlist, setIsInWatchlist] = useState(false);

//   useEffect(() => {
//     const existing = JSON.parse(localStorage.getItem('watchlist')) || [];
//     setIsInWatchlist(existing.some((m) => m.id === movie.id));
//   }, [movie.id]);

//   const addToWatchlist = () => {
//     const existing = JSON.parse(localStorage.getItem('watchlist')) || [];
//     const isAlreadyIn = existing.some((m) => m.id === movie.id);

//     if (!isAlreadyIn) {
//       localStorage.setItem('watchlist', JSON.stringify([...existing, movie]));
//       setIsInWatchlist(true);
//       alert('Movie added to watchlist!');
//     } else {
//       alert('Already in watchlist!');
//     }
//   };

//   return (
//     <div className="movie-card">
//       <img src={movie.poster} alt={movie.title} />
//       <h3>{movie.title}</h3>
//       <button onClick={addToWatchlist} disabled={isInWatchlist}>
//         {isInWatchlist ? 'Added' : 'Add to Watchlist'}
//       </button>
//     </div>
//   );
// };

// export default MovieCard;
