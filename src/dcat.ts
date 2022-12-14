import blsCatalog from '../data/dcat-us/bls.gov.json'
import dojCatalog from '../data/dcat-us/doj.gov.json'
import nsfCatalog from '../data/dcat-us/nsf.gov.json'

const catalogs = [
    {"identifier":"bls.gov", "name": "BLS Data Catalog", "catalog": blsCatalog},
    {"identifier":"doj.gov", "name": "DOJ Data Catalog", "catalog": dojCatalog},
    {"identifier":"nsf.gov", "name": "NSF Data Catalog", "catalog": nsfCatalog},
]
const testCatalogs = [
    {"identifier":"bls.gov", "name": "BLS Data Catalog", "catalog": blsCatalog}
]

export class DcatClient {
    searchCatalogs() {
      return catalogs;
    }
    getCatalog(id:string) {
        return {};
      }
}