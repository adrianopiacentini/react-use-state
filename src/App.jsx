import { useState } from 'react'
import lang from './data/lang'
function App() {
  const [selectedLang, setSelectedLang] = useState(lang[0])

  return (
    <>
      <div className="container my-5">
        { }
        <div>
          {lang.map(curLang => (
            <button onClick= {() => {setSelectedLang(curLang)}} key={curLang.id} className="btn btn-primary me-2">{curLang.title}</button>
          ))}
        </div>
        <div className="card mt-4 w-50">
          <div className="card-body">
            <h3>{selectedLang.title}</h3>
            <p>{selectedLang.description}</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
