import { t as toRoutingStrategy, a as toFallbackType, g as getLocaleRelativeUrl } from './utils_C3c7bn6J.mjs';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { removeBase, isRemotePath, prependForwardSlash } from '@astrojs/internal-helpers/path';
import { V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError } from './astro/assets-service_C6c04lMZ.mjs';
import { c as createComponent, i as renderUniqueStylesheet, j as renderScriptElement, k as createHeadAndContent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_C19coWfX.mjs';
import 'kleur/colors';
import * as devalue from 'devalue';
import { d as defaultLocale$1 } from './siteSettings.json_BHn8gCmX.mjs';

var define_ASTRO_INTERNAL_I18N_CONFIG_default = { format: "directory", trailingSlash: "ignore", i18n: { defaultLocale: "en", locales: ["en", "fr"], routing: { prefixDefaultLocale: false, redirectToDefaultLocale: true, fallbackType: "redirect" } }};
const { trailingSlash, format, i18n} = (
  // @ts-expect-error
  define_ASTRO_INTERNAL_I18N_CONFIG_default
);
const { defaultLocale, locales, domains, routing } = i18n;
const base = "/";
let strategy = toRoutingStrategy(routing, domains);
toFallbackType(routing);
const getRelativeLocaleUrl = (locale, path, options) => getLocaleRelativeUrl({
  locale,
  path,
  base,
  trailingSlash,
  format,
  defaultLocale,
  locales,
  strategy,
  ...options
});

const siteData$1 = {
  name: "Blackridge Research & Consulting",
  // Your website's title and description (meta fields)
  title: "Latest Global Construction Industry Projects (2024) - Blackridge Research & Consulting",
  description: "Search latest and upcoming global construction industry projects, bids, RFPs, ICBs, tenders, government contracts, and awards with our comprehensive online database.",
  // used on contact page and footer
  contact: {
    address1: "2nd Floor, Vaishnavi Cynosure Building, Gachibowli",
    address2: "Hyderabad, Telangana, India, Pin - 500032.",
    phone: "+1 (917) 993 7467",
    email: "info@blackridgeresearch.com"
  },
  // Your information for blog post purposes
  author: {
    name: "Blackridge Research & Consulting",
    email: "raj@blackridgeresearch.com",
    twitter: "BLackridgeHQ"
  },
  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/logo.svg",
    alt: "Blackridge Research & Consulting logo"
  }
};

const siteData = {
  name: "Blackridge Research",
  // Your website's title and description (meta fields)
  title: "Latest Global Construction Industry Projects (2024) - Blackridge Research",
  description: "Search latest and upcoming global construction industry projects, bids, RFPs, ICBs, tenders, government contracts, and awards with our comprehensive online database.",
  // used on contact page and footer
  contact: {
    address1: "1234 Main Street",
    address2: "New York, NY 10001",
    phone: "(123) 456-7890",
    email: "raj@blackridgeresearch.com"
  },
  // Your information for blog post purposes
  author: {
    name: "Blackridge Research",
    email: "raj@blackridgeresearch.com",
    twitter: "BLackridgeHQ"
  },
  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/logo.svg",
    alt: "Blackridge Research logo"
  }
};

