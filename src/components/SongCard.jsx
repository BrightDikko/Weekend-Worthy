import React from "react";
import YoutubeLogo from "../assets/youtube.svg";
import SpotifyLogo from "../assets/spotify.svg";

const SongCard = ({
    image,
    bgImage,
    title,
    artisteTag,
    artistes,
    producerTag,
    producer,
    youtubeLink,
    spotifyLink,
}) => {
    return (
        <div className=" shadow-lg  flex mb-40 mx-10 flex-col sm:h-[550px] lg:flex-row rounded-[50px] md:rounded-[70px] overflow-hidden hover:outline hover:outline-yellow-400 hover:outline-4">
            <div
                className={
                    "pb-16 pt-6 pl-10 sm:pl-0 sm:relative  md:pb-0 md:pt-0 md:pl- flex flex-1 order-2   bg-none bg-yellow-300 sm:items-center  lg:order-2 xl:bg-none lg:bg-yellow-300 bg-no-repeat bg-cover bg-center " +
                    bgImage
                }
            >
                <div className="hidden sm:inline ml-12 absolute z-0 font-fancy1 text-yellow-400 opacity-40 xl:opacity-80 font-extrabold text-5xl sm:text-[300px] ">
                    {title}
                </div>

                <div className="sm:absolute z-10 w-[400px] mx-auto sm:mx-20 sm:w-[500px] ">
                    <div className="font-serif mt-5 text-slate-900 font-extrabold text-5xl sm:text-6xl">
                        {title}
                    </div>

                    <div className="font-serif font-medium mt-10 text-lg sm:text-xl   ">
                        <strong>{artisteTag}</strong> {artistes}
                    </div>
                    <div className="font-serif font-medium mt-2 text-lg sm:text-xl  ">
                        <strong>{producerTag}</strong> {producer}
                    </div>
                    <div className="mt-8 flex flex-row items-center space-x-4">
                        <a href={youtubeLink} target="_blank">
                            <button
                                className="flex flex-row  learn-more-button  text-slate-800"
                                role="button"
                            >
                                <img
                                    src={YoutubeLogo}
                                    alt="Youtube logo"
                                    className="h-6 w-6"
                                />
                                <p className="ml-3">Youtube </p>
                            </button>
                        </a>

                        <a href={spotifyLink} target="_blank">
                            <button
                                className="flex flex-row items-center learn-more-button  text-slate-800"
                                role="button"
                                id="spotifyLogo"
                            >
                                <img
                                    src={SpotifyLogo}
                                    alt="Spotify logo"
                                    className="h-fit w-11"
                                />
                                <p className="mr-3">Spotify</p>
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="sm:z-10 opacity-95  bg-yellow-300  sm:opacity-100 order-1 sm:hidden xl:flex lg:order-1  ">
                <img
                    src={image}
                    alt={`Album cover of ${title}`}
                    className="  md:rounded-l-[50px] md:rounded-r-[70px] h-fit  m-auto  sm:h-full xl:min-w-fit"
                />
            </div>
        </div>
    );
};

export default SongCard;
