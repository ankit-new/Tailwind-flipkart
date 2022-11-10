import Header from "./components/Header";

import { Data } from "./components/Data";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="flex flex-wrap">
        {Data.map((item) => (
          <Card
            image={item.image}
            name={item.name}
            rating={item.rating}
            actualPrice={item.actualPrice}
            offerPrice={item.offerPrice}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
