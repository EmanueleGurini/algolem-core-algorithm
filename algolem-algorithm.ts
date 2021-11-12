import { IWorkers, IWorkersPreset, IWorker, IworkersInsideObjCategoriesWithSubCategoriesAndWorkers} from './interfaces/interfaces'

/**
 * Get all categories from workers
 */
const getCategoriesFromWorkers = (phWorkers : Array<IWorkers>) : Array<string> => {

	let categories : Array<string> = [];

	for(let i = 0; i <= phWorkers.length-1; i++){
		let itemCategory = phWorkers[i].category1;
		categories.push(itemCategory);
	}

	return categories
}

/**
 * Get all sub-categories from workers
 */
const getSubCategoriesFromWorkers = (phWorkers : Array<IWorkers>) : Array<string> => {

	let subCategories : Array<string> = [];

	for(let i = 0; i <= phWorkers.length-1; i++){
		let itemCategory = phWorkers[i].category2;
		subCategories.push(itemCategory);
	}

	return subCategories
}


/** 
 * Clean categories names from duplicates  
 */
const getCleanCategories = (categories : Array<string>) : Array<string> => {

	let cleanedCategories : Array<string> = [];

	cleanedCategories = categories.filter((item, pos) => categories.indexOf(item) === pos);

	return cleanedCategories
}


/** 
 * Clean sub-categories names from duplicates  
 */
 const getCleanSubCategories = (subCategories : Array<string>) : Array<string> => {

	let cleanedSubCategories : Array<string> = [];

	cleanedSubCategories = subCategories.filter((item, pos) => subCategories.indexOf(item) === pos);

	return cleanedSubCategories
}


/** 
 * Creates object that contains subCategories and id  
 */
 const fillSubCategoriesInsideSubCategoriesAndWorkersArr = (phCleanedSubCategories :  Array<string>) : {subCategory : string, id : Array<string>}[] => {

	let subCategoriesWithIdWorkersArr : {subCategory : string, id : Array<string>}[] = [];

	for(let i = 0; i <= phCleanedSubCategories.length-1; i++) {
		subCategoriesWithIdWorkersArr.push({subCategory : phCleanedSubCategories[i], id : []})
	}

	return subCategoriesWithIdWorkersArr
}

/** 
 * Push all worker's ids inside respective sub-category object 
 */
 const pushAllWorkersNamesInsideRespectiveSubCategories = (phWorkers : Array<IWorkers>, phIdWorkersWithSubCategories : {subCategory : string, id : Array<string>}[]) : {subCategory : string, id : Array<string>}[] => {
	
	let subCategoriesWithWorkersName : {subCategory : string, id : Array<string>}[] = phIdWorkersWithSubCategories
	
	for(let i = 0; i <= phWorkers.length-1; i++) {
		for(let j = 0; j <= subCategoriesWithWorkersName.length-1; j++) {
			if(phWorkers[i].category2 === subCategoriesWithWorkersName[j].subCategory) {
				subCategoriesWithWorkersName[j].id.push(phWorkers[i].daweWorker_id)	
			}
		}
	}

	return subCategoriesWithWorkersName
}


/** 
 * Assigns worker to a sub-category  
*/
const assignWorkersToEachOwnSubCategories = (phWorkerPreset : Array<IWorkersPreset>, subCategoriesWithWorkersName : {subCategory : string, id : Array<string>}[]) => {
	
	let subCategoriesWithWorkers : {subCategory : string, worker : Array<IWorker> }[] = [];

	for(let i : number = 0; i <= subCategoriesWithWorkersName.length-1; i++){
		subCategoriesWithWorkers.push({subCategory : subCategoriesWithWorkersName[i].subCategory, worker : []})
	}
	
	for(let i : number = 0; i <= subCategoriesWithWorkersName.length-1; i++) {
		for(let j : number = 0; j <= subCategoriesWithWorkersName[i].subCategory.length-1; j++) {
			for(let k : number = 0; k <= phWorkerPreset.length-1; k++) {
				if(subCategoriesWithWorkersName[i].id[j] === phWorkerPreset[k].daweWorker_id) {
					subCategoriesWithWorkers[i].worker.push(phWorkerPreset[k])
				}
			}
		}
	}

	return subCategoriesWithWorkers
}


/** 
 * Creates object that contains categories and sub-categories  
 */
 const createObjWithCategoriesAndSubCategoriesNamesAndFillCategories = (phCleanedCategories :  Array<string>) : {category : string, subCategories : Array<string>}[] => {

	let categoriesWithSubCategories : {category : string, subCategories : Array<string>}[] = []

	for(let i : number = 0; i <= phCleanedCategories.length-1; i++){
		categoriesWithSubCategories.push({category : phCleanedCategories[i], subCategories : []});
	}

	return categoriesWithSubCategories
}



/** 
 * Push all sub-category names inside respective categories
 */
const pushAllSubCategoryNamesInsideRespectiveCategories = (phWorkers : Array<IWorkers>, phSubCategoriesWithCategories : {category : string, subCategories : Array<string>}[]) : {category : string, subCategories : Array<string>}[] => {
	
	let categoriesWithSubCategoryNames : {category : string, subCategories : Array<string>}[] = phSubCategoriesWithCategories;

	for(let i = 0; i <= phWorkers.length-1; i++) {
		for(let j = 0; j <= phSubCategoriesWithCategories.length-1; j++) {
			if(phWorkers[i].category1 === phSubCategoriesWithCategories[j].category) {
				categoriesWithSubCategoryNames[j].subCategories.push(phWorkers[i].category2);	
			}
			
		}
	}

	
	return categoriesWithSubCategoryNames
}


