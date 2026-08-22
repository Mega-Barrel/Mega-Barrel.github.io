import React from 'react';

// Store your blog data here to easily add more later
const blogsData = [
  {
    url: "https://medium.com/data-engineer-things/building-etl-pipeline-using-google-cloud-storage-b2d86422116e",
    title: "Building ETL pipeline using Google Cloud Storage",
    description: "From Kaggle Data Dump to Clean Data: Hands-on Project with Zomato API Data using Python and GCS, you’ll see how raw datasets can be ingested, cleaned, and stored for analysis."
  },
  {
    url: "https://medium.com/gitconnected/everything-about-slowly-changing-dimensions-or-scds-94452a13d3ae",
    title: "Everything about “Slowly Changing Dimensions” or SCD’s",
    description: "While working on any data projects or watching Data-related videos, you must have encountered the term “Slowly Changing Dimensions” or SCDs."
  },
  {
    url: "https://medium.com/p/af05c8a3acea",
    title: "Running dbt transformations on local Postgres database",
    description: "This blog post guides you through the procedure of running dbt transformations on a local Postgres database and transforming data using SQL and Jinja templates. Finally, we will set up a Streamlit server to visualize the data using a plotly graph library."
  },
  {
    url: "https://tinyurl.com/cwf45xu4",
    title: "Extracting Yahoo Finance Stock Data: Building a Simple ETL Script",
    description: "In this blog, we will delve into the workings of Yahoo Finance’s historical data and explore Extract, Transform, Load (ETL) script that powers this pipeline."
  }
];

export default function Blogs() {
  return (
    <section className="section--page">
      <div className="blogs">
        {blogsData.map((blog, index) => (
          <React.Fragment key={index}>
            <div className="blog">
              <a href={blog.url} target="_blank" rel="noreferrer" className="block-link">
                <h3 className="blog--heading">{blog.title}</h3>
                <p>{blog.description}</p>
              </a>
            </div>

            {index < blogsData.length - 1 && <div className="line-break"></div>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}