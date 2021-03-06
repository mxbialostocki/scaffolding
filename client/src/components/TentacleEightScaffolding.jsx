import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'

const TentacleEightScaffolding = ({ clickHandler }) => {
  return (
    <React.Fragment>
      <Grid container spacing={3} direction='column' justify='center' alignItems='center'>
        <Grid item>
          <Typography>It is dark by the time everyone has left the site. You walk up to the door which – although you know it is just a trick of the moonlight – seems to emit a faint glow. A single tear comes to rest on your cheek. You place your hand on the door handle, which is cool to the touch and fits perfectly into the palm of your hand. Turning your wrist, you take a deep breath and open the door. There is a flash of violet light mingled with the smell of singed flesh. The light touches the back of your eyeballs, and, in your last thinking moments, you realise that the door was a portal. You are now elsewhere. Please re-erect your scaffolding.</Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => clickHandler('tentacle_five')}>
            <img src='https://i.ibb.co/hWjht1M/scaffolding.jpg' style={{ maxWidth: '300px' }}/>
          </Button>
        </Grid>
        <Grid item>
          <Typography style={{ fontStyle: 'italic' }}>“The scaffold is a pause, an inflection of passage. It accommodates us in a shivering.”</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default TentacleEightScaffolding
