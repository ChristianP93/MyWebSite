---
title: DigitalSales
publishDate: 2024-08-01 00:00:00
img: /assets/digitalsales.jpeg
img_alt: DigitalSales logo
description: |
  Tech Lead Developer. Scalable architecture, NodeJS, Angular2, MongoDB Cluster.
tags:
  - Work Experience
---

During my experience at Digital Sales, I was involved in the comprehensive development of an innovative platform for dropshipping. The goal was to create a system that could generate margin through the buying and selling of goods across different e-commerce platforms.

#### Main Responsibilities

- Analysis and design of server-side architecture
- Development of server applications with NodeJs, ExpressJS, MongoDB Cluster, Redis
- Design of a web application with Angular2
- Analysis and implementation of a MongoDB cluster
- Management of a MongoDB cluster with 20 million products
- R&D activities

The project began with the development of an MVP from scratch, where I had the responsibility of designing the architecture of the entire system.

#### Project Requirements

1. Create a read-optimized and scalable architecture to handle millions of products.
2. Ensure price updates in less than 1 second when opening the product page, including e-commerce integration times.
3. Develop a back office platform for customer service support.
4. Implement a web scraping system for reading and inserting new items across four markets: Italian, French, German, and Spanish.

#### Architecture Evolution

Initially, the architecture consisted of a simple Angular project, NodeJS (monolithic), and MongoDB (single instance). However, the rapid growth of the system required significant scalability.

The first intervention was to divide the backend into:

- 4 web scraper instances, one for each market
- API for the back office
- Dedicated worker for updating products displayed in detail

To address MongoDB's slowdown due to the constant growth in the number of products and incessant scraper activity, we implemented a MongoDB cluster composed of:

- 3 config servers
- 2 shards with 2 replica sets each
- 2 Mongos for query routing

This architecture allowed us to achieve exceptional levels of speed and scalability.

#### Management

In addition to technical development, I managed a team of external resources responsible for maintaining various systems, including scrapers and the back office webapp.

This experience at Digital Sales was extremely stimulating and rewarding. I faced complex technical challenges, managed intensive development, system architecture, releases, and also gained experience in management. The project represented a unique opportunity to expand my technical and managerial skills in a dynamic and innovative environment.
