import './App.css'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import { getData } from './api/getData'
import { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState({headline: "", image: "", facttext: ""});
  
  const getDataAPICall = async () => {
    setData(await getData());
  }
  
  useEffect(() => {
    getDataAPICall();
  }, [])

  const getNewFact = () => {
    getDataAPICall();
  }

  return (
    <>

      <Header></Header>


      <div className="container-fluid main-container">
        <div className="row align-items-start">
          <div className="col-12">
            <Card facts={data}></Card>
          </div>
        </div>
        <div className="row align-items-start">
          <div className="col-12">
            <ul className="nav flex-column generate-column">
                <button type="button" className="btn btn-secondary" onClick={getNewFact}>New Fact</button>
            </ul>
          </div>
        </div>

      </div>

    </>
  )
}

export default App
