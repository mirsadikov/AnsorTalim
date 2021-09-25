import Header from "./components/Header";
import Kurslar from "./components/Kurslar";
import Ustozlar from "./components/Ustozlar";
import Yangiliklar from "./components/Yangiliklar";
import Izohlar from "./components/Izohlar";
import Lavhalar from "./components/Lavhalar";
import Aloqa from "./components/Aloqa";
import Linklar from "./components/Linklar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Yangiliklar />
        <Kurslar />
        <Ustozlar />
        <Izohlar />
        <Lavhalar />
        <div className="full-container">
          <Aloqa />
        </div>
        <Linklar />
      </main>
      <div className="full-container">
        <Footer />
      </div>
    </>
  );
}

export default App;
