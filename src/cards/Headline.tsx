import { Grid, Paper, Typography, Link } from '@mui/material'

export const Headline: React.FC = () => (
  <Grid item xs={12} sx={{ marginBottom: '28px' }}>
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
      <Typography variant="body1">
        現在は本業の合間に副業でフリーランスエンジニアとして活動しています。
      </Typography>
      <Typography variant="body1">
        スマートフォンアプリやWebシステムを始めとしたシステム開発をお手伝いします。
      </Typography>
      <Typography variant="body1">
        お仕事のご依頼や、その他ご質問等ありましたら
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSelHIapu0fFtcuzPWgp2eztalMAzCauIabd1jmexdFZKDw1cw/viewform?usp=sf_link">
          お問い合わせフォーム
        </Link>
        よりお問い合わせください。
      </Typography>
    </Paper>
  </Grid>
)
