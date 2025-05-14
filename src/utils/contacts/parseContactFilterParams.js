import { contactsType } from '../../constants/contacts.js';

export const parseContactFilterParams = ({ isFavourite, contactType }) => {
  let parsedIsFavourite;

  if (isFavourite === 'true') parsedIsFavourite = true;
  else if (isFavourite === 'false') parsedIsFavourite = false;
  else parsedIsFavourite = undefined;

  const parsedType = contactsType.includes(contactType)
    ? contactType
    : undefined;

  return { type: parsedType, isFavourite: parsedIsFavourite };
};
