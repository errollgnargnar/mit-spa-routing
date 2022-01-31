import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import { Container } from 'react-bootstrap';
import Home from './components/Home';
import Stats from './components/Stats'

const ContainerMain = ({currHashLink}) => {
  switch (currHashLink) {
    case "home": 
      return (
        <Container>
          <Home />
        </Container>
      )
    break;
    case "price": 
    return (
      <Container>
        <Stats />
      </Container>
    )
    break;
    default:
      return (
        <div> nothing here</div>
      )
  }
}

const App = () => {
  const [currHashLink, setCurrHashLink] = useState('home');

  return (
    <>
        <Navigation setCurrHashLink={setCurrHashLink} />
        <br/>
        <ContainerMain currHashLink={currHashLink} />
    </>
  )
}


export default App;
