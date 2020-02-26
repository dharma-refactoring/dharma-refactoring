module Page.Pricing exposing (contents)

import Html exposing (Html, div, text)
import Html.Attributes exposing (class, href, target)
import Html.Lazy exposing (lazy2)
import Shared exposing (Message, headline, pageContents, sentense)


contents : List (Html Message)
contents =
    pageContents <|
        lazy2 Html.div
            [ class "page-contents" ]
            [ Html.h1 [] [ text "料金プラン" ]
            , headline "月額定額プラン" "subscriptions"
            , sentense "毎月定額でご契約いただき、契約した金額の範囲内で作業を行います。"
            , sentense "最もお勧めのプランで、契約中は何度でも仕様変更が可能です。（ただし、変更が多いほど完成は遅れます）"
            , sentense "基本的にアジャイルで開発を行うため、短い期間で実装→確認を繰り返します。"
            , sentense "費用を抑えたい場合や、作りたいシステムの全体像が定まっておらず、少しずつ作りながら実際に触ってみて仕様を検討したい場合などに最適です。"
            , headline "実績ベースプラン" "timer"
            , sentense "実際に作業した時間で請求させていただくプランです。"
            , sentense "一ヶ月かからないような小規模のご依頼の場合にご利用ください。"
            , headline "一括請負プラン" "all_inclusive"
            , sentense "システム全体の見積もりを行い、見積もった金額で契約します。"
            , sentense "見積もりの時点で仕様が全て決まっている必要があり、基本的に仕様の変更はできません。変更する場合は追加料金が発生します。"
            , sentense "自由な仕様の見直しができないため、出来上がったときには役に立たないものになってしまうことが多く、あまりお勧めできません。"
            , headline "単価について" "info"
            , sentense "契約単価は1時間あたり5,000円〜とさせて頂いております。"
            , Html.p []
                [ text "高いと感じられるかもしれませんが、"
                , Html.a [ href "https://xn--97-273ae6a4irb6e2h2k6c0ec7tvc3h1e0dwi7lj952k.com/エッセイ/熟練と並の開発者の生産性/", target "_blank" ] [ text "優れた開発者は並の開発者の何十倍もの生産性があるという話" ]
                , text "もあります。"
                ]
            , sentense "並の開発者が数人で作るよりは、早く、安く、品質も良いものが作れると自負しております。"
            ]
