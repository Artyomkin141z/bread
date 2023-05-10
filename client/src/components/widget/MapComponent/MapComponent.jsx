'use client'

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function MapComponent() {
    return (
        <>
            <YMaps>
                <Map
                    defaultState={{
                        center: [55.75, 37.57],
                        zoom: 9,
                        controls: ["zoomControl", "fullscreenControl"],
                    }}
                    modules={["control.ZoomControl", "control.FullscreenControl"]}
                >
                    <Placemark defaultGeometry={[55.751574, 37.573856]} />
                </Map>
            </YMaps>
        </>
    )
}