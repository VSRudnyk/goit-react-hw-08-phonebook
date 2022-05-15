import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteContactMutation } from 'redux/myContactsSlice';
import { Item, Link, ContactWrapper } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number }) => {
  const [deleteContacts, { isLoading: isDeleting }] =
    useDeleteContactMutation();

  return (
    <Item>
      <p>{name}</p>
      <ContactWrapper>
        <Link href={`tel: ${number}`}>{number}</Link>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<DeleteIcon />}
          onClick={() => deleteContacts(id)}
          disabled={isDeleting}
          size="small"
        >
          Delete
        </Button>
      </ContactWrapper>
    </Item>
  );
};
