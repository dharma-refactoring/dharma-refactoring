import { Grid, Typography } from '@mui/material'
import { JSX } from 'react'

interface TitleProps {
  icon: JSX.Element
  text: string
}

export const Title = ({ icon, text }: TitleProps): JSX.Element => (
  <Grid
    sx={{
      marginTop: '20px',
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'center'
    }}
  >
    {icon}
    <Typography variant="body1" fontWeight="bold">
      {text}
    </Typography>
  </Grid>
)
