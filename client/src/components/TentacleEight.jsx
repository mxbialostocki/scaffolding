import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const TentacleEight = () => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item>
          <Typography>You and the builders manage to put out the fire, and the frame is completed that evening. The next day, the doors and window arrive. You are particularly excited about the front door which you bought on craigslist. Designed in the Arts and Crafts style, the door is a genuine antique, and set in the top quarter of the door is a single glass pane engraved with a row of tiny strawberries. You grew up on a strawberry farm and harbour a special affinity with the small fruit. You hold your breath as two builders lift the door off the truck, but it makes it to the front of the house in one piece. This is a big moment for you, and you want to be the first one to walk through the doorway. Do you:</Typography>
        </Grid>
        <Grid item>
          {/* sets activeModule state to TentacleEightScaffolding */}
          <Typography>1. Wait until everyone has left the site, so that no one sees the tears of joy in your eyes.</Typography>
        </Grid>
        {/* sets activeModule to TentacleNine */}
        <Grid>
          <Typography>2. Run over to the door immediately and ask the site-manager to film you opening it.</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default TentacleEight
