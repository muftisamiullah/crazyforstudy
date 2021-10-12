import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import PayPalBtn from '../common/pay-pal-btn'

export default function Paypal(){


    const paypalSubscribe = (data, actions) => {
        return actions.subscription.create({
            'plan_id': 'P-07M91446V5390310FMB2VZIQ',
        });
    };

    const paypalOnError = (err) => {
        console.log("payment error");
        console.log(err)
    }

    const paypalOnApprove = (data, detail) => {
        // call the backend api to store transaction details
        console.log("Payapl approved")
        console.log(data.subscriptionID)
    };

    return(

        // <PayPalScriptProvider options={initialOptions}>
        //     <PayPalButtons createSubscription={(data, actions) =>
        //         actions.subscription.create({
        //             plan_id: "P-07M91446V5390310FMB2VZIQ",
        //         })
        //     } style={{ layout: "horizontal" }} 
        //     />
        // </PayPalScriptProvider>

        <div className="App">
            <PayPalBtn
                amount = "0.01"
                currency = "USD"
                createSubscription={paypalSubscribe}
                onApprove={paypalOnApprove}
                catchError={paypalOnError}
                onError={paypalOnError}
                onCancel={paypalOnError}
            />
        </div>
    )
}