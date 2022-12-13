import { useContext } from 'react';
import { SubmitionContext } from '../App';
import { untokenize } from 'rita';
import './ResultElements.css'

const ResultElements = () => {
    const submitions = useContext(SubmitionContext)
    let bTokens = []
    submitions.submitionB.forEach(element => {
        if(!element.blacked){
            bTokens.push(element.token)
        }
    }); 

    const aText = submitions.submitionA.original
    const bText = untokenize(bTokens)
    const aAdd = submitions.submitionA.from
    const bAdd = submitions.submitionA.to

    return<div className='flex-left' id='split'>
        <div className='flex-top' id='half'>
            <box><p className='addy'>From: {aAdd}</p></box>
            <box><p className='addy'>To: {bAdd}</p></box>
            <p className='letters'>{aText}</p>
        </div>
        <div className='flex-top' id='half'>
            <box><p className='addy'>From: {bAdd}</p></box>
            <box><p className='addy'>To: {aAdd}</p></box>
            <p className='letters'>{bText}</p>
        </div>
    </div>
}

export default ResultElements