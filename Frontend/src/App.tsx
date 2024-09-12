import './App.css'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import { getData } from './api/getData'
import { useState, useEffect } from 'react'

function App() {

  
  
  const [data, setData] = useState({headline: ""});

  const getDataAPICall = async () => {
    setData(await getData());
  }
  
  useEffect(() => {
    getDataAPICall();
  }, [])

  console.log(typeof(data));

  return (
    <>

      <Header></Header>


      <div className="container-fluid main-container">
        <div className="row align-items-start">
          <div className="col-4">
            <Nav></Nav>
          </div>
          <div className="col-8 card-column">
            <Card facts={data}></Card>
          </div>
        </div>

      </div>

    </>
  )
}

export default App
