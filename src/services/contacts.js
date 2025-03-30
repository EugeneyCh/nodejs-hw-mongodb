import ContactsCollections from '../db/models/contacts.js';

export const getContacts = () => ContactsCollections.find();

export const getContactsById = (id) => ContactsCollections.findOne({ _id: id });
