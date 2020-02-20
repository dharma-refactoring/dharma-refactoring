module Main exposing (..)

import Browser
import Html exposing (Html, text)
import Html.Attributes exposing (class)
import Html.Lazy exposing (lazy2)
import Material.IconButton exposing (iconButton, iconButtonConfig)
import Material.TopAppBar as TopAppBar exposing (topAppBar, topAppBarConfig)



-- MODEL


type alias Model =
    {}



-- INIT


init : ( Model, Cmd Message )
init =
    ( Model, Cmd.none )



-- VIEW


view : Model -> Html Message
view model =
    topAppBar topAppBarConfig
        [ lazy2 TopAppBar.row
            []
            [ lazy2 TopAppBar.section
                [ TopAppBar.alignStart ]
                [ lazy2 Html.span [ TopAppBar.title, class "base-font" ] [ text "だるま Refactoring" ]
                ]
            ]
        ]



-- MESSAGE


type Message
    = None



-- UPDATE


update : Message -> Model -> ( Model, Cmd Message )
update message model =
    ( model, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Message
subscriptions model =
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
