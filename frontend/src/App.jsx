import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import SearchPapers from "./pages/SearchPapers";
import MyResearch from "./pages/MyResearch";
import PaperDetails from "./pages/PaperDetails";
import LiteratureReview from "./pages/LiteratureReview";
import CitationManager from "./pages/CitationManager";
import ChatAssistant from "./pages/ChatAssistant";
import Tracker from "./pages/Tracker";
import PDFUpload from "./pages/PDFUpload";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<SearchPapers />} />
        <Route path="/paper/:id" element={<PaperDetails />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-research"
          element={
            <ProtectedRoute>
              <MyResearch />
            </ProtectedRoute>
          }
        />

        <Route
          path="/literature-review"
          element={
            <ProtectedRoute>
              <LiteratureReview />
            </ProtectedRoute>
          }
        />

        <Route
          path="/citations"
          element={
            <ProtectedRoute>
              <CitationManager />
            </ProtectedRoute>
          }
        />

        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <ChatAssistant />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tracker"
          element={
            <ProtectedRoute>
              <Tracker />
            </ProtectedRoute>
          }
        />

        <Route
          path="/upload"
          element={
            <ProtectedRoute>
              <PDFUpload />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;