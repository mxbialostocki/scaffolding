import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'

const TentacleFiveScaffolding = ({ clickHandler }) => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item>
          <Typography>You are taking a photo when there is a shout and the sound of grating metal. You watch on in horror as one bar of scaffolding separates from the frame and crashes to the ground, taking the entire edifice with it. A thorough investigation is launched by the site manager, who discovers that the central bracing was missing a bolt. Your swollen ankle throbs. Please re-erect your scaffolding.</Typography>
          <Button onClick={() => clickHandler('tentacle_five')}>
            <img src='https://i.ibb.co/hWjht1M/scaffolding.jpg' />
          </Button>
          <Typography>“We could say scaffolding is a furnishing insofar as it supports the desires of our bodies.”</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default TentacleFiveScaffolding
