import createHttpError from 'http-errors';

import {
  getContacts,
  getContactsById,
  addContact,
  updateContact,
  deleteContactById,
} from '../services/contacts.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { parseContactFilterParams } from '../utils/contacts/parseContactFilterParams.js';

import { contactSortFields } from '../db/models/Contacts.js';

export const getContactsController = async (req, res) => {
  const paginationParams = parsePaginationParams(req.query);
  const sortParams = parseSortParams(req.query, contactSortFields);
  const filters = parseContactFilterParams(req.query);

  console.log('Filters is ...', filters);

  const data = await getContacts({
    ...paginationParams,
    ...sortParams,
    filters,
  });

  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data,
  });
};

export const getContactsByIdController = async (req, res) => {
  const { id } = req.params;

  const data = await getContactsById(id);
  // console.log('Data is ...', data);

  if (!data) {
    throw createHttpError(404, `Contact with id=${id} not found`);
  }
  res.json({
    status: 200,
    message: `Successfully found contact with id=${id}!`,
    data,
  });
};

export const addContactController = async (req, res) => {
  const data = await addContact(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data,
  });
};

export const upsertContactController = async (req, res) => {
  const { id } = req.params;
  const { data, isNew } = await updateContact(id, req.body, {
    upsert: true,
  });
  const status = isNew ? 201 : 200;

  res.status(status).json({
    status,
    message: 'Successfully update contact',
    data,
  });
};

export const patchContactController = async (req, res) => {
  const { id } = req.params;
  const result = await updateContact(id, req.body);
  console.log('Id & result = ', id, result);

  if (!result) {
    throw createHttpError(404, `Contact not found`);
  }

  res.json({
    status: 200,
    message: 'Successfully patched a contact!',
    data: result.data,
  });
};

export const deleteContactController = async (req, res) => {
  const { id } = req.params;
  const data = await deleteContactById(id);

  if (!data) {
    throw createHttpError(404, `Contact not found`);
  }

  res.status(204).send();
};
