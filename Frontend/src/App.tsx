import './App.css'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import { getData } from './api/getData'
import { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState({headline: "", image: "", body: ""});
  
  const getDataAPICall = async () => {
    setData(await getData());
  }
  
  useEffect(() => {
    getDataAPICall();
  }, [])


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
            <Nav></Nav>
          </div>
        </div>

      </div>

    </>
  )
}

export default App
