import { workers, workersPreset } from './data/data'
import { getWorkersWithCategories } from './multi-element-filter-algorithm'


//getWorkersWithCategories(workers, workersPreset);
console.table(getWorkersWithCategories(workers, workersPreset));