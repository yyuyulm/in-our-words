import { Formik, Form } from 'formik';
import { useContext , useState } from 'react';
import { SubmitionContext } from '../App';
import { useD3 } from './useD3';
import {tokenize} from 'rita';
import './BlackoutElements.css'
import Words from './Words';



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

const BlackoutElements = (props) => {
    const submitionA = useContext(SubmitionContext).submitionA
    const sender = submitionA.from
    const text = submitionA ? submitionA.original : ""
    const tokens = tokenize(text);
    const shuffledTokens = shuffle(tokens)

    let data = [];
    shuffledTokens.forEach((value, i) => {
        data.push({i: i, token: value, blacked: false, hovered: false})
    });
    const [wordState,setWordState] = useState(data)

    const flexboxRef = useD3(
        (flexbox) => {
            Words(flexbox, wordState, setWordState);
        },[wordState]
    );
    
    const [submitted,setSubmitted] = useState(false)
    return<Formik
    initialValues={{
        data: wordState
    }}
    onSubmit={async(values , actions) => {
      //alert(JSON.stringify(values, null, 2));
      setSubmitted(true);
      //await new Promise((r) => setTimeout(r, 5000));
      actions.setSubmitting(false);
      props.callback(wordState);
    }}
  >
    <Form className="flex-top" id="inputs">
        <box><p>{sender} sent you a message! Reply with their words to retrieve the text</p></box>
        <div ref = {flexboxRef} className="flex-left" id="words"></div>
        <div className='submit-button'>
        { submitted ? 
          <p>Submitted! Now share the screen with your receipient!</p> :
          <box><div className="text-center">
            <button type="submit">Send</button>
          </div></box>}
      </div>
    </Form>
  </Formik>
}

export default BlackoutElements