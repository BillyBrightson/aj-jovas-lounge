var APP_DATA = {
  "scenes": [
    {
      "id": "0-outside",
      "name": "Outside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -0.5190575954466077,
        "pitch": 0.05194748366924706,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -1.2107788623411277,
          "pitch": -0.042253304248694334,
          "rotation": 6.283185307179586,
          "target": "1-outdoor-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-outdoor-lounge",
      "name": "Outdoor Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8143283866647923,
          "pitch": -0.05845928918832577,
          "rotation": 5.497787143782138,
          "target": "2-main-lounge"
        },
        {
          "yaw": -2.5714831348127785,
          "pitch": 0.0013926695228647645,
          "rotation": 0.7853981633974483,
          "target": "0-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-main-lounge",
      "name": "Main Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.590585901060015,
          "pitch": 0.005686781072540725,
          "rotation": 0,
          "target": "1-outdoor-lounge"
        },
        {
          "yaw": -1.3360610482397792,
          "pitch": -0.07161532526860626,
          "rotation": 5.497787143782138,
          "target": "5-executive-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-main-lounge-ii",
      "name": "Main Lounge II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -3.058353873879298,
        "pitch": 0.3135401692894426,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 2.9387652211529307,
          "pitch": -0.07271684539080248,
          "rotation": 5.497787143782138,
          "target": "5-executive-lounge"
        },
        {
          "yaw": -2.961033510829358,
          "pitch": -0.015479158785490554,
          "rotation": 0,
          "target": "1-outdoor-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-executive-lounge-ii",
      "name": "Executive Lounge II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3043187902852544,
          "pitch": 0.15468176290825575,
          "rotation": 0,
          "target": "5-executive-lounge"
        },
        {
          "yaw": 1.4532163816693853,
          "pitch": -0.19445077994672033,
          "rotation": 0.7853981633974483,
          "target": "2-main-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-executive-lounge",
      "name": "Executive Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9238825134319804,
          "pitch": 0.02210444496483177,
          "rotation": 0,
          "target": "4-executive-lounge-ii"
        },
        {
          "yaw": -2.421761017897179,
          "pitch": 0.0019389066657975462,
          "rotation": 5.497787143782138,
          "target": "3-main-lounge-ii"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "AJ Jova's Lounge",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
