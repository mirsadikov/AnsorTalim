import Header from "./components/Header";
import Kurslar from "./components/Kurslar";
import Yangiliklar from "./components/Yangiliklar";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Yangiliklar />
        <Kurslar />
      </main>
    </>
  );
}

export default App;
