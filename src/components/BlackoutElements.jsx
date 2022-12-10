import { useContext } from 'react';
import { SubmitionContext } from '../App';

const BlackoutElements = () => {
    const submitionA = useContext(SubmitionContext).submitionA
    const text = submitionA ? submitionA.original : ""
    return<p>{text}</p>
}

export default BlackoutElements