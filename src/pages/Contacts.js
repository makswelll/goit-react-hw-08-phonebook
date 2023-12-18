import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from 'components/ContactList/ContactList';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operation';
import { selectIsLoading } from 'redux/contacts/useSelectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <title>Your Contacts</title>
      </div>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <Filter />
      <ContactList />
    </>
  );
}
