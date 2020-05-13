import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const TentacleFour = () => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item>
          <Typography>With the donation, you are able to resume building just in time for Spring. The foundations are laid and preparations are made to begin building the frame. However, when you look at the plan you realise that there has been a mistake. The original plan had two stories, but this plan only has one! You point this out to the site manager, who tells you that you will need to resubmit a new consent form to the council. Do you:</Typography>
        </Grid>
        <Grid item>
          {/* sets activeModule state to TentacleFourTermites */}
          <Typography>1. Ignore their advice. It took the council months to approve your first application. On a project this size the council is unlikely to check-in anyway. Make it two stories!</Typography>
        </Grid>
        {/* sets active Module to TentacleFive */}
        <Grid>
          <Typography>2. While you decide that it’s not worth your time dealing with the council again, you also don’t want to break any laws. You will have sacrifice the upstairs gym-room.</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default TentacleFour
