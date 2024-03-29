import React, { FC } from 'react';
import { Contact, Action } from '../types';
import ContactItem from './ContactItem';

interface ContactListProps {
  contacts: Contact[];
  handleEdit: (id: number) => void;
  dispatch: React.Dispatch<Action>;
}

const ContactList: FC<ContactListProps> = ({ contacts, handleEdit, dispatch }) => {
  return (
    <div className='contacts-list'>
      <h3 className='contacts-list-title'>Contact Table</h3>
      <div className='contacts-list-table-container'>
        <table className='contacts-list-table'>
          <thead className='contacts-list-header'>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th>Home Address</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <ContactItem
                key={contact.id} 
                {...contact}
                handleEdit={handleEdit} 
                dispatch={dispatch} 
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;
