import React from 'react'
import { Grid } from '@material-ui/core'

// component imports
import TentacleOne from './TentacleOne'
import TentacleTwo from './TentacleTwo'
import TentacleOneDepression from './TentacleOneDepression'

const Scaffolding = ({ module, clickHandler }) => {
  const yeah = (module) => {
    if (module === 'tentacle_one') {
      return (
        <TentacleOne clickHandler={clickHandler} />
      )
    }
    if (module === 'tentacle_two') {
      return (
        <TentacleTwo clickHandler={clickHandler} />
      )
    }
    if (module === 'tentacle_one_depression') {
      return (
        <TentacleOneDepression clickHandler={clickHandler} />
      )
    }
  }

  return (
    <React.Fragment>
      <Grid container>
        {yeah(module)}
      </Grid>
    </React.Fragment>
  )
}

export default Scaffolding
