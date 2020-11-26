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
import TrackTile from "../../components/trackTile";
import { CATEGORIES, SCREENS } from "../../constants";
import homeStyles from "./styles.json";
import messages from "../../constants/messages";

const styles = StyleSheet.create(homeStyles);

const RecentSection = props => {

  const { recentData, navigation } = props;

  const navigateToLatestSongs = () => {
    navigation.navigate(SCREENS.ALBUM, {...recentData, type: CATEGORIES.TODAY});
  };

  return (
    <View style={styles.categoryContainer}>
      <View style={styles.scrollBarInfo}>
        <Text style={styles.scrollBarInfoText}>
          <FormattedMessage {...messages.recentSectionHeading} />
          <Icon active type="MaterialIcons" style={styles.icons} name="access-alarm" />
        </Text>
        {recentData.trackList && recentData.trackList.length > 5 && (
          <TouchableOpacity activeOpacity={0.5} onPress={navigateToLatestSongs}>
            <Text style={styles.scrollBarInfoText}>
              <FormattedMessage {...messages.more} />
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <ScrollView horizontal>
        {recentData.trackList &&
          recentData.trackList.slice(0, 5).map(track => {
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
  );

};

RecentSection.propTypes = {
  recentData: PropTypes.object,
  navigation: PropTypes.object
};

export default React.memo(RecentSection);
