import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'

const TentacleSevenScaffolding = ({ clickHandler }) => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item>
          <Typography>You hear a siren in the distance, and soon a fire-engine comes hurtling around the corner. Really hurtling. The truck takes the corner too quickly and skids on the road still wet with rain. It spirals out of control and – as you leap out of the way – you see the truck veer off the road and into your site. It leaves a truck-shaped hole and row of buckled metal in its wake. Please re-erect your scaffolding.</Typography>
          <Button onClick={() => clickHandler('tentacle_seven')}>
            <img src='https://i.ibb.co/hWjht1M/scaffolding.jpg' />
          </Button>
          <Typography>“Scaffolding is analogy. It explains what a wall is without being a wall.”</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default TentacleSevenScaffolding
