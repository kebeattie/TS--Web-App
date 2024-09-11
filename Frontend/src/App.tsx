import './App.css'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Card from './components/Card/Card'

function App() {

  return (
    <>

      <Header></Header>


      <div className="container-fluid main-container">
        <div className="row align-items-start">
          <div className="col-4">
            <Nav></Nav>
          </div>
          <div className="col-8 card-column">
            <Card></Card>
          </div>
        </div>

      </div>

    </>
  )
}

export default App
