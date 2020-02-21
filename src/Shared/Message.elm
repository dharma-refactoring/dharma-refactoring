module Shared.Message exposing (Message(..))

import Browser
import Url


type Message
    = UrlChanged Url.Url
    | LinkClicked Browser.UrlRequest
    | PageChanged
