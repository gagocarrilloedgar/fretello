import { reportMongoRepository } from './infrastructure/db/mongose'

import { reportServices } from './application'

export default reportServices(reportMongoRepository())
