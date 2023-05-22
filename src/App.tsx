import React, { useEffect, useState } from "react";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";
import geoJSON from "../src/USA_geo.json";
import msaJSON from "../src/msas.json";
import { getCoord } from "echarts/extension/dataTool";
import { GeoJSON } from "./interfaces";

// import * as msaJSON from '../src/USA_msa.json';

const stateOption = {
  title: {
    text: "USA State Population Estimates (2012)",
    subtext: "Data from www.census.gov",
    sublink: "http://www.census.gov/popest/data/datasets.html",
    left: "right",
  },
  tooltip: {
    trigger: "item",
    showDelay: 0,
    transitionDuration: 0.2,
    formatter: (params: any, extraparam: any) => {
      var value = (params.value + "").split(".");
      var item1 =
        "Workers per postings for category :" +
        params.data.WorkersPerPostingsCount;
      var item2 = "Workers per posting" + params.data.workersPerPosting;
      var item3 = "Ratio: " + params.data.ratio;
      var item4 = "postings: " + params.data.postings;
      return (
        params.seriesName +
        "<br>" +
        value +
        "<br>" +
        item1 +
        "<br>" +
        item2 +
        "<br>" +
        item3 +
        "<br>" +
        item4
      );
    },
  },
  visualMap: {
    left: "right",
    min: 500000,
    max: 38000000,
    color: ["orangered", "yellow", "lightskyblue"],
    text: ["High", "Low"],
    calculable: true,
  },
  toolbox: {
    show: true,
    left: "left",
    top: "top",
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  series: [
    {
      name: 'USA State PopEstimates',
      type: 'map',
      nameProperty: 'name',
      map: 'StateMap',
      textFixed: {
        Alaska: [20, -20],
      },
      data: [
        {
          name: "Alabama",
          value: 4822023,
          WorkersPerPostingsCount: 4.8,
          workersPerPosting: 3.2,
          ratio: 0.8,
          postings: 150,
        },
        {
          name: "Alaska",
          value: 731449,
          WorkersPerPostingsCount: 5.2,
          workersPerPosting: 2.7,
          ratio: 1.2,
          postings: 70,
        },
        {
          name: "Arizona",
          value: 6553255,
          WorkersPerPostingsCount: 3.9,
          workersPerPosting: 2.1,
          ratio: 2.5,
          postings: 220,
        },
        {
          name: "Arkansas",
          value: 2949131,
          WorkersPerPostingsCount: 6.3,
          workersPerPosting: 3.8,
          ratio: 1.1,
          postings: 100,
        },
        {
          name: "California",
          value: 38041430,
          WorkersPerPostingsCount: 4.1,
          workersPerPosting: 2.9,
          ratio: 1.6,
          postings: 450,
        },
        {
          name: "Colorado",
          value: 5187582,
          WorkersPerPostingsCount: 3.7,
          workersPerPosting: 2.3,
          ratio: 2.2,
          postings: 180,
        },
        {
          name: "Connecticut",
          value: 3590347,
          WorkersPerPostingsCount: 4.9,
          workersPerPosting: 3.4,
          ratio: 1.3,
          postings: 90,
        },
        {
          name: "Delaware",
          value: 917092,
          WorkersPerPostingsCount: 5.6,
          workersPerPosting: 2.8,
          ratio: 1.8,
          postings: 50,
        },
        {
          name: "District of Columbia",
          value: 632323,
          WorkersPerPostingsCount: 4.3,
          workersPerPosting: 3.1,
          ratio: 0.9,
          postings: 30,
        },
        {
          name: "Florida",
          value: 19317568,
          WorkersPerPostingsCount: 4.5,
          workersPerPosting: 2.6,
          ratio: 1.9,
          postings: 380,
        },
        {
          name: "Georgia",
          value: 9919945,
          WorkersPerPostingsCount: 5.1,
          workersPerPosting: 3.1,
          ratio: 1.5,
          postings: 220,
        },
        {
          name: "Hawaii",
          value: 1392313,
          WorkersPerPostingsCount: 4.8,
          workersPerPosting: 2.9,
          ratio: 2.1,
          postings: 60,
        },
        {
          name: "Idaho",
          value: 1595728,
          WorkersPerPostingsCount: 6.2,
          workersPerPosting: 4.1,
          ratio: 0.7,
          postings: 80,
        },
        {
          name: "Illinois",
          value: 12875255,
          WorkersPerPostingsCount: 4.0,
          workersPerPosting: 2.4,
          ratio: 2.6,
          postings: 310,
        },
        {
          name: "Indiana",
          value: 6537334,
          WorkersPerPostingsCount: 5.5,
          workersPerPosting: 3.2,
          ratio: 1.2,
          postings: 140,
        },
        {
          name: "Iowa",
          value: 3074186,
          WorkersPerPostingsCount: 6.1,
          workersPerPosting: 3.7,
          ratio: 0.9,
          postings: 70,
        },
        {
          name: "Kansas",
          value: 2885905,
          WorkersPerPostingsCount: 4.5,
          workersPerPosting: 2.6,
          ratio: 1.9,
          postings: 380,
        },
        {
          name: "Kentucky",
          value: 4380415,
          WorkersPerPostingsCount: 4.8,
          workersPerPosting: 3.2,
          ratio: 0.8,
          postings: 150,
        },
        {
          name: "Louisiana",
          value: 4601893,
          WorkersPerPostingsCount: 5.2,
          workersPerPosting: 2.7,
          ratio: 1.2,
          postings: 70,
        },
        {
          name: "Maine",
          value: 1329192,
          WorkersPerPostingsCount: 3.9,
          workersPerPosting: 2.1,
          ratio: 2.5,
          postings: 220,
        },
        {
          name: "Maryland",
          value: 5884563,
          WorkersPerPostingsCount: 6.3,
          workersPerPosting: 3.8,
          ratio: 1.1,
          postings: 100,
        },
        {
          name: "Massachusetts",
          value: 6646144,
          WorkersPerPostingsCount: 4.1,
          workersPerPosting: 2.9,
          ratio: 1.6,
          postings: 450,
        },
        {
          name: "Michigan",
          value: 9883360,
          WorkersPerPostingsCount: 2.9,
          workersPerPosting: 1.8,
          ratio: 1.6,
          postings: 341,
        },
        {
          name: "Minnesota",
          value: 5379139,
          WorkersPerPostingsCount: 3.2,
          workersPerPosting: 2.2,
          ratio: 1.5,
          postings: 306,
        },
        {
          name: "Mississippi",
          value: 2984926,
          WorkersPerPostingsCount: 3.1,
          workersPerPosting: 2.0,
          ratio: 1.5,
          postings: 187,
        },
        {
          name: "Missouri",
          value: 6021988,
          WorkersPerPostingsCount: 3.0,
          workersPerPosting: 1.9,
          ratio: 1.6,
          postings: 314,
        },
        {
          name: "Montana",
          value: 1005141,
          WorkersPerPostingsCount: 3.1,
          workersPerPosting: 2.0,
          ratio: 1.5,
          postings: 164,
        },
        {
          name: "Nebraska",
          value: 1855525,
          WorkersPerPostingsCount: 2.9,
          workersPerPosting: 1.8,
          ratio: 1.6,
          postings: 250,
        },
        {
          name: "Nevada",
          value: 2758931,
          WorkersPerPostingsCount: 2.9,
          workersPerPosting: 1.8,
          ratio: 1.6,
          postings: 186,
        },
        {
          name: "New Hampshire",
          value: 1320718,
          WorkersPerPostingsCount: 3.3,
          workersPerPosting: 2.3,
          ratio: 1.4,
          postings: 188,
        },
        {
          name: "New Jersey",
          value: 8864590,
          WorkersPerPostingsCount: 3.0,
          workersPerPosting: 1.9,
          ratio: 1.6,
          postings: 463,
        },
        {
          name: "New Mexico",
          value: 2085538,
          WorkersPerPostingsCount: 3.0,
          workersPerPosting: 1.9,
          ratio: 1.6,
          postings: 128,
        },
        {
          name: "New York",
          value: 19570261,
          WorkersPerPostingsCount: 2.9,
          workersPerPosting: 1.9,
          ratio: 1.5,
          postings: 1048,
        },
        {
          name: "North Carolina",
          value: 9752073,
          WorkersPerPostingsCount: 3.0,
          workersPerPosting: 1.9,
          ratio: 1.6,
          postings: 516,
        },
        {
          name: "North Dakota",
          value: 699628,
          WorkersPerPostingsCount: 3.1,
          workersPerPosting: 2.0,
          ratio: 1.5,
          postings: 114,
        },
        {
          name: "Ohio",
          value: 11544225,
          WorkersPerPostingsCount: 3.0,
          workersPerPosting: 1.9,
          ratio: 1.6,
          postings: 607,
        },
        {
          name: "Oklahoma",
          value: 3814820,
          WorkersPerPostingsCount: 3.0,
          workersPerPosting: 1.9,
          ratio: 1.6,
          postings: 200,
        },
        {
          name: "Oregon",
          value: 3899353,
          WorkersPerPostingsCount: 3.0,
          workersPerPosting: 1.9,
          ratio: 1.6,
          postings: 206,
        },
        {
          name: "Pennsylvania",
          value: 12763536,
          WorkersPerPostingsCount: 4.0,
          workersPerPosting: 2.8,
          ratio: 1.4,
          postings: 456,
        },
        {
          name: "Rhode Island",
          value: 1050292,
          WorkersPerPostingsCount: 3.3,
          workersPerPosting: 2.3,
          ratio: 1.4,
          postings: 324,
        },
        {
          name: "South Carolina",
          value: 4723723,
          WorkersPerPostingsCount: 4.4,
          workersPerPosting: 3.1,
          ratio: 1.4,
          postings: 444,
        },
        {
          name: "South Dakota",
          value: 833354,
          WorkersPerPostingsCount: 2.7,
          workersPerPosting: 1.6,
          ratio: 1.7,
          postings: 309,
        },
        {
          name: "Tennessee",
          value: 6456243,
          WorkersPerPostingsCount: 4.1,
          workersPerPosting: 2.9,
          ratio: 1.4,
          postings: 526,
        },
        {
          name: "Texas",
          value: 26059203,
          WorkersPerPostingsCount: 3.9,
          workersPerPosting: 2.8,
          ratio: 1.4,
          postings: 669,
        },
        {
          name: "Utah",
          value: 2855287,
          WorkersPerPostingsCount: 2.7,
          workersPerPosting: 1.7,
          ratio: 1.6,
          postings: 320,
        },
        {
          name: "Vermont",
          value: 626011,
          WorkersPerPostingsCount: 3.4,
          workersPerPosting: 2.5,
          ratio: 1.4,
          postings: 183,
        },
        {
          name: "Virginia",
          value: 8185867,
          WorkersPerPostingsCount: 4.0,
          workersPerPosting: 2.8,
          ratio: 1.4,
          postings: 638,
        },
        {
          name: "Washington",
          value: 6897012,
          WorkersPerPostingsCount: 3.4,
          workersPerPosting: 2.3,
          ratio: 1.5,
          postings: 565,
        },
        {
          name: "West Virginia",
          value: 1855413,
          WorkersPerPostingsCount: 2.8,
          workersPerPosting: 1.7,
          ratio: 1.6,
          postings: 313,
        },
        {
          name: "Wisconsin",
          value: 5726398,
          WorkersPerPostingsCount: 3.7,
          workersPerPosting: 2.5,
          ratio: 1.5,
          postings: 555,
        },
        {
          name: "Wyoming",
          value: 576412,
          working: 54.2,
          WorkersPerPostingsCount: 2.1,
          workersPerPosting: 1.3,
          ratio: 1.6,
          postings: 271,
        },
        {
          name: "Puerto Rico",
          value: 3667084,
          WorkersPerPostingsCount: 2.6,
          workersPerPosting: 1.6,
          ratio: 1.6,
          postings: 316,
        },
      ],
    },
  ],
}

//@ts-ignore
let msaOption = {
  series: [
    {
      name: "USA County PopEstimates",
      type: "map",
      nameProperty: "name",
      map: "USA",
      itemStyle: {
        emphasis: { label: { show: true } },
      },
      textFixed: {
        Alaska: [20, -20],
      },
      data: [],
    },
  ],
  geo: [
    {
      map: "usa",
    },
  ],
};

console.log(msaJSON);
console.log(geoJSON);

export default function CountiesMap() {
  const [mapOptions, setMapOptions] = useState<any>(stateOption);
  const [geoJSONData, setGeoJsonData] = useState<any>(geoJSON);

  useEffect(() => {

    echarts.registerMap('StateMap', geoJSON)
  }, [geoJSONData]);

  const handleStateClick = () => {
    setMapOptions(stateOption);
    setGeoJsonData(geoJSON);
  };

  const handleCountyClick = () => {
    setMapOptions(msaOption);
    setGeoJsonData(msaJSON);
  };

  return (
    <div>
      <ReactECharts
        option={mapOptions}
        notMerge={false}
        lazyUpdate={true}
        style={{ width: "50%", height: "500px" }}
      />
    </div>
  );
}
