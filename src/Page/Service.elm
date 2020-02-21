module Page.Service exposing (contents)

import Html exposing (Html, div, text)
import Html.Attributes exposing (class)
import Html.Lazy exposing (lazy2)
import Shared exposing (Message, headline, pageContents, sentense)


contents : List (Html Message)
contents =
    pageContents <|
        lazy2 Html.div
            [ class "page-contents" ]
            [ Html.h1 [] [ text "サービス内容" ]
            , headline "スマートフォンアプリ開発" "phone_iphone"
            , sentense "iOS, Android 両方対応できます。"
            , sentense "ReactNativeなどのクロスプラットフォームのフレームワークも経験あります。"
            , headline "Webシステム開発" "web"
            , sentense "ASP.NetやRuby on Railsなど様々なフレームワークの経験があります。"
            , sentense "フレームワークを使わずにスクラッチで作ることもできます。"
            , headline "レガシーコード改善" "build"
            , sentense "テストコードを書いてリファクタリングします。"
            , sentense "目を覆いたくなるようなスパゲティコード、長大な神クラスなどに何度も立ち向かってきました..."
            ]
