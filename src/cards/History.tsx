import {
  Grid,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import PortraitIcon from '@mui/icons-material/Portrait'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'

import { Title } from '../components/Title'
import { Description } from '../components/Description'

interface HistoryItem {
  summary: string
  link?: string
  skill: string
  position: string
  phase: string
}

const HistoryTable = (props: { rows: HistoryItem[] }): JSX.Element => (
  <Table size="small">
    <TableHead>
      <TableRow>
        <TableCell>業務内容</TableCell>
        <TableCell>言語/技術</TableCell>
        <TableCell>役割</TableCell>
        <TableCell>工程</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {props.rows.map((row, i) => (
        <TableRow key={i}>
          <TableCell>
            {row.link !== undefined ? (
              <Link href={row.link}>{row.summary}</Link>
            ) : (
              row.summary
            )}
          </TableCell>
          <TableCell>{row.skill}</TableCell>
          <TableCell>{row.position}</TableCell>
          <TableCell>{row.phase}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)

export const History: React.FC = () => (
  <Grid id="history" item xs={12} sx={{ marginBottom: '28px' }}>
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h6" component="h6">
        開発実績
      </Typography>
      <Title icon={<PortraitIcon />} text="フリーランスでの実績" />
      <Description contents={['表の上にあるほど新しい情報です。']} />
      <HistoryTable
        rows={[
          {
            summary: 'さけコミ',
            link: 'https://sakecom.jp',
            skill: 'Elm, Ruby on Rails, PostgreSQL, GCP(Cloud Run)',
            position: 'SE, PG, テスタ',
            phase: '仕様検討、設計、実装、単体/結合テスト、運用保守'
          },
          {
            summary: 'キャンプ場予約Webシステム',
            skill: 'PHP, Cake PHP, MySQL, Docker',
            position: 'PG, テスタ',
            phase: '実装、単体/結合テスト'
          }
        ]}
      />
      <Title icon={<LibraryBooksIcon />} text="業務経歴" />
      <Description
        contents={[
          '所属会社で手掛けた主な業務です。全てではありません。',
          '表の上にあるほど新しい情報です。'
        ]}
      />
      <HistoryTable
        rows={[
          {
            summary: '電力会社向け顧客管理システム',
            skill: 'Typescript, NestJS, Prisma, Vite, React, AWS',
            position: '開発チーム',
            phase: 'アジャイル開発（スクラム）'
          },
          {
            summary: '勤怠管理Webシステム',
            skill: 'Ruby, Ruby on Rails, Redis, PostgreSQL',
            position: 'SE, PG, テスタ',
            phase: '設計、実装、単体/結合テスト'
          },
          {
            summary: '証券会社向け株取引スマホアプリ',
            skill: 'Objective-C, iOS, Java, Android',
            position: 'PG, テスタ',
            phase: '実装、単体/結合テスト'
          },
          {
            summary: '中古車情報スマホアプリ',
            skill:
              'Swift, iOS, Kotlin, Android, Firebase, AppsFlyer, SmartBeat, Push通知',
            position: 'PG, テスタ',
            phase: '実装、単体/結合テスト'
          },
          {
            summary: '証券会社向けFXスマホアプリ',
            skill: 'Swift, iOS, Kotlin, Android',
            position: 'PG, テスタ',
            phase: '実装、単体/結合テスト'
          },
          {
            summary: 'キャンプ場予約Webシステム',
            skill: 'PHP, Cake PHP, MySQL, Docker',
            position: 'PG, テスタ',
            phase: '実装、単体/結合テスト'
          },
          {
            summary: '実験動物管理タブレットアプリ',
            skill: 'Swift, iOS, Swagger, Docker',
            position: 'PG, テスタ',
            phase: '実装、単体/結合テスト'
          },
          {
            summary: '展示会用スマホアプリ',
            skill:
              'Swift, iOS, Java, Android, C#, ASP.Net MVC, SQL Server, Push通知',
            position: 'SE, PG, テスタ',
            phase:
              '要件定義、設計、実装、単体/結合テスト、サーバ環境構築、リリース、保守'
          },
          {
            summary: 'ホテル用スマートキーアプリ',
            skill: 'Swift, iOS',
            position: 'PG',
            phase: '実装、単体テスト'
          },
          {
            summary: '薬品レビュー結果登録タブレットアプリ',
            skill: 'Swift, iOS',
            position: 'PG',
            phase: '実装、単体テスト'
          },
          {
            summary: 'ライトアップ用スマホアプリ',
            skill:
              'Swift, Kotlin, iOS, Android, Ruby, Ruby on Rails, Sinatra, Redis, nginx, Docker',
            position: 'SE, PG, テスタ',
            phase: '要件定義、設計、実装、単体/結合テスト、保守'
          },
          {
            summary: '鉄道会社向け点検結果記録タブレットアプリ',
            skill: 'Objective-C, iOS',
            position: 'PG',
            phase: '実装、単体テスト'
          },
          {
            summary: '通信会社向け問い合わせ管理Webシステム',
            skill: 'C#, ASP.Net, SQL Server, Angular JS',
            position: 'PM, SE, PG, テスタ',
            phase:
              '要件定義、設計、実装、単体/結合/総合テスト、リリース、サーバ環境構築、保守'
          },
          {
            summary: '通信会社向け回線管理Webシステム',
            skill: 'C#, ASP.Net, SQL Server, jQuery',
            position: 'PM, SE, PG, テスタ',
            phase:
              '要件定義、設計、実装、単体/結合/総合テスト、リリース、サーバ環境構築、保守'
          },
          {
            summary: '不動産会社向け物件管理Webシステム',
            skill: 'Python, Tornado',
            position: 'PM, SE, PG, テスタ',
            phase:
              '要件定義、設計、実装、単体/結合/総合テスト、リリース、サーバ環境構築'
          },
          {
            summary: '通信会社の販管費管理ツール',
            skill: 'VB.Net, SQL Server',
            position: 'PM, SE, PG, テスタ',
            phase:
              '要件定義、設計、実装、単体/結合/総合テスト、リリース、サーバ環境構築、保守'
          },
          {
            summary: '繊維製品検査結果管理Webシステム',
            skill: 'VB.Net, ASP.Net, SQL Server',
            position: 'PM, SE, PG, テスタ',
            phase:
              '要件定義、設計、実装、単体/結合/総合テスト、リリース、サーバ環境構築、保守'
          },
          {
            summary: '通信会社向け回線管理DBシステム',
            skill: 'VB.Net, SQL Server',
            position: 'PM, SE, PG, テスタ',
            phase:
              '要件定義、設計、実装、単体/結合/総合テスト、リリース、サーバ環境構築、保守'
          },
          {
            summary: '自動車メーカーのHP2件、証券会社のHP1件のヘルプデスク',
            skill: 'PHP',
            position: 'ヘルプデスク',
            phase: '顧客からの問い合わせ対応、不具合調査'
          },
          {
            summary: '官公庁向けクライアント/サーバシステム開発',
            skill: 'VB6, VC++, C/C++, HP/UX',
            position: 'SE, PG, テスタ',
            phase:
              '改善提案、設計、実装、単体/結合/総合テスト、リリース、サーバ環境構築'
          },
          {
            summary: '官公庁向けDBシステム開発',
            skill: 'VB6, Oracle 8i',
            position: 'PG, テスタ',
            phase: '実装、単体テスト'
          },
          {
            summary: '官公庁向けクライアント/サーバシステム開発',
            skill: 'C/C++',
            position: '主にテスタ',
            phase: '結合テスト'
          }
        ]}
      />
    </Paper>
  </Grid>
)
