import express from 'express'
    import productCtrl from '../controllers/product.controller.js' 
    
    

    const router = express.Router()
    router.route('/api/search')
  .get(productCtrl.searchByName);

    router.route('/api/product') 
    //.get((req, res) => {
	//	console.log('GET /api/product'); // Debug print
	//	productCtrl.list(req, res); // List all products
	//})
    .get(productCtrl.list)
    .post(productCtrl.create)
    .delete(productCtrl.removeAll)
    

    router.route('/api/product/:productId') 
    .get(productCtrl.read)
    .put(productCtrl.update) 
    .delete(productCtrl.remove)

    
router.param('productId', productCtrl.productByID)
router.route('/api/product').post(productCtrl.create) 
router.route('/api/product').get(productCtrl.list)
router.route('api/product').delete(productCtrl.removeAll)

router.route('/api/product/:productId').get(productCtrl.read)
router.route('/api/product/:productId').put(productCtrl.update)
router.route('/api/product/:productId').delete(productCtrl.remove)


    
	export default router
