import { IWorkers, IWorkersPreset } from './interfaces/interfaces'
import { TWorker } from './types/types'


/**
 * Get all categories from workers
 */
const getCategoriesFromWorkers = (phWorkers : Array<IWorkers>) => {

	let categories : Array<string> = [];

	for(let i = 0; i <= phWorkers.length-1; i++){
		let itemCategory = phWorkers[i].category1;
		categories.push(itemCategory);
	}

	return categories
}

/** 
 * Clean categories names from duplicates  
 */
const getCleanCategories = (categories : Array<string>) => {

	let cleanedCategories : Array<string> = [];

	cleanedCategories = categories.filter((item, pos) => categories.indexOf(item) == pos);

	return cleanedCategories
}


/** 
 * Creates object that contains categories and id  
 */
const fillIdWorkersWithCategories = (phCleanedCategories :  Array<string>) : {category : string, id : Array<string>}[] => {

	let idWorkersWithCategories : {category : string, id : Array<string>}[] = [];

	for(let i = 0; i <= phCleanedCategories.length-1; i++) {
		idWorkersWithCategories.push({category : phCleanedCategories[i], id : []})
	}

	return idWorkersWithCategories
}

/** 
 * Push all worker's ids inside respective category object 
 */
 const pushAllWorkersInsideRespectiveCategories = (phWorkers : Array<IWorkers>, phIdWorkersWithCategories : {category : string, id : Array<string>}[]) => {
	
	let workersWithCategories : {category : string, id : Array<string>}[] = phIdWorkersWithCategories
	
	for(let i = 0; i <= phWorkers.length-1; i++) {
		for(let j = 0; j <= workersWithCategories.length-1; j++) {
			if(phWorkers[i].category1 == workersWithCategories[j].category) {
				workersWithCategories[j].id.push(phWorkers[i].daweWorker_id)	
			}
		}
	}

	return workersWithCategories
}


/** 
 * Assigns worker to a category  
*/
const assignWorkersToEachOwnCategory = (phWorkerPreset : Array<IWorkersPreset>, idWorkersWithCategoriesObj : {category : string, id : Array<string>}[]) => {
	
	let data : {category : string, worker : TWorker }[] = [];
	
	for(let i = 0; i <= phWorkerPreset.length-1; i++) {
		for(let j = 0; j <= idWorkersWithCategoriesObj.length-1; j++) {
			for(let k = 0; k <= idWorkersWithCategoriesObj[j].id.length-1; k++) {
				if(phWorkerPreset[i].daweWorker_id === idWorkersWithCategoriesObj[j].id[k]) {
					let obj = {category : idWorkersWithCategoriesObj[j].category, worker : phWorkerPreset[i] }
					data.push(obj);
				}
			}
		}
	}

	return data
}


/** 
 * Organize workers and categories 
 */
const organizeWorkersAndCategories = (phCleanedCategories : Array<string>) => {
	
	let workersWithCategories : {category : string, worker : Array<TWorker>, numElement : number}[] = [];
	
	for(let i = 0; i <= phCleanedCategories.length-1; i++) {
		workersWithCategories.push({category : phCleanedCategories[i], worker : [], numElement : 0})
	}

	return workersWithCategories
}


/** 
 * Fill workers inside them categories
 */
 const fillWorkesrWithCategories = (phWorkersWithCategories : {category : string, worker : Array<TWorker>, numElement : number}[], phData : {category : string, worker : TWorker }[]) => {
	for(let i = 0; i <= phData.length-1; i++){
		for(let j = 0; j <= phWorkersWithCategories.length-1; j++) {
			if(phData[i].category === phWorkersWithCategories[j].category) {
				phWorkersWithCategories[j].worker.push(phData[i].worker);
				phWorkersWithCategories[j].numElement += 1
			} else {
				null;
			}
		}
	}

	return phWorkersWithCategories
}

export const getWorkersWithCategories = (phWorkers, phWorkersPreset) => {
	let rawCategories = getCategoriesFromWorkers(phWorkers);
	let cleanCategories = getCleanCategories(rawCategories);
	let idWorkersWithCategories = fillIdWorkersWithCategories(cleanCategories);
	let filledWorkersWithCategories = pushAllWorkersInsideRespectiveCategories(phWorkers, idWorkersWithCategories);
	let data = assignWorkersToEachOwnCategory(phWorkersPreset, filledWorkersWithCategories);
	let organizedWorkersWithCategories = organizeWorkersAndCategories(cleanCategories);
	let workersCollection = fillWorkesrWithCategories(organizedWorkersWithCategories, data);
	
	return workersCollection
}

