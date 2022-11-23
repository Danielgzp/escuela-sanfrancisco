import React from "react";

import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = (props) => {
  return (
    <GoogleMap
      defaultZoom={18}
      defaultCenter={{ lat: 10.056154409920415, lng: -69.38650506969921 }}
    />
  );
};

export default withScriptjs(withGoogleMap(Map));
