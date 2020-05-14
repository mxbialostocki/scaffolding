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
  const yeah = (vein) => {
    switch (vein) {
      case 'tentacle_one':
        return (
          <TentacleOne clickHandler={clickHandler} />
        )
        break
      case 'tentacle_one_depression':
        return (
          <TentacleOneDepression clickHandler={clickHandler} />
        )
        break
      case 'tentacle_two':
        return (
          <TentacleTwo clickHandler={clickHandler} />
        )
        break
      case 'tentacle_two_loose_lips':
        return (
          <TentacleTwoLooseLips clickHandler={clickHandler} />
        )
        break
      case 'tentacle_three':
        return (
          <TentacleThree clickHandler={clickHandler} />
        )
        break
      case 'tentacle_three_yoga':
        return (
          <TentacleThreeYoga clickHandler={clickHandler} />
        )
        break
      case 'tentacle_four':
        return (
          <TentacleFour clickHandler={clickHandler} />
        )
        break
      default:
        return (
          <TentacleOne clickHandler={clickHandler} />
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