const navConfig$1 = [
  {
    text: "Find Projects",
    link: "/new-projects-near-me/agriculture-and-forestry-building-database/c/global",
    icon: "blackridge/search",
    dropdown: [
      {
        text: "Construction",
        link: "/new-projects-near-me/construction-industry-and-sector-database/c/global",
        dropdown: [
          {
            text: "Institutional Buildings",
            link: "/new-projects-near-me/institutional-building-design-and-construction-database/c/global",
            dropdown: [
              {
                text: "Administrative Buildings",
                link: "/new-projects-near-me/administrative-and-government-building-facility-database/c/global"
              },
              {
                text: "Animal Shelters",
                link: "/new-projects-near-me/animal-shelter-facility-construction-database/c/global"
              },
              {
                text: "Armories",
                link: "/new-projects-near-me/armory-building-ammunition-dump-construction-database/c/global"
              },
              {
                text: "Barracks",
                link: "/new-projects-near-me/barrack-building-construction-database/c/global"
              },
              {
                text: "Public Buildings",
                link: "/new-projects-near-me/public-building-construction-database/c/global",
                dropdown: [
                  {
                    text: "Church",
                    link: "/new-projects-near-me/church-cathedral-building-construction-and-renovation-database/c/global"
                  },
                  {
                    text: "Mosque",
                    link: "/new-projects-near-me/mosque-building-construction-database/c/global"
                  },
                  {
                    text: "Temple",
                    link: "/new-projects-near-me/temple-construction-database/c/global"
                  }
                ]
              },
              {
                text: "Civic Centers",
                link: "/new-projects-near-me/civic-center-building-construction-database/c/global"
              },
              {
                text: "Healthcare Buildings",
                link: "/new-projects-near-me/healthcare-building-construction-database/c/global",
                dropdown: [
                  {
                    text: "Clinics",
                    link: "/new-projects-near-me/clinic-facility-database/c/global"
                  },
                  {
                    text: "Hospitals",
                    link: "/new-projects-near-me/hospital-building-construction-and-renovation-database/c/global"
                  }
                ]
              },
              {
                text: "Educational Buildings",
                link: "/new-projects-near-me/educational-building-construction-database/c/global",
                dropdown: [
                  {
                    text: "Schools",
                    link: "/new-projects-near-me/school-building-database/c/global"
                  }
                ]
              },
              {
                text: "Fire Stations",
                link: "/new-projects-near-me/fire-station-building-construction-database/c/global"
              },
              {
                text: "Prison",
                link: "/new-projects-near-me/jail-prison-building-database/c/global"
              },
              {
                text: "Libraries",
                link: "/new-projects-near-me/library-archive-building-database/c/global"
              },
              {
                text: "Monuments",
                link: "/new-projects-near-me/monument-building-database/c/global"
              },
              {
                text: "Museums",
                link: "/new-projects-near-me/museum-building-construction-database/c/global"
              },
              {
                text: "Post Offices",
                link: "/new-projects-near-me/post-office-building-database/c/global"
              },
              {
                text: "Research Facilities",
                link: "/new-projects-near-me/research-facility-center-database/c/global"
              }
            ]
          },
          {
            text: "Commercial Buildings",
            link: "/new-projects-near-me/commercial-building-construction-database/c/global",
            dropdown: [
              // {
              //  text: "Agricultural and Forestry Buildings",
              //  link: "/new-projects-near-me/agriculture-and-forestry-building-database",
              // },
              // {
              //  text: "Leisure and Hospitality Buildings",
              //  link: "/new-projects-near-me/leisure-and-hospitality-building-database",
              // },
              // {
              //  text: "Hotel Buildings",
              //  link: "/new-projects-near-me/hotel-building-construction-database",
              // },
              {
                text: "Agriculture and Forestry Building",
                link: "/new-projects-near-me/agriculture-and-forestry-building-database/c/global"
              },
              {
                text: "Leisure and Hospitality Buildings",
                link: "/new-projects-near-me/leisure-and-hospitality-building-database/c/global",
                dropdown: [
                  {
                    text: "Amusement Facilities",
                    link: "/new-projects-near-me/amusement-park-and-recreational-center-construction-database/c/global"
                  },
                  {
                    text: "Athletic Fields",
                    link: "/new-projects-near-me/athletic-and-sports-stadium-complex-construction-and-renovation-database/c/global"
                  },
                  {
                    text: "Athletic Tracks",
                    link: "/new-projects-near-me/athletics-running-track-facility-construction-database/c/global"
                  },
                  {
                    text: "Broadcasting Stations and Studios",
                    link: "/new-projects-near-me/broadcasting-station-and-tv-studio-construction-database/c/global"
                  },
                  {
                    text: "Casinos",
                    link: "/new-projects-near-me/casino-database/c/global"
                  },
                  {
                    text: "Cinema",
                    link: "/new-projects-near-me/cinema-hall-movie-theater-construction-database/c/global"
                  },
                  {
                    text: "Dormitories",
                    link: "/new-projects-near-me/dormitory-building-database/c/global"
                  },
                  {
                    text: "Health & Athletic Club",
                    link: "/new-projects-near-me/health-and-athletic-club-building-database/c/global"
                  },
                  {
                    text: "Hotels",
                    link: "/new-projects-near-me/hotel-and-accommodation-building-database/c/global"
                  },
                  {
                    text: "Ice Rink",
                    link: "/new-projects-near-me/ice-rink-construction-database/c/global"
                  },
                  {
                    text: "Motel",
                    link: "/new-projects-near-me/motel-building-construction-database/c/global"
                  },
                  {
                    text: "Resorts",
                    link: "/new-projects-near-me/resort-building-construction-database/c/global"
                  }
                ]
              },
              {
                text: "Retail Buildings",
                link: "/new-projects-near-me/retail-building-design-and-construction-database/c/global"
              },
              {
                text: "Transportation & Storage Buildings (Logistics)",
                link: "/new-projects-near-me/transportation-and-storage-logistics-building-database/c/global"
              },
              {
                text: "Educational Buildings",
                link: "/new-projects-near-me/educational-building-construction-database/c/global",
                dropdown: [
                  {
                    text: "College and University",
                    link: "/new-projects-near-me/college-and-university-construction-database/c/global"
                  }
                ]
              },
              {
                text: "Data Centers",
                link: "/new-projects-near-me/data-center-facility-database/c/global"
              },
              {
                text: "Outdoor Leisure Facilities",
                link: "/new-projects-near-me/outdoor-leisure-facility-building-database/c/global",
                dropdown: [
                  {
                    text: "Drive-in Movie Facilities",
                    link: "/new-projects-near-me/drivein-movie-facility-database/c/global"
                  },
                  {
                    text: "Golf Course",
                    link: "/new-projects-near-me/golf-course-design-and-construction-database/c/global"
                  },
                  {
                    text: "Outdoor Ice Rink",
                    link: "/new-projects-near-me/outdoor-ice-rink-database/c/global"
                  },
                  {
                    text: "Outdoor Recreation Facilities",
                    link: "/new-projects-near-me/outdoor-recreation-facility-database/c/global"
                  },
                  {
                    text: "Park & Playground",
                    link: "/new-projects-near-me/park-and-playground-database/c/global"
                  },
                  {
                    text: "Ski Tow",
                    link: "/new-projects-near-me/ski-tow-database/c/global"
                  }
                ]
              },
              {
                text: "Mixed-Use Buildings",
                link: "/new-projects-near-me/mixeduse-building-database/c/global"
              },
              {
                text: "Office Buildings",
                link: "/new-projects-near-me/office-building-database/c/global"
              },
              {
                text: "Retail Bank Buildings",
                link: "/new-projects-near-me/retail-bank-building-design-and-construction-database/c/global"
              },
              {
                text: "Retail Building",
                link: "/new-projects-near-me/retail-building-design-and-construction-database/c/global"
              }
            ]
          },
          {
            text: "Residential Buildings",
            link: "/new-projects-near-me/residential-building-design-and-construction-database/c/global",
            dropdown: [
              {
                text: "Single-Family Housing",
                link: "/new-projects-near-me/singlefamily-housing-database/c/global",
                dropdown: [
                  {
                    text: "Bungalows",
                    link: "/new-projects-near-me/bungalow-construction-database/c/global"
                  },
                  {
                    text: "Cottages",
                    link: "/new-projects-near-me/cottage-database/c/global"
                  },
                  {
                    text: "Detached Housing",
                    link: "/new-projects-near-me/detached-housing-design-and-construction-database/c/global"
                  },
                  {
                    text: "Holiday Homes",
                    link: "/new-projects-near-me/holiday-vacation-home-design-and-construction-database/c/global"
                  },
                  {
                    text: "Modular Housing",
                    link: "/new-projects-near-me/modular-housing-database/c/global"
                  },
                  {
                    text: "Prefabricated Single-Family Homes",
                    link: "/new-projects-near-me/prefabricated-singlefamily-home-database/c/global"
                  },
                  {
                    text: "Semi-Detached Homes",
                    link: "/new-projects-near-me/semidetached-home-construction-database/c/global"
                  },
                  {
                    text: "Terraced Housing",
                    link: "/new-projects-near-me/terraced-housing-construction-database/c/global"
                  },
                  {
                    text: "Townhouse",
                    link: "/new-projects-near-me/townhouse-building-construction-database/c/global"
                  },
                  {
                    text: "Villas",
                    link: "/new-projects-near-me/villa-design-and-construction-database/c/global"
                  }
                ]
              },
              {
                text: "Multi-Family Housing",
                link: "/new-projects-near-me/multifamily-housing-database/c/global",
                dropdown: [
                  {
                    text: "Condominium",
                    link: "/new-projects-near-me/condominium-database/c/global"
                  },
                  {
                    text: "Duplex Apartments",
                    link: "/new-projects-near-me/duplex-apartment-construction-database/c/global"
                  },
                  {
                    text: "High-Rise Apartments",
                    link: "/new-projects-near-me/high-rise-apartment-building-database/c/global"
                  },
                  {
                    text: "Low-Rise Apartment",
                    link: "/new-projects-near-me/lowrise-apartment-design-and-construction-database/c/global"
                  },
                  {
                    text: "Prefabricated Apartments",
                    link: "/new-projects-near-me/prefabricated-apartment-database/c/global"
                  },
                  {
                    text: "Prefabricated Multi-Family Homes",
                    link: "/new-projects-near-me/prefabricated-multifamily-home-database/c/global"
                  }
                ]
              }
            ]
          },
          {
            text: "Special Economic Zones",
            link: "/new-projects-near-me/special-economic-zone-sez-database/c/global"
          }
        ]
      },
      {
        text: "Energy",
        link: "/new-projects-near-me/energy-infrastructure-database/c/global",
        dropdown: [
          {
            text: "Electricity Transmission Infrastructure",
            link: "/new-projects-near-me/electric-power-transmission-and-distribution-t-and-d-infrastructure-database/c/global",
            dropdown: [
              { text: "Battery Energy Storage", link: "/new-projects-near-me/battery-energy-storage-system-bess-database/c/global" },
              { text: "Compressed-Air Energy Storage (CAES)", link: "/new-projects-near-me/compressed-air-energy-storage-caes-database/c/global" },
              { text: "Electricity Transmission Tunnels", link: "/new-projects-near-me/electricity-transmission-tunnels-database/c/global" },
              { text: "Flywheel Energy Storage (FES)", link: "/new-projects-near-me/flywheel-energy-storage-fes-database/c/global" },
              { text: "Energy Storage", link: "/new-projects-near-me/gridscale-utility-scale-energy-storage-system-ess-database/c/global" },
              { text: "Overhead Transmission Line", link: "/new-projects-near-me/overhead-power-transmission-line-database/c/global" },
              { text: "Pumped Hydro Storage (PHS)", link: "/new-projects-near-me/pumped-hydro-energy-storage-phs-plant-database/c/global" },
              { text: "Switching Station & Substation", link: "/new-projects-near-me/switching-station-and-substation-database/c/global" },
              { text: "Thermal Energy Storage (TES)", link: "/new-projects-near-me/thermal-energy-storage-tes-database/c/global" },
              { text: "Transformer Stations & Substation", link: "/new-projects-near-me/transformer-station-and-substation-database/c/global" },
              { text: "Ultracapacitor", link: "/new-projects-near-me/ultracapacitor-energy-storage-database/c/global" },
              { text: "Underground Transmission Line", link: "/new-projects-near-me/underground-electric-power-transmission-line-database/c/global" },
              { text: "Underwater Transmission Line", link: "/new-projects-near-me/underwater-submarine-transmission-line-database/c/global" }
            ]
          },
          {
            text: "Renewable Energy",
            link: "/new-projects-near-me/renewable-energy-database/c/global",
            dropdown: [
              { text: "Biomass Power Plants", link: "/new-projects-near-me/biomass-power-plant-database/c/global" },
              {
                text: "Hydrogen",
                link: "/new-projects-near-me/hydrogen-h2-generation-production-plant-database/c/global",
                dropdown: [
                  { text: "Blue Hydrogen", link: "/new-projects-near-me/blue-hydrogen-h2-generation-production-plant-database/c/global" },
                  { text: "Green Hydrogen", link: "/new-projects-near-me/green-hydrogen-h2-generation-production-plant-database/c/global" }
                ]
              },
              { text: "Concentrated Solar Power (CSP)", link: "/new-projects-near-me/concentrated-solar-power-csp-plant-database/c/global" },
              { text: "Geothermal Power Plants", link: "/new-projects-near-me/geothermal-power-plant-database/c/global" },
              { text: "Hybrid Power Plants", link: "/new-projects-near-me/hybrid-power-generation-plant-database/c/global" },
              { text: "Hydroelectric Power Plants", link: "/new-projects-near-me/hydroelectric-power-plant-database/c/global" },
              { text: "Incinerator (Waste-to-Energy)", link: "/new-projects-near-me/incinerator-waste-to-energy-wte-plant-database/c/global" },
              { text: "Solar Photovoltaic Power Plant (PV)", link: "/new-projects-near-me/solar-photovoltaic-pv-database/c/global" },
              {
                text: "Wind Power Plants",
                link: "/new-projects-near-me/wind-power-plant-wpp-farm-park-windmill-database/c/global",
                dropdown: [
                  { text: "Offshore Wind Power Plants", link: "/new-projects-near-me/offshore-wind-power-plants-farms-parks-database/c/global" },
                  { text: "Floating Offshore Wind", link: "/new-projects-near-me/floating-offshore-wind-fow-power-plants-farms-windmill-parks-database/c/global" }
                ]
              }
            ]
          },
          { text: "Coal Power Plants", link: "/new-projects-near-me/coal-power-plant-database/c/global" },
          {
            text: "Oil & Gas",
            link: "/new-projects-near-me/oil-and-gas-production-database/c/global",
            dropdown: [
              { text: "Refineries", link: "/new-projects-near-me/crude-oil-refinery-plant-database/c/global" },
              { text: "FPSO & FSO", link: "/new-projects-near-me/fpso-and-fso-oil-and-gas-database/c/global" },
              { text: "Gas Processing Plants", link: "/new-projects-near-me/gas-processing-plant-database/c/global" },
              { text: "LNG Liquefaction Plants", link: "/new-projects-near-me/lng-liquefaction-plant-database/c/global" },
              { text: "LNG Regasification Plants", link: "/new-projects-near-me/lng-regasification-plant-database/c/global" },
              { text: "Storage Tanks", link: "/new-projects-near-me/oil-storage-tank-database/c/global" },
              { text: "Storage Terminal", link: "/new-projects-near-me/petroleum-products-and-gas-storage-terminal-database/c/global" },
              { text: "Pipeline", link: "/new-projects-near-me/pipeline-oil-and-gas-database/c/global" },
              { text: "Small Scale LNG (SSLNG)", link: "/new-projects-near-me/small-scale-lng-sslng-plant-database/c/global" },
              { text: "Upstream - Offshore", link: "/new-projects-near-me/upstream-offshore-database/c/global" },
              { text: "Upstream - Onshore", link: "/new-projects-near-me/upstream-onshore-database/c/global" }
            ]
          },
          { text: "Gas Power Plants", link: "/new-projects-near-me/gas-power-plant-database/c/global" },
          { text: "Nuclear Power Plants", link: "/new-projects-near-me/nuclear-power-plant-npp-database/c/global" },
          { text: "Oil Power Plants", link: "/new-projects-near-me/oil-power-plant-facility-database/c/global" }
        ]
      },
      {
        text: " Industrial",
        link: "/new-projects-near-me/energy-infrastructure-database/c/global",
        dropdown: [
          {
            text: "Metal & Material Processing Plants",
            link: "/new-projects-near-me/metal-and-material-processing-plant-database/c/global",
            dropdown: [
              { text: "Aluminium Plants", link: "/new-projects-near-me/aluminium-manufacturing-plant-database/c/global" },
              { text: "Cement Plants", link: "/new-projects-near-me/cement-manufacturing-plant-database/c/global" },
              { text: "Glass", link: "/new-projects-near-me/glass-manufacturing-plant-database/c/global" },
              { text: "Kilns & Oven Plants", link: "/new-projects-near-me/kiln-and-oven-plant-database/c/global" },
              { text: "Material Recovery Facilities", link: "/new-projects-near-me/material-recovery-facility-mrf-database/c/global" },
              { text: "Metal Processing Plants", link: "/new-projects-near-me/metal-processing-plant-database/c/global" },
              { text: "Mining Tunnel", link: "/new-projects-near-me/mining-tunnel-database/c/global" },
              { text: "Mining Washery", link: "/new-projects-near-me/mining-washery-plant-database/c/global" },
              { text: "Ore & Metal Refineries", link: "/new-projects-near-me/ore-and-metal-refinery-database/c/global" },
              { text: "Paper & Pulp Mills", link: "/new-projects-near-me/pulp-and-paper-manufacturing-production-plant-database/c/global" },
              { text: "Smelters", link: "/new-projects-near-me/smelter-smelting-plant-database/c/global" },
              { text: "Steel Mills", link: "/new-projects-near-me/steel-manufacturing-plant-database/c/global" }
            ]
          },
          {
            text: "Manufacturing Plants",
            link: "/new-projects-near-me/manufacturing-plant-database/c/global",
            dropdown: [
              { text: "Assembly Plants", link: "/new-projects-near-me/assembly-plant-database/c/global" },
              { text: "Automobile Manufacturing Units", link: "/new-projects-near-me/automobile-manufacturing-assembly-plant-database/c/global" },
              { text: "Cannery", link: "/new-projects-near-me/cannery-food-processing-facility-database/c/global" },
              { text: "Chemical Manufacturing Plants", link: "/new-projects-near-me/chemical-manufacturing-plant-database/c/global" },
              { text: "Food Processing Plants", link: "/new-projects-near-me/food-processing-plant-database/c/global" },
              { text: "Pharmaceutical Plants", link: "/new-projects-near-me/pharmaceutical-plant-database/c/global" },
              { text: "Railway Production Units", link: "/new-projects-near-me/railway-production-unit-database/c/global" },
              { text: "Semiconductor Plants", link: "/new-projects-near-me/semiconductor-fabrication-plant-database/c/global" },
              { text: "Textile Mills", link: "/new-projects-near-me/textile-manufacturing-plant-textile-mill-database/c/global" }
            ]
          },
          { text: "Furnace", link: "/new-projects-near-me/industrial-furnace-database/c/global" },
          { text: "Industrial Gasses", link: "/new-projects-near-me/industrial-gas-production-plant-database/c/global" },
          { text: "Mining", link: "/new-projects-near-me/mining-database/c/global" },
          { text: "Carbon Capture, Utilization, and Storage (CCUS)", link: "/new-projects-near-me/carbon-capture-utilization-and-storage-ccus-database/c/global" },
          {
            text: "Waste Processing Plants",
            link: "/new-projects-near-me/waste-processing-management-plant-database/c/global",
            dropdown: [
              { text: "Waste Disposal Plants", link: "/new-projects-near-me/waste-disposal-plant-database/c/global" }
            ]
          }
        ]
      },
      {
        text: " Infrastructure",
        link: "/new-projects-near-me/energy-infrastructure-database/c/global",
        dropdown: [
          { text: "Airport Terminal", link: "/new-projects-near-me/airport-terminal-facility-database/c/global" },
          {
            text: "Marine & Inland Water Infrastructure",
            link: "/new-projects-near-me/marine-and-inland-water-infrastructure-database/c/global",
            dropdown: [
              { text: "Berth", link: "/new-projects-near-me/berth-mooring-facility-database/c/global" },
              { text: "Shore Protection System", link: "/new-projects-near-me/coastal-shore-protection-system-database/c/global" },
              { text: "Dams", link: "/new-projects-near-me/dam-reservoir-construction-database/c/global" },
              { text: "Drainage System", link: "/new-projects-near-me/drainage-system-construction-database/c/global" },
              { text: "Dredging", link: "/new-projects-near-me/dredging-database/c/global" },
              { text: "Flood Control & Protection System", link: "/new-projects-near-me/flood-control-and-protection-system-database/c/global" },
              { text: "Harbors", link: "/new-projects-near-me/harbor-database/c/global" },
              { text: "Jetty", link: "/new-projects-near-me/jetty-facility-development-database/c/global" },
              { text: "Port Facilities", link: "/new-projects-near-me/port-facility-development-database/c/global" },
              { text: "Sea Walls/Quay", link: "/new-projects-near-me/sea-wall-quay-database/c/global" },
              { text: "Wharf", link: "/new-projects-near-me/wharf-construction-database/c/global" }
            ]
          },
          { text: "Bridge", link: "/new-projects-near-me/bridge-viaduct-construction-database/c/global" },
          {
            text: "Road Infrastructure",
            link: "/new-projects-near-me/road-infrastructure-database/c/global",
            dropdown: [
              { text: "Causeways", link: "/new-projects-near-me/causeway-construction-database/c/global" },
              { text: "Flyovers", link: "/new-projects-near-me/flyover-and-overpass-construction-database/c/global" },
              { text: "Road", link: "/new-projects-near-me/road-and-highway-construction-database/c/global" },
              { text: "Road Tunnels", link: "/new-projects-near-me/road-tunnel-database/c/global" },
              { text: "Underpass", link: "/new-projects-near-me/underpass-construction-database/c/global" }
            ]
          },
          {
            text: "Rail Infrastructure",
            link: "/new-projects-near-me/railway-train-infrastructure-database/c/global",
            dropdown: [
              { text: "Conventional Commuter Railway", link: "/new-projects-near-me/conventional-commuter-railways-database/c/global" },
              { text: "Freight and Other Material Railway", link: "/new-projects-near-me/freight-and-material-railway-database/c/global" },
              { text: "High Speed Railway", link: "/new-projects-near-me/hsr-high-speed-railway-database/c/global" },
              { text: "Hyperloop", link: "/new-projects-near-me/hyperloop-transportation-technology-database/c/global" },
              { text: "Light Rail Transit", link: "/new-projects-near-me/light-rail-transit-database/c/global" },
              { text: "Mass Rapid Transit/Metro", link: "/new-projects-near-me/mass-rapid-transit-metro-database/c/global" },
              { text: "Monorail", link: "/new-projects-near-me/monorail-train-database/c/global" },
              { text: "Railway Stations", link: "/new-projects-near-me/railway-station-database/c/global" },
              { text: "Railway Tunnels", link: "/new-projects-near-me/railway-tunnel-database/c/global" },
              { text: "Streetcar/Tram", link: "/new-projects-near-me/tram-streetcar-line-database/c/global" },
              { text: "Tubes/Underground Rail/Subway Rail", link: "/new-projects-near-me/underground-subway-rail-database/c/global" }
            ]
          },
          { text: "Land Reclamation", link: "/new-projects-near-me/land-reclamation-and-rehabilitation-database/c/global" },
          { text: "Launching Pads", link: "/new-projects-near-me/launching-pad-database/c/global" },
          { text: "Missile Facilities", link: "/new-projects-near-me/missile-facility-launch-and-storage-database/c/global" },
          { text: "Nuclear Waste Disposal Sites", link: "/new-projects-near-me/nuclear-waste-disposal-site-database/c/global" },
          {
            text: "Telecommunication",
            link: "/new-projects-near-me/telecommunication-infrastructure-database/c/global",
            dropdown: [
              { text: "Overhead", link: "/new-projects-near-me/overhead-cable-database/c/global" },
              { text: "Underground Cable", link: "/new-projects-near-me/underground-internet-cable-database/c/global" },
              { text: "Underwater/Submarine Cable", link: "/new-projects-near-me/underwater-submarine-cable-database/c/global" }
            ]
          }
        ]
      },
      {
        text: "Petrochemical",
        link: "/new-projects-near-me/petrochemical-production-database/c/global"
      },
      {
        text: "Utilities",
        link: "/new-projects-near-me/petrochemical-production-database/c/global",
        dropdown: [
          {
            text: "Water Infrastructure",
            link: "/new-projects-near-me/water-infrastructure-database/c/global",
            dropdown: [
              { text: "Desalination Plants", link: "/new-projects-near-me/desalination-plant-database/c/global" },
              { text: "District Cooling Plants", link: "/new-projects-near-me/district-cooling-plant-dcp-database/c/global" },
              { text: "Irrigation System", link: "/new-projects-near-me/irrigation-system-and-network-database/c/global" },
              { text: "Pumping Stations", link: "/new-projects-near-me/pumping-station-database/c/global" },
              { text: "Sea Water Cooling Plants", link: "/new-projects-near-me/sea-water-cooling-swc-plant-database/c/global" },
              { text: "Storage Tanks & Tower", link: "/new-projects-near-me/storage-tank-and-tower-database/c/global" },
              { text: "Filtration Plants", link: "/new-projects-near-me/water-filtration-plant-wfp-database/c/global" },
              { text: "Reservoirs", link: "/new-projects-near-me/water-storage-reservoir-wsr-database/c/global" },
              { text: "Water Tunnel", link: "/new-projects-near-me/water-supply-tunnel-database/c/global" },
              { text: "Water Treatment Plants", link: "/new-projects-near-me/water-treatment-plant-wtp-database/c/global" }
            ]
          },
          {
            text: "Sewage Infrastructure",
            link: "/new-projects-near-me/sewage-and-drainage-infrastructure-database/c/global",
            dropdown: [
              { text: "Sewage Treatment Plants", link: "/new-projects-near-me/sewage-treatment-plant-stp-database/c/global" }
            ]
          }
        ]
      }
    ]
  },
  {
    text: "News & Insights",
    // link: "/blog",
    dropdown: [
      {
        text: "Blogs",
        link: "/blog"
      },
      {
        text: "News Releases ",
        link: "/news-releases",
        dropdown: [
          {
            text: "Project News",
            link: "/news-releases/project-news"
          },
          {
            text: "Industry News",
            link: "/news-releases/industry-news"
          }
        ]
      },
      {
        text: "Project Profiles",
        link: "/project-profiles"
      }
    ]
  },
  {
    text: "Research",
    link: "/",
    dropdown: [
      {
        text: "Syndicated Reports",
        link: "/reports"
      },
      {
        text: "Custom Research ",
        link: "/custom-research",
        dropdown: [
          {
            text: "Market Analysis and Assessment ",
            link: "/custom-research",
            dropdown: [
              {
                text: "Market Sizing and Forecasting",
                link: "/custom-research"
              },
              {
                text: "Market Segmentation",
                link: "/custom-research"
              },
              {
                text: "Market Share Analysis",
                link: "/custom-research"
              },
              {
                text: "Market Trends Analysis",
                link: "/custom-research"
              },
              {
                text: "Market Feasibility Studies",
                link: "/custom-research"
              },
              {
                text: "Market Demand for New Products",
                link: "/custom-research"
              },
              {
                text: "Identification of Potential Customers",
                link: "/custom-research"
              },
              {
                text: "Target Market Analysis",
                link: "/custom-research"
              }
            ]
          },
          {
            text: "Competitive Intelligence",
            link: "/custom-research"
          },
          {
            text: "Customer Profiling and Insights",
            link: "/custom-research"
          },
          {
            text: "Product and Strategy Development",
            link: "/custom-research",
            dropdown: [
              {
                text: "Value Chain Analysis",
                link: "/custom-research"
              },
              {
                text: "Go To Market (GTM) Strategies",
                link: "/custom-research"
              }
            ]
          },
          {
            text: "Business Plan Preparation",
            link: "/custom-research"
          },
          {
            text: "Market Entry and Development",
            link: "/custom-research"
          },
          {
            text: "Mergers and Acquisitions Research",
            link: "/custom-research"
          },
          {
            text: "Qualitative and Quantitative Research",
            link: "/custom-research"
          },
          {
            text: "Designing and Conducting Surveys",
            link: "/custom-research"
          },
          {
            text: "Pricing Research",
            link: "/custom-research"
          }
        ]
      },
      {
        text: "Intelligence Hubs ",
        link: "/intelligence-hubs",
        dropdown: [
          {
            text: "Solar Intelligence Hub",
            link: "/solar-intelligence-hub"
          },
          {
            text: "Wind Intelligence Hub",
            link: "/wind-intelligence-hub"
          },
          {
            text: "Global Project Tracker",
            link: "/global-project-tender-tracker"
          }
        ]
      },
      {
        text: "KPO Services",
        link: "/contact-us"
      },
      {
        text: "Consulting Services",
        link: "/consulting-services"
      },
      {
        text: "Subscription Services",
        link: "/subscription-services"
      }
    ]
  }
];

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://www.blackridgeresearch.com", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport,
  collectionNames
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry2 = store.get(collection, lookupId);
      if (!entry2) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      entry2.data = updateImageReferencesInData(entry2.data, entry2.filePath, imageAssetMap);
      return {
        ...entry2,
        collection
      };
    }
    if (!collectionNames.has(collection)) {
      console.warn(`The collection ${JSON.stringify(collection)} does not exist.`);
      return void 0;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
function createGetEntries(getEntry) {
  return async function getEntries(entries) {
    return Promise.all(entries.map((e) => getEntry(e)));
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/authors/second-author/index.mdx": () => import('./index_7tO2zFVo.mjs'),"/src/content/authors/web-reaper/index.mdx": () => import('./index_CLxk-2sV.mjs'),"/src/content/blog/en/best-vscode-extensions-front-end-developers/index.mdx": () => import('./index_bA4HrsaG.mjs'),"/src/content/blog/en/example-1/index.mdx": () => import('./index_CyKyxmN3.mjs'),"/src/content/blog/en/example-2/index.mdx": () => import('./index_HGs5Fyqj.mjs'),"/src/content/blog/en/example-3/index.mdx": () => import('./index_DOsTpRw4.mjs'),"/src/content/blog/en/tailwind-gradient-underline/index.mdx": () => import('./index_DMHkiCH9.mjs'),"/src/content/blog/en/tsconfig-paths-setup/index.mdx": () => import('./index_CbwYr4s5.mjs'),"/src/content/blog/fr/best-vscode-extensions-front-end-developers/index.mdx": () => import('./index_7OoZyHxh.mjs'),"/src/content/blog/fr/example-1/index.mdx": () => import('./index_CdQjGxkr.mjs'),"/src/content/blog/fr/example-2/index.mdx": () => import('./index_aCc2zgLR.mjs'),"/src/content/blog/fr/example-3/index.mdx": () => import('./index_DdhWuMte.mjs'),"/src/content/blog/fr/tailwind-gradient-underline/index.mdx": () => import('./index_D7l6RVmS.mjs'),"/src/content/blog/fr/tsconfig-paths-setup/index.mdx": () => import('./index_CslDsZJE.mjs'),"/src/content/codeToggles/javascript/index.mdx": () => import('./index_B9rU3fLa.mjs'),"/src/content/codeToggles/php/index.mdx": () => import('./index_BVtcv2qe.mjs'),"/src/content/codeToggles/python/index.mdx": () => import('./index_DBX6goDm.mjs'),"/src/content/codeToggles/react/index.mdx": () => import('./index_Dom7CjCi.mjs'),"/src/content/industry/administrative-and-government-building-facility-database_announced-upcoming_afghanistan.md": () => import('./administrative-and-government-building-facility-database_announced-upcoming_afghanistan_TqZh4SFH.mjs'),"/src/content/otherPages/en/elements/index.mdx": () => import('./index_D4Qxd84d.mjs'),"/src/content/otherPages/en/privacy-policy/index.mdx": () => import('./index_DVNUToqm.mjs'),"/src/content/otherPages/en/terms/index.mdx": () => import('./index_BHSC957K.mjs'),"/src/content/otherPages/fr/elements/index.mdx": () => import('./index_B7CoEW3C.mjs'),"/src/content/otherPages/fr/privacy-policy/index.mdx": () => import('./index_N2mWs8W2.mjs'),"/src/content/otherPages/fr/terms/index.mdx": () => import('./index_6ENLgdie.mjs'),"/src/content/reports/en/example-1/index.mdx": () => import('./index_ypPwB4AH.mjs'),"/src/content/reports/en/example-2/index.mdx": () => import('./index_B4GL_Ji8.mjs'),"/src/content/reports/en/example-3/index.mdx": () => import('./index_xKswCcLB.mjs'),"/src/content/reports/fr/example-1/index.mdx": () => import('./index_B1IV_RqM.mjs'),"/src/content/reports/fr/example-2/index.mdx": () => import('./index_B24ib4-p.mjs'),"/src/content/reports/fr/example-3/index.mdx": () => import('./index_BX29SMrN.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"industry":{"type":"content","entries":{"administrative-and-government-building-facility-database_announced-upcoming_afghanistan":"/src/content/industry/administrative-and-government-building-facility-database_announced-upcoming_afghanistan.md"}},"authors":{"type":"content","entries":{"second-author":"/src/content/authors/second-author/index.mdx","web-reaper":"/src/content/authors/web-reaper/index.mdx"}},"codeToggles":{"type":"content","entries":{"javascript":"/src/content/codeToggles/javascript/index.mdx","php":"/src/content/codeToggles/php/index.mdx","python":"/src/content/codeToggles/python/index.mdx","react":"/src/content/codeToggles/react/index.mdx"}},"blog":{"type":"content","entries":{"en/best-vscode-extensions-front-end-developers":"/src/content/blog/en/best-vscode-extensions-front-end-developers/index.mdx","en/example-1":"/src/content/blog/en/example-1/index.mdx","en/example-2":"/src/content/blog/en/example-2/index.mdx","en/example-3":"/src/content/blog/en/example-3/index.mdx","en/tailwind-gradient-underline":"/src/content/blog/en/tailwind-gradient-underline/index.mdx","en/tsconfig-paths-setup":"/src/content/blog/en/tsconfig-paths-setup/index.mdx","fr/best-vscode-extensions-front-end-developers":"/src/content/blog/fr/best-vscode-extensions-front-end-developers/index.mdx","fr/example-1":"/src/content/blog/fr/example-1/index.mdx","fr/example-2":"/src/content/blog/fr/example-2/index.mdx","fr/example-3":"/src/content/blog/fr/example-3/index.mdx","fr/tailwind-gradient-underline":"/src/content/blog/fr/tailwind-gradient-underline/index.mdx","fr/tsconfig-paths-setup":"/src/content/blog/fr/tsconfig-paths-setup/index.mdx"}},"otherPages":{"type":"content","entries":{"en/elements":"/src/content/otherPages/en/elements/index.mdx","en/privacy-policy":"/src/content/otherPages/en/privacy-policy/index.mdx","en/terms":"/src/content/otherPages/en/terms/index.mdx","fr/elements":"/src/content/otherPages/fr/elements/index.mdx","fr/privacy-policy":"/src/content/otherPages/fr/privacy-policy/index.mdx","fr/terms":"/src/content/otherPages/fr/terms/index.mdx"}},"reports":{"type":"content","entries":{"en/example-1":"/src/content/reports/en/example-1/index.mdx","en/example-2":"/src/content/reports/en/example-2/index.mdx","en/example-3":"/src/content/reports/en/example-3/index.mdx","fr/example-1":"/src/content/reports/fr/example-1/index.mdx","fr/example-2":"/src/content/reports/fr/example-2/index.mdx","fr/example-3":"/src/content/reports/fr/example-3/index.mdx"}}};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/authors/second-author/index.mdx": () => import('./index_CHHQMGCZ.mjs'),"/src/content/authors/web-reaper/index.mdx": () => import('./index_DzpcvVgX.mjs'),"/src/content/blog/en/best-vscode-extensions-front-end-developers/index.mdx": () => import('./index_Co9gxsVV.mjs'),"/src/content/blog/en/example-1/index.mdx": () => import('./index_5Ced78ML.mjs'),"/src/content/blog/en/example-2/index.mdx": () => import('./index_UEvWbbPV.mjs'),"/src/content/blog/en/example-3/index.mdx": () => import('./index_BNr3uYkb.mjs'),"/src/content/blog/en/tailwind-gradient-underline/index.mdx": () => import('./index_pZEF0Wly.mjs'),"/src/content/blog/en/tsconfig-paths-setup/index.mdx": () => import('./index_Ds-oNMpT.mjs'),"/src/content/blog/fr/best-vscode-extensions-front-end-developers/index.mdx": () => import('./index_KMspb7d3.mjs'),"/src/content/blog/fr/example-1/index.mdx": () => import('./index_aheXTNVl.mjs'),"/src/content/blog/fr/example-2/index.mdx": () => import('./index_uHrmtRCS.mjs'),"/src/content/blog/fr/example-3/index.mdx": () => import('./index_Cckn8Bzj.mjs'),"/src/content/blog/fr/tailwind-gradient-underline/index.mdx": () => import('./index_D20xrSmM.mjs'),"/src/content/blog/fr/tsconfig-paths-setup/index.mdx": () => import('./index_BTonlrZS.mjs'),"/src/content/codeToggles/javascript/index.mdx": () => import('./index_CsmfbSfr.mjs'),"/src/content/codeToggles/php/index.mdx": () => import('./index_CjF0xS2Z.mjs'),"/src/content/codeToggles/python/index.mdx": () => import('./index_DEN5oiq8.mjs'),"/src/content/codeToggles/react/index.mdx": () => import('./index_CgTrASpJ.mjs'),"/src/content/industry/administrative-and-government-building-facility-database_announced-upcoming_afghanistan.md": () => import('./administrative-and-government-building-facility-database_announced-upcoming_afghanistan_CPMoDBhP.mjs'),"/src/content/otherPages/en/elements/index.mdx": () => import('./index_D5E639hS.mjs'),"/src/content/otherPages/en/privacy-policy/index.mdx": () => import('./index_DQbnYQdB.mjs'),"/src/content/otherPages/en/terms/index.mdx": () => import('./index_-no3S3hR.mjs'),"/src/content/otherPages/fr/elements/index.mdx": () => import('./index_Ct37mZtz.mjs'),"/src/content/otherPages/fr/privacy-policy/index.mdx": () => import('./index_WPinUkyx.mjs'),"/src/content/otherPages/fr/terms/index.mdx": () => import('./index_C_bTQJ4A.mjs'),"/src/content/reports/en/example-1/index.mdx": () => import('./index_6hS6V32S.mjs'),"/src/content/reports/en/example-2/index.mdx": () => import('./index_Djw1coM0.mjs'),"/src/content/reports/en/example-3/index.mdx": () => import('./index_CKz7DEva.mjs'),"/src/content/reports/fr/example-1/index.mdx": () => import('./index_CxBrgjdV.mjs'),"/src/content/reports/fr/example-2/index.mdx": () => import('./index_D8qN0UIW.mjs'),"/src/content/reports/fr/example-3/index.mdx": () => import('./index_Bh1csxAD.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
});

const getEntries = createGetEntries(getEntry);

const navConfig = [
  {
    text: "Find Projects",
    dropdown: [
      {
        text: "Construction",
        link: "/new-projects-near-me/construction-industry-and-sector-database",
        dropdown: [
          {
            text: "Institutional Buildings",
            link: "/new-projects-near-me/institutional-building-design-and-construction-database",
            dropdown: [
              {
                text: "Administrative Buildings",
                link: "/new-projects-near-me/administrative-and-government-building-facility-database"
              },
              {
                text: "Public Buildings",
                link: "/new-projects-near-me/public-building-construction-database",
                dropdown: [
                  {
                    text: "Church",
                    link: "/new-projects-near-me/church-cathedral-building-construction-and-renovation-database"
                  },
                  {
                    text: "Mosque",
                    link: "/new-projects-near-me/mosque-building-construction-database"
                  },
                  {
                    text: "Temple",
                    link: "/new-projects-near-me/temple-construction-database"
                  }
                ]
              }
            ]
          },
          {
            text: "Commercial Buildings",
            link: "/new-projects-near-me/commercial-building-construction-database",
            dropdown: [
              {
                text: "Agricultural and Forestry Buildings",
                link: "/new-projects-near-me/agriculture-and-forestry-building-database"
              },
              {
                text: "Leisure and Hospitality Buildings",
                link: "/new-projects-near-me/leisure-and-hospitality-building-database"
              },
              {
                text: "Hotel Buildings",
                link: "/new-projects-near-me/hotel-building-construction-database"
              }
            ]
          },
          {
            text: "Residential Buildings",
            link: "/new-projects-near-me/residential-building-design-and-construction-database"
          },
          {
            text: "Special Economic Zones",
            link: "/new-projects-near-me/special-economic-zone-sez-database"
          }
        ]
      },
      {
        text: "Energy",
        link: "/new-projects-near-me/energy-infrastructure-database"
      },
      {
        text: "Petrochemical",
        link: "/new-projects-near-me/petrochemical-production-database"
      }
    ]
  },
  {
    text: "Blog",
    link: "/blog"
  },
  {
    text: "Industry",
    link: "/new-projects-near-me/construction-industry-and-sector-database"
  }
  // {
  //   // get the categories used in blog posts, to put into a navbar dropdown
  //   text: "Categories",
  //   dropdown: processedCategories.map(([category, count]) => {
  //     return {
  //       text: humanize(category),
  //       link: `/tag/${category}`,
  //     };
  //   }),
  // },
];

const faqData$1 = [
  {
    question: "Who are the themes for?",
    answer: `These themes are for developers who want to have pre-created templates to use in their projects,
    and have the hard stuff taken care of. Whether that is personal projects, a new SaaS business, a website for a client, etc.
    They offer speed, customizability with swappable 
    components, built-in SEO, and image optimization. Instead of spending hours figuring out 
    how to do this yourself, you can leverage the themes to save weeks of time and effort. You can easily 
    mix and match sections, update the copy, and change the color theme with just one line of code.`
  },
  {
    question: "What all components are included?",
    answer: `76+ components. Including 9 feature sections, 3 hero sections, 4 pricing sections, 4 CTAs, 3 testimonial sections, 
    2 faq sections, 2 logo clouds, 404, contact, legal, 2 blog post layouts and indexes, and a cookie banner.`
  },
  {
    question: 'What do you mean by "free updates"?',
    answer: `When you purchase any of our themes, you get lifetime updates for free. 
      We regularly update our themes to ensure compatibility with the latest version of Astro, 
      and to add new features or bug fixes.`
  },
  {
    question: "Why Astro?",
    answer: `Astro is an excellent framework for content-focused websites, with a great developer
      experience. It also allows you to use any UI framework you want within it, such as React, Vue,
      and Svelte. This means you can use any of your existing components, or any of the thousands of 
      components available online. `
  },
  {
    question: "Can I use a theme for multiple projects?",
    answer: `Yes, you can use any of our themes for as many projects as you like.
      You can even sell websites you create with them to your clients. As long as you
      don't resell the theme itself, you're likely to go! See our
      <a href="https://cosmicthemes.com/license/" target="_blank" rel="noopener noreferrer">License</a> 
      page for more details.`
  },
  {
    question: "How do I download new versions of the themes?",
    answer: `You can download any new versions of the themes by accessing
      your lemonsqueezy library. When you first purchase the theme, I recommend 
      creating a lemonsqueezy account at app.lemonsqueezy.com. Then you will have
      access to any theme updates from that page.`
  }
];

const faqData = [
  {
    question: "Who are the themes for?",
    answer: `These themes are for developers who want to have pre-created templates to use in their projects,
    and have the hard stuff taken care of. Whether that is personal projects, a new SaaS business, a website for a client, etc.
    They offer speed, customizability with swappable 
    components, built-in SEO, and image optimization. Instead of spending hours figuring out 
    how to do this yourself, you can leverage the themes to save weeks of time and effort. You can easily 
    mix and match sections, update the copy, and change the color theme with just one line of code.`
  },
  {
    question: "What all components are included?",
    answer: `76+ components. Including 9 feature sections, 3 hero sections, 4 pricing sections, 4 CTAs, 3 testimonial sections, 
    2 faq sections, 2 logo clouds, 404, contact, legal, 2 blog post layouts and indexes, and a cookie banner.`
  },
  {
    question: 'What do you mean by "free updates"?',
    answer: `When you purchase any of our themes, you get lifetime updates for free. 
      We regularly update our themes to ensure compatibility with the latest version of Astro, 
      and to add new features or bug fixes.`
  },
  {
    question: "Why Astro?",
    answer: `Astro is an excellent framework for content-focused websites, with a great developer
      experience. It also allows you to use any UI framework you want within it, such as React, Vue,
      and Svelte. This means you can use any of your existing components, or any of the thousands of 
      components available online. `
  },
  {
    question: "Can I use a theme for multiple projects?",
    answer: `Yes, you can use any of our themes for as many projects as you like.
      You can even sell websites you create with them to your clients. As long as you
      don't resell the theme itself, you're likely to go! See our
      <a href="https://cosmicthemes.com/license/" target="_blank" rel="noopener noreferrer">License</a> 
      page for more details.`
  },
  {
    question: "How do I download new versions of the themes?",
    answer: `You can download any new versions of the themes by accessing
      your lemonsqueezy library. When you first purchase the theme, I recommend 
      creating a lemonsqueezy account at app.lemonsqueezy.com. Then you will have
      access to any theme updates from that page.`
  }
];

const person1 = new Proxy({"src":"/_astro/ashton_blackwell.zyI9S3Ex.jpg","width":640,"height":640,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/ashton_blackwell.jpg";
							}
							
							return target[name];
						}
					});

