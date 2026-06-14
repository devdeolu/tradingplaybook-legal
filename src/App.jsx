import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'

export default function App() {
  return (
    <div className="bg-background text-slate-200 min-h-screen">
      <Nav />
      <Hero />
      <Features />
    </div>
  )
}
