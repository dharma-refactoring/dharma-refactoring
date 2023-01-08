import { Grid, Paper, Typography } from '@mui/material'
import { Description } from './Description'

export const Pricing: React.FC = () => (
  <Grid id="pricing" item xs={12} sx={{ marginBottom: '28px' }}>
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h6" component="h6">
        費用
      </Typography>
      <Description
        contents={[
          '費用については契約形態や開発するアプリ/システムの内容によって異なるためご相談ください。',
          '大体の目安としては1時間あたり5,000円〜とさせて頂いております。'
        ]}
      />
    </Paper>
  </Grid>
)