const person2 = new Proxy({"src":"/_astro/nicola_harris.CbRf3nSe.jpg","width":640,"height":640,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/nicola_harris.jpg";
							}
							
							return target[name];
						}
					});

const person3 = new Proxy({"src":"/_astro/nic_fassbender.pVsV9nIs.jpg","width":640,"height":640,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/nic_fassbender.jpg";
							}
							
							return target[name];
						}
					});

const teamData$1 = [
  {
    image: person3,
    name: "Darrow Lykos",
    title: "Co-owner",
    bio: `I’m originally from Indiana. I was raised on a farm and became an Eagle Scout in 2008.
      I graduated from Purdue University in 2012 with a degree in Design, and I’ve been working in the
      paint industry ever since. 
      `
  },
  {
    image: person1,
    name: "Virginia Augustus",
    title: "Co-owner",
    bio: `I grew up in the suburbs of Chicago. I was a competitive swimmer for 12 years and
      played water polo in college. I graduated from the University of Illinois in 2012.
    `
  },
  {
    image: person2,
    name: "Victra Julii",
    title: "Project Estimator",
    bio: `I'm from the south side of Chicago. I graduated from the University of Illinois in 2013.
      I've been working in the paint industry ever since. I’m a huge fan of the outdoors and I love to travel.
      `
  }
];

