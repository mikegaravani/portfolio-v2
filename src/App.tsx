import Hero from './components/Hero'
import ContentPane from './components/ContentPane'

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 font-sans p-4 sm:p-8">
      <Hero />
      <ContentPane />
    </div>
  )
}

export default App
