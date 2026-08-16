import React from 'react';

// Your Tech Stack Data
const techStackData = [
  "Streamlit, Tableau, Metabase",
  "SQL, Python, PySpark, Airflow, FastAPI, MongoDB",
  "dbt (Data Build Tool), Airbyte, Docker, Google Analytics",
  "A/B Testing, Funnel Analysis, Retention Analysis, Cohort Analysis, Clickstream Analysis",
  "ETL, ELT, Data Warehouse, Data Modelling, RESTful API, Postman",
  "Google Data Proc, BigQuery, Pub/Sub, Cloud Storage, Bigtable, Cloud Composer",
  "Real-Time Bidding (RTB), Programmatic Advertising, Object-Oriented Programming, Clean Code, Design Patterns"
];

// Your Work History Data
const workHistoryData = [
  {
    title: "🚀 Full Time | Data Engineer | Onix",
    date: "11/2025 - Present",
    description: "",
    bullets: [
      "Designing scalable ETL/ELT pipelines and metadata-driven ingestion engines on the Google Cloud Platform.",
      "Developed a metadata-driven ingestion engine using Python and Cloud Run to process tens of thousands of daily files."
    ]
  },
  {
    title: "🚀 Full Time | Product Analyst | JungleeGames",
    date: "11/2024 - 09/2025",
    description: "",
    bullets: [
      "Winner of Product Hackathon, where our team proposed new Loyalty Points feature based on user wagering and streak progression.",
      "Designed clickstream funnels to map user journeys, identify drop-offs, and prioritize product improvements.",
      "Ran experiments on skill-based redirection (beginner → tutorial, skilled → add cash), improving long-term conversions by 10%.",
      "Evaluated RummyCom lobby revamp and trust & safety features via A/B tests, showing measurable conversion, cash games and retention uplift."
    ]
  },
  {
    title: "🚀 Full Time | Data Analyst | Media.net",
    date: "07/2022 - 11/2024",
    description: "",
    bullets: [
      "Developed a Python script to extract millions of data using Kibana API, analyzing ad-code / ad-type mappings, which resulted in identifying key optimization areas.",
      "Collaborated with Product Managers to optimize real-time bidding (RTB) parameters, improving ad placement efficiency and increasing coverage by 46%.",
      "Automated campaign performance reporting (Python + Airflow), reducing manual work by 98% and enabling a 2x increase in campaign launches.",
      "Built and optimized product data pipelines in SQL/Big Query, improving reporting reliability for daily usage stats and P&L dashboards."
    ]
  },
  {
    title: "🚀 Freelance | Analytics Engineer | Fiverr",
    date: "10/2021 - 07/2022",
    description: "",
    bullets: [
      "Designed data marts for user retention, feature adoption, and marketing impact using SQL, MongoDB, and Python.",
      "Designed and created web scraping data pipelines for publicly available data as per various use-cases.",
      "Built 300+ dbt models with automated data validation tests, version-controlled documentation, and reusable Jinja macros for clean, modular code.",
      "Implemented CI/CD pipelines for data transformations, ensuring code quality and reducing deployment times by 60%."
    ]
  },
  {
    title: "🚀 Internship | Software Engineer | CodeWind",
    date: "01/06/2021 - 31/07/2021",
    description: "Responsible for developing CURD API using NodeJS integrating with PostgreSQL database.",
    bullets: []
  },
  {
    title: "🚀 Internship | Data Analyst | Georgia Tech University",
    date: "03/2021 - 06/2021",
    description: "",
    bullets: [
      "Developed a Standalone database prospect search engine tool for Georgia Tech University as a Data Analyst Intern.",
      "Implemented a Web Sports Analytics dashboard application to analyze players’ game data and track player sentiments, tweet comparison and overall standings between players, resulting in a 10% increase in player performance."
    ]
  }
];

export default function Home() {
  return (
    <>
      {/* Intro Section */}
      <section id="wrapper--hero" className="section--page">
        <div>
          <h1 id="user-name">Hi, I'm Saurabh Joshi</h1>
          <p id="bio">
            A data professional with 3.4+ years of experience working at the intersection of Product Analytics and Data Engineering. Over the years, I’ve helped gaming and ad-tech companies uncover insights from data, run impactful experiments, and build scalable pipelines that make analytics more reliable and actionable.
          </p>
          <p id="bio">
            Beyond my daily work, I've participated in 6 data hackathons and <b>won 4 🥇</b> in a row, including an internship at Georgia Tech, where I built an "Internal Search Prospect Database" for their Sports Team. Hackathon Profile <a href="https://devpost.com/saurabhjoshi7869" target="_blank" rel="noreferrer">here</a>.
          </p>
          <p><b>Current:</b> Data Engineer at Onix, Pune</p>
          <p><b>Prev:</b> Product Analyst at JungleeGames | Data Analyst at Media.net</p>
          <p id="email">
            📩 <a href="mailto:saurabhjoshi7869@gmail.com">saurabhjoshi7869@gmail.com</a>
          </p>
        </div>
      </section>

      {/* Social Links */}
      <section className="section--page">
        <div id="socials--list">
          <a href="https://www.linkedin.com/in/saurabhJoshi2403" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://twitter.com/Saurabh___Joshi" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://github.com/Mega-Barrel/" target="_blank" rel="noreferrer">Github</a>
          <a href="https://medium.com/@saurabhjoshi7869" target="_blank" rel="noreferrer">Medium</a>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section--page">
        <h2>Tech Stack</h2>
        <div id="wrapper--techstack__items">
          {techStackData.map((tech, index) => (
            <div className="card--techstack" key={index}>
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Work History */}
      <section id="work-history-wrapper" className="section--page">
        <h2>Work History</h2>
        {workHistoryData.map((job, index) => (
          <React.Fragment key={index}>
            <div className="card--work-history">
              <strong>{job.title}</strong>
              <p>{job.date}</p>
              {job.description && <p>{job.description}</p>}
              
              {job.bullets.length > 0 && (
                <ul>
                  {job.bullets.map((bullet, bIndex) => (
                    <li key={bIndex}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
            
            {/* Add a line break for all but the last item */}
            {index < workHistoryData.length - 1 && <div className="line-break"></div>}
          </React.Fragment>
        ))}
      </section>
    </>
  );
}