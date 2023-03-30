import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactItem } from './Contact/Contact';
import { Filter } from './Filter/Filter';
import { GlobalStyles } from './GlobalStyles';
import { Wrapper } from './App.module';

export default function App() {
  return (
    <Wrapper>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <ContactList>
        <Filter />
        <ContactItem />
      </ContactList>
      <GlobalStyles />
    </Wrapper>
  );
}

export { App };
