import { Grid, Typography } from '@mui/material'

interface TitleProps {
  icon: JSX.Element
  text: string
}

export const Title = ({ icon, text }: TitleProps): JSX.Element => (
  <Grid
    item
    xs={12}
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
