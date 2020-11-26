import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import loaderStyle from "./styles.json";

const styles = StyleSheet.create(loaderStyle);

const Loader = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#bc143c" />
    </View>
  );
};

export default React.memo(Loader);
