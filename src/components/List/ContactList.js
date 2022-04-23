/*****************************************
 * * Nadeem Abomokh 206622755
 * * Mohammad Hussen 208133454
 * * 45/4
 *****************************************/

import "./contactList.css";
// this function will receive an object parameter props that contains all the data of the contact
function ContactList(props) {
  const { contacts } = props;
  return (
    <div className="list">
      {contacts.map((person) => {
        return (
          <div className="list-item">
            <div className="info">
              <div>
                <img
                  src={
                    (person.imageUrl = "none"
                      ? (person.imageUrl =
                          "https://i.stack.imgur.com/l60Hf.png")
                      : person.imageUrl)
                  }
                  alt=""
                />
              </div>
              <div className="nameInRow">{person.name}</div>
            </div>
            <div className="actions">
              <button
                className="primary-1"
                // when clicked on the button the info modal will show up
                onClick={() => props.onInfo(person)}
              >
                Info
              </button>

              <button
                className="secondary"
                // when clicked on the button the EDIT modal will show up and you can change the information
                onClick={() => props.onEdit(person)}
              >
                Edit
              </button>
              {/* When clicked it will remove that specific row from the contact list */}
              <button className="remove" onClick={() => props.onDelete(person)}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ContactList;
