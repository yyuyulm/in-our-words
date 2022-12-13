import { Formik, Field, Form } from 'formik';
import { useState , useContext } from 'react';
import './InputElements.css'


const InputElements = (props) => {

  const [submitted,setSubmitted] = useState(false)

  return <Formik
    initialValues={{
      from : '',
      to : '',
      original: '',
    }}
    onSubmit={async(values , actions) => {
      //alert(JSON.stringify(values, null, 2));
      setSubmitted(true);
      await new Promise((r) => setTimeout(r, 5000));
      actions.setSubmitting(false);
      props.callback(values);
    }}
  >
    <Form className="flex-top" id="inputs">
      <div className="flex-left">
        <label htmlFor="from">From:</label>
        <Field
        id="from"
        name="from"
        placeholder="mylove@earth.net"
        type="text"
        /><br/>
      </div>

      <div className="flex-left">
        <label htmlFor="to">To:</label>
        <Field
          id="to"
          name="to"
          placeholder="yourlove@earth.net"
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