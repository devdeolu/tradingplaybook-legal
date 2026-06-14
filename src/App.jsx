import Nav from './components/Nav'

export default function App() {
  return (
    <div className="bg-background text-slate-200 min-h-screen">
      <Nav />
      <div className="h-screen flex items-center justify-center">
        <p className="text-primary text-lg">Nav task complete</p>
      </div>
    </div>
  )
}
