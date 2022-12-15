export interface FoodTruckResponse {
    type:     string;
    features: Feature[];
    crs:      CRS;
}

 interface CRS {
    type:       string;
    properties: CRSProperties;
}

 interface CRSProperties {
    name: string;
}

 interface Feature {
    type:       string;
    geometry:   Geometry;
    properties: FeatureProperties;
}

 interface Geometry {
    type:        string;
    coordinates: number[];
}

 interface FeatureProperties {
    location_state:      string;
    x:                   string;
    location_zip:        string;
    applicant:           string;
    locationdescription: string;
    dayshours:           string;
    latitude:            string;
    y:                   string;
    blocklot:            string;
    location_address:    string;
    noisent:             Date;
    location_city:       string;
    cnn:                 string;
    objectid:            string;
    longitude:           string;
    block:               string;
    permit:              string;
    status:              string;
    facilitytype:        string;
    schedule:            string;
    lot:                 string;
    address:             string;
    approved:            Date;
    fooditems:           string;
    received:            string;
    expirationdate:      Date;
    priorpermit:         string;
}