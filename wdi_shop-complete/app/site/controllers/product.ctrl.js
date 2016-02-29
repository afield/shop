app.controller('ProductCtrl',ProductCtrl);

function ProductCtrl($stateParams,api,productSrv){
	var ctrl = this
	ctrl.productSrv = productSrv;

	ctrl.categories = [
		{label:'Shirts',value:'shirts'},
		{label:'Pants',value:'pants'},
		{label:'Shoes',value:'shoes'},
		{label:'Outerwear',value:'outerwear'},
		{label:'Accessories',value:'accessories'},
	];
	
	ctrl.product = {};
	ctrl.product_update_btn = 'Update Product';
	ctrl.product_delete_btn = 'Remove Product';
	
	if($stateParams.productId != undefined){
		productSrv.getProduct($stateParams.productId)
		.then(function(res){
			console.log(res);
			ctrl.product = res.data.product;
			//TODO #2 set category based on edit form based on 
			//product category
			for(var index in ctrl.categories){
				if(ctrl.product.category == ctrl.categories[index].value){
					ctrl.set_category = ctrl.categories[index];
				}
			}
		})
	}


}

ProductCtrl.prototype.addProduct = function(){
	var ctrl = this;
	//TODO #2
	//create product object, pass to product service
	//Update text in button
	var product = {
		name: ctrl.name,
		image: ctrl.image,
		description: ctrl.description,
		category: ctrl.category,
		quantity: ctrl.quantity,
		price: ctrl.price,
		status:'active'
	}

	ctrl.productSrv.addProduct(product);
}

ProductCtrl.prototype.updateProduct = function(){
	var ctrl = this;
	//TODO #2
	//create product object, pass to product service
	//Update text in button
	ctrl.product_update_btn = 'Updating';
	ctrl.product.category = ctrl.set_category.value;
	ctrl.productSrv.updateProduct(ctrl.product, ctrl.product.id);
}

ProductCtrl.prototype.deleteProduct = function(){
	var ctrl = this;

	//TODO #2
	//remove product, pass to product service
	//update text in button
	ctrl.product_delete_btn = "Removing";
	ctrl.productSrv.deleteProduct(ctrl.product.id);
}



