import React from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { Icon } from "native-base";
import trackTileStyle from "./styles.json";
import { SCREENS } from "../../constants";

const styles = StyleSheet.create(trackTileStyle);

const TrackTile = props => {

  const {
    videoId,
    trackInfo,
    trackName,
    thumbnail,
    navigation
  } = props;
  const Image_Http_URL = {uri: thumbnail};

  const navigate = () => {
    navigation.navigate(SCREENS.TRACKCONTAINER, {videoId, trackName, trackInfo});
  };

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={navigate}>
      <View style={styles.trackCard}>
        <ImageBackground
          source={Image_Http_URL}
          style={styles.image}
          imageStyle={styles.trackImageStyle}>
          <View>
            <Text numberOfLines={2} style={styles.trackName}>
              {trackName}
            </Text>
          </View>
          <Icon
            type="MaterialIcons"
            style={styles.playIcon}
            active
            name="play-circle-outline"
          />
          <View>
            <Text numberOfLines={2} style={styles.trackArtist}>
              {trackInfo.Artist}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );

};

TrackTile.propTypes = {
  videoId: PropTypes.string,
  trackInfo: PropTypes.object,
  trackName: PropTypes.string,
  thumbnail: PropTypes.string,
  navigation: PropTypes.object
};

export default React.memo(TrackTile);
