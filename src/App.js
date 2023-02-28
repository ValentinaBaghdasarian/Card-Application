import './App.css';
import Header from './component/header/Header';
import Main from './component/main/Main';
import Instructions from './component/instruction/Instruction';
import Footer from './component/footer/Footer';
import { useState, useEffect } from 'react';


function App() {
  const [isAddCard, setIsAddCard] = useState(false);
  const [cards, setCards] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  
  useEffect(() => {
    if (localStorage.getItem('cards')) {
      setCards(JSON.parse(localStorage.getItem('cards')));
    }
  }, []);

  return (
    <div className='App'>
      <Header
        setIsAddCard={setIsAddCard}
        isSorted={isSorted}
        setIsSorted={setIsSorted}
        cards={cards}
        setCards={setCards}
      />
      <Main
        setIsAddCard={setIsAddCard}
        isAddCard={isAddCard}
        cards={cards}
        setCards={setCards}
      />
      <Instructions />
      <Footer />
    </div>
  );
}
export default App;
