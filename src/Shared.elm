module Shared exposing (Message(..), headline, pageContents, sentense)

import Browser
import Html exposing (Html, text)
import Html.Attributes exposing (class)
import Material.Card exposing (card, cardBlock, cardConfig)
import Material.Icon exposing (icon, iconConfig)
import Url


type Message
    = UrlChanged Url.Url
    | LinkClicked Browser.UrlRequest
    | PageChanged


pageContents : Html Message -> List (Html Message)
pageContents contents =
    [ card cardConfig
        { blocks = [ cardBlock <| contents ]
        , actions = Nothing
        }
    ]


headline : String -> String -> Html Message
headline title iconName =
    let
        headlineIcon =
            { iconConfig | additionalAttributes = [ class "headline-icon" ] }
    in
    Html.h2 [ class "headline" ]
        [ icon headlineIcon iconName
        , Html.span [] [ text title ]
        ]


sentense : String -> Html Message
sentense s =
    Html.p [] [ text s ]
