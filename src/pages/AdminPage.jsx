import { useEffect, useState, useCallback } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ADMIN_EMAIL = "abhaybiradar02@gmail.com";
const initialForm = { title: "", description: "", githubLink: "" };
const API_URL = import.meta.env.VITE_API_URL; // ✅ updated

export default function AdminPage() {
  const [authState, setAuthState] = useState({ loading: true, user: null });
  const [projects, setProjects] = useState([]);
  const [pageState, setPageState] = useState({ loading: true, error: null });
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState(null);
  const [loginLoading, setLoginLoading] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [addForm, setAddForm] = useState(initialForm);
  const [addLoading, setAddLoading] = useState(false);
  const [addError, setAddError] = useState(null);
  const [addSuccess, setAddSuccess] = useState(null);
  const [editProject, setEditProject] = useState(null);
  const [editForm, setEditForm] = useState(initialForm);
  const [editLoading, setEditLoading] = useState(false);
  const [editError, setEditError] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthState({ loading: false, user });
    });
    return () => unsubscribe();
  }, []);

  // Fetch projects
  const fetchProjects = useCallback(() => {
    setPageState({ loading: true, error: null });
    fetch(`${API_URL}/projects`)
      .then((res) => (res.ok ? res.json() : Promise.reject("Failed to fetch")))
      .then((data) => {
        setProjects(Array.isArray(data) ? data : []);
        setPageState({ loading: false, error: null });
      })
      .catch(() => setPageState({ loading: false, error: "Failed to load projects" }));
  }, []);

  useEffect(() => {
    if (authState.user?.email === ADMIN_EMAIL) {
      fetchProjects();
    }
  }, [authState.user, fetchProjects]);

  const handleLoginChange = (e) => setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError(null);
    try {
      await setPersistence(auth, browserLocalPersistence);
      await signInWithEmailAndPassword(auth, loginForm.email, loginForm.password);
    } catch (err) {
      setLoginError("Invalid email or password");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => signOut(auth).then(() => navigate("/"));
  const handleAddFormChange = (e) => setAddForm({ ...addForm, [e.target.name]: e.target.value });

  const handleAddFormSubmit = async (e) => {
    e.preventDefault();
    setAddLoading(true);
    setAddError(null);
    try {
      const res = await fetch(`${API_URL}/add-project`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...addForm, userEmail: authState.user.email }),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Failed to add project");
      setAddSuccess("Project added successfully!");
      setAddForm(initialForm);
      setShowAddForm(false);
      fetchProjects();
    } catch (err) {
      setAddError(err.message);
    } finally {
      setAddLoading(false);
    }
  };

  const openEditModal = (project) => {
    setEditProject(project);
    setEditForm({ title: project.title, description: project.description, githubLink: project.githubLink });
  };

  const closeEditModal = () => setEditProject(null);
  const handleEditFormChange = (e) => setEditForm({ ...editForm, [e.target.name]: e.target.value });

  // Edit project
  const handleEditFormSubmit = async (e) => {
    e.preventDefault();
    setEditLoading(true);
    setEditError(null);
    try {
      const res = await fetch(`${API_URL}/update-project/${editProject.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...editForm, userEmail: authState.user.email }),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Failed to update project");
      closeEditModal();
      fetchProjects();
    } catch (err) {
      setEditError(err.message);
    } finally {
      setEditLoading(false);
    }
  };

  // Delete project
  const handleDelete = async () => {
    if (!deleteId) return;
    setDeleteLoading(true);
    setDeleteError(null);
    try {
      const res = await fetch(`${API_URL}/delete-project/${deleteId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userEmail: authState.user.email }),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Failed to delete project");
      setDeleteId(null);
      fetchProjects();
    } catch (err) {
      setDeleteError(err.message);
    } finally {
      setDeleteLoading(false);
    }
  };

  if (authState.loading) {
    return <div className="flex-grow flex items-center justify-center"><div className="text-2xl">Checking credentials...</div></div>;
  }

  if (!authState.user) {
    return (
      <div className="flex-grow flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        <form className="flex flex-col gap-2 w-80" onSubmit={handleLoginSubmit}>
          <input type="email" name="email" value={loginForm.email} onChange={handleLoginChange} placeholder="Admin Email" className="p-2 rounded bg-gray-800 border border-cyan-500/20 text-white" required />
          <input type="password" name="password" value={loginForm.password} onChange={handleLoginChange} placeholder="Password" className="p-2 rounded bg-gray-800 border border-cyan-500/20 text-white" required />
          <button type="submit" className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded shadow transition" disabled={loginLoading}>{loginLoading ? "Logging in..." : "Login"}</button>
          {loginError && <div className="text-red-400 mt-2">{loginError}</div>}
        </form>
      </div>
    );
  }

  if (authState.user.email !== ADMIN_EMAIL) {
    return (
      <div className="flex-grow flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
        <p>You do not have permission to view this page.</p>
        <button className="mt-4 bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded shadow transition" onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div className="flex-grow flex flex-col w-full max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Admin Panel</h2>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">{authState.user.email}</span>
          <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded shadow transition" onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <div className="mb-6 flex justify-end">
        <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded shadow transition" onClick={() => setShowAddForm(p => !p)}>{showAddForm ? "Cancel" : "Add New Project"}</button>
      </div>
      {showAddForm && (
        <form className="mb-8 p-6 bg-black/60 rounded-xl border border-cyan-500/30 shadow" onSubmit={handleAddFormSubmit}>
          <div className="mb-4"><label className="block mb-1 font-semibold">Project Title</label><input type="text" name="title" value={addForm.title} onChange={handleAddFormChange} className="w-full p-2 rounded bg-gray-800 border border-cyan-500/20" required /></div>
          <div className="mb-4"><label className="block mb-1 font-semibold">Project Description</label><textarea name="description" value={addForm.description} onChange={handleAddFormChange} className="w-full p-2 rounded bg-gray-800 border border-cyan-500/20" required /></div>
          <div className="mb-4"><label className="block mb-1 font-semibold">GitHub Link</label><input type="url" name="githubLink" value={addForm.githubLink} onChange={handleAddFormChange} className="w-full p-2 rounded bg-gray-800 border border-cyan-500/20" required /></div>
          {addError && <div className="text-red-400 mb-2">{addError}</div>}
          {addSuccess && <div className="text-green-400 mb-2">{addSuccess}</div>}
          <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow transition" disabled={addLoading}>{addLoading ? "Adding..." : "Add Project"}</button>
        </form>
      )}
      {pageState.loading ? <div className="text-center text-lg">Loading projects...</div>
        : pageState.error ? <div className="text-center text-red-400">{pageState.error}</div>
          : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-black/60 rounded-xl border border-cyan-500/30 shadow">
                <thead>
                  <tr>
                    <th className="p-2 border-b text-left">Title</th><th className="p-2 border-b text-left">Description</th><th className="p-2 border-b">GitHub</th><th className="p-2 border-b">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((p) => (
                    <tr key={p.id}>
                      <td className="p-2 border-b">{p.title}</td><td className="p-2 border-b">{p.description}</td>
                      <td className="p-2 border-b text-center"><a href={p.githubLink} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">View</a></td>
                      <td className="p-2 border-b flex justify-center gap-2">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-3 rounded" onClick={() => openEditModal(p)}>Edit</button>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded" onClick={() => setDeleteId(p.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
      {editProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-lg">
            <h3 className="text-xl font-bold mb-4">Edit Project</h3>
            <form onSubmit={handleEditFormSubmit}>
              <div className="mb-4"><label className="block mb-1 font-semibold">Title</label><input type="text" name="title" value={editForm.title} onChange={handleEditFormChange} className="w-full p-2 rounded bg-gray-800 border-cyan-500/20" required /></div>
              <div className="mb-4"><label className="block mb-1 font-semibold">Description</label><textarea name="description" value={editForm.description} onChange={handleEditFormChange} className="w-full p-2 rounded bg-gray-800 border-cyan-500/20" required /></div>
              <div className="mb-4"><label className="block mb-1 font-semibold">GitHub Link</label><input type="url" name="githubLink" value={editForm.githubLink} onChange={handleEditFormChange} className="w-full p-2 rounded bg-gray-800 border-cyan-500/20" required /></div>
              {editError && <div className="text-red-400 mb-2">{editError}</div>}
              <div className="flex gap-2 justify-end">
                <button type="button" className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded" onClick={closeEditModal}>Cancel</button>
                <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded" disabled={editLoading}>{editLoading ? "Saving..." : "Save"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {deleteId && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Confirm Delete</h3>
            <p className="mb-6">Are you sure you want to delete this project?</p>
            {deleteError && <div className="text-red-400 mb-2">{deleteError}</div>}
            <div className="flex gap-2 justify-end">
              <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded" onClick={() => setDeleteId(null)} disabled={deleteLoading}>Cancel</button>
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded" onClick={handleDelete} disabled={deleteLoading}>{deleteLoading ? "Deleting..." : "Delete"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 