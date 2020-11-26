export const formatTrackListResponse = data => {
  try {
    let artistsMap = {};
    const albumResponse = {
      totalTracks: data.length || 0,
      trackList: [],
    };
    data.forEach(item => {
      const trackInfo = prepareTrackInfo(item.description);
      artistsMap = {...artistsMap, ...prepareArtistsMap(trackInfo)};
      albumResponse.trackList.push({
        videoId: item.videoId,
        trackName: item.title,
        thumbnail: item.thumbnail,
        trackInfo: trackInfo,
      });
    });
    albumResponse.totalArtists = Object.keys(artistsMap).length;
    return albumResponse;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const formatAlbumListResponse = data => {
  try {
    const playlistResponse = {
      totalAlbums: Object.keys(data).length || 0,
      albumList: [],
    };
    for (const [key, value] of Object.entries(data)) {
      playlistResponse.albumList.push({
        albumName: key,
        albumId: key,
        thumbnail: value.length && value[0].thumbnail,
      });
    }
    return playlistResponse;
  } catch (error) {
    return error;
  }
};

export const prepareTrackInfo = description => {
  const infos = description.split("\n");
  const trackMeta = {};
  infos.forEach(item => {
    trackMeta[item.split(":")[0]] = item.split(":")[1];
  });
  return trackMeta;
};

const prepareArtistsMap = trackInfo => {
  const artistsMap = {};
  trackInfo.Artist.split(",").forEach(item => {
    artistsMap[item.trim()] = item.trim();
  });
  return artistsMap;
};

