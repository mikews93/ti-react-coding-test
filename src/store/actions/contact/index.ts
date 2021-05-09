import { GENERAL_ROUTES } from '../../../constants';

const postContact = (data: any): ReducerAction => ({
  payload: {
    method: 'POST',
    entity: 'contact',
    url: `${GENERAL_ROUTES.contact}`,
    onSuccess: (contact: Contact) => ({ entities: contact }),
    data
  }
});

// eslint-disable-next-line
export default { postContact };
