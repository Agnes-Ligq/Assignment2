import product from '../models/product.model.js'
	import extend from 'lodash/extend.js'
	import errorHandler from './error.controller.js'

	const create = async (req, res) => { 
const products = new product(req.body) 
try {
await products.save()
return res.status(200).json({ 
message: "Product successfully created!"
})
} catch (err) {
	console.error(err);
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}
	//search by Id
	const productByID = async (req, res, next, id) => { 
try {
let products = await product.findById(id) 
if (!products)
return res.status('400').json({ 
error: "Product not found"
})
req.products = products
next()
} catch (err) {
return res.status('400').json({ 
error: "Could not retrieve product"
}) 
}
}
	const read = (req, res) => {
	//req.products.hashed_password = undefined 
	//req.products.salt = undefined
	return res.json(req.products) 
	}

	const list = async (req, res) => { 
		try {
		let productsList = await product.find().select('name category description	quantity price') 
		res.json(productsList)
		} catch (err) {
		return res.status(400).json({
		error: errorHandler.getErrorMessage(err) 
		})
		} 
		}

	const update = async (req, res) => { 
try {
let products = req.products
products= extend(products, req.body) 
products.updated = Date.now() 
await products.save()
//products.hashed_password = undefined 
//products.salt = undefined
res.json(products) 
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}

const remove = async (req, res) => { 
try {
let products = req.products
let deletedProduct = await products.deleteOne() 
deletedProduct.hashed_password = undefined 
deletedProduct.salt = undefined
res.json(deletedProduct) 
} catch (err) {
 /*res.status(400).json({message:"Data not Deleted"})*/
 return res.status(400).json({error: errorHandler.getErrorMessage(err) 
})
} 
}

const removeAll = async (req, res) => {
	try{
		//let products=req.products
		await product.deleteMany({});
		res.status(200).json({ message: 'All products deleted successfully' });
	}catch(err){
		return res.status(400).json({error: errorHandler.getErrorMessage(err) 
		});
	}
}

const searchByName=async(req, res)=>{
	try{
		const keyword=req.query.name
	const products=await product.find({ name: { $regex: keyword, $options: 'i' } });
	//if(!products|| products.length===0){
	//return res.status('400').json({
	//error: "product not found"
	
	//});
//}
res.json(products);
	//res.status(200).json(products);
	//next();
	}catch(err){
	return res.status('400').json({ 
	error: "Could not retrieve product"
	})
	}
	}

	export default { create, productByID, read, list, remove, update, removeAll, searchByName }
