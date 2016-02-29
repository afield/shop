app.controller('ShopCtrl',ShopCtrl);

function ShopCtrl($scope,api,productSrv,products){
	var ctrl = this;
	//dependencies
	ctrl.api = api;
	ctrl.productSrv = productSrv;

	//TODO #3 Capture resolved products for view
	ctrl.products = products;
	ctrl.category = '';
	$scope.$watch(function(){
    	return productSrv.products;
	}, function (newValue) {
	    ctrl.products = productSrv.products;
	});
}
