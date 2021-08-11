import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "redux/phonebook/phonebook-actions";
import { contactsSelectors } from "redux/phonebook";

import TextField from "@material-ui/core/TextField";

function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <TextField
        id="standard-multiline-flexible"
        label="Find contacts by name"
        size="medium"
        InputLabelProps={{
          shrink: true,
        }}
        multiline
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}

export default Filter;
