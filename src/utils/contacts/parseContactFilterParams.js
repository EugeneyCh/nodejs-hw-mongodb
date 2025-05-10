import { contactsType } from '../../constants/contacts.js';

export const parseContactFilterParams = ({ isFavourite, contactType }) => {
  let parsedIsFavourite;

  if (isFavourite === 'true') parsedIsFavourite = true;
  else if (isFavourite === 'false') parsedIsFavourite = false;
  // else if (typeof isFavourite === 'boolean') parsedIsFavourite = isFavourite;
  else parsedIsFavourite = undefined;

  const parsedType = contactsType.includes(contactType)
    ? contactType
    : undefined;
  console.log('parsedType is ...', parsedType, 'Type is...', contactType);

  return { type: parsedType, isFavourite: parsedIsFavourite };
};
