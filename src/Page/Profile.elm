module Page.Profile exposing (contents)

import Html exposing (Html, text)
import Html.Attributes exposing (class)
import Html.Lazy exposing (lazy2)
import Shared exposing (Message, headline, pageContents, sentense)


contents : List (Html Message)
contents =
    pageContents <|
        lazy2 Html.div
            [ class "page-contents" ]
            [ Html.h1 [] [ text "だるま Refactoring" ]
            , headline "屋号" "store_mall_directory"
            , sentense "だるま Refactoring"
            , headline "名前" "face"
            , sentense "青木 美将 （1979年生まれ）"
            , headline "住所/連絡先" "contact_phone"
            , sentense "自宅を事務所としておりますので非公開とさせていただいております。"
            , sentense "上記問合わせフォームよりお問い合せ頂ければ遅滞なく開示いたします。"
            , headline "言語/技術" "code"
            , sentense "Swift, Kotlin, C#, Java, ReactNative, React, Elm, TypeScript, JavaScript, Ruby, ASP.Net, Ruby on Rails, etc..."
            , sentense "※ このサイトは主にElmで作成しています。"
            , headline "プログラミング時に重視していること" "notification_important"
            , Html.ul []
                [ Html.li [] [ text "オブジェクト指向" ]
                , Html.li [] [ text "読みやすく意図が伝わりやすいコード" ]
                , Html.li [] [ text "DRY、KISS、YAGNIなどの各種原則" ]
                ]
            , headline "主な資格" "stars"
            , Html.ul []
                [ Html.li [] [ text "システムアーキテクト" ]
                , Html.li [] [ text "データベーススペシャリスト" ]
                , Html.li [] [ text "第二種情報処理技術者" ]
                , Html.li [] [ text "Ruby Association Certified Ruby Programmer Gold version 2.1" ]
                ]
            , sentense ""
            ]
