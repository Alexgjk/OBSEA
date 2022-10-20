// https://data.obsea.es/api/

// https://data.obsea.es/FROST-Server/v1.1/ObservedProperties(1)/Datastreams?$select=description,selfLink

// https://data.obsea.es/FROST-Server/v1.1/ObservedProperties?$select=description,Datastreams

// https://data.obsea.es/api/Datastreams(27)/Observations?$select=resultTime,result

// https://data.obsea.es/api/Datastreams(27)/Observations?$select=resultTime,result&$top=1000000&$filter=resultQuality/qc_flag eq 1 and resultTime ge 2021-01-01T00:00:00z and resultTime lt 2022-01-01T00:00:00z&$orderBy=resultTime asc
 // TEMP,PSAL,AIRT,Hm0,H3,H10,Hmax,Spr1,Mdir,WDIR,WSPD,UCUR_0m,VCUR_0m,ZCUR_0m,UCUR_1m,VCUR_1m,ZCUR_1m,UCUR_2m,VCUR_2m,ZCUR_2m,UCUR_3m,VCUR_3m,ZCUR_3m,UCUR_4m,VCUR_4m,ZCUR_4m,UCUR_5m,VCUR_5m,ZCUR_5m,UCUR_6m,VCUR_6m,ZCUR_6m,UCUR_7m,VCUR_7m,ZCUR_7m,UCUR_8m,VCUR_8m,ZCUR_8m,UCUR_9m,VCUR_9m,ZCUR_9m,UCUR_10m,VCUR_10m,ZCUR_10m,UCUR_11m,VCUR_11m,ZCUR_11m,UCUR_12m,VCUR_12m,ZCUR_12m,UCUR_13m,VCUR_13m,ZCUR_13m,UCUR_14m,VCUR_14m,ZCUR_14m,UCUR_15m,VCUR_15m,ZCUR_15m,UCUR_16m,VCUR_16m,ZCUR_16m,UCUR_17m,VCUR_17m,ZCUR_17m,UCUR_18m,VCUR_18m,ZCUR_18m,UCUR_19m,VCUR_19m,ZCUR_19m
const OBSEADataTypes = {  
  // 3D simulation parameters
  // Wind
  'WDIR': {
    name: 'WDIR',
    altNames: ['Wind direction', 'WDIR', 'Wind orientation'],
    description: 'Wind from direction data from sensor Airmar_150WX deployed at OBSEA_Buoy',
    url: 'https://data.obsea.es/api/Datastreams(27)',
    units: 'º',
  },
  'WSPD': {
    name: 'WSPD',
    altNames: ['Wind speed', 'WSPD', 'Wind velocity'],
    description: 'Wind speed data from sensor Airmar_150WX deployed at OBSEA_Buoy', 
    url: 'https://data.obsea.es/api/Datastreams(28)',
    units: 'm/s',
    signValue: 11,
  },

  // Waves
  'Hm0': {
    name: 'Hm0',
    altNames: ['Wave significant height', 'Wave height', 'hm0'],
    description: 'Spectral significant wave height of waves by acoustic doppler wave array',
    url: 'https://data.obsea.es/api/Datastreams(197)',
    units: 'm',
    signValue: 4, // 4 meters significant value
  },

  'WDIR': {
    name: 'WDIR',
    altNames: [ 'Mean wave direction', 'Wave mean direction'],
    description: 'Direction(from) mean of waves(mean wave direction) on the water body by acoustic doppler wave array',
    url: 'https://data.obsea.es/api/Datastreams(206)',
    units: 'º'
  },

  'WSPR':{
    name: 'WSPR',
    altNames: ['Direction spreading of waves', 'WSPR', "Wave direction spreading"],
    description: 'Directional spreading of waves on the water body by acoustic doppler wave array',
    url: 'https://data.obsea.es/api/Datastreams(205)',
    units: 'º'
  },

  'Hmax': {
    name: 'Hmax',
    altNames: ['Wave height maximum', 'Wave maximum'],
    description: 'Wave height maximum of waves on the water body by acoustic doppler wave array',
    url: 'https://data.obsea.es/api/Datastreams(200)',
    units: 'm'
  },

  // Current
  'Current':{
    name: 'Current',
    altNames: ['Sea water velocity', 'Sea velocity', 'CUR', 'UCUR', 'VCUR', 'ZCUR'],
    description: 'Velocity of water current in the water body',
    url: {
      baseURL: 'https://data.obsea.es/api/Datastreams(X)',
      0: {'U': '221', 'V': '222', 'Z': '223'},
      1: { 'U': '226', 'V': '227', 'Z': '228' },
      2: { 'U': '231', 'V': '232', 'Z': '233' },
      3: { 'U': '236', 'V': '237', 'Z': '238' },
      4: { 'U': '241', 'V': '242', 'Z': '243' },
      5: { 'U': '246', 'V': '247', 'Z': '248' },
      6: { 'U': '251', 'V': '252', 'Z': '253' },
      7: { 'U': '256', 'V': '257', 'Z': '258' },
      8: { 'U': '261', 'V': '262', 'Z': '263' },
      9: { 'U': '266', 'V': '267', 'Z': '268' },
      10: { 'U': '271', 'V': '272', 'Z': '273' },
      11: { 'U': '276', 'V': '277', 'Z': '278' },
      12: { 'U': '281', 'V': '282', 'Z': '283' },
      13: { 'U': '286', 'V': '287', 'Z': '288' },
      14: { 'U': '291', 'V': '292', 'Z': '293' },
      15: { 'U': '296', 'V': '297', 'Z': '298' },
      16: { 'U': '301', 'V': '302', 'Z': '303' },
      17: { 'U': '306', 'V': '307', 'Z': '308' }, 
      18: { 'U': '311', 'V': '312', 'Z': '313' },
      19: { 'U': '316', 'V': '317', 'Z': '318' },
    },
    units: 'm/s'
  },




  // Temperature
  'Sea bottom temperature': {
    name: 'Sea bottom temperature',
    altNames: ['TEMP', 'Sea underwater temperature'],
    description: 'Sea water temperature data from sensor deployed at OBSEA',
    url: ['https://data.obsea.es/api/Datastreams(1)', 'https://data.obsea.es/api/Datastreams(6)',
      'https://data.obsea.es/api/Datastreams(11)', 'https://data.obsea.es/api/Datastreams(216)',
      'https://data.obsea.es/api/Datastreams(16)'],
    units: 'ºC'
  },
  // Salinity
  'Salinity': {
    name: 'Salinity',
    altNames: ['SAL', 'PSAL', 'Sea underwater salinity', 'Sea bottom salinity', 'Sea water salinity'],
    description: 'Sea water salinity data from sensor deployed at OBSEA',
    url: ['https://data.obsea.es/api/Datastreams(4)', 'https://data.obsea.es/api/Datastreams(9)',
      'https://data.obsea.es/api/Datastreams(14)', 'https://data.obsea.es/api/Datastreams(19)'],
    units: '‰'
  },


  

}

export default OBSEADataTypes;