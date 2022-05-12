import { useLoginMutation } from 'redux/authAPI';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Form,
  Input,
  Submit,
  ErrorMessage,
  Container,
} from './LoginView.styled';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Mail is required'),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export default function LoginView() {
  const [logIn] = useLoginMutation();

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = values => {
    logIn(values);
    resetField('email');
    resetField('password');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <Input type="text" id="email" name="email" {...register('email')} />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>

        <label htmlFor="password">Password</label>
        <Input
          type="password"
          name="password"
          id="password"
          {...register('password')}
        />
        <ErrorMessage>{errors.number?.message}</ErrorMessage>
        <Submit type="submit">Log in</Submit>
      </Form>
    </Container>
  );
}
