// app/components/BookingForm.tsx
"use client";

import { useState } from "react";

export default function BookingForm() {
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    startDate: today,
    endDate: today,
    startTime: "",
    endTime: "",
    notes: "",
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: string[] = [];

    const startDate = new Date(formData.startDate);
    const endDate = new Date(formData.endDate);
    const [startHour, startMin] = formData.startTime.split(":").map(Number);
    const [endHour, endMin] = formData.endTime.split(":").map(Number);

    const startDateTime = new Date(startDate);
    startDateTime.setHours(startHour, startMin);

    const endDateTime = new Date(endDate);
    endDateTime.setHours(endHour, endMin);

    if (formData.fullName.trim().length === 0) newErrors.push("Full Name is required.");
    if (!/^\d{10}$/.test(formData.contactNumber)) newErrors.push("Contact Number must be 10 digits.");
    if (endDate < startDate) newErrors.push("End Date cannot be before Start Date.");
    if (!formData.startTime || !formData.endTime) newErrors.push("Start and End Time are required.");
    if (startDate.getTime() === endDate.getTime() && endDateTime <= startDateTime) {
      newErrors.push("End Time must be after Start Time for same-day bookings.");
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors([]);
      setSubmitted(true);
      console.log("Form submitted:", formData);
      // Add your API call here
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Booking Form</h2>

      {errors.length > 0 && (
        <div className="bg-red-100 text-red-700 p-3 mb-4 rounded">
          <ul>
            {errors.map((err, i) => (
              <li key={i}>• {err}</li>
            ))}
          </ul>
        </div>
      )}

      {submitted && (
        <div className="bg-green-100 text-green-700 p-3 mb-4 rounded">
          Booking submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="w-full border p-2 rounded"
          value={formData.fullName}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="contactNumber"
          placeholder="Contact Number"
          className="w-full border p-2 rounded"
          value={formData.contactNumber}
          onChange={handleChange}
        />

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="text-sm">Start Date</label>
            <input
              type="date"
              name="startDate"
              className="w-full border p-2 rounded"
              min={today}
              value={formData.startDate}
              onChange={handleChange}
            />
          </div>
          <div className="flex-1">
            <label className="text-sm">End Date</label>
            <input
              type="date"
              name="endDate"
              className="w-full border p-2 rounded"
              min={formData.startDate}
              value={formData.endDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="text-sm">Start Time</label>
            <input
              type="time"
              name="startTime"
              className="w-full border p-2 rounded"
              value={formData.startTime}
              onChange={handleChange}
            />
          </div>
          <div className="flex-1">
            <label className="text-sm">End Time</label>
            <input
              type="time"
              name="endTime"
              className="w-full border p-2 rounded"
              value={formData.endTime}
              onChange={handleChange}
            />
          </div>
        </div>

        <textarea
          name="notes"
          placeholder="Additional Notes"
          rows={4}
          className="w-full border p-2 rounded"
          value={formData.notes}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}
