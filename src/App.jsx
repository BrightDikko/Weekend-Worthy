import { Fragment } from "react";
import Header from "./components/Header";
import ArtistOfTheWeek from "./components/ArtistOfTheWeek";
import SongsList from "./components/SongsList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="2xl:max-w-[80%] m-auto h-fit bg-yellow-50 ">
      <Header />
      <ArtistOfTheWeek />
      <SongsList />
      <Footer />
    </div>
  );
}

export default App;
