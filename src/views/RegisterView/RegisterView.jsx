import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Typography, Paper, Box, Grid } from '@mui/material';
import { useRegisterMutation } from 'redux/authAPI';

export default function RegisterView() {
  const [registerUser] = useRegisterMutation();
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
    resetField,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => {
    registerUser(data);
    resetField('name');
    resetField('email');
    resetField('password');
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
}
