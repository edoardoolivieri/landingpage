import React from "react"
import SpotifyPlayer from 'react-spotify-web-playback';
import _ from "underscore"

export default () => {

    const token = "BQBIMHpyJ65wW3gD_utmveXCxR5mXj6FvGxSxjsETIEYnLQ83k-JwIJAy7dBoCasi4x77RGSE527Hcok-91bBMIksrVvXVK97fDvKhpOBJcMDMEOgW7BtwM4Di9EXDnfGTZs-BXPDrQreyL1lW6bSu91oBvjL42-kEcl_KYSduDYgdMKs4ccx7RpACph"
    
    return (
        <>
            <SpotifyPlayer
                token={token}
                uris={['spotify:album:4bNPOFOzxGhF5jhfIK6lit?highlight=spotify:track:6QeUzTuBoasiii8nevDciq']}
            />
        </>
    )
}
