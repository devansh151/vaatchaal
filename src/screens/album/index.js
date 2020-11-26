import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground
} from "react-native";
import { Container, Content } from "native-base";
import TrackTile from "../../components/trackTile";
import { images } from "../../assets";
import albumStyles from './styles.json';
import messages from "../../constants/messages";

const styles = StyleSheet.create(albumStyles);

const Album = props => {

  const { navigation, route } = props;
  const {
    type,
    albumName,
    totalTracks,
    trackList,
    totalArtists
  } = route.params;
  const screenTitle = albumName || type;

  return (
    <Container>
      <Content contentContainerStyle={styles.albumContainer}>
        <View style={styles.albumContainer}>
          <View style={styles.albumHeader}>
            <ImageBackground
              source={images.album}
              style={styles.albumCoverImage}
              imageStyle={styles.albumImage}>
              <Text style={styles.albumInfoHeaderText}>{screenTitle}</Text>
              <View style={styles.albumInfo}>
                <Text style={styles.albumInfoText}>
                  <FormattedMessage {...messages.albumInfoTrackText} values={{totalTracks}} />
                </Text>
                <Text style={styles.albumInfoText}>
                  <FormattedMessage {...messages.albumInfoArtistText} values={{totalArtists}} />
                </Text>
              </View>
            </ImageBackground>
          </View>
          <ScrollView contentContainerStyle={styles.songListContainer}>
            {trackList &&
              trackList.map(track => {
                return (
                  <TrackTile
                    key={track.videoId}
                    navigation={navigation}
                    {...track}
                  />
                );
              })}
          </ScrollView>
        </View>
      </Content>
    </Container>
  );

};

Album.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object
};

export default React.memo(Album);
