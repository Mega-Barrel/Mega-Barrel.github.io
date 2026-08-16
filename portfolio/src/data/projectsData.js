export const projectsList = [
  {
    // INTERNAL PROJECT (has an 'id')
    id: "airflow_dag", 
    title: "Airflow Docker Compose - Data Pipeline",
    description: "Airflow DAG to execute simple ETL operation, and prints the data.",
    repoLink: "https://github.com/Mega-Barrel/docker-airflow",
    bullets: [
      "Uses PythonOperator to load the python function and executes it as per task dependencies.",
      "Tech Stack: Python, Docker, Apache Airflow"
    ]
  },
  {
    // INTERNAL PROJECT
    id: "data_jersey",
    title: "Data Jersey - Dash",
    description: "A powerful analytical Web-App designed for Football Clubs to report, strategize and analyze gameplay, player stats and performance.",
    repoLink: "https://youtu.be/Jn9ZRRGQiVI",
    bullets: [
      "Tech stack: Python, Dash, Pandas, Twitter API",
      "Created Web App to analyze Avocado Sale data, with custom HTML and CSS.",
      "Implemented Dash Callback, to filter data as per user selection."
    ]
  },
  {
    // EXTERNAL PROJECT (has a direct 'url' instead of an 'id')
    url: "https://github.com/Mega-Barrel/dbt-dimensional-modelling",
    title: "Slack Bot (in development)",
    description: "Slack Bot which consumes incoming events and pushes data to BigQuery and transforms data using dbt (Data Build Tool)."
  }
  // Add the rest of your projects here...
];

export const hackathonsList = [
  {
    url: "https://sql-question-dashboard.streamlit.app/",
    title: "Streamlit Connections Hackathon",
    description: "Configuring data connections can be one of the most frustrating and time-consuming parts of building robust Streamlit apps..."
  }
  // Add hackathons here...
];