const teamData = [
  {
    image: person3,
    name: "Darrow Lykos",
    title: "Co-owner",
    bio: `I’m originally from Indiana. I was raised on a farm and became an Eagle Scout in 2008.
      I graduated from Purdue University in 2012 with a degree in Design, and I’ve been working in the
      paint industry ever since. 
      `
  },
  {
    image: person1,
    name: "Virginia Augustus",
    title: "Co-owner",
    bio: `I grew up in the suburbs of Chicago. I was a competitive swimmer for 12 years and
      played water polo in college. I graduated from the University of Illinois in 2012.
    `
  },
  {
    image: person2,
    name: "Victra Julii",
    title: "Project Estimator",
    bio: `I'm from the south side of Chicago. I graduated from the University of Illinois in 2013.
      I've been working in the paint industry ever since. I’m a huge fan of the outdoors and I love to travel.
      `
  }
];

new Proxy({"src":"/_astro/BowTiedFocus.D6bKDRJG.jpg","width":400,"height":400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/BowTiedFocus.jpg";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/_astro/travis-b.5BU_XWEd.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/travis-b.png";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/_astro/isaac_saas.CSWud2dk.jpg","width":400,"height":400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/isaac_saas.jpg";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/_astro/aniket_p.BQH642rl.jpg","width":400,"height":400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/aniket_p.jpg";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/_astro/david-g-davedev.DCIYquVH.png","width":400,"height":400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/david-g-davedev.png";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/_astro/damiano.BU9a7QHq.jpg","width":480,"height":480,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/damiano.jpg";
							}
							
							return target[name];
						}
					});

