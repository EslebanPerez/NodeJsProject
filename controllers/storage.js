const { storageModel } = require('../models')
const { BlobServiceClient } = require('@azure/storage-blob');

const blobService = BlobServiceClient.fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING);

//var azure = require('azure-storage');
//var blobSvc = azure.createBlobService();

const PUBLIC_URL = process.env.PUBLIC_URL;

/*const AZURE_STORAGE_CONNECTION_STRING =
  process.env.AZURE_STORAGE_CONNECTION_STRING;

if (!AZURE_STORAGE_CONNECTION_STRING) {
  throw Error("Azure Storage Connection string not found");
}*/

/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    const data = await storageModel.find({});
    res.send({data})
}
/**
 * Otener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res)=>{}
/**
 *Obtener un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
  
    const { file } = req;
    //console.log(file);
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }

   //const data = await storageModel.create(fileData);
   const containerName = "images";
   const blobName = "quickstart.txt";
   const containerClient = blobService.getContainerClient(containerName);
   const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    const message = "Hello, World!";
    const data = await blockBlobClient.upload(message, message.length);
    
    res.send({data});
  
    
}


/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res)=>{}
/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res)=>{}

module.exports = {getItems, getItem, createItem, updateItem, deleteItem};