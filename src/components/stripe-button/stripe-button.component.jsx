import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;

    const publishableKey = 'pk_test_51Jpif9Di7cUOA8D15oxDTWOOsE6jDqePEnhWXp4WtpoxpB9MKHnPbwjMBFDCHilk24D89eU4wkBOf710jxzH1AnV00VXRPH0jt'

    const onToken = token => {
        console.log(token)
        alert('Payment Succesful')
    }

    return (
        <StripeCheckout 
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            label='Pay Now'
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton