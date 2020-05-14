import React from 'react'
import { Grid } from '@material-ui/core'

// component imports

const Scaffolding = ({ module, clickHandler }) => {
  return (
    <React.Fragment>
      <Grid container>
        {module}
      </Grid>
    </React.Fragment>
  )
}

export default Scaffolding
