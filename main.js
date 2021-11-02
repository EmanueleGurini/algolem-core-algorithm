"use strict";
exports.__esModule = true;
var data_1 = require("./data/data");
var multi_element_filter_algorithm_1 = require("./multi-element-filter-algorithm");
//getWorkersWithCategories(workers, workersPreset);
console.table(multi_element_filter_algorithm_1.getWorkersWithCategories(data_1.workers, data_1.workersPreset));
