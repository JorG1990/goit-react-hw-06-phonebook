import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";
import { Form } from "./Form/Form";
import { Section } from "./Section/Section";

export const App = () => {
  return (
    <>
      <Section title="phonebook">
        <Form />
      </Section>
      <Section title="contacts">
        <Filter />
        <Contacts />
      </Section>
    </>
  );
};
