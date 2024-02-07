import React, { useReducer, FC, useState, useEffect } from 'react';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import { contactsReducer, AppState } from './reducers/contactsReducer';
import ContactList from './components/ContactList';
import { Contact } from './types';
import EditModal from './components/EditModal';

const initialState: AppState = {
  contacts: []
};

const App: FC = () => {
  const [state, dispatch] = useReducer(contactsReducer, initialState);

  const [showModal, setShowModal] = useState(false);
  const [dataToEdit, setDataToEdit] = useState<Contact | undefined>(undefined);

  const handleEdit = React.useCallback((id: number) => {
    setDataToEdit(state.contacts.find((contact) => contact.id === id));
    setShowModal(true);
  }, [state.contacts]);

  useEffect(() => {
    if (!showModal) {
      setDataToEdit(undefined);
    }
  }, [showModal]);

  const toggleModal = React.useCallback(() => {
    setShowModal((show) => !show);
  }, []);

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <ContactForm
          dispatch={dispatch}
          dataToEdit={dataToEdit}
          toggleModal={toggleModal}
        />
        <hr />
        {state.contacts.length > 0 && (
          <ContactList
            contacts={state.contacts}
            handleEdit={handleEdit}
            dispatch={dispatch}
          />
        )}
      </div>
   
      <EditModal
        showModal={showModal}
        dataToEdit={dataToEdit}
        toggleModal={toggleModal}
        dispatch={dispatch}
      />
    </>
  );
};

export default App;
