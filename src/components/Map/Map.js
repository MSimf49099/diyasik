import './map.css';

import map1 from '../../assets/map1.png';
import map2 from '../../assets/map2.png';
import map3 from '../../assets/map3.png';
import map4 from '../../assets/map4.png';

const Map = ({ count }) => {
    return (
        <div className="map">
            {count === 1 && (
                <img
                    src={map1}
                    alt=""
                    className="map-image"
                />
            )}

            {count === 2 && (
                <img
                    src={map2}
                    alt=""
                    className="map-image"
                />
            )}

            {count === 3 && (
                <img
                    src={map3}
                    alt=""
                    className="map-image"
                />
            )}

            {count === 4 && (
                <img
                    src={map4}
                    alt=""
                    className="map-image"
                />
            )}
        </div>
    );
}

export default Map;