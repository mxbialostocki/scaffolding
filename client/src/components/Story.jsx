import React, { useState } from 'react'
import { Grid } from '@material-ui/core'

import Begin from './Begin'
import Scaffolding from './Scaffolding'

const Story = () => {

  const [ isInitialLoad, setIsInitialLoad ] = useState(true)
  const activePage = isInitialLoad ? <Begin clickHandler={setIsInitialLoad}/> : <Scaffolding />

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        {activePage}
      </Grid>
    </Grid>
  )
}

export default Story
