var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_IndianaMap2017_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.indiana.edu/arcgis/services/Imagery/Orthos_2017/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "IndianaMap 2017",
                            type: "base",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_IndianaMap2017_1, 0]);
var lyr_IGS1940_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "IGS 1940",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/IGS1940_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9513414.049858, 4749861.548063, -9506381.123821, 4755603.631671]
                            })
                        });
var lyr_HA1955_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "HA 1955",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/HA1955_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9511648.987756, 4750649.197048, -9509033.251460, 4753247.100864]
                            })
                        });
var lyr_PlatMap1882_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Plat Map 1882",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PlatMap1882_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9511215.018047, 4751063.270243, -9509341.905130, 4752507.451813]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_IndianaMap2017_1.setVisible(false);lyr_IGS1940_2.setVisible(false);lyr_HA1955_3.setVisible(false);lyr_PlatMap1882_4.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_IndianaMap2017_1,lyr_IGS1940_2,lyr_HA1955_3,lyr_PlatMap1882_4];
