import { useSelector, useDispatch} from 'react-redux';
import type { RootState } from '../../store';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {upDateCartData} from '../../features/cartDetailsSlice';
import './viewCart.css';

export default function ViewCart() {
    const cartDetailsInfo = useSelector((state: RootState) => state.cartDetails.cartData);
    const [productData, setProductData] = useState([]);
    const dispatch = useDispatch();
    let productIds = [];
    useEffect(() => {
        loadCartProducts();
    }, [cartDetailsInfo]);
    
    let loadCartProducts = () => {
        cartDetailsInfo.forEach((product:any) => {
            productIds.push(parseInt(product.id));
        });
        console.log('cartDetailsInfo');
        console.log(cartDetailsInfo);
        if (productIds.length) {
            axios.get('http://localhost:3000/get/productDetails', {params: {productIds: productIds}}).then((response) => {
                setProductData(response.data);
            }).catch(() => {

            })
        }
    }    

    const getCountFromStore = (id: number) => {
        var isFound = false
        var product = cartDetailsInfo.find((item) => {
            if (item.id == id) {isFound = true; return item};
        });
        if (isFound) {
            return product.count;
        } else {
            return 0;
        }
    }

    const updateTotalPrice = () => {
        var totalAmount = 0;
        productData.forEach((item) => {
            var count = getCountOfProduct(item.id);
            totalAmount += item.price * count;
        });
        return Math.floor(totalAmount);
    }

    const getCountOfProduct = (id) => {
        var count = 0;
        cartDetailsInfo.forEach((item) => {
            if (item.id == id) {
                count = item.count;
            }
        })
        return count;
    }

    const handleDelete = (id) => {
        let details = JSON.parse(JSON.stringify(cartDetailsInfo));
        var index = 0;
        for (var i = 0 ; i < details.length; i++) {
            if (details[i].id == id) {
                index = i;
                break;
            }
        }
        details.splice(index, 1);
        console.log("details after deleter")
        console.log(details)
        dispatch(upDateCartData(details));
    }
    return (
        <>
            <h3>View Cart Details</h3> 
            <Link to='/productDetails'> View Products </Link>
            <hr />
            {
                cartDetailsInfo.length ? 
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>id</th>
                        <th>Product Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Count</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productData.map((product) => (
                                <tr>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td className='viewCartImage'>
                                        <img src={product.image} alt="" />
                                    </td>
                                    <td>{product.price}</td>
                                    <td>{getCountFromStore(product.id)}</td>
                                    <td><i className="bi bi-trash" onClick={() => {handleDelete(product.id)}}></i></td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td colSpan="5" style={{'textAlign': 'right'}}>
                                Total Price: <b>{updateTotalPrice()}</b>
                            </td>
                        </tr>
                    </tbody>
                </Table> : <b>Cart is empty</b>
            }   

            <hr />
        </>
    )
}