"use strict";
exports.__esModule = true;
exports.getWorkersWithCategories = void 0;
var categories = [];
/**
 * Get all categories from workers
 */
var getCategoryFromWorkers = function (phWorkers, categoryArray) {
    for (var i = 0; i <= phWorkers.length - 1; i++) {
        var itemCategory = phWorkers[i].category1;
        categoryArray.push(itemCategory);
    }
};
var cleanedCategories = [];
/**
 * Clean categories names from duplicates
 */
var cleanCategories = function (categories) {
    cleanedCategories = categories.filter(function (item, pos) { return categories.indexOf(item) == pos; });
};
var idWorkersWithCategories = [];
/**
 * Creates object that contains categories and id
 */
var fillIdWorkersWithCategories = function (phCleanedCategories, idWorkersWithCategoriesObj) {
    for (var i = 0; i <= phCleanedCategories.length - 1; i++) {
        idWorkersWithCategoriesObj.push({ category: phCleanedCategories[i], id: [] });
    }
};
/**
 * Push all worker's ids inside respective category object
 */
var pushAllWorkersInsideRespectiveCategories = function (phWorkers, phIdWorkersWithCategories) {
    for (var i = 0; i <= phWorkers.length - 1; i++) {
        for (var j = 0; j <= phIdWorkersWithCategories.length - 1; j++) {
            if (phWorkers[i].category1 == phIdWorkersWithCategories[j].category) {
                phIdWorkersWithCategories[j].id.push(phWorkers[i].daweWorker_id);
            }
        }
    }
};
var data = [];
/**
 * Assigns worker to a category
*/
var assignWorkersToEachOwnCategory = function (phWorkerPreset, idWorkersWithCategoriesObj, phData) {
    for (var i = 0; i <= phWorkerPreset.length - 1; i++) {
        for (var j = 0; j <= idWorkersWithCategoriesObj.length - 1; j++) {
            for (var k = 0; k <= idWorkersWithCategoriesObj[j].id.length - 1; k++) {
                if (phWorkerPreset[i].daweWorker_id === idWorkersWithCategoriesObj[j].id[k]) {
                    var obj = { category: idWorkersWithCategoriesObj[j].category, worker: phWorkerPreset[i] };
                    phData.push(obj);
                }
            }
        }
    }
};
var workersWithCategories = [];
/**
 * Organize workers and categories
 */
var organizeWorkersAndCategories = function (phCleanedCategories, phWorkersWithCategories) {
    for (var i = 0; i <= phCleanedCategories.length - 1; i++) {
        phWorkersWithCategories.push({ category: phCleanedCategories[i], worker: [], numElement: 0 });
    }
};
/**
 * Fill workers inside them categories
 */
var fillWorkesrWithCategories = function (phWorkersWithCategories, phData) {
    for (var i = 0; i <= phData.length - 1; i++) {
        for (var j = 0; j <= phWorkersWithCategories.length - 1; j++) {
            if (data[i].category === phWorkersWithCategories[j].category) {
                phWorkersWithCategories[j].worker.push(phData[i].worker);
                phWorkersWithCategories[j].numElement += 1;
            }
            else {
                null;
            }
        }
    }
};
var getWorkersWithCategories = function (phWorkers, phWorkerPreset) {
    getCategoryFromWorkers(phWorkers, categories);
    cleanCategories(categories);
    fillIdWorkersWithCategories(cleanedCategories, idWorkersWithCategories);
    pushAllWorkersInsideRespectiveCategories(phWorkers, idWorkersWithCategories);
    assignWorkersToEachOwnCategory(phWorkerPreset, idWorkersWithCategories, data);
    organizeWorkersAndCategories(cleanedCategories, workersWithCategories);
    fillWorkesrWithCategories(workersWithCategories, data);
    return workersWithCategories;
};
exports.getWorkersWithCategories = getWorkersWithCategories;
