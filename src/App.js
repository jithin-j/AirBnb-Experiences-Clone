import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./data/data";

function App() {
  const cardElements = cardData.map((data) => {
    return <Card key={data.id} item={data} />;
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
