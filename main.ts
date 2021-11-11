import { workers, workersPreset } from './algolem/data'
import { getWorkersWithCategoriesAndSubCategories } from './algolem-algorithm'

console.log(getWorkersWithCategoriesAndSubCategories(workers, workersPreset));