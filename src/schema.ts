import { makeExecutableSchema } from '@graphql-tools/schema'
import type { GraphQLContext } from './context'

const typeDefinitions = /* GraphQL */ `
  type Query {
    repository: [Repository]
  }
  type Repository {
    identifier: ID
    name: String
    catalog: Catalog
  }
  type Catalog {
    dataset: [Dataset]
  }
  type Dataset {
    accessLevel: String
    accrualPeriodicity: String
    bureauCode: [String]
    conformsTo: String
    contactPoint: VCard
    dataQuality: Boolean
    describedBy: String
    describedByType: String
    description: String
    distribution: [Distribution]
    identifier: ID
    isPartOf: String
    issued: String
    keyword: [String]
    landingPage: String
    language: [String]
    license: String
    modified: String
    primaryITInvestmentUII: String
    programCode: [String]
    publisher: Organization
    spatial: String
    systemOfRecords: String
    temporal: String
    theme: [String]
    title: String
    rights: String
  }
  type Distribution {
    accessURL: String
    conformsTo: String
    description: String
    describedBy: String
    describedByType: String
    downloadURL: String
    format: String
    mediaType: String
    title: String
  }
  type Organization {
    name: String
    subOrganizationOf: Organization
  }
  type VCard {
    contactPoint: String
    hasEmail: String
  }
`

// TYPES
type Repository = {
  identifier: string
  name?: string
  catalog: Catalog[]
}
type Catalog = {
  identifier: string
  name?: string
  dataset: Dataset[]
}
type Dataset = {
  accessLevel?: string
  accrualPeriodicity?: string
  bureauCode?: string[]
  conformsTo?: string
  contactPoint?: VCard
  dataQuality?: boolean
  describedBy?: string
  describedByType?: string
  description?: string
  distribution?: Distribution[]
  identifier: string
  isPartOf?: string
  issued?: string
  keyword?: string[]
  landingPage?: string
  language?: string[]
  license?: string
  modified?: string
  primaryITInvestmentUII?: string
  programCode?: string[]
  publisher?: Organization
  spatial?: string
  systemOfRecords?: string
  temporal?: string
  theme?: string[]
  title?: string
  rights?: string  
}
type Distribution = {
  accessURL?: string
  conformsTo?: string
  description?: string
  describedBy?: string
  describedByType?: string
  downloadURL?: string
  format?: string
  mediaType?: string
  title?: string
}
type Organization = {
  name?: string
  subOrganizationOf?: Organization
}
type VCard = {
  contactPoint?: string
  hasEmail?: string
}

// RESOLVERS
const resolvers = {
  Query: {
    repository: (parent: unknown, args: {}, context: GraphQLContext) => context.dcat.searchCatalogs()
  },
  Repository: {
    identifier: (parent: Repository) => parent.identifier,
    name: (parent: Repository) => parent.name,
    catalog: (parent: Repository) => parent.catalog
  },
  Catalog: {
    dataset: (parent: Catalog) => parent.dataset
  },
  Dataset: {
    accessLevel: (parent: Dataset) => parent.accessLevel,
    accrualPeriodicity: (parent: Dataset) => parent.accrualPeriodicity,
    bureauCode: (parent: Dataset) => parent.bureauCode,
    conformsTo: (parent: Dataset) => parent.conformsTo,
    contactPoint: (parent: Dataset) => parent.contactPoint,
    dataQuality: (parent: Dataset) => parent.dataQuality,
    describedBy: (parent: Dataset) => parent.describedBy,
    describedByType: (parent: Dataset) => parent.describedByType,
    description: (parent: Dataset) => parent.description,
    distribution: (parent: Dataset) => parent.distribution,
    identifier: (parent: Dataset) => parent.identifier,
    isPartOf: (parent: Dataset) => parent.isPartOf,
    issued: (parent: Dataset) => parent.issued,
    keyword: (parent: Dataset) => parent.keyword,
    landingPage: (parent: Dataset) => parent.landingPage,
    language: (parent: Dataset) => parent.language,
    license: (parent: Dataset) => parent.license,
    modified: (parent: Dataset) => parent.modified,
    primaryITInvestmentUII: (parent: Dataset) => parent.primaryITInvestmentUII,
    programCode: (parent: Dataset) => parent.programCode,
    publisher:  (parent: Dataset) => parent.publisher,
    spatial: (parent: Dataset) => parent.spatial,
    systemOfRecords: (parent: Dataset) => parent.systemOfRecords,
    temporal: (parent: Dataset) => parent.temporal,
    theme: (parent: Dataset) => parent.theme,
    title: (parent: Dataset) => parent.title,
    rights: (parent: Dataset) => parent.rights,
  },
  Distribution: {
    accessURL: (parent: Distribution) => parent.accessURL,
    conformsTo:  (parent: Distribution) => parent.conformsTo,
    description:  (parent: Distribution) => parent.description,
    describedBy:  (parent: Distribution) => parent.describedBy,
    describedByType:  (parent: Distribution) => parent.describedByType,
    downloadURL:  (parent: Distribution) => parent.downloadURL,
    format:  (parent: Distribution) => parent.format,
    mediaType:  (parent: Distribution) => parent.mediaType,
    title:  (parent: Distribution) => parent.title
  },
  Organization: {
    name: (parent: Organization) => parent.name,
    subOrganizationOf:  (parent: Organization) => parent.subOrganizationOf
  },
  VCard: {
    contactPoint: (parent: VCard) => parent.contactPoint,
    hasEmail: (parent: VCard) => parent.hasEmail,
    }
}

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions]
})
