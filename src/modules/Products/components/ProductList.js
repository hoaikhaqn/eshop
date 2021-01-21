import React from 'react';
import ProductItem from '../../ProductItem';

function ProductList(props) {
    return (
        <div className="list-product">
            <div className="row">
                {
                    props.list && props.list.map((product, key) => {
                        return (
                            <div key={key} className="col-12 col-sm-6  col-md-4">
                                <ProductItem data={product}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ProductList;