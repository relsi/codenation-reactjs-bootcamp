const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getShoppingCart(ids, productsList) {

	let arr_ids = ids;
	let fill_products = productsList;

	const list_prod = fill_products.filter((product) => {
		return arr_ids.includes(product.id)
	});

	let categories = list_prod.map((product) => {
		return product.category;	
	});

	const filterCategory = categories.filter((value, index, arr) => { 
		return arr.indexOf(value) == index;
	});
	const categoryType = promotions[filterCategory.length - 1];
	
	const products = list_prod.map((product) => {
		return {	
		  	name: product.name,
	  		category: product.category,
		}
	});

	const sumRegularPrice = list_prod.reduce((sum, product) =>{ 
		return sum + product.regularPrice
	}, 0); 
	  
	const sumTotalPrice = list_prod.reduce((sum, product) => {
		let sumPromoPrice = product.promotions.find((promo) => {
        	return promo.looks.includes(categoryType);
		});
		
		if (!sumPromoPrice) {
        	sumPromoPrice = { price: product.regularPrice };
      	}

		  return sum + sumPromoPrice.price;
		  
    }, 0);
	
	const discountValue = sumRegularPrice - sumTotalPrice;
  	const discountPercent = (discountValue / sumRegularPrice) * 100;

	const cart = {
		products: products,
		promotion: categoryType,
		totalPrice: sumTotalPrice.toFixed(2),
		discountValue: discountValue.toFixed(2),
		discount: `${discountPercent.toFixed(2)}%`
	  };
	
	return cart;
}

module.exports = { getShoppingCart };