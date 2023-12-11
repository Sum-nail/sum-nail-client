export interface GetHashTagsOutput {
  status: number;
  message: string;
  data: {
    hashtags: string[];
  };
}

export interface GetStationsOutput {
  status: number;
  message: string;
  data: {
    stations: StationInfo[];
  };
}

export interface StationInfo {
  stationsName: string;
  line: string;
}
