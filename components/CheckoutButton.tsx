"use client";

import { useSession } from "next-auth/react";

function CheckoutButton() {
  const { data: session } = useSession();

  const createCheckoutSession = async () => {
    if (!session) return;

    //push a doc in firestore

    //... strioe extension on firestore will create a session

    // redirect user to checkout page
  };

  return (
    <div className="flex flex-col space-y-2">
      {/* if sub show mw the user is subed */}
      <button
        onClick={() => createCheckoutSession()}
        className="mt-8 block rounded-md bg-indigo-600 hover:bg-indigo-500 
    px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm 
    disabled:opacity-80 disabled:bg-indigo-600/50 disabled:text-white disabled:cursor-default"
      >
        Checkout
      </button>
    </div>
  );
}

export default CheckoutButton;
