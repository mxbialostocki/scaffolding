import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'

const TentacleTwo = ({ clickHandler }) => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item>
          <Typography>Monday arrives and the weather couldn’t be better. Your friend and his team begin to excavate the site. You are about to leave, when one of the builders cries out. Upon rushing over, you see that they have unearthed what looks like, a human skull. Do you:</Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => clickHandler('tentacle_three')}>
            <Typography>1. Call the police! You’ve heard about several missing-person cases in this part of the city and want to help however you can – plus, you might be on TV.</Typography>
          </Button>
        </Grid>
        <Grid>
          <Button onClick={() => clickHandler('tentacle_two_loose_lips')}>
            <Typography>2. Keep it quiet. You know that the build will be seriously delayed if your site becomes a crime-scene. You get out your wallet and bribe the builder. Hopefully they keep their mouth shut.</Typography>
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default TentacleTwo
