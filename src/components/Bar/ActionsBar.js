/*****************************************
 * * Nadeem Abomokh 206622755
 * * Mohammad Hussen 208133454
 * * 45/4
 *****************************************/

import './Bar.css';
// class that responsible for the header of list (search+buttons)

function ActionsBar(props) {
  const { setSearchValue, total, deleteAll } = props;

  // targets the input field char by char to get better search
  function onChange(event) {
    setSearchValue(event.target.value);
  }
  return (
    <div>
      <div className="ActionsBar">
        {/* div for search  field*/}
        <div className="search">
          <input type="search" onChange={onChange} />
          <span>{total} results</span>
        </div>

        {/* div for add buttons */}
        <div className="actions">
          <button className="primary" onClick={props.onAdd}>
            <i className="fas fa-user-plus" />
          </button>
        {/* this button onClick Will call the delete all function and will delete all the contacts from the list */}
          <button className="remove" onClick={deleteAll}>
            <i className="fas fa-trash" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ActionsBar;
