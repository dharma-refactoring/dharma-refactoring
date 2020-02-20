module Main exposing (main)

import Browser
import Html exposing (Html, div, text)
import Html.Attributes exposing (class, href)
import Html.Events exposing (onClick)
import Html.Lazy exposing (lazy2)
import Material.TopAppBar as TopAppBar exposing (topAppBar, topAppBarConfig)
import Material.Typography as Typography



-- MODEL


type alias Model =
    {}



-- INIT


init : ( Model, Cmd Message )
init =
    ( Model, Cmd.none )



-- VIEW


view : Model -> Html Message
view _ =
    div []
        [ topBar
        , introduction
        ]


topBar : Html Message
topBar =
    topAppBar topAppBarConfig
        [ lazy2 TopAppBar.row
            []
            [ lazy2 TopAppBar.section
                [ TopAppBar.alignStart ]
                [ appTitle ]
            , lazy2 TopAppBar.section
                [ TopAppBar.alignEnd ]
                [ menu Service "サービス内容"
                , menu Pricing "料金プラン"
                , menu Profile "プロフィール"
                ]
            ]
        ]


appTitle : Html Message
appTitle =
    lazy2 Html.span [ TopAppBar.title, class "base-font" ] [ text "だるま Refactoring" ]


menu : Message -> String -> Html Message
menu message title =
    lazy2 Html.a [ Typography.subtitle1, class "menu", onClick message ] [ text title ]


introduction : Html Message
introduction =
    div [ class "introduction" ]
        [ Html.p []
            [ text "現在は本業の合間に副業でフリーランスエンジニアとして活動しています。" ]
        , Html.p []
            [ text "スマートフォンアプリやWebシステムを始めとしたシステム開発をお手伝いします。" ]
        , Html.p []
            [ text "お仕事の依頼やその他ご質問等ありましたら"
            , Html.a [ href "https://docs.google.com/forms/d/e/1FAIpQLSelHIapu0fFtcuzPWgp2eztalMAzCauIabd1jmexdFZKDw1cw/viewform?usp=sf_link" ] [ text "こちらのフォーム" ]
            , text "よりお問い合わせください。"
            ]
        ]



-- MESSAGE


type Message
    = Service
    | Pricing
    | Profile



-- UPDATE


update : Message -> Model -> ( Model, Cmd Message )
update message model =
    case message of
        _ ->
            ( model, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Message
subscriptions _ =
    Sub.none



-- MAIN


main : Program (Maybe {}) Model Message
main =
    Browser.element
        { init = always init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
