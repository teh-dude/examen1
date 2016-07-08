angular.module('products.controllers', [])

.controller('listController', function($location, $products){
	var list = this;

	$products.list().then(function(products){
		list.products = products;
	}, function(error){
		console.log(error);
		alert(error.message);
	});	
})

.controller('addController', function($products){
	var add = this;

	add.save = function(){
		$products.add(add.product).then(function(){
			alert('Success!');
		}, function(error){
			alert('Error');
			console.log(error);
		});
	};
})

.controller('editController', function($routeParams, $products){
	var edit = this;
	var id = $routeParams.id;

	edit.product = $products.get(id);

	edit.save = function(){
		$products.edit(edit.product).then(function(){
			alert('Success!');
		}, function(error){
			alert('Error');
			console.log(error);
		});
	};
});