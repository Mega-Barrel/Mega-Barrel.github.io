import React from 'react';

// Your Tech Stack Data
const techStackDatas = [
  "SQL, Python, PySpark, Airflow, FastAPI, MongoDB",
  "dbt (Data Build Tool), Airbyte, Docker, Google Analytics",
  "A/B Testing, Funnel Analysis, Retention Analysis, Cohort Analysis, Clickstream Analysis",
  "ETL, ELT, Data Warehouse, Data Modelling, RESTful API, Postman",
  "Google Data Proc, BigQuery, Pub/Sub, Cloud Storage, Bigtable, Cloud Composer",
  "Real-Time Bidding (RTB), Programmatic Advertising, Object-Oriented Programming, Clean Code, Design Patterns"
];

const techStackData = [
  "Python, SQL (SparkSQL, PostgreSQL), Object-Oriented Programming (OOP), pytest",
  "Apache Spark (PySpark), Kafka, Apache Airflow, dbt, FastAPI",
  "GCP (BigQuery, Cloud Run, Dataproc, Pub/Sub, GCS, GAR), AWS (S3, Lambda), Docker",
  "Event-Driven Architecture, Data Warehousing, OLAP/OLTP Data Modeling, REST APIs",
  "CI/CD, Automated Testing, Idempotent Processing, Dead Letter Queues (DLQs)",
  "A/B Testing, Clickstream Analysis, Financial Metrics, BI (Streamlit/Tableau/Metabase)",
  "Programmatic Advertising (RTB), Mobile Gaming Analytics, Distributed Systems"
];

// Your Work History Data
const workHistoryData = [
  {
    title: "Software Engineer - Data | Onix | Full Time",
    date: "11/2025 - Present",
    description: "",
    bullets: [
      "Engineered an event-driven processing architecture utilizing Airflow to orchestrate highly scalable Dataflow pipelines, processing millions of records daily with audit controls to support reliable business logic and downstream reporting.",
      "Established robust software engineering standards by implementing comprehensive testing frameworks (pytest) and designing custom CI/CD pipelines, automating deployment workflows to significantly reduce manual developer overhead.",
      "Implementing best practices around monitoring, validation, and reliability for production data workflows."
    ]
  },
  {
    title: "Product Analyst | JungleeGames | Full Time",
    date: "11/2024 - 09/2025",
    description: "",
    bullets: [
      "Winner of Product Hackathon, where our team proposed a new Loyalty Points feature based on user wagering and streak progression.",
      "Built modern data ingestion pipelines using PySpark, SparkSQL, and AWS S3 Tables to extract, transform, and normalize high-volume event data (clickstream funnel, I2R pipelines).",
      "Increased long-term user conversions by <b>10%</b> by designing scalable A/B experimentation models and metrics, enabling the business to rapidly execute skill-based user redirections.",
      "Designed clickstream funnels to map user journeys, identify drop-offs, and prioritize product improvements.",
      "Evaluated RummyCom lobby revamp and trust & safety features via A/B tests, showing measurable conversion, cash games, and retention uplift.",
      "Led a Default Entry Fee recommendation A/B experiment where users were shown tailored table suggestions, improving AWPU by <b>6%</b>, average entry fee by <b>4%</b>, and games played by <b>2%</b>."
    ]
  },
  {
    title: "Data Analyst | Media.net | Full Time",
    date: "07/2022 - 11/2024",
    description: "",
    bullets: [
      "Engineered scalable <b>ETL</b> workflows and <b>OLAP data models</b> for a core programmatic bidding product using SQL and Python, significantly improving the reliability of central financial reporting.",
      "Reduced manual reporting hours by <b>98%</b> by automating daily ETL pipelines to track complex ad revenue metrics, ensuring accurate reconciliation between gross ad revenue and net company profit across BI dashboards.",
      "Created comprehensive BigQuery data models to optimize network-level keyword bidding, leading to a <b>2x</b> increase in campaign launches, a <b>16%</b> increase in keyword utilization, and a <b>45%</b> increase in gross profit.",
      "Conducted a Root Cause Analysis to identify the cause of traffic drop for various supply/demand-side platforms.",
      "Engineered optimized SQL/BigQuery data pipelines and custom Python extractors via the Kibana API to process millions of ad-mapping records, partnering with Product Managers to tune real-time bidding (RTB) parameters and drive a <b>46%</b> increase in ad coverage."
    ]
  },
  {
    title: "Freelance | Software Engineer - Data | Fiverr",
    date: "10/2021 - 07/2022",
    description: "",
    bullets: [
      "Engineered highly available, distributed data pipelines using object-oriented Python and GCP , implementing idempotent processing and Dead Letter Queues <b>(DLQs)</b> to ensure zero data loss for critical business data.",
      "Developed custom Python connectors to integrate 3rd party REST APIs and external data sources into central analytics environments, automating external data requests and ensuring secure data ingestion.",
      "Built 300+ dbt models with automated data validation tests, version-controlled documentation, and reusable Jinja macros for clean, modular code.",
      "Implemented CI/CD pipelines for data transformations, ensuring code quality and reducing deployment times by <b>60%</b>.",
      "Designed data marts for user retention, feature adoption, and marketing impact using SQL, MongoDB, and Python.",
      "Designed and created web scraping data pipelines for publicly available data as per various use-cases."
    ]
  },
  {
    title: "Internship | Software Engineer | CodeWind",
    date: "01/06/2021 - 31/07/2021",
    description: "",
    bullets: [
      "Engineered and deployed scalable RESTful CRUD APIs using Node.js and PostgreSQL to enable efficient data storage, retrieval, and management."
    ]
  },
  {
    title: "Internship | Data Analyst | Georgia Tech University",
    date: "03/2021 - 06/2021",
    description: "",
    bullets: [
      "Built an 'Internal Search Prospect Database' to centralize scouting data and streamline the prospect discovery process for the university sports team.",
      "Developed a web-based sports analytics dashboard tracking player statistics, social sentiment, and competitive standings, delivering insights that contributed to a 10% improvement in player performance."
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
            Hi, I’m Saurabh, a Data Engineer with about 4 years of experience building highly scalable data platforms, event-driven pipelines, and solid cloud infrastructure. I’ve spent most of my career tackling complex data challenges in the mobile gaming and programmatic advertising spaces.
          </p>
          <p id="bio">
            Beyond my daily work, I've participated in 6 data hackathons and <b>won 4 🥇</b> in a row, including an internship at Georgia Tech, where I built an "Internal Search Prospect Database" for their Sports Team. Hackathon Profile <a href="https://devpost.com/saurabhjoshi7869" target="_blank" rel="noreferrer">here</a>.
          </p>
          <p><b>Current:</b> Software Engineer - Data at Onix, Pune</p>
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
                    <li 
                      key={bIndex} 
                      dangerouslySetInnerHTML={{ __html: bullet }} 
                    />
                  ))}
                </ul>
              )}
            </div>
          </React.Fragment>
        ))}
      </section>
    </>
  );
}