import React from "react";

function CheckoutButton() {
  return (
   <>
   {/* if sub show mw the user is subed */}
    <button
      className="mt-8 block rounded-md bg-indigo-600 hover:bg-indigo-500 
    px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm 
    disabled:opacity-80 disabled:bg-indigo-600/50 disabled:text-white disabled:cursor-default"
    >
      Checkout
    </button>
   </>
  );
}

export default CheckoutButton;
