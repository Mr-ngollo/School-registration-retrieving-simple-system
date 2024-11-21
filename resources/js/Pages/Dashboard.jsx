import React from 'react';

const Dashboard = ({ students }) => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto bg-white shadow-md rounded p-6">
                <h1 className="text-5xl font-bold mb-4 text-center">Admin Dashboard</h1>
                <p className="text-lg font-medium mb-6">
                    Total Students Registered: <span className="font-bold">{students.length}</span>
                </p>
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-green-900 text-white">
                            <th className="border px-4 py-2">Reg. No</th>
                            <th className="border px-4 py-2">First Name</th>
                            <th className="border px-4 py-2">Last Name</th>
                            <th className="border px-4 py-2">Course</th>
                            <th className="border px-4 py-2">Date of Birth</th>
                            <th className="border px-4 py-2">Sex</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
                            >
                                <td className="border px-4 py-2">{student.reg_no}</td>
                                <td className="border px-4 py-2">{student.first_name}</td>
                                <td className="border px-4 py-2">{student.last_name}</td>
                                <td className="border px-4 py-2">{student.course}</td>
                                <td className="border px-4 py-2">{student.date_of_birth}</td>
                                <td className="border px-4 py-2">{student.sex}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
