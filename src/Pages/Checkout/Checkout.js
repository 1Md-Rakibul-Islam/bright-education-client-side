import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const { category_name, picture, price, title} = useLoaderData();

    return (
        <Container className='mb-5'>
            <h2 className='text-center text-info'>{title}</h2>
            <form className='mx-auto mt-5 w-75'>
                <div>
                    <img style={{width: '320px'}} src={picture}></img>
                </div>
                <p>Category: <hr /> <h5>{category_name}</h5></p>
                <p>{price}</p>
                <div className="d-block my-3">
                <div className="custom-control custom-radio">
                    <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked="" required=""></input>
                    <label className="custom-control-label" for="credit">Credit card</label>
                </div>
                <div className="custom-control custom-radio">
                    <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required=""></input>
                    <label className="custom-control-label" for="debit">Debit card</label>
                </div>
                <div className="custom-control custom-radio">
                    <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required=""></input>
                    <label className="custom-control-label" for="paypal">Paypal</label>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6 mb-3">
                    <label for="cc-name">Name on card</label>
                    <input type="text" className="form-control" id="cc-name" placeholder="" required=""></input>
                    <small className="text-muted">Full name as displayed on card</small>
                    <div className="invalid-feedback">
                    Name on card is required
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <label for="cc-number">Credit card number</label>
                    <input type="text" className="form-control" id="cc-number" placeholder="" required=""></input>
                    <div className="invalid-feedback">
                    Credit card number is required
                    </div>
                </div>

                <div className="row">
                <div className="col-md-3 mb-3">
                    <label for="cc-expiration">Expiration</label>
                    <input type="text" className="form-control" id="cc-expiration" placeholder="" required=""></input>
                    <div className="invalid-feedback">
                    Expiration date required
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <label for="cc-expiration">CVV</label>
                    <input type="text" className="form-control" id="cc-cvv" placeholder="" required=""></input>
                    <div className="invalid-feedback">
                    Security code required
                    </div>
                </div>
                </div>

                <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                </div>
            </form>
        </Container>
    );
};

export default Checkout;