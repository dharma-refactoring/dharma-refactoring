import { Grid, Paper, Typography } from '@mui/material'
import PhoneIcon from '@mui/icons-material/PhoneIphone'
import WebIcon from '@mui/icons-material/Web'
import BuildIcon from '@mui/icons-material/Build'
import InfoIcon from '@mui/icons-material/Info'
import { Title } from '../components/Title'
import { Description } from '../components/Description'

export const Service: React.FC = () => (
  <Grid id="service" sx={{ marginBottom: '28px' }}>
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
