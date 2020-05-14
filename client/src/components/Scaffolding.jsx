import React from 'react'
import { Grid } from '@material-ui/core'

// component imports
import TentacleOne from './TentacleOne'
import TentacleOneDepression from './TentacleOneDepression'
import TentacleTwo from './TentacleTwo'
import TentacleTwoLooseLips from './TentacleTwoLooseLips'
import TentacleThree from './TentacleThree'
import TentacleThreeYoga from './TentacleThreeYoga'
import TentacleFour from './TentacleFour'

const Scaffolding = ({ module, clickHandler }) => {
  const yeah = (module) => {
    if (module === 'tentacle_one') {
      return (
        <TentacleOne clickHandler={clickHandler} />
      )
    }
    if (module === 'tentacle_one_depression') {
      return (
        <TentacleOneDepression clickHandler={clickHandler} />
      )
    }
    if (module === 'tentacle_two') {
      return (
        <TentacleTwo clickHandler={clickHandler} />
      )
    }
    if (module === 'tentacle_two_loose_lips') {
      return (
        <TentacleTwoLooseLips clickHandler={clickHandler} />
      )
    }
    if (module === 'tentacle_three') {
      return (
        <TentacleThree clickHandler={clickHandler} />
      )
    }
    if (module === 'tentacle_three_yoga') {
      return (
        <TentacleThreeYoga clickHandler={clickHandler} />
      )
    }
    if (module === 'tentacle_four') {
      return (
        <TentacleFour clickHandler={clickHandler} />
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