/** 
 * Clean from duplicate all sub-category names inside respective categories
 */
const cleanAllSubCategoryNamesFromDuplicateInsideCategories = (phSubCategoriesWithCategories : {category : string, subCategories : Array<string>}[]) => {

	let categoriesWithSubCategoryNames : {category : string, subCategories : Array<string>}[] = phSubCategoriesWithCategories;

	categoriesWithSubCategoryNames.map(item => item.subCategories = item.subCategories.filter((element, pos) => item.subCategories.indexOf(element) === pos));
	
	return categoriesWithSubCategoryNames
}


/** 
 * Create an object with categories, sub-categories and workers
 */
const createObjCategoriesWithSubCategoriesAndWorkers = (phCategoriesWithSubCategoryNames :  {category : string, subCategories : Array<string>}[]) => {

	let categoriesWithSubCategories : {category : string, subCategories : {subCategory : string, workers : Array<IWorker> }[]}[] = [] 

	for(let i : number = 0; i <= phCategoriesWithSubCategoryNames.length-1; i++) {
		categoriesWithSubCategories.push({ category : phCategoriesWithSubCategoryNames[i].category, subCategories : [] })
	}

	return categoriesWithSubCategories

}


/** 
 * Fill workers inside object with categories, sub-categories and workers
 */
const fillWorkersInsideObjCategoriesWithSubCategoriesAndWorkers = (phCategoriesWithSubCategories : Array<IworkersInsideObjCategoriesWithSubCategoriesAndWorkers>, phCategoriesWithSubCategoryNames : {category : string, subCategories : Array<string>}[], phSubCategoriesWithWorkers : {subCategory : string, worker : Array<IWorker> }[]) => {
	
	let categoriesWithSubCategories : {category : string, subCategories : {subCategory : string, workers : Array<IWorker> }[]}[] = phCategoriesWithSubCategories 
	
	let data : Array<any> = []
	
	for(let i : number = 0; i <= categoriesWithSubCategories.length-1; i++) {
		data.push(categoriesWithSubCategories[i])
		for(let j : number = 0; j <= phCategoriesWithSubCategoryNames[i].subCategories.length-1; j++) {
			if(categoriesWithSubCategories[i].category === phCategoriesWithSubCategoryNames[i].category) {
				categoriesWithSubCategories[i].subCategories.push({subCategory : phCategoriesWithSubCategoryNames[i].subCategories[j], workers : []})
			}

		}
	}

	for(let i : number = 0; i <= categoriesWithSubCategories.length-1; i++) {
		for(let j : number = 0; j <= categoriesWithSubCategories[i].subCategories.length-1; j++) {
			for(let k : number = 0; k <= phSubCategoriesWithWorkers.length-1; k++) {
				for(let t : number = 0; t <= phSubCategoriesWithWorkers[k].worker.length-1; t++) {

					if(categoriesWithSubCategories[i].subCategories[j].subCategory === phSubCategoriesWithWorkers[k].subCategory) {
						categoriesWithSubCategories[i].subCategories[j].workers.push(phSubCategoriesWithWorkers[k].worker[t])
					}

				}
			}
		}
	}

	return categoriesWithSubCategories
}


/** 
 * Start Algolem
 */
export const getWorkersWithCategoriesAndSubCategories = (phWorkers : any, phWorkersPreset : any) => {
	let rawCategories = getCategoriesFromWorkers(phWorkers);
	let rawSubCategories = getSubCategoriesFromWorkers(phWorkers);
	let cleanCategories = getCleanCategories(rawCategories);
	let cleanSubCategories = getCleanSubCategories(rawSubCategories);
	let subCategoriesWithEmptyWorkersName = fillSubCategoriesInsideSubCategoriesAndWorkersArr(cleanSubCategories);
	let subCategoriesWithWorkersNames = pushAllWorkersNamesInsideRespectiveSubCategories(phWorkers, subCategoriesWithEmptyWorkersName);
	let subCategoryWithWorkers = assignWorkersToEachOwnSubCategories(phWorkersPreset, subCategoriesWithWorkersNames);
	let categoriesWithEmptySubCategoriesNames = createObjWithCategoriesAndSubCategoriesNamesAndFillCategories(cleanCategories)
	let categoriesWithSubCategoriesNames = pushAllSubCategoryNamesInsideRespectiveCategories(phWorkers, categoriesWithEmptySubCategoriesNames);
	let cleanobj = cleanAllSubCategoryNamesFromDuplicateInsideCategories(categoriesWithSubCategoriesNames)
	let categoriesWithSubCategoriesAndWorkers = createObjCategoriesWithSubCategoriesAndWorkers(cleanobj)
	let finalObj = fillWorkersInsideObjCategoriesWithSubCategoriesAndWorkers(categoriesWithSubCategoriesAndWorkers, cleanobj, subCategoryWithWorkers)
	return finalObj;
}