import { workers, workersPreset } from './algolem/data'
import { getWorkersWithCategoriesAndSubCategories } from './multi-element-filter-algorithm'

//console.table(getWorkersWithCategories(workers, workersPreset));
console.log(getWorkersWithCategoriesAndSubCategories(workers, workersPreset));