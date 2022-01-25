import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./data/data";

function App() {
  const cardElements = cardData.map((data) => {
    return (
      <Card
        img={data.coverImg}
        rating={data.stats.rating}
        reviewCount={data.stats.reviewCount}
        location={data.location}
        title={data.title}
        price={data.price}
        key={data.id}
        openSpots={data.openSpots}
      />
    );
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">{cardElements}</section>
    </div>
  );
}

export default App;
