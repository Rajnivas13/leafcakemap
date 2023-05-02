import React, { useEffect, useState } from "react";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";
import * as geoJSON from "../src/USA_geo.json";

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
      name: "USA State PopEstimates",
      type: "map",
      roam: true,
      map: "USA",
      itemStyle: {
        emphasis: { label: { show: true } },
      },
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
      ],
    },
  ],
};

//@ts-ignore
const msaFormattedData: GeoJSON = msaJSON;

//@ts-ignore
let msaOption = {
  geo: {
    map: "USA",
  },
  series: [
    {
      name: "USA County PopEstimates",
      type: "map",
      roam: true,
      map: "USA",
      geoJSON: msaFormattedData,
      itemStyle: {
        emphasis: { label: { show: true } },
      },
      textFixed: {
        Alaska: [20, -20],
      },
      data: [],
    },
  ],
};


export default function CountiesMap() {
  const [mapOptions, setMapOptions] = useState(stateOption);


  useEffect(() => {
    echarts.registerMap("USA", geoJSON);
  }, []);

  const handleStateClick = () => {
    setMapOptions(stateOption);
  };

  const handleCountyClick = () => {
    //@ts-ignore
    setMapOptions(msaOption);
  };

  return (
    <div>
      <button onClick={handleStateClick}>USA State Population</button>
      <button onClick={handleCountyClick}>USA County Population</button>
      <ReactECharts
        option={mapOptions}
        notMerge={true}
        lazyUpdate={true}
        style={{ width: "50%", height: "500px" }}
      />
    </div>
  );
}
