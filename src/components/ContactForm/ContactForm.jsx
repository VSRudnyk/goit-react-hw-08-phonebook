import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import { Form, Submit, Input, ErrorMessage } from './ContactForm.styled';
import { TextField, Button, Typography, Paper, Box, Grid } from '@mui/material';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup
    .string()
    .required('This field is Required')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number is not valid'
    ),
});

export const ContactForm = ({ addContact }) => {
  const validationSchema = yup.object().shape({
    name: yup.string().required('Fullname is required'),

    email: yup.string().required('Email is required').email('Email is invalid'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => {
    // const values = JSON.stringify(data, null, 2);
    console.log(JSON.stringify(data, null, 2));
    // addContact(values);
  };
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          width: 450,
        }}
      >
        <Box
          sx={{
            width: 400,
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
                {...register('fullname')}
                error={errors.fullname ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.fullname?.message}
              </Typography>
            </Grid>

            <Grid item xs={5} sm={5}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
                margin="dense"
                {...register('email')}
                error={errors.email ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.email?.message}
              </Typography>
            </Grid>
            <Grid item xs={5} sm={5}>
              <TextField
                required
                id="password"
                name="password"
                label="Password"
                type="password"
                fullWidth
                margin="dense"
                {...register('password')}
                error={errors.password ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.password?.message}
              </Typography>
            </Grid>
          </Grid>

          <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = values => {
//     addContact(values);
//     reset();
//   };

//   return (
//     <>
//       {/* <Form onSubmit={handleSubmit(onSubmit)}>
//         <label htmlFor="name">Name</label>
//         <Input type="text" id="name" name="name" {...register('name')} />
//         <ErrorMessage>{errors.name?.message}</ErrorMessage>

//         <label htmlFor="number">Number</label>
//         <Input type="tel" name="number" id="number" {...register('number')} />
//         <ErrorMessage>{errors.number?.message}</ErrorMessage>

//         <Submit variant="contained" size="small">
//           Add contact
//         </Submit>
//       </Form> */}

//       <FormControl margin="dense" onSubmit={handleSubmit(onSubmit)}>
//         <TextField
//           helperText="Please enter your name"
//           id="name"
//           label="Name"
//           {...register('name')}
//         />
//         <ErrorMessage>{errors.name?.message}</ErrorMessage>

//         <TextField
//           helperText="Please enter your email"
//           id="number"
//           label="Number"
//           {...register('number')}
//         />
//         <ErrorMessage>{errors.number?.message}</ErrorMessage>

//         <TextField
//           required
//           id="email"
//           name="email"
//           label="Email"
//           fullWidth
//           margin="dense"
//           {...register('email')}
//           error={errors.email ? true : false}
//         />
//         <Typography variant="inherit" color="textSecondary">
//           {errors.email?.message}
//         </Typography>

//         <Button variant="contained" size="small">
//           Add contact
//         </Button>
//       </FormControl>
//     </>
//   );
