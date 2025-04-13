import ContactsCollections from '../db/models/contacts.js';

export const getContacts = () => ContactsCollections.find();

export const getContactsById = (id) => ContactsCollections.findOne({ _id: id });

export const addContact = (payload) => ContactsCollections.create(payload);

export const updateContact = async (_id, payload, options = {}) => {
  const { upsert = false } = options;
  const rawResult = await ContactsCollections.findOneAndUpdate(
    { _id },
    payload,
    {
      upsert,
      includeResultMetadata: true,
    },
  );

  if (!rawResult || !rawResult.value) return null;
  return {
    data: rawResult.value,
    isNew: Boolean(rawResult.lastErrorObject.upserted),
  };
};

export const deleteContactById = (_id) =>
  ContactsCollections.findOneAndDelete({ _id });
