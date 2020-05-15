import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'

const TentacleOneDepression = ({ clickHandler }) => {
  return (
    <React.Fragment>
      <Grid container spacing={3} direction='column' justify='center' alignItems='center'>
        <Grid item>
          <Typography>While you were at the hardware store, the company you have shares in goes broke and their stocks plummet. You lose thousands, and realise that there is no other option: you are forced to abandon your project and move in with you sister.</Typography>
        </Grid>
        <Grid>
          <Button onClick={() => clickHandler('tentacle_one')}>
            <Typography>Click here to play again.</Typography>
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default TentacleOneDepression
