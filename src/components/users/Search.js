import React, {  Fragment ,useState} from "react";
import propTypes from "prop-types";

const Search = ({searchUsers,showClear,clearUsers,setAlert}) => {
const [text,setText] = useState('');
 const onSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
     setAlert("لطفا واژه ای برای جستجو وارد کنید", "light");
    } else {
     searchUsers(text);
     setText('');
    }
  };
  const onChange = (e) => setText(e.target.value);

    return (
      <Fragment>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="searchinput">جستجوی کاربران در گیت هاب</label>
            <input
              type="text"
              name="text"
              className="form-control"
              id="searchinput"
              placeholder="جستجو را شروع کنید..."
              value={text}
              onChange={onChange}
            />
          </div>
          <input
            type="submit"
            value="جستجو کن"
            className="btn btn-primary btn-block"
          />
        </form>
        {showClear && (
          <button
            className="btn btn-dark btn-block mt-3"
            type="submit"
            name="clearButton"
            onClick={clearUsers}
          >
            پاک کردن
          </button>
        )}
      </Fragment>
    );
  }
Search.propTypes = {
  searchUsers: propTypes.func.isRequired,
  clearUsers: propTypes.func.isRequired,
  showClear: propTypes.bool.isRequired,
  setAlert: propTypes.func.isRequired,
};

export default Search;
