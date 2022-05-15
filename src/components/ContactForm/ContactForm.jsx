import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import { Form, Input, Submit, ErrorMessage } from './ContactForm.styled';
import { useAddContactMutation } from 'redux/myContactsSlice';
import { TextField, Button, Typography, Paper, Box, Grid } from '@mui/material';
import { Container } from './ContactForm.styled';

// const schema = yup.object().shape({
// name: yup.string().required(),
// number: yup
//   .string()
//   .required('This field is Required')
//   .matches(
//     /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
//     'Phone number is not valid'
//   ),
// });

export const ContactForm = ({ addContact }) => {
  const { isLoading } = useAddContactMutation();
  const validationSchema = yup.object().shape({
    name: yup.string().required(),
    number: yup
      .string()
      .required('This field is Required')
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Phone number is not valid'
      ),
  });

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => {
    addContact(data);
    resetField('name');
    resetField('number');
  };

  return (
    <Container>
      <Paper
        elevation={3}
        sx={{
          width: 'auto',
        }}
      >
        <Box
          sx={{
            width: 'auto',
          }}
          px={3}
          py={2}
        >
          <Grid>
            <Grid item xs={5} sm={5}>
              <TextField
                required
                id="name"
                name="name"
                label="Name"
                fullWidth
                margin="dense"
                {...register('name')}
                error={errors.name ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.name?.message}
              </Typography>
            </Grid>

            <Grid item xs={5} sm={5}>
              <TextField
                required
                id="number"
                name="number"
                label="Number"
                fullWidth
                margin="dense"
                {...register('number')}
                error={errors.number ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.number?.message}
              </Typography>
            </Grid>
          </Grid>

          <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
              disabled={isLoading}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );

  // const {
  //   register,
  //   handleSubmit,
  //   resetField,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(schema),
  // });
  // const { isLoading } = useAddContactMutation();

  // const onSubmit = values => {
  //   addContact(values);
  //   resetField('name');
  //   resetField('number');
  // };

  // return (
  //   <Form onSubmit={handleSubmit(onSubmit)}>
  //     <label htmlFor="name">Name</label>
  //     <Input type="text" id="name" name="name" {...register('name')} />
  //     <ErrorMessage>{errors.name?.message}</ErrorMessage>

  //     <label htmlFor="number">Number</label>
  //     <Input type="tel" name="number" id="number" {...register('number')} />
  //     <ErrorMessage>{errors.number?.message}</ErrorMessage>
  //     <Submit type="submit" disabled={isLoading}>
  //       Add contact
  //     </Submit>
  //   </Form>
  // );
};
