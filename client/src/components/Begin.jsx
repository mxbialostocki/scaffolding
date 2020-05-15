import React from 'react'
import { Grid, Button } from '@material-ui/core'

const Begin = ({ clickHandler }) => {
  return (
    <React.Fragment>
      <Grid container>
        <Button onClick={() => clickHandler()}>
          <img src='https://i.ibb.co/nms88QS/house1.jpg' style={{ maxWidth: '300px' }}/>
          <div alt="this page is full of ghosts" style={{ display: 'none', lineHeight: '0' }}></div>
        </Button>
      </Grid>
    </React.Fragment>
  )
}

export default Begin
