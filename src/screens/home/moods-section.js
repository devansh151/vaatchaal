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

const MoodsSection = props => {

  const { moodData, navigation } = props;

  const navigateToAllMoods = () => {
    navigation.navigate(SCREENS.CATEGORY, {...moodData, type: CATEGORIES.MOODS});
  };

  return (
    <View style={styles.categoryContainer}>
      <View style={styles.scrollBarInfo}>
        <Text style={styles.scrollBarInfoText}>
          <FormattedMessage {...messages.moodSectionHeading} />
          <Icon active name="art-track" type="MaterialIcons" style={styles.icons} />
        </Text>
        {moodData.albumList && moodData.albumList.length > 5 && (
          <TouchableOpacity activeOpacity={0.5} onPress={navigateToAllMoods}>
            <Text style={styles.scrollBarInfoText}>
              <FormattedMessage {...messages.more} />
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <ScrollView horizontal>
        {moodData.albumList &&
          moodData.albumList.slice(0, 5).map(album => {
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

MoodsSection.propTypes = {
  moodData: PropTypes.object,
  navigation: PropTypes.object
};

export default React.memo(MoodsSection);
