export const projectsList = [
  // INTERNAL PROJECTS (Has a detail page in your app using 'id')
  {
    id: "8_week_sql_challenge",
    title: "SQL Progress Dashboard",
    description: "Solution to the 8 case studies presented in the #8WeekSQLChallenge. It displays my capacity to address diverse SQL challenges, and showcasing my prowess in problem-solving. Throw yourself into the deep end and attempt the case studies:",
    repoLink: "https://github.com/Mega-Barrel/8-Week-SQL-Challenge",
    bullets: [
      "Case Study #1 - Danny’s Diner - Done ✅",
      "Case Study #2 - Pizza Runner - In Progress 🏃🏻‍♂️",
      "Case Study #3 - Foodie-Fi",
      "Case Study #4 - Data Bank",
      "Case Study #5 - Data Mart",
      "Case Study #6 - Clique Bait",
      "Case Study #7 - Balanced Tree Clothing Co.",
      "Case Study #8 - Fresh Segments"
    ]
  },
  {
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
    id: "airflow_weather_dag",
    title: "Airflow Weather Service - Data Pipeline",
    description: "An Airflow DAG to get the previous day's weather data and saves it in a CSV file.",
    repoLink: "https://github.com/Mega-Barrel/airflow-weather-data/",
    bullets: [
      "Uses PythonOperator to make a call to Weather Data applies transformations and saves it to a local CSV file.",
      "Use a directory mount docker volume, which mounts the current data directory with the docker data directory.",
      "Tech Stack: Python, Docker, Apache Airflow"
    ]
  },
  {
    id: "avocado_analytics_dash",
    title: "Avocado Analytics - Dash",
    description: "Analyze the behaviour of Avocado prices and the numbers of Avocados sold in the US between 2015 to 2018 Year.",
    repoLink: "https://github.com/Mega-Barrel/avocado_analysis_dashboard",
    bullets: [
      "Tech stack: Python, Dash, Pandas library.",
      "Created Web App to analyze Avocado Sale data, with custom HTML and CSS.",
      "Implemented Dash Callback, to filter data as per user selection."
    ]
  },
  {
    id: "avocado_analytics_tableau",
    title: "Avocado Analytics - Tableau",
    description: "Analyze the behaviour of Avocado prices and the numbers of Avocados sold in the US 2017 Year. Build using Tableau",
    liveLink: "https://public.tableau.com/views/Avocado_Analytics/AvocadoAnalytics?:language=en-US&:display_count=n&:origin=viz_share_link",
    bullets: [
      "Analyzing Avocado data by Type and Region sales",
      "Analyzed Avocado sales, by Bag Quantity (Large bag quantity, and Small bag quantity), and Daily Avocado Sales Volume."
    ]
  },
  {
    id: "csv_to_mysql",
    title: "CSV to MySQL - Data Pipeline",
    description: "A ETL script to read CSV file and store it to a MySQL database.",
    repoLink: "https://github.com/Mega-Barrel/CSV-TO-MySQL/",
    bullets: [
      "Tech Stack: Python, MySQL, CSV, and, pymysql packages.",
      "Reads CSV file using python CSV library, and insert data to MySQL database"
    ]
  },
  {
    id: "data_jersey",
    title: "Data Jersey - Dash",
    description: "A powerful analytical Web-App designed for Football Clubs to report, strategize and analyze gameplay, player stats and performance.",
    liveLink: "https://youtu.be/Jn9ZRRGQiVI",
    bullets: [
      "Tech stack: Python, Dash, Pandas, Twitter API",
      "Created Web App to analyze Avocado Sale data, with custom HTML and CSS.",
      "Implemented Dash Callback, to filter data as per user selection.",
      "Features: Player Live Stats Reporting, Match Simulation and Tactic Analysis, Game Play Video Analysis, Social Media Sentiment Reports and Live Feed.",
      "Resources and References: The Premier League #FPL API for Players Data, Plotly Dash App Gallery, Metrica Sports, OpenCV and #Mediapipe, Twitter API."
    ]
  },
  {
    id: "docker_weather_api",
    title: "Weather API - Data Pipeline",
    description: "A weather service to get the live (every 10 minutes) weather data for Mumbai city.",
    repoLink: "https://github.com/Mega-Barrel/docker-weather-api",
    bullets: [
      "This a ETL project which consumes weather api data and stores the data to a PostgreSQL database.",
      "Uses cronjob to execute the app/main.py script every 10 minutes.",
      "Tech Stack: Python, PostgreSQL, Shell, Docker, docker-compose"
    ]
  },
  {
    id: "expense_tracker_app",
    title: "Expense Tracker App - Streamlit",
    description: "A Streamlit dashboard to plot monthly users' expense, and perform Create, Update, and Read operations.",
    repoLink: "https://github.com/Mega-Barrel/expense-tracker",
    liveLink: "https://expense-tracker-app.streamlit.app",
    bullets: [
      "Uses Deta collections to store data in a No-SQL database.",
      "Uses Streamlit streamlit-option-menu library to create a navigation menu.",
      "Let users enter income/expense records for the year and month selected.",
      "Visualizes user's records (filtered by Username and Period) using Sankey charts.",
      "Tech Stack: Python, Streamlit, Deta.sh"
    ]
  },
  {
    id: "finance_dashboard",
    title: "Finance dashboard - Streamlit",
    description: "Finance Dashboard utilizes the Yahoo Finance API and Streamlit to create a user-friendly and interactive financial analysis tool. With real-time market data and customizable visualizations, this project empowers users to track stocks, and analyze trends.",
    repoLink: "https://github.com/Mega-Barrel/finance-dashboard",
    liveLink: "https://yfinance-dashboard.streamlit.app/",
    bullets: [
      "The Dashboard, lets users select Ticker name from dropdown, along with start and end date filters.",
      "Plots Daily Stock data into 2 graphs, a. Candle Stick and b. Adj Close data.",
      "Pricing Data: Contains Basic price movements, along with Annual Returns, Annual Standard Deviation, and, Risk Adj Return.",
      "Fundamental Data: Contains Yearly Balance Sheet, Income Statement, and Cashflow Statement.",
      "Top 10 News: Show Top 10 news for the Ticker selected."
    ]
  },
  {
    id: "init-kafka",
    title: "Kafka Project - Kafka",
    description: "Kafka application to produce sample data, with single consumer to read the messages.",
    repoLink: "https://github.com/Mega-Barrel/init-kafka-project",
    bullets: [
      "Kafka application build using zookeeper and kafka image, with 1 replication and 1 topic.",
      "Producer: Produces data, picks random value from 1 to 10, and decides the priority of the message. If value is above 5, it is categorized as High status.",
      "Consumer: Consumer messages produced by Producer on topic test_topic."
    ]
  },
  {
    id: "marketing_dashboard",
    title: "Marketing dashboard - Streamlit",
    description: "Streamlit Campaign Dashboard is an intuitive and customizable tool to analyze and monitor campaign performance. With its intuitive interface and customizable features, it provides a seamless experience for tracking key metrics and making data-driven decisions.",
    repoLink: "https://github.com/Mega-Barrel/streamlit-campaign-dashboard/",
    liveLink: "https://ads-campaign-dashboard.streamlit.app/",
    bullets: [
      "Analyzes dummy Campaign data from year 2020 to year 2022, across various Ads platforms.",
      "It lets uses select Campaign Managers/ Platforms, and Date Range to view the filterd data.",
      "Displays Total Impressions, Total Clicks, CTR, GP, and Avg RPC metrics.",
      "The graphs are broken down to Device/Browser visits, along with Monthly Impressions and Paid Vs Page clicks."
    ]
  },
  {
    id: "mini_projects",
    title: "mini-projects - python",
    description: "This contains bunch of mini projects written in python.",
    repoLink: "https://github.com/Mega-Barrel/mini-projects",
    bullets: [
      "1. Dice roll: The will randomly choose a number between 1 and 6. The program will print what that number is. It should then ask you if you’d like to roll again.",
      "2. Guess the number: User will need to guess any number between the range, If the number is equal to randomly generated number it will print 'You guessed the number correctly'.",
      "3. Mad libs generator: The program will take user input with noun, pronoun, numbers etc. It will then concatenate these strings with the pre-defined template.",
      "4. Rock Paper Scissor: This game will be played by computer and user.",
      "5. Anagram Checker: This project will take 2 input from user. It will check if both of the string are equal using sorted() method. If both are same then it is anagram, else not a anagram."
    ]
  },
  {
    id: "notion_streamlit_elt_pipeline",
    title: "Notion + Streamlit ELT Pipeline - Data Pipeline",
    description: "ELT flow to read data from Notion Page using API and push it to Database.",
    repoLink: "https://github.com/Mega-Barrel/sql-question-tracker",
    liveLink: "https://sql-question-dashboard.streamlit.app/",
    bullets: [
      "Uses max_date filter to get the last date run, and extract the data after the max_date.",
      "Created replica of the new data, to a SQLite database, whenever a change is detected in Main database."
    ]
  },
  {
    id: "open_source_de_salaries",
    title: "Open Source Contributions - Data Engineering Salaries",
    description: "Each quarter we run a salary survey in our community to help increase transparency around salary and compensation for Data Engineering. This application is for exploring and analyzing the salary data.",
    repoLink: "https://github.com/data-engineering-community/data-engineering-salaries",
    liveLink: "https://dataengineering.wiki/Community/Salaries",
    bullets: [
      "Contributed to project repository, Worked on Enhancement: Auto-refresh with Docker & Streamlit Issue using docker-compose and got the PR merged!",
      "Tech Stack: Python, Streamlit, docker-compose"
    ]
  },
  {
    id: "sql_progress_dashboard",
    title: "SQL Daily Progress Dashboard - Streamlit",
    description: "Streamlit dashboard to keep track of my SQL Questions Solved Journey.",
    repoLink: "https://github.com/Mega-Barrel/sql-question-dashboard",
    liveLink: "https://sql-question-dashboard.streamlit.app/",
    bullets: [
      "The app displays my daily progress in solving SQL problems from various platforms such as LeetCode, StrataScratch, and more.",
      "The backend of the app establishes a connection to the Notion API. Notion API is a powerful tool that enables seamless integration of Notion.",
      "The code is manually run daily to receive and process new data from the Notion API, subsequently saving it to a database."
    ]
  },
  {
    id: "tableau_sql",
    title: "Tableau SQL - Tableau",
    description: "Tableau dashboard which analyzes employee salary by departments. The Data is exported to a csv file using SQL. Part of a Udemy Course Assignment.",
    liveLink: "https://public.tableau.com/views/Tableau_SQL_16369819386410/Dashboard?:language=en-US&:display_count=n&:origin=viz_share_link",
    bullets: [
      "Used SQL to extract data to a CSV file, and Imported files to tableau",
      "Analyzed Employee Salary data by Department Names, Number of managers each department, and Male vs Female Comparison by Salary."
    ]
  },
  {
    id: "thomann_web_scraper",
    title: "Thomann web scrapper - Data Pipeline",
    description: "A ETL script that extracts product data and reviews from specified Thomann website URLs, and stores this information in a database.",
    repoLink: "https://github.com/Mega-Barrel/thomann-web-scrapper",
    bullets: [
      "Tech stack: Python, PostgreSQL DB, selectolax parser and the requests library.",
      "Following data is extracted: product_id, product_manufacturer, product_title, product_price product_short_description, product_in_stock."
    ]
  },
  {
    id: "ufo_analytics",
    title: "UFO Analytics - Tableau",
    description: "A UFO Analytics dashboard, to analyze UFO sightings data from 1998 to 2014. Part of a Udemy Course Assignment.",
    liveLink: "https://public.tableau.com/views/UFO_Dashboard_16662684445720/UFOsighting?:language=en-US&:display_count=n&:origin=viz_share_link",
    bullets: [
      "Created YoY UFO sightings graph, along with Shape analysis of UFO",
      "Implemented Z filter drilldown, where user can analyze more granualer data interacting with plots."
    ]
  },
  {
    id: "weather_dashboard",
    title: "Streamlit Weather Dashboard - Streamlit",
    description: "Weather Data dashboard which displays current temperature (C), wind speed, and wind direction. Made using openweather API and Streamlit.",
    repoLink: "https://github.com/Mega-Barrel/streamlit-weather-dashboard",
    liveLink: "https://weather-updates.streamlit.app/",
    bullets: [
      "Uses weather API to get current weather for the location selected and 3-day forecast data.",
      "Displays raw hourly data in a Streamlit DataFrame.",
      "Still in development, so most of the locations are not mentioned.",
      "Tech Stack: Python, Streamlit, weatherapi, Plotly"
    ]
  },
  {
    id: "yahoo_finance_etl_pipeline",
    title: "Yahoo Finance ETL Pipeline - Data Pipeline",
    description: "The Yahoo Finance ETL script extracts financial data from Yahoo Finance's API, transforms and cleans the data, and loads it into an PostgreSQL database.",
    repoLink: "https://github.com/Mega-Barrel/yfin-etl",
    liveLink: "https://medium.com/@saurabhjoshi7869/extracting-yahoo-finance-stock-data-building-a-simple-etl-script-82bf645cff3c",
    bullets: [
      "The project’s tech stack includes Python, SQLite, Pandas, and the requests library.",
      "The Logger module is also used to log all background processes running.",
      "The time_it function is a Python decorator that is applied to functions to log the total time taken for their execution."
    ]
  },

  // EXTERNAL PROJECTS (Directly links out to GitHub/External URLs)
  {
    url: "https://github.com/Mega-Barrel/dbt-dimensional-modelling",
    title: "Slack Bot (in development)",
    description: "Slack Bot which consumes incoming events and pushes data to BigQuery and transforms data using dbt (Data Build Tool)."
  },
  {
    url: "https://github.com/Mega-Barrel/dbt-dimensional-modelling",
    title: "DBT Dimensional Modelling",
    description: "DBT adventureworks model using STAR Schema and OBT Mart."
  },
  {
    url: "https://github.com/Mega-Barrel/dbt_bq_data_pipeline",
    title: "DBT BigQuery Pipeline",
    description: "Online Retail data set contains all the transactions occurring for a UK-based and registered, non-store online retail between 01/12/2009 and 09/12/2011. The company mainly sells unique all-occasion gift-ware. Many customers of the company are wholesalers."
  },
  {
    url: "https://github.com/Mega-Barrel/python-redis",
    title: "DBT MRR Model",
    description: "dbt Monthly Recurring Revenue (MRR) using One Big Table (OBT) approach."
  },
  {
    url: "https://github.com/Mega-Barrel/python-redis",
    title: "Introduction to Redis",
    description: "Sample project using Redis with python."
  },
  {
    url: "https://github.com/Mega-Barrel/fast-api-sample-project",
    title: "Introduction to FastAPI",
    description: "Sample project using FAST API with python to build custom API endpoints and postman to test it."
  },
  {
    url: "https://github.com/Mega-Barrel/dbt_udemy_course/",
    title: "DBT udemy course",
    description: "DBT udemy course - 2024 Mastering dbt (Data Build Tool) - From Beginner to Pro."
  },
  {
    url: "https://github.com/Mega-Barrel/dbt-log-analytics",
    title: "DBT Log Analytics",
    description: "DBT data pipeline to inject raw log data to BigQuery table using kafka."
  },
  {
    url: "https://github.com/Mega-Barrel/dbt-covid-streamlit",
    title: "DBT Covid Dashboard",
    description: "DBT project running on a local PostgreSQL database connected to a Streamlit dashboard."
  },
  {
    url: "https://github.com/Mega-Barrel/dbt-jaffel-shop",
    title: "DBT Jaffel Shop",
    description: "DBT jaffel shop connected to snowflake database."
  },
  {
    url: "https://github.com/Mega-Barrel/kafka-events-processing",
    title: "Kafka Event Processing",
    description: "kafka application running on custom Docker alpine image, to listen to dummy app event data."
  },
  {
    url: "https://github.com/Mega-Barrel/dbt-init",
    title: "DBT (Data Build Tool) init",
    description: "DBT bootcamp course setup files."
  },
  {
    url: "https://github.com/Mega-Barrel/big-query-python-client/",
    title: "Big Query REST API Client",
    description: "Python REST client to connect with BigQuery API and perform CURD Operations.",
    bullets: [
      "Create database with custom schema.",
      "Create database from CSV/Excel file."
    ]
  }
];

