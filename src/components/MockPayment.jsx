import React, { useState } from 'react';
import Spinner from './Spinner';
const MockPayment = ({ amount, onSuccess, onFailure }) => {
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePayment = () => {
        setIsProcessing(true);
        
        // Simulate a delay to represent processing time
        setTimeout(() => {
            // For simplicity, we'll randomly succeed or fail the payment
            const paymentSuccess = Math.random() > 0.5; // 50% chance of success

            if (paymentSuccess) {
                onSuccess({
                    message: "Payment successful!",
                    amount,
                    transactionId: `MOCK_TXN_${Math.floor(Math.random() * 1000000)}`,
                });
            } else {
                onFailure({ message: "Payment failed. Please try again." });
            }

            setIsProcessing(false);
        }, 2000); // Simulate a 2-second payment process delay
    };

    return (

        <div className="flex gap-10 max-w-6xl p-6 mx-auto flex-wrap lg:flex-nowrap">
            
            <div h-auto >
                <img className="rounded-md" src="https://t3.ftcdn.net/jpg/04/86/77/04/360_F_486770467_9nd0TjY0owEdwkoUCvi85VfIJQTvQFKi.jpg" alt="" />
            </div>
            
            <div>
                <h3 className="text-slate-700 text-xl font-[600] mb-5 mt-10 ">Mock Payment    Gateway</h3>
                <p className="font-bold ml-2 text-black gap-11" >Amount: ${amount.toFixed(2)}</p>
                <button onClick={handlePayment} disabled={isProcessing}>
                    {isProcessing ? (<div className='w-[25%] h-[25%]'>
                        <Spinner />
                            </div>) : <p className="text-slate-700 text-xl font-[600] mb-5 mt-10 ">Pay Now</p>}
                </button>
            </div>
            
        </div>





    );
};

export default MockPayment;
