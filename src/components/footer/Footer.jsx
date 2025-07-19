import React from "react";
import {
    FaInstagram,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <div className="infoText">
                    MovieVerse is a modern, responsive web application that enables users to explore, search,
                     and discover movies and TV shows using real-time data fetched from the TMDB (The Movie Database) API.
                     The platform offers trending, top-rated, and upcoming content along with genre-based browsing, a dynamic watchlist feature, and seamless navigation.
                </div>
                <div className="socialIcons">
                    <a
                        href="https://www.instagram.com/trivia_noon/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://github.com/sanskrati0613"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sanskrati-jain-295b65271/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon"
                    >
                        <FaLinkedin />
                    </a>
                </div>
                 <p className="Author">Sanskrati Jain</p>

            </ContentWrapper>
        </footer>
    );
};

export default Footer;
