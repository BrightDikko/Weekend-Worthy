import React from "react";
import YoutubeLogo from "../assets/youtube.svg";
import RemaImage from "../assets/Rema.jpeg";
import SpotifyLogo from "../assets/spotify.svg";
import SectionTitle from "./SectionTitle";
const ArtistOfTheWeek = () => {
    return (
        <section className="flex flex-col  bg-yellow-50 ">
            <SectionTitle
                title={"Artist of the Week"}
                emoji={"🎵 ... 🎵 ... 🎵"}
            />

            <div className="drop-shadow-md flex flex-col sm:h-[600px] mx-10 lg:flex-row rounded-[50px] md:rounded-[70px] overflow-hidden">
                <div className=" sm:relative flex flex-1 order-2  py-16 bg-none bg-yellow-300 sm:items-center sm:bg-artist lg:order-2 xl:bg-none lg:bg-yellow-300 bg-no-repeat bg-cover bg-center ">
                    <div className="hidden sm:inline top-20 ml-12 -mt-36 absolute z-0 font-fancy1 text-yellow-400 opacity-40 xl:opacity-80 font-extrabold text-5xl sm:text-[500px] transform rotate-5 ">
                        Rema Rema
                    </div>
                    <div className="sm:absolute z-10 w-[330px] mx-auto sm:mx-20 sm:w-[500px]">
                        <div className="font-serif font-extrabold text-7xl sm:text-9xl">
                            Rema
                        </div>
                        <div className="font-serif font-medium mt-10 text-xl  ">
                            This past week, Rema released a 2-track EP with the
                            singles -<strong> "Holiday"</strong> and{" "}
                            <strong>"Reason You"</strong>, both of which have
                            made it to the national top 10 list, and also made
                            it to this week's Weekend Worthy Afrobeats playlist.
                        </div>
                        <div className="mt-12 flex flex-row items-center space-x-4">
                            <a
                                href="https://www.youtube.com/watch?v=HV1z6GVXOiY"
                                target="_blank"
                            >
                                <button
                                    className="learn-more-button text-slate-800  hover:-translate-y-1  duration-300"
                                    role="button"
                                >
                                    <span className="mr-1"> ▶️ </span> See Live
                                </button>
                            </a>

                            <a
                                href="https://www.youtube.com/watch?v=CQLsdm1ZYAw"
                                target="_blank"
                            >
                                <button
                                    className="calm-button learn-more-button  text-slate-800  hover:-translate-y-1  duration-300"
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
                                href="https://open.spotify.com/artist/46pWGuE3dSwY3bMMXGBvVS"
                                target="_blank"
                            >
                                <button
                                    className="calm-button learn-more-button  text-slate-800 hover:-translate-y-1  duration-300"
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

                <div className="sm:z-10  opacity-90  bg-yellow-300  sm:opacity-100 order-1 sm:hidden xl:flex lg:order-1  ">
                    <img
                        src={RemaImage}
                        alt="Image of Rema "
                        className="  md:rounded-l-[50px] md:rounded-r-[70px] h-fit  m-auto  sm:h-full xl:min-w-fit"
                    />
                </div>
            </div>
        </section>
    );
};

export default ArtistOfTheWeek;
