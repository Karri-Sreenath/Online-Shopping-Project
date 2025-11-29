import product1 from '../../assets/products/furnishing.jpg';  
import product2 from '../../assets/products/decor.jpg';  
import product3 from '../../assets/products/appliances.jpg';  
import product4 from '../../assets/products/light.jpg'; 

export default function CardsContainer() {
    return (
        <>
            <div className="container">
                <div className="row cards-row"> 
                    <div className="col-md-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={product1} alt="" />
                                </div>
                                <div className='col-md-1'></div>
                                <div className="col-md-5">
                                    <img src={product2} alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={product4} alt="" />
                                </div>
                                <div className='col-md-1'></div>
                                <div className="col-md-5">
                                    <img src={product3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={product1} alt="" />
                                </div>
                                <div className='col-md-1'></div>
                                <div className="col-md-5">
                                    <img src={product2} alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={product4} alt="" />
                                </div>
                                <div className='col-md-1'></div>
                                <div className="col-md-5">
                                    <img src={product3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={product1} alt="" />
                                </div>
                                <div className='col-md-1'></div>
                                <div className="col-md-5">
                                    <img src={product2} alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={product4} alt="" />
                                </div>
                                <div className='col-md-1'></div>
                                <div className="col-md-5">
                                    <img src={product3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
