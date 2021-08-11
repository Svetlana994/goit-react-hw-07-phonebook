import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsOperations } from "redux/phonebook";
import { contactsSelectors } from "redux/phonebook";

import Section from "./components/Section/Section";
import Contacts from "./components/Contacts/Contacts";
import FormContacts from "./components/Form/Form";

function App() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.getContacts()), [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <FormContacts />
      </Section>

      {contacts.length > 0 && (
        <Section title="Contacts">
          <Contacts />
        </Section>
      )}
    </>
  );
}

export default App;
