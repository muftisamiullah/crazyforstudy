import {createSubscription, saveTransactionDetails, createOrder,assignmentPaymentFailure, subsPaymentFailure, saveTransactionDetailsForAssignment} from '../../libs/payment'
import { useState, useContext } from "react";
import { useQueryClient } from 'react-query'
import { useParams, useLocation, useHistory } from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';

export default function RazorPay({...props}){
    const queryClient = useQueryClient()
    const [ isLoading, setIsLoading ] = useState(false)
    const param = useParams();
    const location = useLocation();
    const history = useHistory();
    const { state } = useContext(AuthContext);

    const handleRazor = async (e) => {
        setIsLoading(true);
        const res = await createSubscription();

        if(res.data){
            setIsLoading(false);
            const subs_id = res.data.id
            let options = {
                "key": process.env.razor_pay_key, // Enter the Key ID generated from the Dashboard
                "subscription_id" : subs_id,
                "name": "Subscription Plan",
                "description": "crazy for study",
                "image": "/images/logo_wa.jpg",
                "handler": async function (response) {
                    // alert(response.razorpay_payment_id),
                    // alert(response.razorpay_subscription_id),
                    // alert(response.razorpay_signature);
                    // verify transaction using signature
                    // https://razorpay.com/docs/api/subscriptions/#authentication-transaction
                    const res = await saveTransactionDetails(
                        { 
                            payment_id: response.razorpay_payment_id,
                            subscription_id: response.razorpay_subscription_id,
                            signature: response.razorpay_signature,
                            userEmail : state.email,
                            userId : state._id,
                        }
                    )
                    if(res.data){
                        state.Subscribe = true;
                        // console.log(session)
                        localStorage.setItem('Subscribe',true);
                        history.push('/user/my-subs')
                    }
                },
                "theme": {
                    "color" : "#f8d021",
                }
            };
            var rzp1 = new window.Razorpay(options);
            rzp1.open();
            rzp1.on('payment.failed', function (response){
                // alert(response.error.code);
                // alert(response.error.description);
                // alert(response.error.source);
                // alert(response.error.step);
                // alert(response.error.reason);
                // alert(response.error.metadata.order_id);
                // alert(response.error.metadata.payment_id);
                response.error.userId = localStorage.getItem('_id');
                const res = subsPaymentFailure(response.error);
            })
        }
        e.preventDefault();
    }

    const handleAssignmentPayment = async (e) => {
        setIsLoading(true);
        const res = await createOrder(props.amt * 100);
        if(res.data){
            setIsLoading(false);
            const order_id = res.data.id
            var options = {
                "key": process.env.razor_pay_key, // Enter the Key ID generated from the Dashboard
                "amount": props.amt * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": "USD",
                "name": "New Assignment",
                "description": "crazy for study",
                "image": "https://crazyforstudy.com/images/logo_wa.jpg",
                "order_id": order_id, 
                "handler":async function (response){              
                    const res = await saveTransactionDetailsForAssignment(
                        { 
                            payment_id: response.razorpay_payment_id,
                            order_id: response.razorpay_order_id,
                            signature: response.razorpay_signature,
                            userEmail : state.email,
                            userId : state._id,
                            assignmentId : param.my_order_details,
                        }
                    )
                    console.log(res);
                    if(res.data){
                        alert("payment made successfully");
                        queryClient.invalidateQueries(`my-orders`)
                        history.push('/user/my-orders')
                    }
                },
                "theme": {
                    "color" : "#f8d021",
                }
            };
            var rzp1 = new window.Razorpay(options);
            rzp1.open();
            rzp1.on('payment.failed', function (response){
                // alert(response.error.code);
                // alert(response.error.description);
                // alert(response.error.source);
                // alert(response.error.step);
                // alert(response.error.reason);
                // alert(response.error.metadata.order_id);
                // alert(response.error.metadata.payment_id);
                const res = assignmentPaymentFailure({details: response.error, user_Id: localStorage.getItem('_id')});
            });
        }
        e.preventDefault();
    }

    return(
        <>
        {
            props.type != "assignment" 
            ? 
                <a onClick={handleRazor}>{ isLoading ? 'wait' : <img src="/images/pay-2.png" className="img-fluid" alt=""/> }</a> 
            : 
                <a onClick={handleAssignmentPayment}>{ isLoading ? 'wait' : <img src="/images/pay-2.png" className="img-fluid" alt=""/> }</a>
        }
        </>
    )
}