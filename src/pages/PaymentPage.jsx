import React, { useState,useEffect } from 'react';

import { useSelector } from "react-redux";
import MockPayment from '../components/MockPayment';


const PaymentPage = () => {
    const {cart} = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect( () => {
        setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
    }, [cart])


    const amountToPay = totalAmount; // Set your mock payment amount here
    const [paymentStatus, setPaymentStatus] = useState(null);

    const handlePaymentSuccess = (details) => {
        setPaymentStatus(`Payment successful! Transaction ID: ${details.transactionId}`);
    };

    const handlePaymentFailure = (error) => {
        setPaymentStatus(error.message);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2 className="text-xl text-[#166534] uppercase font-[600]" >Complete Your Payment</h2>
            <MockPayment 
                amount={amountToPay} 
                onSuccess={handlePaymentSuccess} 
                onFailure={handlePaymentFailure} 
            />
            
            {paymentStatus && <p>{paymentStatus}</p>}
        </div>
    );
};

export default PaymentPage;
