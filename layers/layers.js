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
var format_tha_adm1_1 = new ol.format.GeoJSON();
var features_tha_adm1_1 = format_tha_adm1_1.readFeatures(json_tha_adm1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tha_adm1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tha_adm1_1.addFeatures(features_tha_adm1_1);
var lyr_tha_adm1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tha_adm1_1, 
                style: style_tha_adm1_1,
                interactive: true,
                title: '<img src="styles/legend/tha_adm1_1.png" /> tha_adm1'
            });
var format_tha_water_areas_dcw_2 = new ol.format.GeoJSON();
var features_tha_water_areas_dcw_2 = format_tha_water_areas_dcw_2.readFeatures(json_tha_water_areas_dcw_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tha_water_areas_dcw_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tha_water_areas_dcw_2.addFeatures(features_tha_water_areas_dcw_2);
var lyr_tha_water_areas_dcw_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tha_water_areas_dcw_2, 
                style: style_tha_water_areas_dcw_2,
                interactive: true,
    title: 'tha_water_areas_dcw<br />\
    <img src="styles/legend/tha_water_areas_dcw_2_0.png" /> Non-Perennial/Intermittent/Fluctuating<br />\
    <img src="styles/legend/tha_water_areas_dcw_2_1.png" /> Perennial/Permanent<br />'
        });
var format_tha_water_lines_dcw_3 = new ol.format.GeoJSON();
var features_tha_water_lines_dcw_3 = format_tha_water_lines_dcw_3.readFeatures(json_tha_water_lines_dcw_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tha_water_lines_dcw_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tha_water_lines_dcw_3.addFeatures(features_tha_water_lines_dcw_3);
var lyr_tha_water_lines_dcw_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tha_water_lines_dcw_3, 
                style: style_tha_water_lines_dcw_3,
                interactive: true,
                title: '<img src="styles/legend/tha_water_lines_dcw_3.png" /> tha_water_lines_dcw'
            });
var format_flood_stations_demo_4 = new ol.format.GeoJSON();
var features_flood_stations_demo_4 = format_flood_stations_demo_4.readFeatures(json_flood_stations_demo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_flood_stations_demo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_flood_stations_demo_4.addFeatures(features_flood_stations_demo_4);
var lyr_flood_stations_demo_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_flood_stations_demo_4, 
                style: style_flood_stations_demo_4,
                interactive: true,
                title: '<img src="styles/legend/flood_stations_demo_4.png" /> flood_stations_demo'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_tha_adm1_1.setVisible(true);lyr_tha_water_areas_dcw_2.setVisible(true);lyr_tha_water_lines_dcw_3.setVisible(true);lyr_flood_stations_demo_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_tha_adm1_1,lyr_tha_water_areas_dcw_2,lyr_tha_water_lines_dcw_3,lyr_flood_stations_demo_4];
lyr_tha_adm1_1.set('fieldAliases', {'gid': 'gid', 'id_0': 'id_0', 'iso': 'iso', 'name_0': 'name_0', 'id_1': 'id_1', 'name_1': 'name_1', 'varname_1': 'varname_1', 'nl_name_1': 'nl_name_1', 'hasc_1': 'hasc_1', 'cc_1': 'cc_1', 'type_1': 'type_1', 'engtype_1': 'engtype_1', 'validfr_1': 'validfr_1', 'validto_1': 'validto_1', 'remarks_1': 'remarks_1', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_tha_water_areas_dcw_2.set('fieldAliases', {'gid': 'gid', 'iso': 'iso', 'country': 'country', 'f_code_des': 'f_code_des', 'hyc_descri': 'hyc_descri', 'name': 'name', });
lyr_tha_water_lines_dcw_3.set('fieldAliases', {'gid': 'gid', 'f_code_des': 'f_code_des', 'hyc_descri': 'hyc_descri', 'nam': 'nam', 'iso': 'iso', 'name_0': 'name_0', });
lyr_flood_stations_demo_4.set('fieldAliases', {'gid': 'gid', 'name': 'name', 'long': 'long', 'lat': 'lat', });
lyr_tha_adm1_1.set('fieldImages', {'gid': 'TextEdit', 'id_0': 'Range', 'iso': 'TextEdit', 'name_0': 'TextEdit', 'id_1': 'Range', 'name_1': 'TextEdit', 'varname_1': 'TextEdit', 'nl_name_1': 'TextEdit', 'hasc_1': 'TextEdit', 'cc_1': 'TextEdit', 'type_1': 'TextEdit', 'engtype_1': 'TextEdit', 'validfr_1': 'TextEdit', 'validto_1': 'TextEdit', 'remarks_1': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_tha_water_areas_dcw_2.set('fieldImages', {'gid': 'TextEdit', 'iso': 'TextEdit', 'country': 'TextEdit', 'f_code_des': 'TextEdit', 'hyc_descri': 'TextEdit', 'name': 'TextEdit', });
lyr_tha_water_lines_dcw_3.set('fieldImages', {'gid': 'TextEdit', 'f_code_des': 'TextEdit', 'hyc_descri': 'TextEdit', 'nam': 'TextEdit', 'iso': 'TextEdit', 'name_0': 'TextEdit', });
lyr_flood_stations_demo_4.set('fieldImages', {'gid': 'TextEdit', 'name': 'TextEdit', 'long': 'TextEdit', 'lat': 'TextEdit', });
lyr_tha_adm1_1.set('fieldLabels', {'gid': 'no label', 'id_0': 'no label', 'iso': 'no label', 'name_0': 'no label', 'id_1': 'no label', 'name_1': 'no label', 'varname_1': 'no label', 'nl_name_1': 'no label', 'hasc_1': 'no label', 'cc_1': 'no label', 'type_1': 'no label', 'engtype_1': 'no label', 'validfr_1': 'no label', 'validto_1': 'no label', 'remarks_1': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_tha_water_areas_dcw_2.set('fieldLabels', {'gid': 'no label', 'iso': 'no label', 'country': 'no label', 'f_code_des': 'no label', 'hyc_descri': 'no label', 'name': 'no label', });
lyr_tha_water_lines_dcw_3.set('fieldLabels', {'gid': 'header label', 'f_code_des': 'no label', 'hyc_descri': 'no label', 'nam': 'header label', 'iso': 'no label', 'name_0': 'no label', });
lyr_flood_stations_demo_4.set('fieldLabels', {'gid': 'inline label', 'name': 'no label', 'long': 'header label', 'lat': 'header label', });
lyr_flood_stations_demo_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});