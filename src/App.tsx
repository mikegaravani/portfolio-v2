import Hero from "./components/Hero";
import ContentPane from "./components/ContentPane";

function App() {
  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col lg:flex-row p-6">
      <Hero />
      <ContentPane />
    </div>
  );
}

export default App;
