import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import * as geoJSON from '../src/USA_geo.json';
import data from '../src/msas.geojson';
import { getCoord } from 'echarts/extension/dataTool';
// import * as msaJSON from '../src/USA_msa.json';
interface Feature {
  type: string;
  properties: {
    [key: string]: any;
  };
  geometry: {
    type: string;
    coordinates: number[][];
  };
}





const stateOption = {
  title: {
    text: 'USA State Population Estimates (2012)',
    subtext: 'Data from www.census.gov',
    sublink: 'http://www.census.gov/popest/data/datasets.html',
    left: 'right'
  },
  tooltip: {
    trigger: 'item',
    showDelay: 0,
    transitionDuration: 0.2,
    formatter: (params:any, extraparam:any) => {
      var value = (params.value + '').split('.');
      var item1 = 'Workers per postings for category :'+ params.data.WorkersPerPostingsCount;
      var item2 = 'Workers per posting' + params.data.workersPerPosting;
      var item3 = 'Ratio: ' + params.data.ratio;
      var item4 = 'postings: ' + params.data.postings;
      return params.seriesName + '<br>'+ value +'<br>' + item1 + '<br>' + item2 + '<br>' + item3 + '<br>' + item4 ;
    }
  },
  visualMap: {
    left: 'right',
    min: 500000,
    max: 38000000,
    color: ['orangered', 'yellow', 'lightskyblue'],
    text: ['High', 'Low'],
    calculable: true
  },
  toolbox: {
    show: true,
    left: 'left',
    top: 'top',
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'USA State PopEstimates',
      type: 'map',
      roam: true,
      map: 'USA',
      itemStyle: {
        emphasis: { label: { show: true } }
      },
      textFixed: {
        Alaska: [20, -20]
      },
      data: [
        {name: 'Alabama', value: 4822023, WorkersPerPostingsCount: 4.8, workersPerPosting: 3.2, ratio: 0.8, postings: 150},
        {name: 'Alaska', value: 731449, WorkersPerPostingsCount: 5.2, workersPerPosting: 2.7, ratio: 1.2, postings: 70}, 
      ]
    }
  ]
};


//@ts-ignore
const formattedData = {
  type: 'FeatureCollection',
  features: msaJSON.FeatureCollection.map((feature: { geometry: { type: any; coordinates: any; }; properties: { name: any; cbsafp: any; aland: any; awater: any; }; }) => ({
    type: 'Feature',
    geometry: {
      type: feature.geometry.type,
      coordinates: feature.geometry.coordinates,
    },
    properties: {
      name: feature.properties.name,
      cbsafp: feature.properties.cbsafp,
      aland: feature.properties.aland,
      awater: feature.properties.awater,
    },
  })),
};

//@ts-ignore
let countyOption = {
  geo: {
    map: 'USA',
  },
  series: [
    {
      name: 'USA County PopEstimates',
      type: 'map',
      roam: true,
      map: 'USA',
      geoJSON: formattedData,
      itemStyle: {
        emphasis: { label: { show: true } }
      },
      textFixed: {
        Alaska: [20, -20]
      },
      data:[],
    }
  ]
};

//@ts-ignore
fetchMsaData().then((data) => {
  countyOption.series[0].data = data.features[0].geometry;
  // use countyOption here
}).catch((error) => {
  console.error(error);
});

async function fetchMsaData() {
  const response = await fetch('https://gist.githubusercontent.com/sdl60660/ba9b28e1562e98d1fef12ea4c2527b11/raw/8d9f3ed1c6d60e7c67ad7164de4b97c723158e78/msa.geojson');
  const data = await response.json();
  return data;
}

export default function CountiesMap() {
  const [mapOptions, setMapOptions] = useState(stateOption);
  
  // useEffect(() => {
    
  // }, []);

  useEffect(() => {
    echarts.registerMap('USA', geoJSON);
  }, []);

  const handleStateClick = () => {
    setMapOptions(stateOption);
  };

  const handleCountyClick = () => {
    //@ts-ignore
    setMapOptions(countyOption);
  };

  return (
    <div>
      <button onClick={handleStateClick}>USA State Population</button>
      <button onClick={handleCountyClick}>USA County Population</button>
      <ReactECharts
        option={mapOptions}
        notMerge={true}
        lazyUpdate={true}
        style={{ width: '50%', height: '500px' }}
      />
    </div>
  );
}