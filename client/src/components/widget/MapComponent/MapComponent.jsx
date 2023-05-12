'use client'

import { YMaps, Map, Placemark, Panorama } from '@pbe/react-yandex-maps';

export default function MapComponent() {
    return (
        <div style={{
            //width: '100vw',
            //position: 'relative',
            //left: '50%',
            //transform: 'translateX(-50%)'
        }}>
            <YMaps>
                <Map
                    defaultState={{
                        center: [55.513573, 28.671460],
                        zoom: 15,
                        controls: ["zoomControl", "fullscreenControl"],
                    }}
                    options={{
                        type: 'yandex#satellite',
                    }}
                    modules={["control.ZoomControl", "control.FullscreenControl"]}
                    width='100%'
                    height={300}
                >
                    <Placemark defaultGeometry={[55.513573, 28.671460]} />
                </Map>
            </YMaps>
        </div>
    )
}