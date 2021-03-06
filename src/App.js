import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

function App (props) {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <main className="items-center px-6">
        <header className="m-4">
          <Router>
            <Link to="/">Home</Link>
            <Link to="/newapp">NewApp</Link>
          </Router>
        </header>
        <section className="m-16">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Counter
          </h1>
          <p className="text-3xl lg:text-5xl font-bold mt-2">{count}</p>
          <button className="bg-indigo-500 font-semibold text-white py-2 px-4 rounded m-2" onClick={() => setCount(count + 1)}>Add</button>
          <button className="bg-red-500 font-semibold text-white py-2 px-4 rounded m-2" onClick={() => setCount(count - 1)}>Sub</button>
        </section>
      </main>
    </div>
  )
}

export default App
