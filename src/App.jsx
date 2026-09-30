import './App.css'
import Hero from './components/Hero'
import ThemeSwitch from './components/ThemeSwitch'
import Highlights from './components/Highlights'
import Overview from './components/Overview'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <main className="main-content">
      <header className="main-content__header">
        <Hero />
        <ThemeSwitch />
      </header>
      <Highlights />
      <Overview />
    </main>
    <Footer />
    </>
  )
}

export default App
