/*****************************************
 * * Nadeem Abomokh 206622755
 * * Mohammad Hussen 208133454
 * * 45/4
 *****************************************/

import { fields } from "../Forms/FormValues";

function ContactInfo(props) {
  const { contact } = props;
  // this will check if the contact are empty if yes return null
  if (!contact) return null;

  return (
    <div className="info">
      {fields.map((z) => {
        return (
          <div key={z.name} className="form-row">
            <label htmlFor={z.name}>{z.name}</label>

            <input
              disabled
              type="text"
              id={z.name}
              value={contact[z.name] || ""}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ContactInfo;
