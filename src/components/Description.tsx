import { Grid, Typography } from '@mui/material'

interface DescriptionProps {
  contents: string[]
}

export const Description = ({
  contents: descriptions
}: DescriptionProps): JSX.Element => (
  <Grid item xs={12} sx={{ paddingLeft: '28px' }}>
    {descriptions.map((d, i) => (
      <Typography key={i} variant="body2">
        {d}
      </Typography>
    ))}
  </Grid>
)
