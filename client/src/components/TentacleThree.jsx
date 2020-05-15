import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'

const TentacleThree = ({ clickHandler }) => {
  return (
    <React.Fragment>
      <Grid container spacing={3} direction='column' justify='center' alignItems='center'>
        <Grid item>
          <Typography>You are on TV! Due to the new evidence, the police are able to solve one of Vancouver’s most puzzling cold cases. Your project is delayed significantly. However, one day, you receive a letter informing you that a local charity is offering to donate you $50,000 for your role in the case. A fountain bearing your name will also be erected downtown. Do you:</Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => clickHandler('tentacle_four')}>
            <Typography>1. Accept! You’ve already lost money because of the delays, and are worried you won’t be able to resume building until next year.</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={() => clickHandler('tentacle_three_yoga')}>
            <Typography>2. Thank the charity for their kind offer, but suggest they donate the money to a project which is more community oriented. Perhaps the Vancouver Heritage Foundation? You still receive the fountain.</Typography>
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default TentacleThree
