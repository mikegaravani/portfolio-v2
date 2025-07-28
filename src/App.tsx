import Hero from "./components/Hero";
import ContentPane from "./components/ContentPane";

function App() {
  return (
    <div className="min-h-screen text-white flex flex-col lg:flex-row p-1 pt-6 md:p-6">
      <Hero />
      <ContentPane />
    </div>
  );
}

export default App;
