import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'

const TentacleSix = ({ clickHandler }) => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item>
          <Typography>The builder looks at the bolt that you have just given them with horror and rushes over to the site manager. The scaffolding is evacuated and de-assembled, then re-assembled with the crucial bolt fixed in place. You avert a disaster and construction of the frame begins! A couple of weeks pass without incident, but then, on the eve of the frame’s completion, an electrical storm hits. The site manager advises you to stop construction until the stop has passed. Do you:</Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => clickHandler('tentacle_seven')}>
            <Typography>1. Decide to build through the storm – the frame is so close to being finished! What’s a bit of rain?</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={() => clickHandler('tentacle_six_scaffolding')}>
            <Typography>2. Listen to the site manager. The wind has picked up and the rain has reduced the site to a muddy swap. You call off the build for a few days.</Typography>
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default TentacleSix
