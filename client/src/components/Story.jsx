import React, { useState } from 'react'
import { Grid } from '@material-ui/core'

import Begin from './Begin'
import Scaffolding from './Scaffolding'

import useStyles from '../customStyling'

const Story = () => {
  const [ isInitialLoad, setIsInitialLoad ] = useState(true)
  const [ activeModule, setActiveModule ] = useState('tentacle_one')
  const activePage = isInitialLoad ? <Begin clickHandler={setIsInitialLoad}/> : <Scaffolding module={activeModule} clickHandler={setActiveModule}/>

  const styles = useStyles()

  return (
    <Grid container direction="column" justify='center' alignItems='center' className={styles.homePage}>
      <Grid item>
        {activePage}
      </Grid>
    </Grid>
  )
}

export default Story
