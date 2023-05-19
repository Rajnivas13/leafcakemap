export interface Geometry {
  type: string;
  coordinates: any;
}

export interface Properties {
  CSAFP: string;
  CBSAFP: string;
  METDIVFP: string;
  GEOID: string;
  NAME: string;
  NAMELSAD: string;
  LSAD: string;
  MTFCC: string;
  ALAND: number;
  AWATER: number;
  INTPTLAT: string;
  INTPTLON: string;
}

export interface Features {
  type: string;
  properties: Properties;
  geometry: Geometry;
}

export interface GeoJSON {
  type: string;
  features: Features[];
}

// // declare module '*.geojson' {
// //     const value: any;
// //     export default value;
// //   }

// // msa.d.ts

// interface Geometry {
//   type: string;
//   coordinates: number[][][] | number[][][][] | number[][][][][];
// }

// interface Properties {
//   csafp: string | null;
//   cbsafp: string;
//   affgeoid: string;
//   geoid: string;
//   name: string;
//   lsad: string;
//   aland: number;
//   awater: number;
//   cartodb_id: number;
//   created_at: string;
//   updated_at: string;
// }

// interface Feature {
//   type: string;
//   geometry: Geometry;
//   properties: Properties;
// }

// interface FeatureCollection {
//   type: string;
//   features: Feature[];
// }
// declare module '*.geojson' {
// declare const data: FeatureCollection;

// export default data;
// }
