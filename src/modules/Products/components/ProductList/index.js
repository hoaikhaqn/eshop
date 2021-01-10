import React from 'react';
import ProductItem from '../../../ProductItem';
const productArray = ['1', '1', '1', '1', '1', '1', '1', '1'];
function ProductList(props) {
    return (
        <div className="list-product">
            <div className="row">
                {
                    productArray.map((el, key) => {
                        return (
                            <div key={key} className="col-12 col-sm-6 col-md-4">
                                <ProductItem />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ProductList;