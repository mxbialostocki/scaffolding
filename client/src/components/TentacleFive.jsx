import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const TentacleFive = () => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item>
          <Typography>The wood for the frame is brought to the site but it is full of termites! You are about to lose it and fire everyone on the spot, but you catch yourself at the last minute. New wood is ordered and – after a week-long delay – the frame is finally ready for construction and a scaffolding is erected. It’s finally happening! As you walk around the site to get some good photos, you nearly break your ankle on something that rolls under your shoe. You bend down and realise that it’s a small bolt. Do you:</Typography>
        </Grid>
        <Grid item>
          {/* sets activeModule state to TentacleSix */}
          <Typography>1. Pick the bolt up. Rolling it around the palm of your hand, you realise that it might be important and hobble over to give it to the nearest builder.</Typography>
        </Grid>
        {/* sets active Module to NewScaffolding */}
        <Grid>
          <Typography>2. Curse at the pain flashing through your ankle. You leave the bolt on the ground and hobble around the corner to get a better photo of the scaffolding.</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default TentacleFive
