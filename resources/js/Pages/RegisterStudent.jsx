import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

const RegisterStudent = () => {
    const [toastMessage, setToastMessage] = useState(null); // State for the toast message
    const { data, setData, post, errors, reset } = useForm({
        reg_no: '',
        first_name: '',
        last_name: '',
        course: '',
        date_of_birth: '',
        sex: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/register-student', {
            onSuccess: () => {
                setToastMessage({ text: 'Student registered successfully! 🎉', type: 'success' });
                reset();
                clearToast(); // Automatically clear the toast
            },
            onError: () => {
                setToastMessage({ text: 'Error registering the student. ❌', type: 'error' });
                clearToast(); // Automatically clear the toast
            },
        });
    };

    const clearToast = () => {
        setTimeout(() => setToastMessage(null), 3000); // Disappear after 3 seconds
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-md rounded px-8 py-6">
                <h1 className="text-2xl font-bold mb-4 text-center">Register Student</h1>

                {/* Toast Message */}
                {toastMessage && (
                    <div
                        className={`fixed top-4 right-4 p-4 rounded shadow-md text-white ${
                            toastMessage.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                        }`}
                    >
                        {toastMessage.text}
                    </div>
                )}

                {/* Registration Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block  font-bold text-gray-700">Reg. No:</label>
                        <input
                            type="text"
                            value={data.reg_no}
                            onChange={(e) => setData('reg_no', e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        {errors.reg_no && <p className="text-red-500 text-sm">{errors.reg_no}</p>}
                    </div>
                    <div>
                        <label className="block  font-bold text-gray-700">First Name:</label>
                        <input
                            type="text"
                            value={data.first_name}
                            onChange={(e) => setData('first_name', e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        {errors.first_name && (
                            <p className="text-red-500 text-sm">{errors.first_name}</p>
                        )}
                    </div>
                    <div>
                        <label className="block  font-bold text-gray-700">Last Name:</label>
                        <input
                            type="text"
                            value={data.last_name}
                            onChange={(e) => setData('last_name', e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        {errors.last_name && (
                            <p className="text-red-500 text-sm">{errors.last_name}</p>
                        )}
                    </div>
                    <div>
                        <label className="block  font-bold text-gray-700">Course:</label>
                        <select
                            value={data.course}
                            onChange={(e) => setData('course', e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <option value="">Select Course</option>
                            <option value="CSN">CSN - Computer Systems and Networking</option>
                            <option value="ISM">ISM - Information Systems Management</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.course && (
                            <p className="text-red-500 text-sm">{errors.course}</p>
                        )}
                    </div>
                    <div>
                        <label className="block  font-bold text-gray-700">Date of Birth:</label>
                        <input
                            type="date"
                            value={data.date_of_birth}
                            onChange={(e) => setData('date_of_birth', e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        {errors.date_of_birth && (
                            <p className="text-red-500 text-sm">{errors.date_of_birth}</p>
                        )}
                    </div>
                    <div>
                        <label className="block  font-bold text-gray-700">Sex:</label>
                        <select
                            value={data.sex}
                            onChange={(e) => setData('sex', e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        {errors.sex && <p className="text-red-500 text-sm">{errors.sex}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-900 text-white py-2 rounded-md hover:bg-green-800 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>

            {/* Admin Login Button */}
            <div className="mt-6">
                <button
                    onClick={() => window.location.href = '/login'}
                    className="bg-green-900 text-white py-2 px-4 rounded-md hover:bg-green-800 transition"
                >
                    Admin Login
                </button>
            </div>
        </div>
    );
};

export default RegisterStudent;
