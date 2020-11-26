import { homeCategoryKeys } from "../../constants";
import { firestore } from "../../services/firebase/firebase";

export const getHomeData = () => {
  const uiResponse = {};
  const collectionPromises = [
    firestore.collection("artistsData").get(),
    firestore.collection("moodData").get(),
    firestore.collection("recentData").get(),
  ]
  return Promise.all(collectionPromises)
  .then(res => {
    res.forEach((r, index) => {
      uiResponse[homeCategoryKeys[index]] = r.docs[0].data();
    });
    return Promise.resolve(uiResponse);
  }).catch(e => {
    return Promise.reject(e);
  });
};
