export interface IWorkers {
	daweWorker_id : string,
	shortName : string,
	inputType : string, 
	outputType : string,
	availableOutputStates : string,
	defaultConfig : string,
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