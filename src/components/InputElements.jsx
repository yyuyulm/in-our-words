import { Formik, Field, Form } from 'formik';
import { useState , useContext } from 'react';
//import { SubmitionContext } from '../App';
import './InputElements.css'


const InputElements = (props) => {
  //const stage = useContext(SubmitionContext).stage
  //const show = stage != 1;

  const [submitted,setSubmitted] = useState(false)

  return <Formik
    initialValues={{
      from : '',
      to : '',
      original: '',
    }}
    onSubmit={async(values , actions) => {
      //alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
      setSubmitted(true);
      //await new Promise((r) => setTimeout(r, 5000));
      props.callback(values);
    }}
  >
    <Form className="flex-top" id="inputs">
      <div className="flex-left">
        <label htmlFor="from">From:</label>
        <Field
        id="from"
        name="from"
        placeholder="mylove@earth.com"
        type="text"
        /><br/>
      </div>

      <div className="flex-left">
        <label htmlFor="to">To:</label>
        <Field
          id="to"
          name="to"
          placeholder="yourlove@earth.com"
          type="text"
        /><br/>
        <label htmlFor="original"></label>
      </div>

      <div className="text-box">
      <Field
        id="original"
        name="original"
        placeholder="what do you want them to hear?"
        as="textarea"
      />
      </div>

      <div className='submit-button'>
        { submitted ? 
          <p>Submitted! Now Pass it to you receipient!</p> :
          <div className="text-center">
            <button type="submit">Send</button>
          </div> }
      </div>
    </Form>
  </Formik>
}

export default InputElements