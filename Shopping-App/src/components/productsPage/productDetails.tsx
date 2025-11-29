import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import './productsPage.css';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { RatingComp } from "./rating/ratingComp";
import type { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux'
import {upDateCartData} from '../../features/cartDetailsSlice';

interface CartObj {
    count: number,
    id: number
}

type productDetails = {
    "_id":string;
    "id":number;
    "title": string;
    "price": number;
    "description": string;
    "category": string;
    "image": "string";
    "rating":{
        "rate": number;
        "count": number
    }
}

export default function ProductsPage() {
    const [cartDetails, setCartDetails] = useState<CartObj[]>([]) // {id: , count}
    const [productDetails, setProductDetails] = useState<productDetails[]>([]);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const cartDetailsInfo = useSelector((state: RootState) => state.cartDetails.cartData);


    useEffect(() => {
        axios.get('http://localhost:3000/get/productDetails', { headers: {"Authorization" : `Bearer ${sessionStorage.getItem('authToken')}`} }).then((result) => {
            setProductDetails(result.data);
        }).catch(() => {

        })
    }, [])

    const handleAddToCart = (id: number) => {
        let details = JSON.parse(JSON.stringify(cartDetails));
        let isItemExist:boolean = false;
        details.forEach((element, index) => {
            if (element.id == id) {
                isItemExist = true;
                details[index].count++;
            }
        });
        if (isItemExist == false) {
            details.push({id: id, count: 1});
        }  
        setCartDetails(details);
        dispatch(upDateCartData(details));
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2 leftBlock">
                    Categories:
                    <ul>
                        <li>
                            <input type="checkbox" /> Mens
                        </li>
                         <li>
                            <input type="checkbox" /> Kids
                        </li>
                         <li>
                            <input type="checkbox" /> Electronics
                        </li>
                    </ul>
                    Price range:
                    <input type="range" className="form-control"/>
                    <button>Apply filter</button>
                </div>
                <div className="col-md-9">
                    <ul className="productDetailsBlock">
                        {
                            productDetails.map((item:productDetails) => (
                                <li key={item.id} className="singleProduct">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={item.image} />
                                        <Card.Body>
                                            <Card.Title>{item.title.length > 60 ? item.title.substring(0, 60) : item.title}</Card.Title>
                                            <Card.Text>{item.price}</Card.Text>
                                            <Card.Text>{item.description.length > 100 ? item.description.substring(0, 100) + '...': item.description}</Card.Text>                                            
                                            <RatingComp rating={item.rating.rate}></RatingComp>
                                            <Button variant="primary" onClick={() => {handleAddToCart(item.id)}}>Add to Cart</Button>
                                        </Card.Body>
                                    </Card>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}