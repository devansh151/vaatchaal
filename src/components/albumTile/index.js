import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Icon } from "native-base";
import albumTileStyle from "./styles.json";
import { SCREENS } from "../../constants";

const styles = StyleSheet.create(albumTileStyle);

const AlbumTile = props => {

  const { navigation, albumName, thumbnail } = props;
  const Image_Http_URL = {uri: thumbnail};
  const navigate = () => {
    navigation.navigate(SCREENS.ALBUM, {...props});
  };

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={navigate}>
      <View style={styles.albumCard}>
        <ImageBackground
          source={Image_Http_URL}
          style={styles.image}
          imageStyle={styles.albumImageStyle}>
          <Icon
            type="MaterialIcons"
            style={styles.playIcon}
            active
            name="play-circle-outline"
          />
          <View>
            <Text numberOfLines={2} style={styles.albumName}>
              {albumName}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );

};

AlbumTile.propTypes = {
  albumName: PropTypes.string,
  thumbnail: PropTypes.string,
  navigation: PropTypes.object
};

export default React.memo(AlbumTile);
