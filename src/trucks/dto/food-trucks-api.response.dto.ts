export interface FoodTruckResponse {
    address:         string;
    type:            string;
    datetime:        Date;
    latitude:        string;
    longitude:       string;
    report_location: ReportLocation;
    incident_number: string;
}

export interface ReportLocation {
    type:        string;
    coordinates: number[];
}
