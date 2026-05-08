export interface Project {
  id: string;
  title: string;
  desc: string;
  stack: string[];
  image: string;
  category: string;
  github?: string;
  detailedDesc?: string;
  features?: string[];
  role?: string;
}

export const projectsData: Project[] = [
  {
    id: 'llm-council',
    title: 'LLM Council — Multi-Agent AI Debate System',
    desc: 'Built a multi-agent framework (Gemini + Llama) where models debate queries to synthesise verified consensus, reducing hallucination rates.',
    stack: ['Python', 'FastAPI', 'React', 'LLMs'],
    image: '/images/1.jpeg',
    category: 'Machine Learning',
    github: 'https://github.com/Joshuva1272/BeeConsensus',
    role: 'AI Architect & Lead Developer',
    detailedDesc: 'The LLM Council is an experimental multi-agent AI framework designed to mitigate hallucination rates in generative models. By establishing a debate system between disparate models (such as Llama 3.1 and Gemini), the agents scrutinize each other\'s answers on the TruthfulQA dataset until a verified consensus is reached.',
    features: ['Multi-agent debate orchestration', 'TruthfulQA automated evaluation pipeline', 'Hardware acceleration with OpenVINO', 'Interactive consensus visualizer UI']
  },
  {
    id: 'crypto-etl',
    title: 'Automated Crypto ETL Pipeline',
    desc: 'Automated ETL pipeline extracting cryptocurrency data from CoinGecko, transformed with Pandas, and loaded into a database using Apache Airflow & Docker.',
    stack: ['Python', 'Apache Airflow', 'Docker', 'Pandas'],
    image: '/images/2.jpeg',
    category: 'Data Engineering',
    github: 'https://github.com/Joshuva1272/automated-crypto-etl-airflow',
    role: 'Data Engineer',
    detailedDesc: 'A production-grade ETL orchestration project that reliably pulls historical and real-time cryptocurrency data. Designed with idempotency in mind, the pipeline uses Apache Airflow to schedule daily extractions, performs data cleaning and anomaly detection using Pandas, and loads the structured data into a reporting database.',
    features: ['Dockerized Airflow environment', 'Automated data validation routines', 'Idempotent DAG design', 'Data serialization and caching']
  },
  {
    id: 'finance-dashboard',
    title: 'Financial Market Dashboard',
    desc: 'An interactive dashboard application for tracking and analyzing financial market trends, built for real-time insights.',
    stack: ['Python', 'Data Visualization', 'Streamlit'],
    image: '/images/3.jpeg',
    category: 'BI & Analytics',
    github: 'https://github.com/Joshuva1272/financial-market-dashboard',
    role: 'Data Scientist & Developer',
    detailedDesc: 'A real-time financial market tracking dashboard built with Streamlit. It consumes market data APIs to display interactive candlestick charts, moving averages, and volume analysis, allowing users to perform technical analysis on the fly.',
    features: ['Interactive time-series visualizations', 'Real-time API data ingestion', 'Technical indicators (SMA, EMA, RSI)', 'Responsive layout']
  },
  {
    id: 'tumor-detection',
    title: 'Morphogenesis Tumor Detection Model',
    desc: 'A machine learning morphogenesis model trained for advanced tumor detection, leveraging complex pattern recognition in biomedical data.',
    stack: ['Python', 'Deep Learning', 'Machine Learning'],
    image: '/images/4.jpeg',
    category: 'Machine Learning',
    github: 'https://github.com/Joshuva1272/Machine-Learning_Morphogenesis-model-for-Tumor-Detection',
    role: 'Machine Learning Researcher',
    detailedDesc: 'This project explores the intersection of morphogenesis and deep learning to identify early-stage tumor formations. The model relies on CNN architectures trained on annotated biomedical imagery to detect spatial abnormalities indicative of oncological risk.',
    features: ['Convolutional Neural Networks (CNNs)', 'Image segmentation and feature extraction', 'High accuracy precision/recall metrics', 'Medical dataset preprocessing']
  },
  {
    id: 'churn-prediction',
    title: 'Customer Churn Prediction',
    desc: 'A predictive modeling solution developed to identify at-risk customers by analyzing historical user data and engagement patterns.',
    stack: ['Python', 'Scikit-Learn', 'Predictive Analytics'],
    image: '/images/1.jpeg',
    category: 'Machine Learning',
    github: 'https://github.com/Joshuva1272/customer-churn-prediction',
    role: 'Data Analyst',
    detailedDesc: 'Developed to proactively identify customer attrition. By processing behavioral and transactional data through Scikit-Learn models (Random Forest, Gradient Boosting), this tool scores active users by their churn probability to inform targeted retention campaigns.',
    features: ['End-to-end ML pipeline', 'Feature importance analysis', 'Class imbalance handling (SMOTE)', 'Business intelligence recommendations']
  },
  {
    id: 'marketing-analytics',
    title: 'Sales & Marketing Analytics Pipelines',
    desc: 'Data-driven analytics pipelines focusing on campaign performance metrics, customer segmentation, and ROI optimization.',
    stack: ['Python', 'SQL', 'Tableau'],
    image: '/images/2.jpeg',
    category: 'BI & Analytics',
    github: 'https://github.com/Joshuva1272/Marketing-Analytics',
    role: 'BI Specialist',
    detailedDesc: 'A comprehensive suite of SQL scripts and Python notebooks that clean and aggregate multi-channel marketing data. The processed data feeds into Tableau dashboards to visualize customer acquisition costs (CAC) and campaign ROI.',
    features: ['Multi-channel data aggregation', 'Customer segmentation clustering', 'Tableau dashboard integration', 'SQL query optimization']
  },
  {
    id: 'ev-forecasting',
    title: 'EV Market Forecasting Model',
    desc: 'Designed a Python-based forecasting model projecting 15% market share for an EV product launch; presented findings via Power BI to executive stakeholders.',
    stack: ['Python', 'Power BI', 'Predictive Modelling'],
    image: '/images/3.jpeg',
    category: 'BI & Analytics',
    role: 'Data Analyst',
    detailedDesc: 'A specialized time-series forecasting model utilizing ARIMA and Prophet to predict Electric Vehicle adoption rates across multiple regions. The insights were operationalized through an executive Power BI dashboard.',
    features: ['Time-series forecasting (Prophet, ARIMA)', 'Market share projections', 'Executive presentation ready Power BI dashboards']
  },
  {
    id: 'unicef-dashboard',
    title: 'UNICEF Outreach BI Dashboard',
    desc: 'Built a Tableau dashboard tracking KPIs across 7 field sites; improved decision-making speed by 30% by replacing manual reporting with automated data pipelines.',
    stack: ['Tableau', 'Google Sheets API', 'Data Pipeline'],
    image: '/images/4.jpeg',
    category: 'Data Engineering',
    role: 'BI Consultant',
    detailedDesc: 'This project automated a notoriously manual reporting workflow for NGO outreach programs. By integrating Google Sheets API with Python and Tableau, field workers could input data locally, which updated central dashboards instantly without manual compilation.',
    features: ['Automated API data ingestion', 'Tableau geographic mapping', 'KPI tracking and alerting']
  },
  {
    id: 'crm-automation',
    title: 'CRM Automation Suite',
    desc: 'Automated B2B research and CRM hygiene workflows using Python web scraping and ETL scripts, cutting weekly manual research time by 15 hours.',
    stack: ['Python', 'Web Scraping', 'ETL'],
    image: '/images/1.jpeg',
    category: 'Data Engineering',
    role: 'Automation Developer',
    detailedDesc: 'A set of web scraping scripts (BeautifulSoup/Selenium) and Python automation routines that enrich B2B CRM records. It automatically updates lead statuses and company information, drastically reducing manual data entry.',
    features: ['Automated web scraping', 'Data hygiene routines', 'CRM integration']
  }
];
