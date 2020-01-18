import { list } from '../methods';

// Entities
import { createCountry } from '../../../entities/country';

import { JEST_ASYNC_TIMEOUT } from '../../../settings';

describe('src/parsers/country/methods.ts', () => {
    describe('list', () => {
        it(
            'Should return correct result',
            async () => {
                const response = [
                    createCountry({
                        id: 1,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/1.png',
                        title: 'Afghanistan',
                    }),
                    createCountry({
                        id: 3,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/3.png',
                        title: 'Albania',
                    }),
                    createCountry({
                        id: 4,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/4.png',
                        title: 'Algeria',
                    }),
                    createCountry({
                        id: 239,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/239.png',
                        title: 'American Samoa',
                    }),
                    createCountry({
                        id: 234,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/234.png',
                        title: 'American Virgin Islands',
                    }),
                    createCountry({
                        id: 5,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/5.png',
                        title: 'Andorra',
                    }),
                    createCountry({
                        id: 6,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/6.png',
                        title: 'Angola',
                    }),
                    createCountry({
                        id: 232,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/232.png',
                        title: 'Anguilla',
                    }),
                    createCountry({
                        id: 7,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/7.png',
                        title: 'Antigua and Barbuda',
                    }),
                    createCountry({
                        id: 9,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/9.png',
                        title: 'Argentina',
                    }),
                    createCountry({
                        id: 10,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/10.png',
                        title: 'Armenia',
                    }),
                    createCountry({
                        id: 233,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/233.png',
                        title: 'Aruba',
                    }),
                    createCountry({
                        id: 12,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/12.png',
                        title: 'Australia',
                    }),
                    createCountry({
                        id: 127,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/127.png',
                        title: 'Austria',
                    }),
                    createCountry({
                        id: 13,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/13.png',
                        title: 'Azerbaijan',
                    }),
                    createCountry({
                        id: 14,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/14.png',
                        title: 'Bahamas',
                    }),
                    createCountry({
                        id: 15,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/15.png',
                        title: 'Bahrain',
                    }),
                    createCountry({
                        id: 16,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/16.png',
                        title: 'Bangladesh',
                    }),
                    createCountry({
                        id: 17,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/17.png',
                        title: 'Barbados',
                    }),
                    createCountry({
                        id: 18,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/18.png',
                        title: 'Belarus',
                    }),
                    createCountry({
                        id: 19,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/19.png',
                        title: 'Belgium',
                    }),
                    createCountry({
                        id: 20,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/20.png',
                        title: 'Belize',
                    }),
                    createCountry({
                        id: 21,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/21.png',
                        title: 'Benin',
                    }),
                    createCountry({
                        id: 211,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/211.png',
                        title: 'Bermuda',
                    }),
                    createCountry({
                        id: 22,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/22.png',
                        title: 'Bhutan',
                    }),
                    createCountry({
                        id: 23,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/23.png',
                        title: 'Bolivia',
                    }),
                    createCountry({
                        id: 269,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/269.png',
                        title: 'Bonaire',
                    }),
                    createCountry({
                        id: 24,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/24.png',
                        title: 'Bosnia-Herzegovina',
                    }),
                    createCountry({
                        id: 25,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/25.png',
                        title: 'Botsuana',
                    }),
                    createCountry({
                        id: 26,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/26.png',
                        title: 'Brazil',
                    }),
                    createCountry({
                        id: 231,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/231.png',
                        title: 'British Virgin Islands',
                    }),
                    createCountry({
                        id: 27,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/27.png',
                        title: 'Brunei Darussalam',
                    }),
                    createCountry({
                        id: 28,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/28.png',
                        title: 'Bulgaria',
                    }),
                    createCountry({
                        id: 29,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/29.png',
                        title: 'Burkina Faso',
                    }),
                    createCountry({
                        id: 30,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/30.png',
                        title: 'Burundi',
                    }),
                    createCountry({
                        id: 79,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/79.png',
                        title: 'Cambodia',
                    }),
                    createCountry({
                        id: 31,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/31.png',
                        title: 'Cameroon',
                    }),
                    createCountry({
                        id: 80,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/80.png',
                        title: 'Canada',
                    }),
                    createCountry({
                        id: 32,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/32.png',
                        title: 'Cape Verde',
                    }),
                    createCountry({
                        id: 229,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/229.png',
                        title: 'Cayman-Inseln',
                    }),
                    createCountry({
                        id: 138,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/138.png',
                        title: 'Central African Republic',
                    }),
                    createCountry({
                        id: 171,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/171.png',
                        title: 'Chad',
                    }),
                    createCountry({
                        id: 33,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/33.png',
                        title: 'Chile',
                    }),
                    createCountry({
                        id: 34,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/34.png',
                        title: 'China',
                    }),
                    createCountry({
                        id: 164,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/164.png',
                        title: 'Chinese Taipei (Taiwan)',
                    }),
                    createCountry({
                        id: 248,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/248.png',
                        title: 'Christmas Island',
                    }),
                    createCountry({
                        id: 83,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/83.png',
                        title: 'Colombia',
                    }),
                    createCountry({
                        id: 35,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/35.png',
                        title: 'Comoros',
                    }),
                    createCountry({
                        id: 85,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/85.png',
                        title: 'Congo',
                    }),
                    createCountry({
                        id: 238,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/238.png',
                        title: 'Cookinseln',
                    }),
                    createCountry({
                        id: 36,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/36.png',
                        title: 'Costa Rica',
                    }),
                    createCountry({
                        id: 38,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/38.png',
                        title: "Cote d'Ivoire",
                    }),
                    createCountry({
                        id: 37,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/37.png',
                        title: 'Croatia',
                    }),
                    createCountry({
                        id: 220,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/220.png',
                        title: 'CSSR',
                    }),
                    createCountry({
                        id: 88,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/88.png',
                        title: 'Cuba',
                    }),
                    createCountry({
                        id: 260,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/260.png',
                        title: 'Curacao',
                    }),
                    createCountry({
                        id: 188,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/188.png',
                        title: 'Cyprus',
                    }),
                    createCountry({
                        id: 172,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/172.png',
                        title: 'Czech Republic',
                    }),
                    createCountry({
                        id: 222,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/222.png',
                        title: 'DDR',
                    }),
                    createCountry({
                        id: 39,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/39.png',
                        title: 'Denmark',
                    }),
                    createCountry({
                        id: 41,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/41.png',
                        title: 'Djibouti',
                    }),
                    createCountry({
                        id: 42,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/42.png',
                        title: 'Dominica',
                    }),
                    createCountry({
                        id: 43,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/43.png',
                        title: 'Dominican Republic',
                    }),
                    createCountry({
                        id: 193,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/193.png',
                        title: 'DR Congo',
                    }),
                    createCountry({
                        id: 44,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/44.png',
                        title: 'Ecuador',
                    }),
                    createCountry({
                        id: 2,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/2.png',
                        title: 'Egypt',
                    }),
                    createCountry({
                        id: 45,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/45.png',
                        title: 'El Salvador',
                    }),
                    createCountry({
                        id: 189,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/189.png',
                        title: 'England',
                    }),
                    createCountry({
                        id: 8,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/8.png',
                        title: 'Equatorial Guinea',
                    }),
                    createCountry({
                        id: 46,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/46.png',
                        title: 'Eritrea',
                    }),
                    createCountry({
                        id: 47,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/47.png',
                        title: 'Estonia',
                    }),
                    createCountry({
                        id: 162,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/162.png',
                        title: 'Eswatini',
                    }),
                    createCountry({
                        id: 11,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/11.png',
                        title: 'Ethiopia',
                    }),
                    createCountry({
                        id: 250,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/250.png',
                        title: 'Falkland Islands',
                    }),
                    createCountry({
                        id: 208,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/208.png',
                        title: 'Faroe Islands',
                    }),
                    createCountry({
                        id: 111,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/111.png',
                        title: 'Federated States of Micronesia',
                    }),
                    createCountry({
                        id: 48,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/48.png',
                        title: 'Fiji',
                    }),
                    createCountry({
                        id: 49,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/49.png',
                        title: 'Finland',
                    }),
                    createCountry({
                        id: 50,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/50.png',
                        title: 'France',
                    }),
                    createCountry({
                        id: 252,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/252.png',
                        title: 'French Guiana',
                    }),
                    createCountry({
                        id: 51,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/51.png',
                        title: 'Gabon',
                    }),
                    createCountry({
                        id: 53,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/53.png',
                        title: 'Georgia',
                    }),
                    createCountry({
                        id: 40,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/40.png',
                        title: 'Germany',
                    }),
                    createCountry({
                        id: 54,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/54.png',
                        title: 'Ghana',
                    }),
                    createCountry({
                        id: 266,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/266.png',
                        title: 'Gibraltar',
                    }),
                    createCountry({
                        id: 56,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/56.png',
                        title: 'Greece',
                    }),
                    createCountry({
                        id: 243,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/243.png',
                        title: 'Greenland',
                    }),
                    createCountry({
                        id: 55,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/55.png',
                        title: 'Grenada',
                    }),
                    createCountry({
                        id: 251,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/251.png',
                        title: 'Guadeloupe',
                    }),
                    createCountry({
                        id: 241,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/241.png',
                        title: 'Guam',
                    }),
                    createCountry({
                        id: 58,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/58.png',
                        title: 'Guatemala',
                    }),
                    createCountry({
                        id: 271,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/271.png',
                        title: 'Guernsey',
                    }),
                    createCountry({
                        id: 59,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/59.png',
                        title: 'Guinea',
                    }),
                    createCountry({
                        id: 60,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/60.png',
                        title: 'Guinea-Bissau',
                    }),
                    createCountry({
                        id: 61,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/61.png',
                        title: 'Guyana',
                    }),
                    createCountry({
                        id: 62,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/62.png',
                        title: 'Haiti',
                    }),
                    createCountry({
                        id: 66,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/66.png',
                        title: 'Honduras',
                    }),
                    createCountry({
                        id: 218,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/218.png',
                        title: 'Hongkong',
                    }),
                    createCountry({
                        id: 178,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/178.png',
                        title: 'Hungary',
                    }),
                    createCountry({
                        id: 73,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/73.png',
                        title: 'Iceland',
                    }),
                    createCountry({
                        id: 67,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/67.png',
                        title: 'India',
                    }),
                    createCountry({
                        id: 68,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/68.png',
                        title: 'Indonesia',
                    }),
                    createCountry({
                        id: 71,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/71.png',
                        title: 'Iran',
                    }),
                    createCountry({
                        id: 70,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/70.png',
                        title: 'Iraq',
                    }),
                    createCountry({
                        id: 72,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/72.png',
                        title: 'Ireland',
                    }),
                    createCountry({
                        id: 270,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/270.png',
                        title: 'Isle of Man',
                    }),
                    createCountry({
                        id: 74,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/74.png',
                        title: 'Israel',
                    }),
                    createCountry({
                        id: 75,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/75.png',
                        title: 'Italy',
                    }),
                    createCountry({
                        id: 76,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/76.png',
                        title: 'Jamaica',
                    }),
                    createCountry({
                        id: 77,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/77.png',
                        title: 'Japan',
                    }),
                    createCountry({
                        id: 272,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/272.png',
                        title: 'Jersey',
                    }),
                    createCountry({
                        id: 78,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/78.png',
                        title: 'Jordan',
                    }),
                    createCountry({
                        id: 223,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/223.png',
                        title: 'Jugoslawien (SFR)',
                    }),
                    createCountry({
                        id: 81,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/81.png',
                        title: 'Kazakhstan',
                    }),
                    createCountry({
                        id: 82,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/82.png',
                        title: 'Kenya',
                    }),
                    createCountry({
                        id: 246,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/246.png',
                        title: 'Kiribati',
                    }),
                    createCountry({
                        id: 86,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/86.png',
                        title: 'Korea, North',
                    }),
                    createCountry({
                        id: 87,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/87.png',
                        title: 'Korea, South',
                    }),
                    createCountry({
                        id: 244,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/244.png',
                        title: 'Kosovo',
                    }),
                    createCountry({
                        id: 89,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/89.png',
                        title: 'Kuwait',
                    }),
                    createCountry({
                        id: 90,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/90.png',
                        title: 'Kyrgyzstan',
                    }),
                    createCountry({
                        id: 91,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/91.png',
                        title: 'Laos',
                    }),
                    createCountry({
                        id: 92,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/92.png',
                        title: 'Latvia',
                    }),
                    createCountry({
                        id: 94,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/94.png',
                        title: 'Lebanon',
                    }),
                    createCountry({
                        id: 93,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/93.png',
                        title: 'Lesotho',
                    }),
                    createCountry({
                        id: 95,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/95.png',
                        title: 'Liberia',
                    }),
                    createCountry({
                        id: 96,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/96.png',
                        title: 'Libya',
                    }),
                    createCountry({
                        id: 97,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/97.png',
                        title: 'Liechtenstein',
                    }),
                    createCountry({
                        id: 98,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/98.png',
                        title: 'Lithuania',
                    }),
                    createCountry({
                        id: 99,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/99.png',
                        title: 'Luxembourg',
                    }),
                    createCountry({
                        id: 219,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/219.png',
                        title: 'Macao',
                    }),
                    createCountry({
                        id: 274,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/274.png',
                        title: 'Macedonia',
                    }),
                    createCountry({
                        id: 101,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/101.png',
                        title: 'Madagascar',
                    }),
                    createCountry({
                        id: 102,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/102.png',
                        title: 'Malawi',
                    }),
                    createCountry({
                        id: 103,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/103.png',
                        title: 'Malaysia',
                    }),
                    createCountry({
                        id: 104,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/104.png',
                        title: 'Maldives',
                    }),
                    createCountry({
                        id: 105,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/105.png',
                        title: 'Mali',
                    }),
                    createCountry({
                        id: 106,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/106.png',
                        title: 'Malta',
                    }),
                    createCountry({
                        id: 268,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/268.png',
                        title: 'Mariana Islands',
                    }),
                    createCountry({
                        id: 257,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/257.png',
                        title: 'Marshall Islands',
                    }),
                    createCountry({
                        id: 207,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/207.png',
                        title: 'Martinique',
                    }),
                    createCountry({
                        id: 108,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/108.png',
                        title: 'Mauritania',
                    }),
                    createCountry({
                        id: 109,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/109.png',
                        title: 'Mauritius',
                    }),
                    createCountry({
                        id: 110,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/110.png',
                        title: 'Mexico',
                    }),
                    createCountry({
                        id: 112,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/112.png',
                        title: 'Moldova',
                    }),
                    createCountry({
                        id: 113,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/113.png',
                        title: 'Monaco',
                    }),
                    createCountry({
                        id: 114,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/114.png',
                        title: 'Mongolia',
                    }),
                    createCountry({
                        id: 216,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/216.png',
                        title: 'Montenegro',
                    }),
                    createCountry({
                        id: 235,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/235.png',
                        title: 'Montserrat',
                    }),
                    createCountry({
                        id: 107,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/107.png',
                        title: 'Morocco',
                    }),
                    createCountry({
                        id: 115,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/115.png',
                        title: 'Mozambique',
                    }),
                    createCountry({
                        id: 116,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/116.png',
                        title: 'Myanmar',
                    }),
                    createCountry({
                        id: 117,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/117.png',
                        title: 'Namibia',
                    }),
                    createCountry({
                        id: 118,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/118.png',
                        title: 'Nauru',
                    }),
                    createCountry({
                        id: 119,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/119.png',
                        title: 'Nepal',
                    }),
                    createCountry({
                        id: 122,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/122.png',
                        title: 'Netherlands',
                    }),
                    createCountry({
                        id: 227,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/227.png',
                        title: 'Netherlands Antilles',
                    }),
                    createCountry({
                        id: 255,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/255.png',
                        title: 'Netherlands East India',
                    }),
                    createCountry({
                        id: 236,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/236.png',
                        title: 'Neukaledonien',
                    }),
                    createCountry({
                        id: 120,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/120.png',
                        title: 'New Zealand',
                    }),
                    createCountry({
                        id: 121,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/121.png',
                        title: 'Nicaragua',
                    }),
                    createCountry({
                        id: 123,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/123.png',
                        title: 'Niger',
                    }),
                    createCountry({
                        id: 124,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/124.png',
                        title: 'Nigeria',
                    }),
                    createCountry({
                        id: 261,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/261.png',
                        title: 'Niue',
                    }),
                    createCountry({
                        id: 100,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/100.png',
                        title: 'North Macedonia',
                    }),
                    createCountry({
                        id: 192,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/192.png',
                        title: 'Northern Ireland',
                    }),
                    createCountry({
                        id: 125,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/125.png',
                        title: 'Norway',
                    }),
                    createCountry({
                        id: 126,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/126.png',
                        title: 'Oman',
                    }),
                    createCountry({
                        id: 242,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/242.png',
                        title: 'Osttimor',
                    }),
                    createCountry({
                        id: 128,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/128.png',
                        title: 'Pakistan',
                    }),
                    createCountry({
                        id: 240,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/240.png',
                        title: 'Palästina',
                    }),
                    createCountry({
                        id: 129,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/129.png',
                        title: 'Palau',
                    }),
                    createCountry({
                        id: 130,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/130.png',
                        title: 'Panama',
                    }),
                    createCountry({
                        id: 131,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/131.png',
                        title: 'Papua New Guinea',
                    }),
                    createCountry({
                        id: 132,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/132.png',
                        title: 'Paraguay',
                    }),
                    createCountry({
                        id: 259,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/259.png',
                        title: "People's republic of the Congo",
                    }),
                    createCountry({
                        id: 133,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/133.png',
                        title: 'Peru',
                    }),
                    createCountry({
                        id: 134,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/134.png',
                        title: 'Philippines',
                    }),
                    createCountry({
                        id: 135,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/135.png',
                        title: 'Poland',
                    }),
                    createCountry({
                        id: 136,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/136.png',
                        title: 'Portugal',
                    }),
                    createCountry({
                        id: 228,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/228.png',
                        title: 'Puerto Rico',
                    }),
                    createCountry({
                        id: 137,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/137.png',
                        title: 'Qatar',
                    }),
                    createCountry({
                        id: 249,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/249.png',
                        title: 'Réunion',
                    }),
                    createCountry({
                        id: 140,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/140.png',
                        title: 'Romania',
                    }),
                    createCountry({
                        id: 141,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/141.png',
                        title: 'Russia',
                    }),
                    createCountry({
                        id: 139,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/139.png',
                        title: 'Rwanda',
                    }),
                    createCountry({
                        id: 263,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/263.png',
                        title: 'Saarland',
                    }),
                    createCountry({
                        id: 267,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/267.png',
                        title: 'Saint-Martin',
                    }),
                    createCountry({
                        id: 143,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/143.png',
                        title: 'Samoa',
                    }),
                    createCountry({
                        id: 144,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/144.png',
                        title: 'San Marino',
                    }),
                    createCountry({
                        id: 145,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/145.png',
                        title: 'Sao Tome and Principe',
                    }),
                    createCountry({
                        id: 146,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/146.png',
                        title: 'Saudi Arabia',
                    }),
                    createCountry({
                        id: 190,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/190.png',
                        title: 'Scotland',
                    }),
                    createCountry({
                        id: 149,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/149.png',
                        title: 'Senegal',
                    }),
                    createCountry({
                        id: 215,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/215.png',
                        title: 'Serbia',
                    }),
                    createCountry({
                        id: 150,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/150.png',
                        title: 'Serbia and Montenegro',
                    }),
                    createCountry({
                        id: 151,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/151.png',
                        title: 'Seychelles',
                    }),
                    createCountry({
                        id: 152,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/152.png',
                        title: 'Sierra Leone',
                    }),
                    createCountry({
                        id: 153,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/153.png',
                        title: 'Singapore',
                    }),
                    createCountry({
                        id: 265,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/265.png',
                        title: 'Sint Maarten',
                    }),
                    createCountry({
                        id: 154,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/154.png',
                        title: 'Slovakia',
                    }),
                    createCountry({
                        id: 155,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/155.png',
                        title: 'Slovenia',
                    }),
                    createCountry({
                        id: 69,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/69.png',
                        title: 'Solomon Islands',
                    }),
                    createCountry({
                        id: 156,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/156.png',
                        title: 'Somalia',
                    }),
                    createCountry({
                        id: 159,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/159.png',
                        title: 'South Africa',
                    }),
                    createCountry({
                        id: 262,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/262.png',
                        title: 'Southern Sudan',
                    }),
                    createCountry({
                        id: 157,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/157.png',
                        title: 'Spain',
                    }),
                    createCountry({
                        id: 158,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/158.png',
                        title: 'Sri Lanka',
                    }),
                    createCountry({
                        id: 225,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/225.png',
                        title: 'St. Kitts &amp; Nevis',
                    }),
                    createCountry({
                        id: 230,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/230.png',
                        title: 'St. Lucia',
                    }),
                    createCountry({
                        id: 224,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/224.png',
                        title: 'St. Vincent &amp; Grenadinen',
                    }),
                    createCountry({
                        id: 160,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/160.png',
                        title: 'Sudan',
                    }),
                    createCountry({
                        id: 161,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/161.png',
                        title: 'Suriname',
                    }),
                    createCountry({
                        id: 273,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/273.png',
                        title: 'Swaziland',
                    }),
                    createCountry({
                        id: 147,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/147.png',
                        title: 'Sweden',
                    }),
                    createCountry({
                        id: 148,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/148.png',
                        title: 'Switzerland',
                    }),
                    createCountry({
                        id: 163,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/163.png',
                        title: 'Syria',
                    }),
                    createCountry({
                        id: 237,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/237.png',
                        title: 'Tahiti',
                    }),
                    createCountry({
                        id: 165,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/165.png',
                        title: 'Tajikistan',
                    }),
                    createCountry({
                        id: 166,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/166.png',
                        title: 'Tanzania',
                    }),
                    createCountry({
                        id: 167,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/167.png',
                        title: 'Thailand',
                    }),
                    createCountry({
                        id: 52,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/52.png',
                        title: 'The Gambia',
                    }),
                    createCountry({
                        id: 245,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/245.png',
                        title: 'Tibet',
                    }),
                    createCountry({
                        id: 168,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/168.png',
                        title: 'Togo',
                    }),
                    createCountry({
                        id: 169,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/169.png',
                        title: 'Tonga',
                    }),
                    createCountry({
                        id: 170,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/170.png',
                        title: 'Trinidad and Tobago',
                    }),
                    createCountry({
                        id: 173,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/173.png',
                        title: 'Tunisia',
                    }),
                    createCountry({
                        id: 174,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/174.png',
                        title: 'Turkey',
                    }),
                    createCountry({
                        id: 175,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/175.png',
                        title: 'Turkmenistan',
                    }),
                    createCountry({
                        id: 226,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/226.png',
                        title: 'Turks- and Caicosinseln',
                    }),
                    createCountry({
                        id: 247,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/247.png',
                        title: 'Tuvalu',
                    }),
                    createCountry({
                        id: 221,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/221.png',
                        title: 'UdSSR',
                    }),
                    createCountry({
                        id: 176,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/176.png',
                        title: 'Uganda',
                    }),
                    createCountry({
                        id: 177,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/177.png',
                        title: 'Ukraine',
                    }),
                    createCountry({
                        id: 183,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/183.png',
                        title: 'United Arab Emirates',
                    }),
                    createCountry({
                        id: 264,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/264.png',
                        title: 'United Kingdom',
                    }),
                    createCountry({
                        id: 184,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/184.png',
                        title: 'United States',
                    }),
                    createCountry({
                        id: 179,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/179.png',
                        title: 'Uruguay',
                    }),
                    createCountry({
                        id: 180,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/180.png',
                        title: 'Uzbekistan',
                    }),
                    createCountry({
                        id: 181,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/181.png',
                        title: 'Vanuatu',
                    }),
                    createCountry({
                        id: 256,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/256.png',
                        title: 'Vatican',
                    }),
                    createCountry({
                        id: 182,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/182.png',
                        title: 'Venezuela',
                    }),
                    createCountry({
                        id: 185,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/185.png',
                        title: 'Vietnam',
                    }),
                    createCountry({
                        id: 191,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/191.png',
                        title: 'Wales',
                    }),
                    createCountry({
                        id: 275,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/275.png',
                        title: 'Western Sahara',
                    }),
                    createCountry({
                        id: 186,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/186.png',
                        title: 'Yemen',
                    }),
                    createCountry({
                        id: 258,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/258.png',
                        title: 'Yugoslavia (Republic)',
                    }),
                    createCountry({
                        id: 254,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/254.png',
                        title: 'Zaire',
                    }),
                    createCountry({
                        id: 142,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/142.png',
                        title: 'Zambia',
                    }),
                    createCountry({
                        id: 253,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/253.png',
                        title: 'Zanzibar',
                    }),
                    createCountry({
                        id: 187,
                        flagUrl: 'https://tmssl.akamaized.net//images/flagge/small/187.png',
                        title: 'Zimbabwe',
                    }),
                ];
                await expect(list()).resolves.toEqual(response);
            },
            JEST_ASYNC_TIMEOUT,
        );
    });
});
