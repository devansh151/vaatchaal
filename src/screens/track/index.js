import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import { List, ListItem, Text } from "native-base";
import TrackPlayer from "../../components/trackPlayer";
import trackStyles from "./styles.json";

const styles = StyleSheet.create(trackStyles);

const TrackContainer = props => {

  const { videoId, trackName, trackInfo } = props.route.params;

  return (
    <View style={styles.container}>
      <TrackPlayer videoId={videoId} />
      <View style={styles.infoContainer}>
        <List>
          <ListItem key={trackName} itemHeader first>
            <Text style={styles.infoHeading}>{trackName}</Text>
          </ListItem>
          {Object.keys(trackInfo).map(item => {
            return (
              <ListItem key={trackInfo[item]}>
                <Text style={styles.infoMetaKey}>{item}: </Text>
                <Text style={styles.infoMetaValue}>{trackInfo[item]}</Text>
              </ListItem>
            );
          })}
        </List>
      </View>
    </View>
  );

};

TrackContainer.propTypes = {
  navigation: PropTypes.object
};

export default React.memo(TrackContainer);
