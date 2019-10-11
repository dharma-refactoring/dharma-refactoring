module MainTests exposing (suite)

import Expect
import Test exposing (Test, describe, test)


suite : Test
suite =
    describe "Main"
        [ test "sample test" <|
            \_ -> Expect.equal 1 1
        ]
