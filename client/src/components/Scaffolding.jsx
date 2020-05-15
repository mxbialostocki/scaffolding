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
import TentacleFourTermites from './TentacleFourTermites'
import TentacleFive from './TentacleFive'
import TentacleFiveScaffolding from './TentacleFiveScaffolding'
import TentacleSix from './TentacleSix'
import TentacleSixScaffolding from './TentacleSixScaffolding'
import TentacleSeven from './TentacleSeven'
import TentacleSevenScaffolding from './TentacleSevenScaffolding'
import TentacleEight from './TentacleEight'
import TentacleEightScaffolding from './TentacleEightScaffolding'
import TentacleNine from './TentacleNine'

const Scaffolding = ({ module, clickHandler }) => {
  const setModule = (vein) => {
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
      case 'tentacle_four_termites':
        return (
          <TentacleFourTermites clickHandler={clickHandler} />
        )
        break
      case 'tentacle_five':
        return (
          <TentacleFive clickHandler={clickHandler} />
        )
        break
      case 'tentacle_five_scaffolding':
        return (
          <TentacleFiveScaffolding clickHandler={clickHandler} />
        )
        break
      case 'tentacle_six':
        return (
          <TentacleSix clickHandler={clickHandler} />
        )
        break
      case 'tentacle_six_scaffolding':
        return (
          <TentacleSixScaffolding clickHandler={clickHandler} />
        )
        break
      case 'tentacle_seven':
        return (
          <TentacleSeven clickHandler={clickHandler} />
        )
        break
      case 'tentacle_seven_scaffolding':
        return (
          <TentacleSevenScaffolding clickHandler={clickHandler} />
        )
        break
      case 'tentacle_eight':
        return (
          <TentacleEight clickHandler={clickHandler} />
        )
        break
      case 'tentacle_eight_scaffolding':
        return (
          <TentacleEightScaffolding clickHandler={clickHandler} />
        )
        break
      case 'tentacle_nine':
        return (
          <TentacleNine clickHandler={clickHandler} />
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
      <Grid container item md={8} sm={10} xs={10} style={{ margin: '0 auto', color: '#ffffff' }}>
        {setModule(module)}
      </Grid>
    </React.Fragment>
  )
}

export default Scaffolding
