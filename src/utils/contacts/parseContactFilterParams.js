import { contactType } from '../../constants/contacts.js';

export const parseContactFilterParams = ({ isFavourite, type }) => {
  let parsedIsFavourite;

  if (isFavourite === 'true') parsedIsFavourite = true;
  else if (isFavourite === 'false') parsedIsFavourite = false;
  // else if (typeof isFavourite === 'boolean') parsedIsFavourite = isFavourite;
  else parsedIsFavourite = undefined;

  const parsedType = contactType.includes(type) ? type : undefined;
  console.log('parsedIsFavourite is ...', parsedIsFavourite);

  return { type: parsedType, isFavourite: parsedIsFavourite };
};
