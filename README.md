# GraphQL for DCAT

This proof of concept research project aims at exploring how GraphQL can be used to provide a standard API for querying data catalogs based on the W3C DCAT standard and its variations.

## Rationale 

- The DCAT standard has been well adopted around the globe for documentation data catalogs
- As it is often the case for standards, little guidance is provided in terms of exposing web services for accessing and managing the underlying metadata
- GraphQL provides a natural way for navigating hierarchical data
- Bringing both of them together seem to be a easy way to solve this API issue
- Note that the same is true for many standards, and we intend to extend this approach to other specifications

## Approach

- The current implementation is minimalistic
- We're using [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server) as as server and have translated the DCAT specification into a GraphQL schema
- No filtering parameters are present in the schema definition
- Interestingly DCAT does not provide information on the repository hosting the catalog. We added such layer in the schema to be able to host and query across multiple catalogs
- There is currently no back end database and the content is loaded in memory from files
- Content has been harvested  from the [Project Open Data Dashboard](https://dashboard.data.gov/) 
- For prototyping purposes, we are actually using the [DCAT-US](https://resources.data.gov/resources/dcat-us/) flavour, which adds a few extra properties to the base standard

## Next Steps

- Add filtering and other querying parameters to the schema definition and implement
- Add a backend database to enhance querying capabilities and scalability
- Reproduce experiment with other standards, in particular [DDI Codebook](https://ddialliance.org/Specification/DDI-Codebook/2.5/).

## What is DCAT?
The W3C [Data Catalog Vocabulary (DCAT)](https://www.w3.org/TR/vocab-dcat-2/) is a model for describing catalogs and commonly used for datasets. Various flavors of DCAT have emerged over time, notably the [DCAT-AP](https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe) used for data portals in Europe, and [DCAT-US](https://resources.data.gov/resources/dcat-us/) ) used by U.S. federal agencies. DCAT is used by numerous data custodians around the globe, and natively supported by data cataloguing platforms such as [CKAN](https://extensions.ckan.org/extension/dcat/). 

## What is GraphQL
[GraphQL](https://graphql.org) is an open-source data query and manipulation language for API.  GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015. It is rapidly growing in popularity and is backed by a very dynamic community. Many open source and commercial platform are available, [The Guild](https://the-guild.dev/) being a good example of such ecosystemt. 