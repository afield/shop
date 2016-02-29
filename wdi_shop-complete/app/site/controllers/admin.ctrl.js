app.controller('AdminCtrl',AdminCtrl);

function AdminCtrl($scope,$state,productSrv,products){
	var ctrl = this;
	ctrl.$state = $state;
	ctrl.$scope = $scope;
	ctrl.productSrv = productSrv;

	//check if logged in
	if(localStorage.authToken == undefined || localStorage.authToken == null){
		$state.go('auth');
	}
				
	ctrl.products = products;
	if(ctrl.products.length > 0 ){
		ctrl.is_products = true;
	}

	//watch for updates to products object
	$scope.$watch(function(){
    	return productSrv.products;
	}, function (newValue) {
		if(productSrv.products.length > 0){
		    ctrl.products = productSrv.products;
		    ctrl.is_products = true;
		}
	});

}


AdminCtrl.prototype.editProduct = function(product){
	var ctrl = this;
	ctrl.$state.go('admin.edit_product',{productId:product.id});
}

AdminCtrl.prototype.logout = function(){
	var ctrl =this;

	localStorage.removeItem('authToken');
	ctrl.$state.go('auth');

}
