import {loadStripe} from '@stripe/stripe-js';
import {CardElement, Elements, ElementsConsumer} from '@stripe/react-stripe-js';

export default function StripePay(){
    // let stripe = Stripe(process.env.stripe_p_key);
    // let elements = stripe.elements();

    const handleStripe = () => {
        console.log("stripe")
    }

    return(
        <a onClick={handleStripe}>Stripe<img src="/images/pay-2.png" className="img-fluid" alt=""/></a>
    )
}