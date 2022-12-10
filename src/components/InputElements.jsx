import { Formik, Field, Form } from 'formik';
import { useContext } from 'react';
import { SubmitionContext } from '../App';
import './InputElements.css'
import min from '../assets/min.svg'
import max from '../assets/max.svg'
import close from '../assets/close.svg'


const InputElements = (props) => {
  return <Formik
    initialValues={{
      from : '',
      to : '',
      original: '',
    }}
    onSubmit={async (values , actions) => {
      await new Promise((r) => setTimeout(r, 500));
      //alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
      props.callback(values);
    }}
  >
    <Form>
      <div className='flex-top'>
        <div className="flex-left" id="windowTag">
          <p id="title">In (Y)our Words</p>
          <div className='icon'><img src={min}></img></div>
          <div className='icon'><img src={max}></img></div>
          <div className='icon'><img src={close}></img></div>
        </div>
        
        <div className="flex-top" id="inputs">
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

          <div className="text-center">
            <button type="submit">Send</button>
          </div>
        </div>
      </div>
    </Form>
  </Formik>
}

export default InputElements