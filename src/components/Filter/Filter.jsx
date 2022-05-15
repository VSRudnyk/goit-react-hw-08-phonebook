// import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Container } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Container>
      <TextField
        id="outlined-basic"
        label="Find contact by name"
        variant="outlined"
        onChange={onChange}
        value={value}
        autoComplete="off"
      />
      {/* <Input
        type="text"
        id="filter"
        onChange={onChange}
        value={value}
        autoComplete="off"
      /> */}
    </Container>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
