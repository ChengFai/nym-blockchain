import React, { useContext } from 'react';
import { Grid, InputAdornment, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { AppContext } from '../../context/main';
import { Fee } from '../../components';

export const SendForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { currency } = useContext(AppContext);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          {...register('to')}
          required
          variant="outlined"
          id="to"
          name="to"
          label="To"
          fullWidth
          autoFocus
          error={!!errors.to}
          helperText={errors.to?.message}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          {...register('amount')}
          required
          variant="outlined"
          id="amount"
          name="amount"
          label="Amount"
          fullWidth
          error={!!errors.amount}
          helperText={errors.amount?.message}
          InputProps={{
            endAdornment: <InputAdornment position="end">{currency?.major}</InputAdornment>,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Fee feeType="Send" />
      </Grid>
    </Grid>
  );
};
