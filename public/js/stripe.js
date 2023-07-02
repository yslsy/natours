/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('process.env.STRIPE_PUBLIC_KEY');

export const bookTour = async tourId => {
    try {
        // 1) Get checkout session from API
    const session = await axios(`http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`);
    console.log(session)
    // 2) Create checkout form + chanre credit card
    const checkoutPageUrl = session.data.session.url;
    window.location.assign(checkoutPageUrl);
    } catch(err) {
        console.log(err);
        showAlert('error', err);
    }
    
}