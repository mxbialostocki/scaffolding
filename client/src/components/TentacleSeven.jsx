import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'

const TentacleSeven = ({ clickHandler }) => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item>
          <Typography>The site manager gives you the silent treatment. The builders work through the storm, and finally, the frame is completed. Sometime in the afternoon, a nearby Elm tree is struck by lightning and catches fire. You watch it for a while, and then realise that the blaze is dangerously close to your site. The flames are getting larger and larger. Do you:</Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => clickHandler('tentacle_seven_scaffolding')}>
            <Typography>1. Call the fire-brigade!</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={() => clickHandler('tentacle_eight')}>
            <Typography>2. Your ex-partner is a fire-fighter and you have been successfully avoiding each other for two years. So instead, you assemble a group of builders to help you put out the fire. You find every vessel you can, fill it with water and rush over to the Elm tree.</Typography>
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default TentacleSeven
