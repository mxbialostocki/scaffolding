import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'

const TentacleFourTermites = ({ clickHandler }) => {
  return (
    <React.Fragment>
      <Grid container spacing={3} direction='column' justify='center' alignItems='center'>
        <Grid item>
          <Typography>The builders refuse to risk their jobs on your project and if they quit, your foundations will – literally – crumble. You are left with no choice but to agree to the one-story plan. The wood for the frame is brought to the site but it is full of termites! You lose it and fire everyone on the spot. Your foundations crumble and the house is never built.</Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => clickHandler('tentacle_one')}>
            <Typography>Click here to play again.</Typography>
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default TentacleFourTermites
