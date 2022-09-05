import { loadStripe } from '@stripe/stripe-js'

const PUBLISHABLE_KEY = 'pk_test_51LKkhaKmOocwKd6s6y4NBKlyZUavlvecPZtEXLP1G59q4ivlVuRshuDYquNmZkYKT9Aw9ypaPcpzOIP6M3qWiKib00Ilx8reBQ'

let stripePromise

const getStripe = () => {
    if ( !stripePromise ) {
        stripePromise = loadStripe(PUBLISHABLE_KEY);
    }

    return stripePromise
}


export default getStripe