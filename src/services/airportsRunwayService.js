import axios from "axios";
import { useAirportDetailsStore } from '../stores/airports'


function airportDisptachAction(dispatch, data){
    const airportDetailsStore = useAirportDetailsStore()
    switch(dispatch.action){
        case 'add':
            airportDetailsStore.setAirportDetails(dispatch.code, data)
    }
}

export async function getAirportRunways({ code = 'KJFK' }){

    // #TODO Move token the .env or server
    const token = 'df9500fca510412d7581b487b8e97c7b04237c0250b5845371bf6a8835b810a923f7c4daea4f5717609f984f659a8182'
    const options = {
        method: 'GET',
        url: `https://airportdb.io/api/v1/airport/${code}?apiToken=${token}`,
        headers: {
            'Content-Type': 'content/type'
        }
      };
      
      try {
          const response = await axios.request(options);
          airportDisptachAction({ action: 'add', code }, response.data)
          return response.data;
      } catch (error) {
          console.error(error);
          throw error
      }
}

export function getAirportDetail(){
    let Obj = new Object({
        "ident": "KJFK",
        "type": "large_airport",
        "name": "John F Kennedy International Airport",
        "latitude_deg": 40.639801,
        "longitude_deg": -73.7789,
        "elevation_ft": "13",
        "continent": "NA",
        "iso_country": "US",
        "iso_region": "US-NY",
        "municipality": "New York",
        "scheduled_service": "yes",
        "gps_code": "KJFK",
        "iata_code": "JFK",
        "local_code": "JFK",
        "home_link": "https://www.jfkairport.com/",
        "wikipedia_link": "https://en.wikipedia.org/wiki/John_F._Kennedy_International_Airport",
        "keywords": "Manhattan, New York City, NYC, Idlewild",
        "icao_code": "KJFK",
        "runways": [
            {
                "id": "244968",
                "airport_ref": "3622",
                "airport_ident": "KJFK",
                "length_ft": "12079",
                "width_ft": "200",
                "surface": "Concrete - Grooved",
                "lighted": "1",
                "closed": "0",
                "le_ident": "04L",
                "le_latitude_deg": "40.622",
                "le_longitude_deg": "-73.7856",
                "le_elevation_ft": "12",
                "le_heading_degT": "31",
                "le_displaced_threshold_ft": "",
                "he_ident": "22R",
                "he_latitude_deg": "40.6488",
                "he_longitude_deg": "-73.7647",
                "he_elevation_ft": "13",
                "he_heading_degT": "211",
                "he_displaced_threshold_ft": "2696",
                "he_ils": {
                    "freq": 109.5,
                    "course": 224
                },
                "le_ils": {
                    "freq": 110.9,
                    "course": 44
                }
            },
            {
                "id": "244967",
                "airport_ref": "3622",
                "airport_ident": "KJFK",
                "length_ft": "8400",
                "width_ft": "200",
                "surface": "ASP",
                "lighted": "1",
                "closed": "0",
                "le_ident": "04R",
                "le_latitude_deg": "40.6254",
                "le_longitude_deg": "-73.7703",
                "le_elevation_ft": "13",
                "le_heading_degT": "30.6",
                "le_displaced_threshold_ft": "",
                "he_ident": "22L",
                "he_latitude_deg": "40.6452",
                "he_longitude_deg": "-73.7549",
                "he_elevation_ft": "13",
                "he_heading_degT": "210.6",
                "he_displaced_threshold_ft": "",
                "he_ils": {
                    "freq": 110.9,
                    "course": 224
                },
                "le_ils": {
                    "freq": 109.5,
                    "course": 44
                }
            },
            {
                "id": "244970",
                "airport_ref": "3622",
                "airport_ident": "KJFK",
                "length_ft": "10000",
                "width_ft": "200",
                "surface": "Concrete",
                "lighted": "1",
                "closed": "0",
                "le_ident": "13L",
                "le_latitude_deg": "40.6578",
                "le_longitude_deg": "-73.7902",
                "le_elevation_ft": "13",
                "le_heading_degT": "121",
                "le_displaced_threshold_ft": "905",
                "he_ident": "31R",
                "he_latitude_deg": "40.6437",
                "he_longitude_deg": "-73.7593",
                "he_elevation_ft": "13",
                "he_heading_degT": "301",
                "he_displaced_threshold_ft": "1030",
                "he_ils": {
                    "freq": 111.5,
                    "course": 314
                },
                "le_ils": {
                    "freq": 111.5,
                    "course": 134
                }
            },
            {
                "id": "244969",
                "airport_ref": "3622",
                "airport_ident": "KJFK",
                "length_ft": "14511",
                "width_ft": "200",
                "surface": "Concrete",
                "lighted": "1",
                "closed": "0",
                "le_ident": "13R",
                "le_latitude_deg": "40.6484",
                "le_longitude_deg": "-73.8167",
                "le_elevation_ft": "13",
                "le_heading_degT": "121",
                "le_displaced_threshold_ft": "2043",
                "he_ident": "31L",
                "he_latitude_deg": "40.6279",
                "he_longitude_deg": "-73.7716",
                "he_elevation_ft": "13",
                "he_heading_degT": "301",
                "he_displaced_threshold_ft": "3263",
                "he_ils": {
                    "freq": 111.35,
                    "course": 314
                }
            }
        ],
        "freqs": [
            {
                "id": "69293",
                "airport_ref": "3622",
                "airport_ident": "KJFK",
                "type": "APP",
                "description": "NEW YORK APP (ROBER)",
                "frequency_mhz": "125.7"
            },
            {
                "id": "301312",
                "airport_ref": "3622",
                "airport_ident": "KJFK",
                "type": "APP",
                "description": "NEW YORK APPROACH (CAMRN)",
                "frequency_mhz": "127.4"
            },
            {
                "id": "301313",
                "airport_ref": "3622",
                "airport_ident": "KJFK",
                "type": "APP",
                "description": "NEW YORK APPROACH (FINAL)",
                "frequency_mhz": "132.4"
            },
            {
                "id": "69294",
                "airport_ref": "3622",
                "airport_ident": "KJFK",
                "type": "ATIS",
                "description": "ATIS",
                "frequency_mhz": "115.1"
            },
            {
                "id": "69295",
                "airport_ref": "3622",
                "airport_ident": "KJFK",
                "type": "CLD",
                "description": "CLNC DEL",
                "frequency_mhz": "135.05"
            },
            {
                "id": "69296",
                "airport_ref": "3622",
                "airport_ident": "KJFK",
                "type": "DEP",
                "description": "NEW YORK DEP",
                "frequency_mhz": "135.9"
            },
            {
                "id": "332895",
                "airport_ref": "3622",
                "airport_ident": "KJFK",
                "type": "GND",
                "description": "GND ALT",
                "frequency_mhz": "121.65"
            },
            {
                "id": "69297",
                "airport_ref": "3622",
                "airport_ident": "KJFK",
                "type": "GND",
                "description": "GND",
                "frequency_mhz": "121.9"
            },
            {
                "id": "69298",
                "airport_ref": "3622",
                "airport_ident": "KJFK",
                "type": "RDO",
                "description": "NEW YORK RDO",
                "frequency_mhz": "115.9"
            },
            {
                "id": "69299",
                "airport_ref": "3622",
                "airport_ident": "KJFK",
                "type": "TWR",
                "description": "KENNEDY TWR",
                "frequency_mhz": "119.1"
            },
            {
                "id": "332894",
                "airport_ref": "3622",
                "airport_ident": "KJFK",
                "type": "TWR",
                "description": "TWR ALT",
                "frequency_mhz": "123.9"
            },
            {
                "id": "69300",
                "airport_ref": "3622",
                "airport_ident": "KJFK",
                "type": "UNIC",
                "description": "UNICOM",
                "frequency_mhz": "122.95"
            }
        ],
        "country": {
            "id": "302755",
            "code": "US",
            "name": "United States",
            "continent": "NA",
            "wikipedia_link": "https://en.wikipedia.org/wiki/United_States",
            "keywords": "America"
        },
        "region": {
            "id": "306110",
            "code": "US-NY",
            "local_code": "NY",
            "name": "New York",
            "continent": "NA",
            "iso_country": "US",
            "wikipedia_link": "https://en.wikipedia.org/wiki/New_York",
            "keywords": ""
        },
        "navaids": [
            {
                "id": "87031",
                "filename": "Canarsie_VOR-DME_US",
                "ident": "CRI",
                "name": "Canarsie",
                "type": "VOR-DME",
                "frequency_khz": "112300",
                "latitude_deg": "40.61249923706055",
                "longitude_deg": "-73.89440155029297",
                "elevation_ft": "10",
                "iso_country": "US",
                "dme_frequency_khz": "112300",
                "dme_channel": "070X",
                "dme_latitude_deg": "",
                "dme_longitude_deg": "",
                "dme_elevation_ft": "",
                "slaved_variation_deg": "-11.001",
                "magnetic_variation_deg": "-13.134",
                "usageType": "TERMINAL",
                "power": "LOW",
                "associated_airport": "KJFK"
            },
            {
                "id": "89475",
                "filename": "Kennedy_VOR-DME_US",
                "ident": "JFK",
                "name": "Kennedy",
                "type": "VOR-DME",
                "frequency_khz": "115900",
                "latitude_deg": "40.63290023803711",
                "longitude_deg": "-73.77140045166016",
                "elevation_ft": "11",
                "iso_country": "US",
                "dme_frequency_khz": "115900",
                "dme_channel": "106X",
                "dme_latitude_deg": "",
                "dme_longitude_deg": "",
                "dme_elevation_ft": "",
                "slaved_variation_deg": "-12.001",
                "magnetic_variation_deg": "-13.182",
                "usageType": "BOTH",
                "power": "HIGH",
                "associated_airport": "KJFK"
            }
        ],
        "station": {
            "icao_code": "KJFK",
            "distance": 0
        }
    })

    return Obj
}