module Main exposing (main)

import Browser
import Html exposing (Html, div, text)
import Html.Attributes exposing (class, href)
import Html.Events exposing (onClick)
import Html.Lazy exposing (lazy2)
import Material.Card as Card exposing (cardPrimaryActionConfig)
import Material.TopAppBar as TopAppBar exposing (topAppBar, topAppBarConfig)
import Material.Ripple as Ripple exposing (boundedRipple, rippleConfig)
import Material.Icon exposing (icon, iconConfig)



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
        , div [ class "contents" ]
          [
            tileMenu Service "サービス内容" "devices"
          , tileMenu Service "料金プラン" "account_balance_wallet"
          , tileMenu Service "開発事例" "library_books"
          , tileMenu Service "プロフィール" "account_circle"
          ]
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
                , menu History "開発事例"
                , menu Profile "プロフィール"
                ]
            ]
        ]


appTitle : Html Message
appTitle =
    lazy2 Html.span [ class "title", onClick Top ] [ text "だるま Refactoring" ]


menu : Message -> String -> Html Message
menu message title =
    lazy2 Html.a [ class "menu", onClick message ] [ text title ]


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

tileMenu: Message -> String -> String -> Html Message
tileMenu message title iconName =
    div [ class "tile-menu" ]
        [ Card.card Card.cardConfig
            { blocks = card message title iconName
            , actions = Nothing
            }
        , boundedRipple { rippleConfig | color = Just Ripple.AccentColor}
        ]


card : Message -> String -> String -> List (Card.CardBlock Message)
card message title iconName =
    Card.cardPrimaryAction
        { cardPrimaryActionConfig | onClick = Just message }
        [ Card.cardBlock <|
            div []
              [
                Html.h2 [ class "tile-menu-content" ] [ text title ]
              , icon { iconConfig | additionalAttributes = [ class "card-background" ] } iconName
              ]
        ]



-- MESSAGE


type Message
    = Top
    | Service
    | Pricing
    | History
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
