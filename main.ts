import { workers, workersPreset } from './data/data'
import { getWorkersWithCategories } from './multi-element-filter-algorithm'

console.table(getWorkersWithCategories(workers, workersPreset));