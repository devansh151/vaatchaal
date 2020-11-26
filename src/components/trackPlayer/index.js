import React from "react";
import PropTypes from "prop-types";
import YouTube from "react-native-youtube";
import { StyleSheet } from "react-native";
import trackPlayerStyle from "./styles.json";
import ytConfig from "../../config"

const styles = StyleSheet.create(trackPlayerStyle);

const TrackPlayer = props => {

  const { videoId } = props;

  return (
    <YouTube
      play // control playback of video with true/false
      loop // control whether the video should loop when ended
      controls={0}
      showInfo={0}
      videoId={videoId}
      fullscreen={false} // control whether the video should play in fullscreen or inline
      style={styles.player}
      apiKey={ytConfig.apiKey}
      showFullscreenButton={false}
      onError={e => {
        console.log(e);
      }}
    />
  );

};

TrackPlayer.propTypes = {
  videoId: PropTypes.string
};

export default React.memo(TrackPlayer);
