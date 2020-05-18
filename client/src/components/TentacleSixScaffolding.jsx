import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'

const TentacleSixScaffolding = ({ clickHandler }) => {
  return (
    <React.Fragment>
      <Grid container spacing={3} direction='column' justify='center' alignItems='center'>
        <Grid item>
          <Typography>The storm takes no prisoners. After the rain has stopped, lightning strikes a nearby Elm tree which promptly catches fire. The wind carries embers from the blaze and deposits them on the frame. Because the site is empty, no one is around to put out the fire. Your frame is burned to the ground. Please re-erect your scaffolding.</Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => clickHandler('tentacle_six')}>
            <img src='https://i.ibb.co/hWjht1M/scaffolding.jpg' style={{ maxWidth: '300px' }}/>
          </Button>
        </Grid>
        <Grid item>
          <Typography style={{ fontStyle: 'italic' }}>“Firstly, a scaffold lists, in every way.”</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default TentacleSixScaffolding
