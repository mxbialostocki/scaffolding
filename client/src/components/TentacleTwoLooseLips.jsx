import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'

const TentacleTwoLooseLips = ({ clickHandler }) => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item>
          <Typography>That night, the same builder is out drinking and does not keep their mouth shut. A member of neighbourhood watch happens to overhear, and they call the police. You – as the owner of the site – are arrested as a suspect.</Typography>
          <Button onClick={() => clickHandler('tentacle_one')}>
            <Typography>Click here to play again.</Typography>
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default TentacleTwoLooseLips
