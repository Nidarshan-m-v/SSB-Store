// app/terms/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TermsPage() {
  const router = useRouter();
  const [accepted, setAccepted] = useState(false);

  const handleProceed = () => {
    if (accepted) {
      router.push("/booking");
    } else {
      alert("You must accept the terms and conditions to proceed.");
    }
  };

  return (
    <div className="min-h-screen pt-20 px-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Terms & Conditions</h1>
      <ol className="list-decimal pl-6 space-y-2 text-gray-800">
        <li>Booking must be done at least 7 days in advance.</li>
        <li>Full payment must be made before the event date.</li>
        <li>Cancellation within 48 hours of the event is non-refundable.</li>
        <li>Hall must be vacated within the allotted time.</li>
        <li>Any damages to property will be chargeable.</li>
        <li>Outside catering is not permitted without prior approval.</li>
        <li>Smoking and alcohol are strictly prohibited in premises.</li>
        <li>Noise should be kept under permissible limits.</li>
        <li>Security deposit is mandatory for all bookings.</li>
        <li>Hall management reserves the right to cancel any booking under unavoidable circumstances.</li>
      </ol>

      <div className="mt-6 flex items-center space-x-3">
        <input
          type="checkbox"
          id="accept"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          className="w-4 h-4"
        />
        <label htmlFor="accept" className="text-sm text-gray-700">
          I accept the above terms and conditions.
        </label>
      </div>

      <button
        onClick={handleProceed}
        className="mt-6 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded"
      >
        Accept & Proceed
      </button>
    </div>
  );
}
