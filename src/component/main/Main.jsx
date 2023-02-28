import './mainStyle.css';
import { useEffect } from 'react';

export default function Main(props) {
    useEffect(() => { 
      if (props.isAddCard) {
        addCards();
        props.setIsAddCard(false);
      }
    }, [props.isAddCard]);
  
    const addCards = () => {
      const id = Math.round(Math.random() * 1000);
      const randomNumber = Math.round(Math.random() * 1000);
      const numbersArr = props.cards.map(card => card.number);
      
      if (numbersArr.includes(randomNumber)) {
        alert('This number is selected!');
      } else {
        const addedCards = [
          ...props.cards, 
          {
            id: id,
            number: randomNumber
          }
        ];
        props.setCards(addedCards);
        setLocalStorage(addedCards);
      }
    };
  
    const onDeleteCard = (e) => {
      const filteredCards = props.cards.filter(card => card.id !== +e.target.parentNode.id);
      props.setCards(filteredCards);
      setLocalStorage(filteredCards);
    };
  
    const setLocalStorage = (data) => {
      localStorage.setItem('cards', JSON.stringify(data));
    }
      
    return (
      <div className="main">
        {props.cards.map(card => (
          <div key={card.id} className='card' id={card.id}>
            <span className='delete' onClick={onDeleteCard}>X</span>
            <span className='number'>{card.number}</span>
          </div>
        ))}
      </div>
    );
  }