export const hackathonsList = [
  {
    url: "https://sql-question-dashboard.streamlit.app/",
    title: "Streamlit Connections Hackathon",
    description: "Configuring data connections can be one of the most frustrating and time-consuming parts of building robust Streamlit apps. You have to locate and install external packages, determine the best way to securely manage your credentials, and figure out how to retrieve the data you need in the desired format."
  },
  {
    url: "https://devpost.com/software/batlytics",
    title: "Batlytics",
    description: "Current college baseball analytics tools are far behind the professional ones, offering a large room for improvement, so we developed analytical tools aiming to improve college baseball performance."
  },
  {
    url: "https://devpost.com/software/predicting-potentiail-yellow-jackets",
    title: "Predicting Potential Yellow Jackets",
    description: "The shift in the focus of student athlete recruitment from a performance-basis to a character-basis for a cultural fit led to a question of leveraging SNS feeds in student athlete recruitment."
  },
  {
    url: "https://devpost.com/software/stonkviz",
    title: "#12 StonkViz",
    description: "Creating new investment insights by visualizing trading attitudes on /r/WallStreetBets."
  },
  {
    url: "https://devpost.com/software/gradebook-homb14",
    title: "Gradebook",
    description: "An analytics tool for teachers designed to recommend action plans using Machine Learning."
  },
  {
    url: "https://devpost.com/software/recuse",
    title: "Syrecuse",
    description: "Many small businesses have been negatively impacted by Covid 19 and are struggling to survive. We created a centralized location where small business owners can go to learn about resources available."
  },
  {
    url: "https://shorturl.at/lxEJl",
    title: "HackerEarth Machine Learning Challenge: Carnival Wars!",
    description: "You plan to unleash the inner Machine Learning expert in you and build a sophisticated Machine Learning model that predicts selling prices of products based on the mentioned factors."
  }
];