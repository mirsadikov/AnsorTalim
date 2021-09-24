import Header from "./components/Header";
import Kurslar from "./components/Kurslar";
import Ustozlar from "./components/Ustozlar";
import Yangiliklar from "./components/Yangiliklar";
import Izohlar from "./components/Izohlar";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Yangiliklar />
        <Kurslar />
        <Ustozlar />
        <Izohlar />
      </main>
    </>
  );
}

export default App;
