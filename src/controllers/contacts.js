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
  filters.userId = req.user._id;

  // console.log('Filters is ...', filters);
  //

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
  const { _id: userId } = req.user;

  const data = await getContactsById(id, userId);
  // console.log('Data is ...', data);

  if (!data) {
    throw createHttpError(404, `Contact with id=${id} not found`);
  }

  // if (data.userId.toString() !== req.user._id.toString()) {
  //   throw createHttpError(
  //     403,
  //     'You do not have permission to access this contact',
  //   );
  // }

  res.json({
    status: 200,
    message: `Successfully found contact with id=${id}!`,
    data,
  });
};

export const addContactController = async (req, res) => {
  const { _id: userId } = req.user;
  const data = await addContact({ ...req.body, userId });

  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data,
  });
};

export const upsertContactController = async (req, res) => {
  const { id } = req.params;
  const { _id: userId } = req.user;
  const { data, isNew } = await updateContact({ id, userId }, req.body, {
    upsert: true,
  });
  const status = isNew ? 201 : 200;

  // if (data.userId.toString() !== req.user._id.toString()) {
  //   throw createHttpError(
  //     403,
  //     'You do not have permission to access this contact',
  //   );
  // }

  res.status(status).json({
    status,
    message: 'Successfully update contact',
    data,
  });
};

export const patchContactController = async (req, res) => {
  const { id } = req.params;
  const { _id: userId } = req.user;
  const result = await updateContact({ id, userId }, req.body);
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
  const { _id: userId } = req.user;
  const data = await deleteContactById(id, userId);

  if (!data) {
    throw createHttpError(404, `Contact not found`);
  }

  // if (data.userId.toString() !== req.user._id.toString()) {
  //   throw createHttpError(
  //     403,
  //     'You do not have permission to access this contact',
  //   );
  // }

  res.status(204).send();
};
