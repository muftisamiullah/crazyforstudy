import { PayPalButton } from "react-paypal-button-v2";
import React from 'react';

export function PayPalBtn(props) {
    const { amount, currency, createSubscription, onApprove, catchError,onError, onCancel} = props;
    const paypalKey = "AZaet1b36GGwW2xsb5GcS2bZoz2PyJJrJYK6W2Xd4QTf2ZKfQX7_1eS7lIFMMUaT6HBEKblE_cJgYcN3"

    // const initialOptions = {
    //     "client-id": "AZaet1b36GGwW2xsb5GcS2bZoz2PyJJrJYK6W2Xd4QTf2ZKfQX7_1eS7lIFMMUaT6HBEKblE_cJgYcN3",
    //     currency: "USD",
    //     intent: "capture",
    //     vault: true,
    // };

    return (
        <PayPalButton
            amount={amount}
            currency={currency}
            createSubscription={(data, details) => createSubscription(data, details)}
            onApprove={(data, details) => onApprove(data, details)}
            onError={(err) => onError(err)}
            catchError={(err) => catchError(err)}
            onCancel={(err) => onCancel(err)}
            options={{
                clientId: paypalKey,
                vault:true,
            }}
            style={{
                shape: 'rect',
                layout: 'horizontal',
                height: 34,
            }}
        />
        );
    }

export default PayPalBtn;