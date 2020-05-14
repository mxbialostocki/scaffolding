import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'

const TentacleThreeYoga = ({ clickHandler }) => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item>
          <Typography>Without the donation you cannot afford to continue building. Your site is overrun with weeds and walking past it makes you sad. You visit the fountain every day, and, as you stare into the water, you realise that your dreams have evaporated in a mist of fountain-spray. You sell the site, and sign up for a yoga retreat in California. You never look back.</Typography>
          <Button onClick={() => clickHandler('tentacle_one')}>
            <Typography>Click here to play again.</Typography>
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default TentacleThreeYoga
