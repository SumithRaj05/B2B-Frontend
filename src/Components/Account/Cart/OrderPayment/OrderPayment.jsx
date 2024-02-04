import { URL } from "../../../Auth/Auth";

export default function OrderPayment() {
    const amount = 500;
    const currency = "INR";
    const receiptId = "qwsaq1"

    const paymenthandler = async (e) => {
        const response = await fetch(URL + '/api/payment/place-order', {
            method: "POST",
            body: JSON.stringify({
                amount,
                currency,
                receipt: receiptId
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const order = await response.json();
        console.log(order)

        var options = {
            key: "rzp_test_MFJhFPo2B6EehL", // Enter the Key ID generated from the Dashboard
            amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency,
            name: "Acme Corp", //your business name
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            handler: async function (response) {
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature)
                const body = {
                    ...response,
                };

                const validateRes = await fetch(URL + '/order/validate', {
                    method: "post",
                    body: JSON.stringify(body),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const jsonRes = await validateRes.json()
                console.log(jsonRes)
            },
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                "name": "Amrit Kumar", //your customer's name
                "email": "Amrit.kumar@example.com",
                "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        });
        rzp1.open();
        e.preventDefault();
    }
    return (
        <>
            <button onClick={() => paymenthandler}>Pay</button>
        </>
    )
}