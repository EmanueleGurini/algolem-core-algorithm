import { IWorkers, IWorkersPreset } from '../interfaces/interfaces'

export const workers : Array<IWorkers> = [
	{daweWorker_id: "assign-file-collection-w", shortName: "Assign file to collection", inputType: "fileId", outputType: "fileId", availableOutputStates: "ok,error", defaultConfig:"{'collectionId':0}", category1: "File", category2: "File misc", backColor: "#DCDCDC", foreColor: "#000000", description: "Assign a file to a given collection"},
	{daweWorker_id:"aws-copy-w", shortName:"AWS copy", inputType:"fileId", outputType:"fileId", availableOutputStates:"ok,error", defaultConfig: "{'destLocationId':0}", category1: "File", category2: "File misc", backColor:"#DCDCDC", foreColor:"#000000", description:"Copy an object from one bucket to another"},
	{daweWorker_id:"aws-download-w", shortName:"AWS download", inputType:"fileId", outputType:"fileId", availableOutputStates:"ok,error", defaultConfig: null, category1:"File", category2: "File misc", backColor:"#DCDCDC", foreColor:"#000000", description:"Download an object"},
	{daweWorker_id:"aws-upload-w", shortName:"AWS upload", inputType:"fileId", outputType:"fileId", availableOutputStates:"ok,error", defaultConfig:"{'destLocationId':0}", category1:"File", category2: "File misc", backColor:"#DCDCDC", foreColor:"#000000", description:"Upload a file to an S3 instance"},
	{daweWorker_id:"delete-asset-w", shortName:"AWS upload", inputType:"fileId", outputType:"fileId", availableOutputStates:"ok,error", defaultConfig:"{'destLocationId':0}", category1:"Asset", category2: "Asset deletion", backColor:"#DCDCDC", foreColor:"#000000", description:"Upload a file to an S3 instance"},
	{daweWorker_id:"ep-rendering-w", shortName:"Edit project rendering", inputType:"fileId", outputType:"fileId", availableOutputStates:"ok,error", defaultConfig:"{'destLocationId':0}", category1:"File", category2: "Transcoding", backColor:"#DCDCDC", foreColor:"#000000", description:"Upload a file to an S3 instance"}

]

export const workersPreset : Array<IWorkersPreset> = [
	{daweWorkerPreset_guid : "008513bb-b24e-4bb2-8c53-172d86f71a67", daweWorker_id : "assign-file-collection-w", config : "{'collectionId':0}", presetName : "Assign file to collection", presetDescription : "Assign a file to a given collection"},
	{daweWorkerPreset_guid : "008513bb-b24e-4bb2-8c53-172d86f71a67", daweWorker_id : "aws-copy-w", config : "{'collectionId':0}", presetName : "Assign file to collection", presetDescription : "Assign a file to a given collection"},
	{daweWorkerPreset_guid : "008513bb-b24e-4bb2-8c53-172d86f71a67", daweWorker_id : "aws-download-w", config : "{'collectionId':0}", presetName : "Assign file to collection", presetDescription : "Assign a file to a given collection"},
	{daweWorkerPreset_guid : "008513bb-b24e-4bb2-8c53-172d86f71a67", daweWorker_id : "aws-copy-w", config : "{'collectionId':0}", presetName : "Assign file to collection", presetDescription : "Assign a file to a given collection"},
	{daweWorkerPreset_guid : "008513bb-b24e-4bb2-8c53-172d86f71a67", daweWorker_id : "aws-upload-w", config : "{'collectionId':0}", presetName : "Assign file to collection", presetDescription : "Assign a file to a given collection"},
	{daweWorkerPreset_guid : "008513bb-b24e-4bb2-8c53-172d86f71a67", daweWorker_id : "delete-asset-w", config : "{'collectionId':0}", presetName : "Assign file to collection", presetDescription : "Assign a file to a given collection"},
	{daweWorkerPreset_guid : "008513bb-b24e-4bb2-8c53-172d86f71a67", daweWorker_id : "ep-rendering-w", config : "{'collectionId':0}", presetName : "Assign file to collection", presetDescription : "Assign a file to a given collection"}

]