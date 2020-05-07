import videojs from 'video.js';
import './node_modules/video.js/dist/video-js.css';

import 'videojs-contrib-eme';

const player = videojs('player');
player.eme();
const srcObj = {
    src: "https://srf1-euwe.akamaized.net/ba435fc9-b07a-4510-9e51-1d012fd3032c/srf1.ism/manifest(format=m3u8-aapl,encryption=cbcs-aapl,filter=nodvr)",
    type: "application/x-mpegURL",
    keySystems: {
        "com.apple.fps.1_0": {
            certificateUri: "https://srg.live.ott.irdeto.com/licenseServer/streaming/v1/SRG/getcertificate?applicationId=live",
            licenseUri: "https://srg.live.ott.irdeto.com/licenseServer/streaming/v1/SRG/getckc?contentId=SRF1&keyId=5d297749-fd87-49a7-af68-cb7b2a8fdb72"
        }
    }
};


player.src(srcObj);