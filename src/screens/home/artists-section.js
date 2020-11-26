import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Icon } from "native-base";
import AlbumTile from "../../components/albumTile";
import { CATEGORIES, SCREENS } from "../../constants";
import homeStyles from "./styles.json";
import messages from "../../constants/messages";

const styles = StyleSheet.create(homeStyles);

const ArtistsSection = props => {

  const { artistsData, navigation } = props;

  const navigateToAllArtists = () => {
    navigation.navigate(SCREENS.CATEGORY, {...artistsData, type: CATEGORIES.ARTISTS});
  };

  return (
    <View style={styles.categoryContainer}>
      <View style={styles.scrollBarInfo}>
        <Text style={styles.scrollBarInfoText}>
          <FormattedMessage {...messages.artistsSectionHeading} />
          <Icon active type="MaterialIcons" style={styles.icons} name="mic" />
        </Text>
        {artistsData.albumList && artistsData.albumList.length > 5 && (
          <TouchableOpacity activeOpacity={0.5} onPress={navigateToAllArtists}>
            <Text style={styles.scrollBarInfoText}>
              <FormattedMessage {...messages.more} />
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <ScrollView horizontal>
        {artistsData.albumList &&
          artistsData.albumList.slice(0, 5).map(album => {
            return (
              <AlbumTile
                key={album.albumId}
                navigation={navigation}
                {...album}
              />
            );
          })}
      </ScrollView>
    </View>
  );

};

ArtistsSection.propTypes = {
  navigation: PropTypes.object,
  artistsData: PropTypes.object
};

export default React.memo(ArtistsSection);
