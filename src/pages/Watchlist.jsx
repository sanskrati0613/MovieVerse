import React, { useEffect, useState } from "react";
import MovieCard from "../components/movieCard/MovieCard"; // adjust path if needed

const Watchlist = () => {
    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("watchlist")) || [];
        setWatchlist(saved);
    }, []);

    return (
        <div className="watchlist-page">
            <h2>My Watchlist</h2>
            {watchlist.length === 0 ? (
                <p>No movies in your watchlist yet!</p>
            ) : (
                <div className="movie-grid">
                    {watchlist.map((movie) => (
                        <MovieCard key={movie.id} data={movie} mediaType={movie.media_type} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Watchlist;
