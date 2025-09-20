import { Grid, Typography } from '@mui/material'
import { JSX } from 'react'

interface DescriptionProps {
  contents: string[]
}

export const Description = ({
  contents: descriptions
}: DescriptionProps): JSX.Element => (
  <Grid sx={{ paddingLeft: '28px' }}>
    {descriptions.map((d) => (
      <Typography key={d} variant="body2">
        {d}
      </Typography>
    ))}
  </Grid>
)
