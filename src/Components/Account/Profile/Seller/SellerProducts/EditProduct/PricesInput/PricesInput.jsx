import { useEffect, useState } from "react";

function PricesInput(props) {

    const [productDataList, setProductDataList] = useState([
        { price: '', quantityRange: { min: '', max: '' } },
    ]);

    useEffect(() => {
        props.priceData(productDataList)
    }, [productDataList])

    const productMinQuantityChangeHandler = (event, index) => {
        const { value } = event.target;
        setProductDataList((prevList) => {
            const newList = [...prevList];
            newList[index].quantityRange.min = Number(value); 
            return newList;
        });
    };

    const productMaxQuantityChangeHandler = (event, index) => {
        const { value } = event.target;
        setProductDataList((prevList) => {
            const newList = [...prevList];
            newList[index].quantityRange.max = Number(value); 
            return newList;
        });
    };

    const productPriceChangeHandler = (event, index) => {
        const { value } = event.target;
        setProductDataList((prevList) => {
            const newList = [...prevList];
            newList[index].price = Number(value);
            return newList;
        });
    };

    const addProductRow = () => {
        setProductDataList((prevList) => [
            ...prevList,
            { price: '', quantityRange: { min: '', max: '' } },
        ]);
    };

    const deleteLastRow = () => {
        if (productDataList.length > 1) {
            setProductDataList((prevList) => {
                const newList = [...prevList];
                newList.pop();
                return newList;
            });
        }
    };

    return (
        < div className='container' >
            <label htmlFor=""><b>Enter Updated Pricing Details</b></label>
            {
                productDataList.map((productData, index) => (
                    <div className="row" key={index}>
                        <div className="col-md-3 mb-3">
                            <label htmlFor={`productPrice${index}`} className="form-label">
                                Price
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id={`productPrice${index}`}
                                placeholder="Enter price"
                                value={productData.price}
                                onChange={(e) => productPriceChangeHandler(e, index)}
                                required
                                step="0.01"
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label htmlFor={`quantityMin${index}`} className="form-label">
                                Min Quantity
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id={`min${index}`}
                                placeholder="Enter min quantity"
                                value={productData.quantityRange.min}
                                onChange={(e) => productMinQuantityChangeHandler(e, index)}
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label htmlFor={`quantityMax${index}`} className="form-label">
                                Max Quantity
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id={`max${index}`}
                                placeholder="Enter max quantity"
                                value={productData.quantityRange.max}
                                onChange={(e) => productMaxQuantityChangeHandler(e, index)}
                            />
                        </div>
                    </div>
                ))
            }

            <div className="d-flex justify-content-center mt-3">
                <button type="button" className="btn btn-outline-primary me-2" onClick={addProductRow}>
                    Add Pricing
                </button>
                <button type="button" className="btn btn-outline-danger" onClick={deleteLastRow}>
                    Remove Pricing
                </button>
            </div>

        </div >
    )
}

export default PricesInput