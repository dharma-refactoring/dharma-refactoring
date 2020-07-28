module Page.Top exposing (contents)

import Html exposing (Html, div, text)
import Html.Attributes exposing (class, href)
import Html.Lazy exposing (lazy2)
import Material.Card as Card exposing (cardPrimaryActionConfig)
import Material.Icon exposing (icon, iconConfig)
import Material.Ripple as Ripple exposing (boundedRipple, rippleConfig)
import Shared exposing (Message)


contents : List (Html Message)
contents =
    [ tileMenu "/service" "サービス内容" "devices"
    , tileMenu "/pricing" "費用" "account_balance_wallet"
    , tileMenu "/history" "開発事例" "library_books"
    , tileMenu "/profile" "プロフィール" "account_circle"
    ]


tileMenu : String -> String -> String -> Html Message
tileMenu path title iconName =
    lazy2 Html.a
        [ class "tile-menu", href path ]
        [ Card.card Card.cardConfig
            { blocks = card title iconName
            , actions = Nothing
            }
        , boundedRipple { rippleConfig | color = Just Ripple.AccentColor }
        ]


card : String -> String -> List (Card.CardBlock Message)
card title iconName =
    Card.cardPrimaryAction cardPrimaryActionConfig
        [ Card.cardBlock <|
            lazy2 div
                []
                [ Html.h2 [ class "tile-menu-content" ] [ text title ]
                , icon { iconConfig | additionalAttributes = [ class "card-background" ] } iconName
                ]
        ]
