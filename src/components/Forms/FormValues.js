/*****************************************
 * * Nadeem Abomokh 206622755
 * * Mohammad Hussen 208133454
 * * 45/4
 *****************************************/

import './formValues.css';
import { useState, useEffect } from 'react';

// this array will contains all our input requierments and field types
export let fields = [
  { name: 'name', required: true, pattern: '^[A-Za-z]{3,10}$' },
  {
    name: 'Phone *',
    required: true,
    type: 'number',
    pattern: '(050|052|054)-[0-9]{7}',
  },
  { name: 'Address *', required: true },
  { name: 'Email *', required: true, type: 'email' },
  { name: 'imageUrl', type: 'url' },
  { name: 'Text', type: 'text', pattern: '{120}' },
];


function ContactForm(props) {
  const [contact, setContact] = useState(props.editableContact || {});

  function onChange(event) {
    const { value, id } = event.target;
    setContact({ ...contact, [id]: value });
  }

  // on submit it will save the new contact or save the new information
  function onSubmit(event) {
    event.preventDefault(); //disable refresh page
    setContact({});
    props.onSubmit(contact);
  }
  
  useEffect(() => {
    setContact(props.editableContact || {});
  }, [props.editableContact]);
  // this will return the add contact modal
  return (
    <form onSubmit={onSubmit} className="contact-form">
      {/* We put the field data in the map */}
      {fields.map((field) => {
        return (
          <div key={field.name} className="form-row">
            <label htmlFor={field.name}>{field.name}</label>
            <input
              type={field.type || 'text'}
              id={field.name}
              value={contact[field.name] || ''}
              onChange={onChange}
              required={field.required}
              pattern={field.pattern}
            />
          </div>
        );
      })}
      <div className="footer">
        <button className="btn">
          {props.editableContact ? 'Save' : 'Create'}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
