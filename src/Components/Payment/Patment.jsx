import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheakOutForm from "./CheakOutForm";


const Patment = () => {
    const stripePromise = loadStripe('pk_test_51OILW1J6HJQdkfhWoVZSMrGxcwGjq84xp6tiMWTTLI8XjyOSYrfhxnPlqXjIwdXQqYmPzBUVfchI1BzIY1iQrwoB009SocRKXc');
    return (
        <div className="mt-32 container mx-auto">
            <h1 className="text-5xl text-red-700 border-red-400 text-center font-bold  mb-12 py-4">Payment Now</h1>

            <div>
                <Elements stripe={stripePromise}>

                  <CheakOutForm></CheakOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Patment;