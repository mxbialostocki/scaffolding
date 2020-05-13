import React from 'react'
import { Typography, Grid } from '@material-ui/core'

const Begin = ({ clickHandler }) => {
  return (
    <React.Fragment>
      <Grid container>
        <div role='button' onClick={() => clickHandler()}>
          <Typography variant='h1' style={{ textAlign: 'center' }}>house image goes here</Typography>
          <div alt="this page is full of ghosts" style={{ display: 'none', lineHeight: '0' }}></div>
        </div>
      </Grid>
    </React.Fragment>
  )
}

export default Begin
