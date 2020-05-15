import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'

const TentacleNine = ({ clickHandler }) => {
  return (
    <React.Fragment>
      <Grid container spacing={3} direction='column' justify='center' alignItems='center'>
        <Grid item>
          <Typography>You throw your camera to the site-manager, who gives you a nod to let you know that they have hit record. You place your hand on the door handle, which is cool to the touch and fits perfectly into the palm of your hand. Turning your wrist, you take a deep breath and open the door. There is a flash of violet light mingled with the smell of singed flesh. The light touches the back of your eyeballs, and, in your last thinking moments, you realise that the door was a portal. You are now elsewhere. Please re-erect your scaffolding.</Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => clickHandler('tentacle_one')}>
            <img src='https://i.ibb.co/hWjht1M/scaffolding.jpg' style={{ maxWidth: '300px' }}/>
          </Button>
        </Grid>
        <Grid item>
          <Typography>“Scaffolding is the negative space of the building.”</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default TentacleNine
