// import React, { useEffect, useState } from "react";
// import * as echarts from "echarts";
// import ReactECharts from "echarts-for-react";


// export default function Map() {
//     const [mapOptions, setMapOptions] = useState<any>(stateOption);
//     const [geoJSONData, setGeoJsonData] = useState<any>(geoJSON);
    
//     useEffect(() => {
//       const map = {
//         type: "FeatureCollection",
//         features: geoJSONData["features"],
//       };
  
//       echarts.registerMap("USA", map);
//     }, [geoJSONData]);
  
//     const handleStateClick = () => {
//       setMapOptions(stateOption);
//       setGeoJsonData(geoJSON);
//     };
  
//     const handleCountyClick = () => {
//       setMapOptions(msaOption);
//       setGeoJsonData(msaJSON);
//     };
  
//     return (
//       <div>
//         <button onClick={handleStateClick}>USA State Map</button>
//         <button onClick={handleCountyClick}>USA MSA Map</button>
//         <ReactECharts
//           option={mapOptions}
//           notMerge={true}
//           lazyUpdate={true}
//           style={{ width: "50%", height: "500px" }}
//         />
//       </div>
//     );
//   }
  