const testimonial1 = new Proxy({"src":"/_astro/testimonial-1.DCj678NT.svg","width":48,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/testimonials/testimonial-1.svg";
							}
							
							return target[name];
						}
					});

const testimonial2 = new Proxy({"src":"/_astro/testimonial-2.D9agYXkn.svg","width":48,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/testimonials/testimonial-2.svg";
							}
							
							return target[name];
						}
					});

const testimonial3 = new Proxy({"src":"/_astro/testimonial-3.7-lJBd_8.svg","width":56,"height":56,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/testimonials/testimonial-3.svg";
							}
							
							return target[name];
						}
					});

const testimonial4 = new Proxy({"src":"/_astro/testimonial-4-crop.hiBE41KT.png","width":268,"height":268,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/blackridgeorg/public_html/src/assets/images/testimonials/testimonial-4-crop.png";
							}
							
							return target[name];
						}
					});

const testimonialData$1 = [
  {
    avatar: testimonial1,
    name: "General Manager",
    title: "SINOPEC Engineering Incorporation (SEI)",
    testimonial: `This is a great information source. The platform itself is easy to navigate and understand. Being able to find projects quickly has really helped cut down on the time spent looking for opportunities.
      `
  },
  {
    avatar: testimonial2,
    name: "Sr Business Development",
    title: "Baker McKenzie",
    testimonial: `Project Tracker has a simple and easy-to-use interface that lets us find upcoming and ongoing projects. It also covers details of key personnel and companies involved, which is important for business development and analyzing the competition.
      `
  },
  {
    avatar: testimonial3,
    name: "Sales Manager",
    title: "Sulzer Ltd",
    testimonial: `With Blackridge's Global Project Tracker, our sales team can easily and efficiently track upcoming projects, which saves us valuable time and enables us to target potential customers more effectively.
      `
  }
  // {
  // 	avatar: testimonial4,
  // 	name: "Head of Analytics & Support",
  // 	title: "NEXE Grupa",
  // 	testimonial: `Using the platform itself was very user-friendly and flexible, but the thing that was key to our successful cooperation was the Blackridge team's availability for all questions and suggestions, as well as joint work on platform adjustments.
  // It was a pleasure working with Blackridge!
  // We can call our cooperation a partnership, and that is what we highly value.
  //   `,
  // },
];

