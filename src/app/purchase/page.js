"use client";

import Image from "next/image";
import Navbar from "../_components/Navbar";

export default function PurchasePage() {
  return (
<>
<div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Secure Checkout</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="border rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="https://mwi.imgix.net/Products/Century-Microsite-Product-Photos/torsion-springs_2023-02-03-165043_mlnz.png?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-3.3.1&w=1400&s=9e0b37886870620cf063f2e05bf4b42e"
              alt="Product"
              width={100}
              height={70}
              className="rounded"
            />
            <div>
              <p className="font-medium">Torsion Spring</p>
              <p className="text-sm text-gray-500">80 lb · Black Steel · Pack of 2</p>
              <p className="text-green-600 font-semibold mt-1">₹37,489</p>
            </div>
          </div>
          <hr className="my-4" />
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹37,489</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹37,489</span>
            </div>
          </div>
        </div>
        <div className="border rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input type="text" className="mt-1 w-full border px-3 py-2 rounded" required />
            </div>
            <div>
              <label className="block text-sm font-medium">Email Address</label>
              <input type="email" className="mt-1 w-full border px-3 py-2 rounded" required />
            </div>
            <div>
              <label className="block text-sm font-medium">Shipping Address</label>
              <textarea className="mt-1 w-full border px-3 py-2 rounded" rows={3} required></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium">Payment Method</label>
              <select className="mt-1 w-full border px-3 py-2 rounded">
                <option>Credit / Debit Card</option>
                <option>UPI</option>
                <option>Net Banking</option>
                <option>Cash on Delivery</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Complete Purchase
            </button>
          </form>
        </div>
      </div>
    </div>
</>
  );
}
