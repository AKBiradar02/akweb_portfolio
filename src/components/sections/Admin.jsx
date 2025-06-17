// src/components/Admin.jsx
import React, { useState } from "react";
import axios from "axios";

const API = "https://akweb-backend.onrender.com/api"; // change this after deploy if needed

const Admin = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        github_link: "",
        demo_link: "",
        tech_stack: "",
        image_url: "",
    });

    const [token, setToken] = useState("");
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API}/projects`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setSuccess("Project added!");
            setError(null);
            setFormData({
                title: "",
                description: "",
                github_link: "",
                demo_link: "",
                tech_stack: "",
                image_url: "",
            });
        } catch (err) {
            setSuccess(null);
            setError("Failed to add project. Invalid token or server error.");
        }
    };

    return (
        <div className="min-h-screen bg-black bg-opacity-90 text-white flex items-center justify-center px-4 py-8">
            <div className="max-w-xl w-full p-6 bg-gray-900 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 text-center">Admin Project Upload</h2>

                <input
                    type="text"
                    placeholder="JWT Token"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    className="w-full mb-4 px-4 py-2 bg-gray-800 rounded-xl border border-gray-700"
                />

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        placeholder="Project Title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-800 rounded-xl border border-gray-700"
                    />
                    <textarea
                        name="description"
                        placeholder="Project Description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-800 rounded-xl border border-gray-700"
                    />
                    <input
                        type="text"
                        name="github_link"
                        placeholder="GitHub Link"
                        value={formData.github_link}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-800 rounded-xl border border-gray-700"
                    />
                    <input
                        type="text"
                        name="demo_link"
                        placeholder="Live Demo Link"
                        value={formData.demo_link}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-800 rounded-xl border border-gray-700"
                    />
                    <input
                        type="text"
                        name="tech_stack"
                        placeholder="Tech Stack (e.g. React, Flask)"
                        value={formData.tech_stack}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-800 rounded-xl border border-gray-700"
                    />
                    <input
                        type="text"
                        name="image_url"
                        placeholder="Image URL"
                        value={formData.image_url}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-800 rounded-xl border border-gray-700"
                    />

                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold"
                    >
                        Submit Project
                    </button>

                    {success && <p className="text-green-400 mt-2">{success}</p>}
                    {error && <p className="text-red-400 mt-2">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default Admin;
