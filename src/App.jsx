import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import Screenshots from './components/Screenshots'
import Pricing from './components/Pricing'
import DownloadBanner from './components/DownloadBanner'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-background text-slate-200 min-h-screen">
      <Nav />
      <Hero />
      <Features />
      <Screenshots />
      <Pricing />
      <DownloadBanner />
      <Footer />
    </div>
  )
}
