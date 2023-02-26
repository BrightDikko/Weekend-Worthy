import React from "react";

import GwagwaladaImage from "../assets/buju.png";
import HolidayImage from "../assets/holiday.png";
import AloneImage from "../assets/alone.png";
import AttentionImage from "../assets/attention.png";
import CurrencyImage from "../assets/currency.png";
import FreeMindImage from "../assets/tems.png";
import PeruImage from "../assets/peru.png";
import SugarImage from "../assets/wizkid.png";
import CalmDownImage from "../assets/calm-down.png";
import SectionTitle from "./SectionTitle";
import SongCard from "./SongCard";

const SongsList = () => {
    return (
        <section className="flex flex-col  bg-yellow-50 ">
            <SectionTitle title="Top 10 Songs" emoji="🎧 ... 🎧 ... 🎧" />

            <SongCard
                image={CalmDownImage}
                bgImage={"sm:bg-CalmDownImage"}
                title={"⓵ Calm Down"}
                artisteTag={"Artistes:"}
                artistes={"Rema feat. Selena Gomez"}
                producerTag={"Producer:"}
                producer={"Andre Vibez London"}
                youtubeLink={"https://www.youtube.com/watch?v=WcIcVapfqXw"}
                spotifyLink={
                    "https://open.spotify.com/artist/46pWGuE3dSwY3bMMXGBvVS"
                }
            />
            <SongCard
                image={AttentionImage}
                bgImage={"sm:bg-AttentionImage"}
                title={"⓶ Attention"}
                artisteTag={"Artistes:"}
                artistes={"Omah Lay, Justin Bieber"}
                producerTag={"Producers:"}
                producer={"Avedon, Harv"}
                youtubeLink={"https://www.youtube.com/watch?v=ZtC7-OpjzOc"}
                spotifyLink={
                    "https://open.spotify.com/artist/5yOvAmpIR7hVxiS6Ls5DPO"
                }
            />
            <SongCard
                image={FreeMindImage}
                bgImage={"sm:bg-FreeMindImage"}
                title={"⓷ Free Mind"}
                artisteTag={"Artistes:"}
                artistes={"Tems"}
                producerTag={"Producers:"}
                producer={"Tems, Omeiza"}
                youtubeLink={"https://www.youtube.com/watch?v=e8GzTXRAJ30"}
                spotifyLink={
                    "https://open.spotify.com/artist/687cZJR45JO7jhk1LHIbgq"
                }
            />
            <SongCard
                image={PeruImage}
                bgImage={"sm:bg-PeruImage"}
                title={"⓸ Peru"}
                artisteTag={"Artistes:"}
                artistes={"Fireboy DML feat. Ed Sheeran"}
                producerTag={"Producers:"}
                producer={"	Shizzi, Kolten “SippiBoy” Perine"}
                youtubeLink={"https://www.youtube.com/watch?v=pekzpzNCNDQ"}
                spotifyLink={
                    "https://open.spotify.com/artist/75VKfyoBlkmrJFDqo1o2VY"
                }
            />
            <SongCard
                image={HolidayImage}
                bgImage={"sm:bg-HolidayImage"}
                title={"⓹ Holiday"}
                artisteTag={"Artiste:"}
                artistes={"Rema"}
                producerTag={"Producers:"}
                producer={"Blaisebeatz"}
                youtubeLink={"https://www.youtube.com/watch?v=LboPHhUyIbo"}
                spotifyLink={
                    "https://open.spotify.com/artist/46pWGuE3dSwY3bMMXGBvVS"
                }
            />
            <SongCard
                image={AloneImage}
                bgImage={"sm:bg-AloneImage"}
                title={"⓺ Alone"}
                artisteTag={"Artiste:"}
                artistes={"Burna Boy"}
                producerTag={"Producer:"}
                producer={"P.Priime"}
                youtubeLink={"https://www.youtube.com/watch?v=S8qGmBtXZV8"}
                spotifyLink={
                    "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa"
                }
            />
            <SongCard
                image={SugarImage}
                bgImage={"sm:bg-SugarImage"}
                title={"⓻ 2 Sugar"}
                artisteTag={"Artistes:"}
                artistes={"Wizkid feat. Ayra Starr"}
                producerTag={"Producer:"}
                producer={"P2j"}
                youtubeLink={"https://www.youtube.com/watch?v=o_oenl2Be-w"}
                spotifyLink={
                    "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp"
                }
            />
            <SongCard
                image={HolidayImage}
                bgImage={"sm:bg-HolidayImage"}
                title={"⓼ Reason You"}
                artisteTag={"Artiste:"}
                artistes={"Rema"}
                producerTag={"Producer:"}
                producer={"Alex Lustig"}
                youtubeLink={"https://www.youtube.com/watch?v=yv8DSBRyAzc"}
                spotifyLink={
                    "https://open.spotify.com/artist/46pWGuE3dSwY3bMMXGBvVS"
                }
            />
            <SongCard
                image={CurrencyImage}
                bgImage={"sm:bg-CurrencyImage"}
                title={"⓽ Currency"}
                artisteTag={"Artistes:"}
                artistes={"Young Jonn, Olamide"}
                producerTag={"Producer:"}
                producer={"Young Jonn"}
                youtubeLink={"https://www.youtube.com/watch?v=DIhkV9MJbG4"}
                spotifyLink={
                    "https://open.spotify.com/artist/4JM1zsVj1pt38Q8mhv5teI"
                }
            />
            <SongCard
                image={GwagwaladaImage}
                bgImage={"sm:bg-GwagwaladaImage"}
                title={"⓵⓪ Gwagwalada"}
                artisteTag={"Artistes:"}
                artistes={"Bnxn, Kizz Daniel, Seyi Vibez"}
                producerTag={"Producer:"}
                producer={"Sarz"}
                youtubeLink={"https://www.youtube.com/watch?v=a9743by9GKA"}
                spotifyLink={
                    "https://open.spotify.com/artist/3zaDigUwjHvjOkSn0NDf9x"
                }
            />
        </section>
    );
};

export default SongsList;
