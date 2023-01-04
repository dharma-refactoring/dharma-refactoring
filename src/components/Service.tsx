import { Grid, Paper, Typography } from '@mui/material'
import PhoneIcon from '@mui/icons-material/PhoneIphone'
import WebIcon from '@mui/icons-material/Web'
import BuildIcon from '@mui/icons-material/Build'
import InfoIcon from '@mui/icons-material/Info'

interface TitleProps {
  icon: JSX.Element
  text: string
}
const Title = ({ icon, text }: TitleProps): JSX.Element => (
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

interface DescriptionProps {
  contents: string[]
}
const Description = ({
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

export const Service: React.FC = () => (
  <Grid item xs={12}>
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h6" component="h6">
        サービス内容
      </Typography>
      <Title icon={<PhoneIcon />} text="スマートフォンアプリ開発" />
      <Description
        contents={[
          'iOS, Android 両方対応できます。',
          'ReactNative, Flutterなどのクロスプラットフォームのフレームワークも経験あります。'
        ]}
      />
      <Title icon={<WebIcon />} text="Webシステム開発" />
      <Description
        contents={[
          'バックエンド、フロントエンド両方対応できます。',
          'ASP.Net, Ruby on Rails, express, nestjs など様々なフレームワークの経験があります。',
          'Vite, React, Rest API, graphQL, 各種RDBMS, AWS, etc...'
        ]}
      />
      <Title icon={<BuildIcon />} text="レガシーコード改善" />
      <Description
        contents={[
          'テストコードを書いてリファクタリングします。',
          '目を覆いたくなるようなスパゲティコード、長大な神クラスなどに何度も立ち向かってきました...'
        ]}
      />
      <Title icon={<InfoIcon />} text="留意事項" />
      <Description
        contents={[
          '※ 島根県在住で、稼働も夜間になるため基本的にリモートワークとさせて頂きます',
          '※ 打ち合わせはGoogle MeetやZoom等によるWeb会議を希望しますが、直接の顔合わせが必要な場合は出張旅費を出して頂ければ伺います'
        ]}
      />
    </Paper>
  </Grid>
)
