import { IWorkers, IWorkersPreset } from './interfaces/interfaces'
import { TWorker } from './types/types'


let categories : Array<string> = [];

/**
 * Get all categories from workers
 */
const getCategoryFromWorkers = (phWorkers : Array<IWorkers>, categoryArray : Array<string> ) : void => {

	for(let i = 0; i <= phWorkers.length-1; i++){
		let itemCategory = phWorkers[i].category1;
		categoryArray.push(itemCategory);
	}
}

let cleanedCategories : Array<string> = [];

/** 
 * Clean categories names from duplicates  
 */
const cleanCategories = (categories : Array<string>) : void => {
	cleanedCategories = categories.filter((item, pos) => categories.indexOf(item) == pos);
}

let idWorkersWithCategories : {category : string, id : Array<string>}[] = [];

/** 
 * Creates object that contains categories and id  
 */
const fillIdWorkersWithCategories = (phCleanedCategories :  Array<string>, idWorkersWithCategoriesObj : {category : string, id : Array<string>}[]) : void => {
	for(let i = 0; i <= phCleanedCategories.length-1; i++) {
		idWorkersWithCategoriesObj.push({category : phCleanedCategories[i], id : []})
	}
}


/** 
 * Push all worker's ids inside respective category object 
 */
const pushAllWorkersInsideRespectiveCategories = (phWorkers : Array<IWorkers>, phIdWorkersWithCategories : {category : string, id : Array<string>}[]) : void => {
	for(let i = 0; i <= phWorkers.length-1; i++) {
		for(let j = 0; j <= phIdWorkersWithCategories.length-1; j++) {
			if(phWorkers[i].category1 == phIdWorkersWithCategories[j].category) {
				phIdWorkersWithCategories[j].id.push(phWorkers[i].daweWorker_id)	
			}
		}
	}
}


let data : {category : string, worker : TWorker }[] = [];

/** 
 * Assigns worker to a category  
*/
const assignWorkersToEachOwnCategory = (phWorkerPreset : Array<IWorkersPreset>, idWorkersWithCategoriesObj : {category : string, id : Array<string>}[], phData : {category : string, worker : TWorker }[]) : void => {
	for(let i = 0; i <= phWorkerPreset.length-1; i++) {
		for(let j = 0; j <= idWorkersWithCategoriesObj.length-1; j++) {
			for(let k = 0; k <= idWorkersWithCategoriesObj[j].id.length-1; k++) {
				if(phWorkerPreset[i].daweWorker_id === idWorkersWithCategoriesObj[j].id[k]) {
					let obj = {category : idWorkersWithCategoriesObj[j].category, worker : phWorkerPreset[i] }
					phData.push(obj);
				}
			}
		}
	}
}

let workersWithCategories : {category : string, worker : Array<TWorker>, numElement : number}[] = [];

/** 
 * Organize workers and categories 
 */
const organizeWorkersAndCategories = (phCleanedCategories : Array<string>, phWorkersWithCategories : {category : string, worker : Array<TWorker>, numElement : number}[]) : void => {
	for(let i = 0; i <= phCleanedCategories.length-1; i++) {
		phWorkersWithCategories.push({category : phCleanedCategories[i], worker : [], numElement : 0})
	}
}


/** 
 * Fill workers inside them categories
 */
const fillWorkesrWithCategories = (phWorkersWithCategories : {category : string, worker : Array<TWorker>, numElement : number}[], phData : {category : string, worker : TWorker }[]) : void => {
	for(let i = 0; i <= phData.length-1; i++){
		for(let j = 0; j <= phWorkersWithCategories.length-1; j++) {
			if(data[i].category === phWorkersWithCategories[j].category) {
				phWorkersWithCategories[j].worker.push(phData[i].worker);
				phWorkersWithCategories[j].numElement += 1
			} else {
				null;
			}
		}
	}
}


export const getWorkersWithCategories = (phWorkers, phWorkerPreset) : {category : string, worker : Array<TWorker>, numElement : number}[] => {
	getCategoryFromWorkers(phWorkers, categories);
	cleanCategories(categories);
	fillIdWorkersWithCategories(cleanedCategories, idWorkersWithCategories);
	pushAllWorkersInsideRespectiveCategories(phWorkers, idWorkersWithCategories);
	assignWorkersToEachOwnCategory(phWorkerPreset, idWorkersWithCategories, data);
	organizeWorkersAndCategories(cleanedCategories, workersWithCategories);
	fillWorkesrWithCategories(workersWithCategories, data);
	return workersWithCategories;
}

