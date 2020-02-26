module Page.History exposing (contents)

import Html exposing (Html, text)
import Html.Attributes exposing (class, style)
import Html.Lazy exposing (lazy2)
import Material.DataTable exposing (dataTable, dataTableCell, dataTableCellConfig, dataTableConfig, dataTableHeaderCell, dataTableHeaderCellConfig, dataTableHeaderRow, dataTableRow, dataTableRowConfig)
import Shared exposing (Message, headline, pageContents, sentense)


contents : List (Html Message)
contents =
    pageContents <|
        lazy2 Html.div
            [ class "page-contents" ]
            [ Html.h1 [] [ text "開発事例" ]
            , headline "フリーランスでの事例" "portrait"
            , sentense "※ 表の上にあるほど新しい情報です。"
            , dataTable dataTableConfig
                { thead =
                    [ dataTableHeaderRow []
                        [ headerCell "業務内容"
                        , headerCell "言語/技術"
                        , headerCell "役割"
                        , headerCell "工程"
                        ]
                    ]
                , tbody =
                    [ dataTableRow dataTableRowConfig
                        [ cell "キャンプ場予約Webシステム"
                        , cell "PHP, Cake PHP, MySQL, Docker"
                        , cell "PG, テスタ"
                        , cell "実装、単体/結合テスト"
                        ]
                    ]
                }
            , headline "業務経歴" "library_books"
            , sentense "※ 所属会社で手掛けた主な業務です。全てではありません。"
            , sentense "※ 表の上にあるほど新しい情報です。"
            , dataTable dataTableConfig
                { thead =
                    [ dataTableHeaderRow []
                        [ headerCell "業務内容"
                        , headerCell "言語/技術"
                        , headerCell "役割"
                        , headerCell "工程"
                        ]
                    ]
                , tbody =
                    [ dataTableRow dataTableRowConfig
                        [ cell "勤怠管理Webシステム"
                        , cell "Ruby, Ruby on Rails, Redis, PostgreSQL"
                        , cell "SE, PG, テスタ"
                        , cell "設計、実装、単体/結合テスト"
                        ]
                    , dataTableRow dataTableRowConfig
                        [ cell "証券会社向け株取引スマホアプリ"
                        , cell "Objective-C, iOS, Java, Android"
                        , cell "PG, テスタ"
                        , cell "実装、単体/結合テスト"
                        ]
                    , dataTableRow dataTableRowConfig
                        [ cell "中古車情報スマホアプリ"
                        , cell "Swift, iOS, Kotlin, Android, Firebase, AppsFlyer, SmartBeat, Push通知"
                        , cell "PG, テスタ"
                        , cell "実装、単体/結合テスト"
                        ]
                    , dataTableRow dataTableRowConfig
                        [ cell "証券会社向けFXスマホアプリ"
                        , cell "Swift, iOS, Kotlin, Android"
                        , cell "PG, テスタ"
                        , cell "実装、単体/結合テスト"
                        ]
                    , dataTableRow dataTableRowConfig
                        [ cell "キャンプ場予約Webシステム"
                        , cell "PHP, Cake PHP, MySQL, Docker"
                        , cell "PG, テスタ"
                        , cell "実装、単体/結合テスト"
                        ]
                    , dataTableRow dataTableRowConfig
                        [ cell "実験動物管理タブレットアプリ"
                        , cell "Swift, iOS, Swagger, Docker"
                        , cell "PG, テスタ"
                        , cell "実装、単体/結合テスト"
                        ]
                    , dataTableRow dataTableRowConfig
                        [ cell "展示会用スマホアプリ"
                        , cell "Swift, iOS, Java, Android, C#, ASP.Net MVC, SQL Server, Push通知"
                        , cell "SE, PG, テスタ"
                        , cell "要件定義、設計、実装、単体/結合テスト、サーバ環境構築、リリース、保守"
                        ]
                    , dataTableRow dataTableRowConfig
                        [ cell "ホテル用スマートキーアプリ"
                        , cell "Swift, iOS"
                        , cell "PG"
                        , cell "実装、単体テスト"
                        ]
                    , dataTableRow dataTableRowConfig
                        [ cell "薬品レビュー結果登録タブレットアプリ"
                        , cell "Swift, iOS"
                        , cell "PG"
                        , cell "実装、単体テスト"
                        ]
                    , dataTableRow dataTableRowConfig
                        [ cell "ライトアップ用スマホアプリ"
                        , cell "Swift, Kotlin, iOS, Android, Ruby, Ruby on Rails, Sinatra, Redis, nginx, Docker"
                        , cell "SE, PG, テスタ"
                        , cell "要件定義、設計、実装、単体/結合テスト、保守"
                        ]
                    , dataTableRow dataTableRowConfig
                        [ cell "鉄道会社向け点検結果記録タブレットアプリ"
                        , cell "Objective-C, iOS"
                        , cell "PG"
                        , cell "実装、単体テスト"
                        ]
                    , dataTableRow dataTableRowConfig
                        [ cell "通信会社向け問い合わせ管理Webシステム"
                        , cell "C#, ASP.Net, SQL Server, Angular JS"
                        , cell "PM, SE, PG, テスタ"
                        , cell "要件定義、設計、実装、単体/結合/総合テスト、リリース、サーバ環境構築、保守"
                        ]
                    , dataTableRow dataTableRowConfig
                        [ cell "通信会社向け回線管理Webシステム"
                        , cell "C#, ASP.Net, SQL Server, jQuery"
                        , cell "PM, SE, PG, テスタ"
                        , cell "要件定義、設計、実装、単体/結合/総合テスト、リリース、サーバ環境構築、保守"
                        ]
                    , dataTableRow dataTableRowConfig
                        [ cell "不動産会社向け物件管理Webシステム"
                        , cell "Python, Tornado"
                        , cell "PM, SE, PG, テスタ"
                        , cell "要件定義、設計、実装、単体/結合/総合テスト、リリース、サーバ環境構築"
                        ]
                    , dataTableRow dataTableRowConfig
                        [ cell "通信会社の販管費管理ツール"
                        , cell "VB.Net, SQL Server"
                        , cell "PM, SE, PG, テスタ"
                        , cell "要件定義、設計、実装、単体/結合/総合テスト、リリース、サーバ環境構築、保守"
                        ]
                    , dataTableRow dataTableRowConfig
                        [ cell "繊維製品検査結果管理Webシステム"
                        , cell "VB.Net, ASP.Net, SQL Server"
                        , cell "PM, SE, PG, テスタ"
                        , cell "要件定義、設計、実装、単体/結合/総合テスト、リリース、サーバ環境構築、保守"
                        ]
                    , dataTableRow dataTableRowConfig
                        [ cell "通信会社向け回線管理DBシステム"
                        , cell "VB.Net, SQL Server"
                        , cell "PM, SE, PG, テスタ"
                        , cell "要件定義、設計、実装、単体/結合/総合テスト、リリース、サーバ環境構築、保守"
                        ]
                    , dataTableRow dataTableRowConfig
                        [ cell "自動車メーカーのHP2件、証券会社のHP1件のヘルプデスク"
                        , cell "PHP"
                        , cell "ヘルプデスク"
                        , cell "顧客からの問い合わせ対応、不具合調査"
                        ]
                    , dataTableRow dataTableRowConfig
                        [ cell "官公庁向けクライアント/サーバシステム開発"
                        , cell "VB6, VC++, C/C++, HP/UX"
                        , cell "SE, PG, テスタ"
                        , cell "改善提案、設計、実装、単体/結合/総合テスト、リリース、サーバ環境構築"
                        ]
                    , dataTableRow dataTableRowConfig
                        [ cell "官公庁向けDBシステム開発"
                        , cell "VB6, Oracle 8i"
                        , cell "PG, テスタ"
                        , cell "実装、単体テスト"
                        ]
                    , dataTableRow dataTableRowConfig
                        [ cell "官公庁向けクライアント/サーバシステム開発"
                        , cell "C/C++"
                        , cell "主にテスタ"
                        , cell "結合テスト"
                        ]
                    ]
                }
            , sentense ""
            ]


headerCell : String -> Material.DataTable.DataTableHeaderCell Message
headerCell title =
    dataTableHeaderCell dataTableHeaderCellConfig [ text title ]


cell : String -> Material.DataTable.DataTableCell Message
cell title =
    dataTableCell { dataTableCellConfig | additionalAttributes = [ style "white-space" "normal" ] } [ text title ]
