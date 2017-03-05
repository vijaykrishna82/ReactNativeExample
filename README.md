# 1. ReactNativeExample

1. Initialize a react-native app as follows

` react-native init GitHubBrowser `

# 2. Create Login View

1. Start the simulator

`react-native run ios`

2. Enable Live Reload 

`Hit CMD + D and Enable Live Reload`

3. Make changes in index.ios.js

- Add Login.js
- Add Images to Images folder

# 3. Trivia

## 1. Setting boolean properties in JSX
Issue: Get warning: "Failed propType: Invalid prop `x` of type `string` supplied to `Draggable`, expected `number`. Check the render method of `GridItem`

Solution:
boolean properties:
Set boolean properties as {true}, not "true"

## 2. Adding comments in JSX

Expected: <!-- This is not a JSX Comment -->

Actual {/*This is a JSX Comment*/}

## 3. ActivityIndicatorIOS is no longer supported

Use ActivityIndicator instead.