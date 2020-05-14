import React, { useState } from 'react'
import { Grid } from '@material-ui/core'

import Begin from './Begin'
import Scaffolding from './Scaffolding'

const Story = () => {
  const [ isInitialLoad, setIsInitialLoad ] = useState(true)
  const [ activeModule, setActiveModule ] = useState('tentacle_one')
  const activePage = isInitialLoad ? <Begin clickHandler={setIsInitialLoad}/> : <Scaffolding module={activeModule} clickHandler={setActiveModule}/>

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        {activePage}
      </Grid>
    </Grid>
  )
}

export default Story
