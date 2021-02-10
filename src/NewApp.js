import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './NewApp'

export function App (props) {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <main className="h-full flex items-center px-6">
        <Router>
          <div>
            <Route exact path='/' component={Home}/>
          </div>
        </Router>
        <section className="w-full  m-16">
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
