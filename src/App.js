import { useGetContactsQuery } from "services/phonebook-api-slice";

import Section from "./components/Section/Section";
import Contacts from "./components/Contacts/Contacts";
import FormContacts from "./components/Form/Form";

function App() {
  const { data, error, isFetching } = useGetContactsQuery();

  return (
    <>
      <Section title="Phonebook">
        <FormContacts contacts={data} />
      </Section>

      {data?.length > 0 && (
        <Section title="Contacts">
          <Contacts />
        </Section>
      )}
    </>
  );
}

export default App;
