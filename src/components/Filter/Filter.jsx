// import PropTypes from 'prop-types';
import { Form, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Form>
      <label htmlFor="filter">Find contact by name</label>
      <Input
        type="text"
        id="filter"
        onChange={onChange}
        value={value}
        autoComplete="off"
      />
    </Form>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
