import { useSelector, useDispatch } from "react-redux";
import { contactsOperations } from "redux/phonebook";
import { contactsSelectors } from "redux/phonebook";

import Filter from "../Filter/Filter";

import { ContactItem, NumberText } from "./Contacts.styles";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { Skeleton } from "@material-ui/lab";

const Contacts = () => {
  const options = useSelector(contactsSelectors.getfilteredContacts);
  const isLoading = useSelector(contactsSelectors.getLoading);

  const dispatch = useDispatch();

  return (
    <>
      <Filter />
      <ul>
        {options.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              {!isLoading ? (
                <>
                  <span style={{ width: 150 }}>{name}:</span>
                  <NumberText>{number}</NumberText>
                  <Button
                    startIcon={<DeleteIcon fontSize="small" />}
                    variant="outlined"
                    color="primary"
                    onClick={() =>
                      dispatch(contactsOperations.deleteContact(id))
                    }
                  >
                    Delete
                  </Button>
                </>
              ) : (
                <Skeleton height={20} width="100%" />
              )}
            </ContactItem>
          );
        })}
      </ul>
    </>
  );
};

export default Contacts;
