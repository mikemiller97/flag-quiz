const codes = [
    {
        name: "United Arab Emirates",
        code: "784"
    },
    {
        name: "Andorra",
        code: "020"
    },
    {
        name: "Afghanistan",
        code: "004"
    },
    {
        name: "Antigua and Barbuda",
        code: "028"
    },
    {
        name: "Anguilla",
        code: "660"
    },
    {
        name: "Albania",
        code: "008"
    },
    {
        name: "Armenia",
        code: "051"
    },
    {
        name: "Angola",
        code: "024"
    },
    {
        name: "Antarctica",
        code: "010"
    },
    {
        name: "Argentina",
        code: "032"
    },
    {
        name: "American Samoa",
        code: "016"
    },
    {
        name: "Austria",
        code: "040"
    },
    {
        name: "Australia",
        code: "036"
    },
    {
        name: "Aruba",
        code: "533"
    },
    {
        name: "åland Islands",
        code: "248"
    },
    {
        name: "Azerbaijan",
        code: "031"
    },
    {
        name: "Bosnia and Herzegovina",
        code: "070"
    },
    {
        name: "Barbados",
        code: "052"
    },
    {
        name: "Bangladesh",
        code: "050"
    },
    {
        name: "Belgium",
        code: "056"
    },
    {
        name: "Burkina Faso",
        code: "854"
    },
    {
        name: "Bulgaria",
        code: "100"
    },
    {
        name: "Bahrain",
        code: "048"
    },
    {
        name: "Burundi",
        code: "108"
    },
    {
        name: "Benin",
        code: "204"
    },
    {
        name: "Saint Barthelemy",
        code: "652"
    },
    {
        name: "Bermuda",
        code: "060"
    },
    {
        name: "Brunei Darussalam",
        code: "096"
    },
    {
        name: "Bolivia",
        code: "068"
    },
    {
        name: "Bonaire",
        code: "535"
    },
    {
        name: "Brazil",
        code: "076"
    },
    {
        name: "The Bahamas",
        code: "044"
    },
    {
        name: "Bhutan",
        code: "064"
    },
    {
        name: "Botswana",
        code: "072"
    },
    {
        name: "Belarus",
        code: "112"
    },
    {
        name: "Belize",
        code: "084"
    },
    {
        name: "Canada",
        code: "124"
    },
    {
        name: "The Cocos Islands",
        code: "166"
    },
    {
        name: "Democratic Republic of the Congo",
        code: "180"
    },
    {
        name: "The Central African Republic",
        code: "140"
    },
    {
        name: "Congo",
        code: "178"
    },
    {
        name: "Switzerland",
        code: "756"
    },
    {
        name: "Côte D'ivoire",
        code: "384"
    },
    {
        name: "The Cook Islands",
        code: "184"
    },
    {
        name: "Chile",
        code: "152"
    },
    {
        name: "Cameroon",
        code: "120"
    },
    {
        name: "China",
        code: "156"
    },
    {
        name: "Colombia",
        code: "170"
    },
    {
        name: "Costa Rica",
        code: "188"
    },
    {
        name: "Cuba",
        code: "192"
    },
    {
        name: "Cabo Verde",
        code: "132"
    },
    {
        name: "Curacao",
        code: "531"
    },
    {
        name: "Christmas Island",
        code: "162"
    },
    {
        name: "Cyprus",
        code: "196"
    },
    {
        name: "Czechia",
        code: "203"
    },
    {
        name: "Germany",
        code: "276"
    },
    {
        name: "Djibouti",
        code: "262"
    },
    {
        name: "Denmark",
        code: "208"
    },
    {
        name: "Dominica",
        code: "212"
    },
    {
        name: "Dominican Republic",
        code: "214"
    },
    {
        name: "Algeria",
        code: "012"
    },
    {
        name: "Ecuador",
        code: "218"
    },
    {
        name: "Estonia",
        code: "233"
    },
    {
        name: "Egypt",
        code: "818"
    },
    {
        name: "Western Sahara",
        code: "732"
    },
    {
        name: "Eritrea",
        code: "232"
    },
    {
        name: "Spain",
        code: "724"
    },
    {
        name: "Ethiopia",
        code: "231"
    },
    {
        name: "Finland",
        code: "246"
    },
    {
        name: "Fiji",
        code: "242"
    },
    {
        name: "The Falkland Islands",
        code: "238"
    },
    {
        name: "Micronesia",
        code: "583"
    },
    {
        name: "The Faroe Islands",
        code: "234"
    },
    {
        name: "France",
        code: "250"
    },
    {
        name: "Gabon",
        code: "266"
    },
    {
        name: "United Kingdom",
        code: "826"
    },
    {
        name: "Grenada",
        code: "308"
    },
    {
        name: "Georgia",
        code: "268"
    },
    {
        name: "French Guiana",
        code: "254"
    },
    {
        name: "Guernsey",
        code: "831"
    },
    {
        name: "Ghana",
        code: "288"
    },
    {
        name: "Gibraltar",
        code: "292"
    },
    {
        name: "Greenland",
        code: "304"
    },
    {
        name: "Gambia",
        code: "270"
    },
    {
        name: "Guinea",
        code: "324"
    },
    {
        name: "Guadeloupe",
        code: "312"
    },
    {
        name: "Equatorial Guinea",
        code: "226"
    },
    {
        name: "Greece",
        code: "300"
    },
    {
        name: "South Georgia and the South Sandwich Islands",
        code: "239"
    },
    {
        name: "Guatemala",
        code: "320"
    },
    {
        name: "Guam",
        code: "316"
    },
    {
        name: "Guinea-bissau",
        code: "624"
    },
    {
        name: "Guyana",
        code: "328"
    },
    {
        name: "Hong Kong",
        code: "344"
    },
    {
        name: "Heard Island and Mcdonald Islands",
        code: "334"
    },
    {
        name: "Honduras",
        code: "340"
    },
    {
        name: "Croatia",
        code: "191"
    },
    {
        name: "Haiti",
        code: "332"
    },
    {
        name: "Hungary",
        code: "348"
    },
    {
        name: "Indonesia",
        code: "360"
    },
    {
        name: "Ireland",
        code: "372"
    },
    {
        name: "Israel",
        code: "376"
    },
    {
        name: "Isle of Man",
        code: "833"
    },
    {
        name: "India",
        code: "356"
    },
    {
        name: "The British Indian Ocean Territory",
        code: "086"
    },
    {
        name: "Iraq",
        code: "368"
    },
    {
        name: "Iran",
        code: "364"
    },
    {
        name: "Iceland",
        code: "352"
    },
    {
        name: "Italy",
        code: "380"
    },
    {
        name: "Jersey",
        code: "832"
    },
    {
        name: "Jamaica",
        code: "388"
    },
    {
        name: "Jordan",
        code: "400"
    },
    {
        name: "Japan",
        code: "392"
    },
    {
        name: "Kenya",
        code: "404"
    },
    {
        name: "Kyrgyzstan",
        code: "417"
    },
    {
        name: "Cambodia",
        code: "116"
    },
    {
        name: "Kiribati",
        code: "296"
    },
    {
        name: "The Comoros",
        code: "174"
    },
    {
        name: "Saint Kitts and Nevis",
        code: "659"
    },
    {
        name: "North Korea",
        code: "408"
    },
    {
        name: "South Korea",
        code: "410"
    },
    {
        name: "Kuwait",
        code: "414"
    },
    {
        name: "The Cayman Islands",
        code: "136"
    },
    {
        name: "Kazakhstan",
        code: "398"
    },
    {
        name: "Laos",
        code: "418"
    },
    {
        name: "Lebanon",
        code: "422"
    },
    {
        name: "Saint Lucia",
        code: "662"
    },
    {
        name: "Liechtenstein",
        code: "438"
    },
    {
        name: "Sri Lanka",
        code: "144"
    },
    {
        name: "Liberia",
        code: "430"
    },
    {
        name: "Lesotho",
        code: "426"
    },
    {
        name: "Lithuania",
        code: "440"
    },
    {
        name: "Luxembourg",
        code: "442"
    },
    {
        name: "Latvia",
        code: "428"
    },
    {
        name: "Libya",
        code: "434"
    },
    {
        name: "Morocco",
        code: "504"
    },
    {
        name: "Moldova",
        code: "498"
    },
    {
        name: "Montenegro",
        code: "499"
    },
    {
        name: "Madagascar",
        code: "450"
    },
    {
        name: "The Marshall Islands",
        code: "584"
    },
    {
        name: "North Macedonia",
        code: "807"
    },
    {
        name: "Mali",
        code: "466"
    },
    {
        name: "Myanmar",
        code: "104"
    },
    {
        name: "Mongolia",
        code: "496"
    },
    {
        name: "Macao",
        code: "446"
    },
    {
        name: "The Northern Mariana Islands",
        code: "580"
    },
    {
        name: "Martinique",
        code: "474"
    },
    {
        name: "Mauritania",
        code: "478"
    },
    {
        name: "Montserrat",
        code: "500"
    },
    {
        name: "Malta",
        code: "470"
    },
    {
        name: "Mauritius",
        code: "480"
    },
    {
        name: "Maldives",
        code: "462"
    },
    {
        name: "Malawi",
        code: "454"
    },
    {
        name: "Mexico",
        code: "484"
    },
    {
        name: "Malaysia",
        code: "458"
    },
    {
        name: "Mozambique",
        code: "508"
    },
    {
        name: "Namibia",
        code: "516"
    },
    {
        name: "New Caledonia",
        code: "540"
    },
    {
        name: "Niger",
        code: "562"
    },
    {
        name: "Norfolk Island",
        code: "574"
    },
    {
        name: "Nigeria",
        code: "566"
    },
    {
        name: "Nicaragua",
        code: "558"
    },
    {
        name: "Netherlands",
        code: "528"
    },
    {
        name: "Norway",
        code: "578"
    },
    {
        name: "Nepal",
        code: "524"
    },
    {
        name: "Nauru",
        code: "520"
    },
    {
        name: "Niue",
        code: "570"
    },
    {
        name: "New Zealand",
        code: "554"
    },
    {
        name: "Oman",
        code: "512"
    },
    {
        name: "Panama",
        code: "591"
    },
    {
        name: "Peru",
        code: "604"
    },
    {
        name: "French Polynesia",
        code: "258"
    },
    {
        name: "Papua New Guinea",
        code: "598"
    },
    {
        name: "Philippines",
        code: "608"
    },
    {
        name: "Pakistan",
        code: "586"
    },
    {
        name: "Poland",
        code: "616"
    },
    {
        name: "Saint Pierre and Miquelon",
        code: "666"
    },
    {
        name: "Pitcairn",
        code: "612"
    },
    {
        name: "Puerto Rico",
        code: "630"
    },
    {
        name: "Palestine",
        code: "275"
    },
    {
        name: "Portugal",
        code: "620"
    },
    {
        name: "Palau",
        code: "585"
    },
    {
        name: "Paraguay",
        code: "600"
    },
    {
        name: "Qatar",
        code: "634"
    },
    {
        name: "Reunion",
        code: "638"
    },
    {
        name: "Romania",
        code: "642"
    },
    {
        name: "Serbia",
        code: "688"
    },
    {
        name: "Russia",
        code: "643"
    },
    {
        name: "Rwanda",
        code: "646"
    },
    {
        name: "Saudi Arabia",
        code: "682"
    },
    {
        name: "Solomon Islands",
        code: "090"
    },
    {
        name: "Seychelles",
        code: "690"
    },
    {
        name: "Sudan",
        code: "729"
    },
    {
        name: "Sweden",
        code: "752"
    },
    {
        name: "Singapore",
        code: "702"
    },
    {
        name: "Saint Helena",
        code: "654"
    },
    {
        name: "Slovenia",
        code: "705"
    },
    {
        name: "Slovakia",
        code: "703"
    },
    {
        name: "Sierra Leone",
        code: "694"
    },
    {
        name: "San Marino",
        code: "674"
    },
    {
        name: "Senegal",
        code: "686"
    },
    {
        name: "Somalia",
        code: "706"
    },
    {
        name: "Suriname",
        code: "740"
    },
    {
        name: "South Sudan",
        code: "728"
    },
    {
        name: "Sao Tome and Principe",
        code: "678"
    },
    {
        name: "El Salvador",
        code: "222"
    },
    {
        name: "Sint Maarten",
        code: "534"
    },
    {
        name: "Syria",
        code: "760"
    },
    {
        name: "Eswatini",
        code: "748"
    },
    {
        name: "The Turks and Caicos Islands",
        code: "796"
    },
    {
        name: "The French Southern Territories",
        code: "260"
    },
    {
        name: "Togo",
        code: "768"
    },
    {
        name: "Thailand",
        code: "764"
    },
    {
        name: "Tajikistan",
        code: "762"
    },
    {
        name: "Tokelau",
        code: "772"
    },
    {
        name: "Timor-leste",
        code: "626"
    },
    {
        name: "Turkmenistan",
        code: "795"
    },
    {
        name: "Tunisia",
        code: "788"
    },
    {
        name: "Tonga",
        code: "776"
    },
    {
        name: "Turkey",
        code: "792"
    },
    {
        name: "Trinidad and Tobago",
        code: "780"
    },
    {
        name: "Tuvalu",
        code: "798"
    },
    {
        name: "Taiwan",
        code: "158"
    },
    {
        name: "Tanzania",
        code: "834"
    },
    {
        name: "Ukraine",
        code: "804"
    },
    {
        name: "Uganda",
        code: "800"
    },
    {
        name: "United States",
        code: "840"
    },
    {
        name: "Uruguay",
        code: "858"
    },
    {
        name: "Uzbekistan",
        code: "860"
    },
    {
        name: "Vatican City",
        code: "336"
    },
    {
        name: "Saint Vincent and the Grenadines",
        code: "670"
    },
    {
        name: "Venezuela",
        code: "862"
    },
    {
        name: "British Virgin Islands",
        code: "092"
    },
    {
        name: "US Virgin Islands",
        code: "850"
    },
    {
        name: "Vietnam",
        code: "704"
    },
    {
        name: "Vanuatu",
        code: "548"
    },
    {
        name: "Wallis and Futuna",
        code: "876"
    },
    {
        name: "Samoa",
        code: "882"
    },
    {
        name: "Yemen",
        code: "887"
    },
    {
        name: "Mayotte",
        code: "175"
    },
    {
        name: "South Africa",
        code: "710"
    },
    {
        name: "Zambia",
        code: "894"
    },
    {
        name: "Zimbabwe",
        code: "716"
    }
]

export default { codes }