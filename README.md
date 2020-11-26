# Vaatchaal
Translates from marathi to english as "Rythm of the soul"
React Native Firebase app that plays recorded songs from Youtube using Youtube Data API and stored in firebase

This is a React Native app created using react-native-cli. It fetches videos from custom youtube channel and stores the data in firebase app so as to reduce number of calls to youtube data API.
Using firebase as cloud storage helps in categorizing the videos and quering only those that are required. It is cheaper that querying via youtube API.

It categorizes videos list in Recent, By artists and By moods. Also we can see each artists songs list and much more. All the querying and categorizing is done in firebase from single list of youtube videos based on tags.

TODO: Implement Search feature.


# Codebase
  ReactNative (JS)
# UI Components
  Native base
# DB
  Firebase cloud storage for querying data
# Data source
  Youtube via Youtube Data API
# Youtube player
  react-native-youtube-player