const testimonialData = [
  {
    avatar: testimonial1,
    name: "General Manager",
    title: "SINOPEC Engineering Incorporation (SEI)",
    testimonial: `This is a great information source. The platform itself is easy to navigate and understand. Being able to find projects quickly has really helped cut down on the time spent looking for opportunities.
      `
  },
  {
    avatar: testimonial2,
    name: "Sr Business Development",
    title: "Baker McKenzie",
    testimonial: `Project Tracker has a simple and easy-to-use interface that lets us find upcoming and ongoing projects. It also covers details of key personnel and companies involved, which is important for business development and analyzing the competition.
      `
  },
  {
    avatar: testimonial3,
    name: "Sales Manager",
    title: "Sulzer Ltd",
    testimonial: `With Blackridge's Global Project Tracker, our sales team can easily and efficiently track upcoming projects, which saves us valuable time and enables us to target potential customers more effectively.
      `
  },
  {
    avatar: testimonial4,
    name: "Head of Analytics & Support",
    title: "NEXE Grupa",
    testimonial: `Using the platform itself was very user-friendly and flexible, but the thing that was key to our successful cooperation was the Blackridge team's availability for all questions and suggestions, as well as joint work on platform adjustments.

    It was a pleasure working with Blackridge!

    We can call our cooperation a partnership, and that is what we highly value.
      `
  }
];

