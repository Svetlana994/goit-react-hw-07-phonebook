import { useDeleteContactMutation } from "services/phonebook-api-slice";
import { useGetContactsQuery } from "services/phonebook-api-slice";
import { contactsSelectors } from "redux/phonebook/phonebook-selectors";

import Filter from "../Filter/Filter";

import { ContactItem, NumberText } from "./Contacts.styles";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { Skeleton } from "@material-ui/lab";

const Contacts = () => {
  const { data, error, isFetching } = useGetContactsQuery();

  // const options = useSelector(contactsSelectors.getfilteredContacts);

  const [
    deleteContact, // This is the mutation trigger
    { isLoading: isUpdating }, // This is the destructured mutation result
  ] = useDeleteContactMutation();

  return (
    <>
      <Filter />
      <ul>
        {/* {options?.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              {!isUpdating ? (
                <>
                  <span style={{ width: 150 }}>{name}:</span>
                  <NumberText>{number}</NumberText>
                  <Button
                    startIcon={<DeleteIcon fontSize="small" />}
                    variant="outlined"
                    color="primary"
                    onClick={() => deleteContact(id)}
                  >
                    Delete
                  </Button>
                </>
              ) : (
                <Skeleton height={20} width="100%" />
              )}
            </ContactItem>
          );
        })} */}
      </ul>
    </>
  );
};

export default Contacts;
