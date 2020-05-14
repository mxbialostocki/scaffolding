import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import TentacleOneDepression from './TentacleOneDepression'
import TentacleTwo from './TentacleTwo'

const TentacleOne = () => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item>
          <Typography>Welcome! Please choose an option to build your Super-Suburban Dream Home&trade;. You already have a blueprint and a building site, and are ready to start building! Do you:</Typography>
        </Grid>
        <Grid item>
          {/* sets activeModule state to TentacleOneDepression */}
          <Typography>1. Start from scratch. You visit the local hardware store to enquire about different wood grains. You want everything to be perfect.</Typography>
        </Grid>
        {/* sets active Module to TentacleTwo */}
        <Grid>
          <Typography>2. Find a shortcut. Your friend is a builder, and they agree to help you out. There is some leftover stone from another site which they can use to lay the foundations. They can begin site preparations on, say, Monday? You accept their offer.</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default TentacleOne
