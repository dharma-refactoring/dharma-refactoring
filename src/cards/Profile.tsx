import { Grid, Paper, Typography } from '@mui/material'
import StoreIcon from '@mui/icons-material/StoreMallDirectory'
import FaceIcon from '@mui/icons-material/Face'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import CodeIcon from '@mui/icons-material/Code'
import ImportantIcon from '@mui/icons-material/NotificationImportant'
import StarsIcon from '@mui/icons-material/Stars'
import { Title } from '../components/Title'
import { Description } from '../components/Description'

export const Profile: React.FC = () => (
  <Grid id="profile" sx={{ marginBottom: '28px' }}>
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h6" component="h6">
        だるまRefactoring
      </Typography>
      <Title icon={<StoreIcon />} text="屋号" />
      <Description contents={['だるまRefactoring']} />
      <Title icon={<FaceIcon />} text="名前" />
      <Description contents={['青木 美将 （1979年生まれ）']} />
      <Title icon={<ContactPhoneIcon />} text="住所/連絡先" />
      <Description
        contents={[
          '自宅を事務所としておりますので非公開とさせていただいております。',
          '上記問合わせフォームよりお問い合せ頂ければ遅滞なく開示いたします。'
        ]}
      />
      <Title icon={<CodeIcon />} text="言語/技術" />
      <Description
        contents={[
          'Swift, Kotlin, C#, Java, Elm, TypeScript, JavaScript, ReactNative, React, Ruby, Ruby on Rails, ASP.Net, AWS, GCP, etc...'
        ]}
      />
      <Title
        icon={<ImportantIcon />}
        text="プログラミング時に重視していること"
      />
      <Description
        contents={[
          '・オブジェクト指向',
          '・読みやすく意図が伝わりやすいコード',
          '・DRY、KISS、YAGNIなどの各種原則'
        ]}
      />
      <Title icon={<StarsIcon />} text="主な資格" />
      <Description
        contents={[
          '・システムアーキテクト',
          '・データベーススペシャリスト',
          '・第二種情報処理技術者',
          '・Ruby Association Certified Ruby Programmer Gold version 2.1'
        ]}
      />
    </Paper>
  </Grid>
)