const dataTranslations = {
  en: {
    siteData: siteData$1,
    navData: navConfig$1,
    faqData: faqData$1,
    teamData: teamData$1,
    testimonialData: testimonialData$1
  },
  fr: {
    siteData: siteData,
    navData: navConfig,
    faqData: faqData,
    teamData: teamData,
    testimonialData: testimonialData
  }
};
const textTranslations = {
  en: {
    hero_text: "Amplify your next website",
    hero_description: "An electric template for the next killer SaaS. Multiple pages and sections, blog, i18n, animations, CMS - all ready to go.",
    back_to_all_posts: "Back to all posts",
    updated: "Updated",
    updated_on: "Updated on",
    last_updated_on: "Last Updated on",
    published_on: "Published on",
    related_posts: "Related Posts",
    share_this_post: "Share this post!",
    download_free_sample: "Download FREE Sample Now!"
  },
  fr: {
    hero_text: "Amplifiez votre site Web en français",
    hero_description: "Je ne parle pas vraiment français donc j'utilise Google Translate pour quelques parties de cette démo.",
    back_to_all_posts: "Retour à tous les articles",
    updated: "Mis à jour",
    updated_on: "Mis à jour",
    last_updated_on: "Last Updated on",
    published_on: "Mis à jour",
    related_posts: "Articles Similaires",
    share_this_post: "Partager cette publication!",
    download_free_sample: "Download FREE Sample Now!"
  }
};

function useTranslations(locale) {
  return function t(key) {
    return textTranslations[locale][key] || textTranslations[defaultLocale$1][key];
  };
}
function getTranslatedData(data, locale) {
  return dataTranslations[locale][data] || dataTranslations[defaultLocale$1][data];
}

export { getTranslatedData as a, getCollection as b, testimonial2 as c, testimonial3 as d, testimonial4 as e, getEntries as f, getRelativeLocaleUrl as g, person2 as h, person3 as i, person1 as p, testimonial1 as t, useTranslations as u };
