
import { DcatClient } from './dcat'

const dcat = new DcatClient()

export type GraphQLContext = {
    dcat: DcatClient
} 

export async function createContext(): Promise<GraphQLContext> {
  return { dcat }
}

