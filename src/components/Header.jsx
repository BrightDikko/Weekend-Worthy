import React from "react";
import YoutubeLogo from "../assets/youtube.svg";
import SpotifyLogo from "../assets/spotify.svg";
import GirlMusic from "../assets/girl-music.jpeg";
const Header = () => {
    return (
        <div className="flex flex-col drop-shadow-md sm:h-[650px] lg:flex-row rounded-b-[50px] bg-yellow-50 md:rounded-b-[70px]  overflow-hidden ">
            {/* <div className="flex flex-1 order-2  py-20 bg-none bg-yellow-300 sm:items-center sm:bg-hero lg:order-1 xl:bg-none lg:bg-yellow-300 bg-no-repeat bg-cover bg-center "> */}
            <div className="flex flex-1 order-2 py-20 bg-none bg-yellow-300 sm:items-center sm:bg-hero lg:order-1  lg:bg-yellow-300 bg-no-repeat bg-cover bg-center   xl:bg-gradient-to-b xl:from-yellow-500 xl:via-yellow-300 xl:to-yellow-100   ">
                <div className="w-[400px] mx-auto sm:mx-20 sm:w-[500px]">
                    <div className="font-serif font-extrabold text-7xl sm:text-7xl">
                        Weekend Worthy
                        <br />
                        <span className="block mt-2 font-serif xl:text-8xl  animate-text bg-gradient-to-r sm:from-slate-800 sm:via-violet-800 sm:to-orange-500 lg:bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black">
                            Afrobeats
                        </span>
                    </div>
                    <div className="font-fancy1  mt-4 text-5xl [word-spacing:5px]">
                        Curated by Bright Dikko
                    </div>
                    <div className="font-serif font-medium mt-10 text-xl  ">
                        Sometimes, Friday hits and it almost doesn't feel real.
                        Discover fans favorite afrobeat songs, updated weekly,
                        to add color to your weekend.
                    </div>
                    <div className="mt-12 flex flex-row items-center space-x-4">
                        <a
                            href="https://en.wikipedia.org/wiki/Afrobeats"
                            target="_blank"
                        >
                            <button
                                className="learn-more-button text-slate-800 hover:-translate-y-1 duration-300 "
                                role="button"
                            >
                                🎵 Learn More
                            </button>
                        </a>
                        <a
                            href="https://youtube.com/watch?v=RzT-NqqazDw&t=15s"
                            target="_blank"
                        >
                            <button
                                className="calm-button learn-more-button  text-slate-800 hover:-translate-y-1 duration-300
			  "
                                role="button"
                            >
                                <img
                                    src={YoutubeLogo}
                                    alt="Youtube logo"
                                    className="h-6 w-6"
                                />
                            </button>
                        </a>
                        <a
                            href="https://open.spotify.com/playlist/5FDBAbJobJWaKh1RDiqtyn"
                            target="_blank"
                        >
                            <button
                                className="calm-button learn-more-button  text-slate-800 hover:-translate-y-1 duration-300 "
                                role="button"
                                id="spotifyLogo"
                            >
                                <img
                                    src={SpotifyLogo}
                                    alt="Spotify logo"
                                    className="h-fit w-11"
                                />
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className=" opacity-90 sm:opacity-100 order-1 sm:hidden xl:flex lg:order-2  ">
                <img
                    src={GirlMusic}
                    alt="Girl listening to music with headphones "
                    className=" h-fit  m-auto sm:h-full xl:min-w-fit "
                />
            </div>
        </div>
    );
};

export default Header;
