import { useContext } from 'react';
import { SubmitionContext } from '../App';
import RiTa from 'rita';

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

const BlackoutElements = () => {
    const submitionA = useContext(SubmitionContext).submitionA
    let text = submitionA ? submitionA.original : ""
    let tokens = RiTa.tokenize(text);
    tokens = shuffle(tokens)
    text = RiTa.untokenize(tokens)
    return<p>{text}</p>
}

export default BlackoutElements