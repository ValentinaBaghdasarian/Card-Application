import './headerStyle.css';
import { useEffect } from 'react';


export default function Header(props) {
    useEffect(() => {
      props.isSorted && sortingCards();
      return props.setIsSorted(false);
    },  [props.isSorted]);


    const sortingCards = () => {
      let a = props.cards.sort((card1, card2) => card1.number - card2.number)
      console.log(a);
      props.setCards(a);  
  };
    return (
      <header className="header">
        <div className='boxBtn'>
            <button
            className="addCardBtn"
            onClick={() => {
                props.setIsAddCard(true)
            }}
            >
            Add Card
            </button>
            <button
            className="sortCardBtn"
            onClick={() => {
              props.setIsSorted(true)
            }}
            >
            Sort Card
            </button>
        </div>
      </header>
    );
}

