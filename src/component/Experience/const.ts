export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  country: string;
  lat: number;
  lon: number;
  period: string;
  description?: string;
  points?: string[];
};

export const experiences: ExperienceItem[] = [
  {
    role: "Student Job",
    company: "Earth and Life Institute, Université catholique de Louvain",
    location: "Louvain-la-Neuve, Belgium",
    country: "Belgium",
    lat: 50.6683,
    lon: 4.6144,
    period: "June 2026 – July 2026",
    points: [
      "Applied a field-boundary delineation model developed during my thesis to generate 2026 agricultural field boundary maps for the Wallonia region",
    ],
  },
  {
    role: "Geospatial AI Internship",
    company: "Estonian Land and Spatial Development Board",
    location: "Tartu, Estonia",
    country: "Estonia",
    lat: 58.378,
    lon: 26.7285,
    period: "May 2025 – Aug 2025",
    points: [
      "Built end-to-end raster preprocessing pipelines in Python to ingest, tile, and normalise national-scale aerial orthophotos, handling large datasets spanning the entire country",
      "Developed a semantic segmentation inference pipeline for rooftop solar panel detection, transforming raw orthophotos into model-ready inputs and converting outputs into geospatial deliverables",
      "Researched existing machine learning approaches to estimate building height from oblique aerial imagery, using window as a geometric cue",
      "Optimised batch raster processing workflows for memory-efficient handling of large-file orthophoto datasets, enabling scalable object detection and segmentation across country-wide imagery",
    ],
  },
  {
    role: "GIS Developer",
    company: "PlantSat",
    location: "Kathmandu, Nepal",
    country: "Nepal",
    lat: 27.7,
    lon: 85.33,
    period: "May 2023 – Aug 2024",
    points: [
      "Designed and maintained PostgreSQL/PostGIS schemas for large-scale agricultural insurance datasets, ensuring data integrity, versioned updates, and operational quality across production environments",
      "Built Python and REST API-based ETL pipelines for spatial data ingestion, validation, standardisation, and delivery of analysis-ready geospatial layers across teams",
      "Developed interactive web application using React/ Next and mapping library OpenLayers and MapLibre GL, translating GIS requirements into clean, usable interfaces for non-technical stakeholders",
      "Worked end-to-end across the full stack (database schema, API, frontend) in an Agile team, collaborating with stakeholders to define and ship features",
    ],
  },
  {
    role: "WebGIS Developer Internship",
    company: "Naxa Pvt. Ltd",
    location: "Kathmandu, Nepal",
    country: "Nepal",
    lat: 27.7,
    lon: 85.33,
    period: "March 2023 – April 2023",
    points: [
      "Built an interactive WebGIS tool to visualise Nepali migrant mobility data, combining spatial analysis with user-facing mapping interfaces",
      "Developed reusable React components for map applications using MapLibre GL and OpenLayers to publish interactive, shareable geospatial visualisations",
      "Applied cartographic and interface design principles to communicate insights to mixed technical and non-technical audiences",
    ],
  },
];
