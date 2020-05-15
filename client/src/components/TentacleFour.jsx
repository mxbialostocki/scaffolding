import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'

const TentacleFour = ({ clickHandler }) => {
  return (
    <React.Fragment>
      <Grid container spacing={3} direction='column' justify='center' alignItems='center'>
        <Grid item>
          <Typography>With the donation, you are able to resume building just in time for Spring. The foundations are laid and preparations are made to begin building the frame. However, when you look at the plan you realise that there has been a mistake. The original plan had two stories, but this plan only has one! You point this out to the site manager, who tells you that you will need to resubmit a new consent form to the council. Do you:</Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => clickHandler('tentacle_four_termites')}>
            <Typography>1. Ignore their advice. It took the council months to approve your first application. On a project this size the council is unlikely to check-in anyway. Make it two stories!</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={() => clickHandler('tentacle_five')}>
            <Typography>2. While you decide that it’s not worth your time dealing with the council again, you also don’t want to break any laws. You will have sacrifice the upstairs gym-room.</Typography>
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default TentacleFour
