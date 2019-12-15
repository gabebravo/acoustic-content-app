import React from 'react';
import { Grid } from '@material-ui/core';
import { getErrorImage } from '../utils';

export default function Error() {
  return (
    <Grid container justify="center" spacing={1}>
      <Grid container item xs={12} md={6} spacing={3}>
        <img src={getErrorImage()} alt="funny error" />
      </Grid>
    </Grid>
  );
}
