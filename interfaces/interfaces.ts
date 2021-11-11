export interface IWorkers {
	daweWorker_id : string,
	shortName : string,
	inputType : string, 
	outputType : string,
	availableOutputStates : string,
	defaultConfig : string | null,
	category1 : string,
	category2 : string,
	backColor : string,
	foreColor : string,
	description : string
}

export interface IWorkersPreset {
	daweWorkerPreset_guid : string,
	daweWorker_id : string,
	config : string,
	presetName : string,
	presetDescription : string
}

export type IWorker = {
	daweWorkerPreset_guid : string,
	daweWorker_id : string,
	config : string,
	presetName : string,
	presetDescription : string
}

export interface IworkersInsideObjCategoriesWithSubCategoriesAndWorkers {
	category : string,
	subCategories : {
		subCategory : string ,
		workers : Array<IWorker>
	}[] 
}