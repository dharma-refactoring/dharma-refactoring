module Main exposing (main)

import Browser
import Browser.Navigation as Navigation
import Html exposing (Html, div, text)
import Html.Attributes exposing (class, href)
import Html.Lazy exposing (lazy2)
import Material.TopAppBar as TopAppBar exposing (topAppBar, topAppBarConfig)
import Page.History
import Page.Pricing
import Page.Profile
import Page.Service
import Page.Top
import Shared exposing (Message(..))
import Url
import Url.Parser exposing (Parser, map, oneOf, s)


type Route
    = Service
    | Pricing
    | History
    | Profile


routeParser : Parser (Route -> a) a
routeParser =
    oneOf
        [ map Service (s "service")
        , map Pricing (s "pricing")
        , map History (s "history")
        , map Profile (s "profile")
        ]


routeFrom : Url.Url -> Maybe Route
routeFrom url =
    Url.Parser.parse routeParser url



-- MODEL


type alias Model =
    { key : Navigation.Key
    , route : Maybe Route
    }



-- INIT


init : () -> Url.Url -> Navigation.Key -> ( Model, Cmd Message )
init _ url key =
    ( Model key (routeFrom url), Cmd.none )



-- VIEW


view : Model -> Browser.Document Message
view model =
    { title = "だるまRefactoring"
    , body =
        [ topBar
        , introduction
        , div [ class "contents" ] (contentsFrom model.route)
        ]
    }


contentsFrom : Maybe Route -> List (Html Message)
contentsFrom route =
    case route of
        Just Service ->
            Page.Service.contents

        Just Pricing ->
            Page.Pricing.contents

        Just History ->
            Page.History.contents

        Just Profile ->
            Page.Profile.contents

        _ ->
            Page.Top.contents


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
                [ menu "/service" "サービス内容"
                , menu "/pricing" "費用"
                , menu "/history" "開発事例"
                , menu "/profile" "プロフィール"
                ]
            ]
        ]


appTitle : Html Message
appTitle =
    lazy2 Html.a [ class "title", href "/" ] [ text "だるま Refactoring" ]


menu : String -> String -> Html Message
menu path title =
    lazy2 Html.a [ class "menu", href path ] [ text title ]


introduction : Html Message
introduction =
    lazy2 div
        [ class "introduction" ]
        [ Html.p []
            [ text "現在は本業の合間に副業でフリーランスエンジニアとして活動しています。" ]
        , Html.p []
            [ text "スマートフォンアプリやWebシステムを始めとしたシステム開発をお手伝いします。" ]
        , Html.p []
            [ text "お仕事のご依頼や、その他ご質問等ありましたら"
            , Html.a [ href "https://docs.google.com/forms/d/e/1FAIpQLSelHIapu0fFtcuzPWgp2eztalMAzCauIabd1jmexdFZKDw1cw/viewform?usp=sf_link" ] [ text "こちらのフォーム" ]
            , text "よりお問い合わせください。"
            ]
        ]



-- UPDATE


update : Message -> Model -> ( Model, Cmd Message )
update message model =
    case message of
        LinkClicked urlRequest ->
            case urlRequest of
                Browser.Internal url ->
                    ( model, Navigation.pushUrl model.key (Url.toString url) )

                Browser.External href ->
                    ( model, Navigation.load href )

        UrlChanged url ->
            ( { model | route = routeFrom url }, Cmd.none )

        PageChanged ->
            ( model, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Message
subscriptions _ =
    Sub.none



-- MAIN


main : Program () Model Message
main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        , onUrlChange = UrlChanged
        , onUrlRequest = LinkClicked
        }
