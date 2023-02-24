import React from 'react'
import "../style/Map.css";

const Map = () => {

  return (
    <div className="map">
        <iframe class="gmap_iframe" frameborder="0" width = "100%" height = "100%" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1440&amp;height=658&amp;hl=en&amp;q=Singapore University of social science&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </div>
  )
}

export default Map