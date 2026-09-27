import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/pdf-upload.css";

function PDFUpload() {
    const fileInputRef = useRef(null);

    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState("");
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [uploaded, setUploaded] = useState(false);

    const MAX_FILE_SIZE = 10 * 1024 * 1024;

    // -----------------------------
    // FILE VALIDATION
    // -----------------------------

    const validateFile = (file) => {
        if (!file) {
            return "Please select a PDF file.";
        }

        const isPDF =
            file.type === "application/pdf" ||
            file.name.toLowerCase().endsWith(".pdf");

        if (!isPDF) {
            return "Only PDF files are allowed.";
        }

        if (file.size > MAX_FILE_SIZE) {
            return "File size must be less than 10 MB.";
        }

        return "";
    };

    // -----------------------------
    // SELECT FILE
    // -----------------------------

    const handleFileSelect = (file) => {
        setError("");
        setUploaded(false);
        setProgress(0);

        if (!file) {
            return;
        }

        const validationError = validateFile(file);

        if (validationError) {
            setSelectedFile(null);
            setError(validationError);

            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }

            return;
        }

        setSelectedFile(file);
    };

    // -----------------------------
    // FILE INPUT
    // -----------------------------

    const handleInputChange = (event) => {
        const file = event.target.files?.[0];

        handleFileSelect(file);
    };

    // -----------------------------
    // CHOOSE FILE BUTTON
    // -----------------------------

    const handleChooseFile = () => {
        if (uploading) {
            return;
        }

        fileInputRef.current?.click();
    };

    // -----------------------------
    // DRAG & DROP
    // -----------------------------

    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (uploading) {
            return;
        }

        const file = event.dataTransfer.files?.[0];

        handleFileSelect(file);
    };

    // -----------------------------
    // REMOVE FILE
    // -----------------------------

    const handleRemoveFile = () => {
        if (uploading) {
            return;
        }

        setSelectedFile(null);
        setError("");
        setProgress(0);
        setUploaded(false);

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    // -----------------------------
    // DEMO UPLOAD
    // -----------------------------

    const handleUpload = () => {
        if (!selectedFile) {
            setError("Please select a PDF file first.");
            return;
        }

        setError("");
        setUploaded(false);
        setUploading(true);
        setProgress(0);

        let currentProgress = 0;

        const interval = setInterval(() => {
            currentProgress += 10;

            setProgress(currentProgress);

            if (currentProgress >= 100) {
                clearInterval(interval);

                setTimeout(() => {
                    setUploading(false);
                    setUploaded(true);
                }, 300);
            }
        }, 150);
    };

    // -----------------------------
    // FILE SIZE
    // -----------------------------

    const formatFileSize = (bytes) => {
        if (bytes < 1024 * 1024) {
            return `${(bytes / 1024).toFixed(1)} KB`;
        }

        return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    };

    return (
        <main className="pdf-upload-page">

            {/* =========================================
                HEADER
            ========================================= */}

            <section className="pdf-upload-header">

                <div className="pdf-upload-header-content">

                    <span className="pdf-upload-eyebrow">
                        RESEARCH DOCUMENTS
                    </span>

                    <h1>
                        Upload a paper.
                        <br />
                        <em>Start understanding.</em>
                    </h1>

                    <p>
                        Upload a research paper to prepare it for
                        summarization, analysis, and AI-assisted research.
                    </p>

                </div>

                <div className="pdf-upload-header-note">

                    <span>SUPPORTED FORMAT</span>

                    <strong>PDF</strong>

                    <small>
                        Maximum file size: 10 MB
                    </small>

                </div>

            </section>


            {/* =========================================
                MAIN LAYOUT
            ========================================= */}

            <section className="pdf-upload-layout">

                <div className="pdf-upload-main">

                    {/* IMPORTANT:
                        This is the actual hidden file input.
                        Choose PDF File button triggers this input.
                    */}

                    <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,application/pdf"
                        onChange={handleInputChange}
                        className="pdf-hidden-input"
                    />


                    {/* =====================================
                        DROP ZONE
                    ===================================== */}

                    <div
                        className={`pdf-drop-zone ${selectedFile ? "has-file" : ""
                            } ${uploading ? "is-uploading" : ""
                            }`}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                    >

                        {!selectedFile ? (

                            <div className="pdf-empty-state">

                                <div className="pdf-upload-icon">

                                    <svg
                                        viewBox="0 0 64 64"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M16 7h23l10 10v40H16z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                        />

                                        <path
                                            d="M39 7v12h10"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                        />

                                        <path
                                            d="M32 45V27"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                        />

                                        <path
                                            d="M25 34l7-7 7 7"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                </div>


                                <h2>
                                    Drop your research paper here
                                </h2>

                                <p>
                                    Drag and drop a PDF file into this area,
                                    or choose one from your computer.
                                </p>


                                <button
                                    type="button"
                                    className="pdf-choose-button"
                                    onClick={handleChooseFile}
                                >
                                    Choose PDF File
                                </button>


                                <span className="pdf-upload-limit">
                                    PDF only · Maximum 10 MB
                                </span>

                            </div>

                        ) : (

                            <div className="pdf-selected-file">

                                <div className="pdf-file-icon">
                                    PDF
                                </div>


                                <div className="pdf-file-info">

                                    <span className="pdf-file-label">
                                        SELECTED DOCUMENT
                                    </span>

                                    <strong>
                                        {selectedFile.name}
                                    </strong>

                                    <small>
                                        {formatFileSize(
                                            selectedFile.size
                                        )}
                                    </small>

                                </div>


                                <button
                                    type="button"
                                    className="pdf-remove-button"
                                    onClick={handleRemoveFile}
                                    disabled={uploading}
                                >
                                    Remove
                                </button>

                            </div>

                        )}

                    </div>


                    {/* =====================================
                        ERROR
                    ===================================== */}

                    {error && (

                        <div className="pdf-message pdf-error">

                            <div className="pdf-message-icon">
                                !
                            </div>

                            <div>
                                <strong>
                                    Upload issue
                                </strong>

                                <span>
                                    {error}
                                </span>
                            </div>

                        </div>

                    )}


                    {/* =====================================
                        UPLOAD PROGRESS
                    ===================================== */}

                    {uploading && (

                        <div className="pdf-progress-card">

                            <div className="pdf-progress-top">

                                <span>
                                    Preparing your document...
                                </span>

                                <strong>
                                    {progress}%
                                </strong>

                            </div>


                            <div className="pdf-progress-track">

                                <span
                                    style={{
                                        width: `${progress}%`,
                                    }}
                                />

                            </div>


                            <p>
                                Your PDF is being prepared for
                                research analysis.
                            </p>

                        </div>

                    )}


                    {/* =====================================
                        SUCCESS
                    ===================================== */}

                    {uploaded && (

                        <div className="pdf-message pdf-success">

                            <div className="pdf-message-icon">
                                ✓
                            </div>

                            <div>

                                <strong>
                                    Document ready
                                </strong>

                                <span>
                                    Your paper has been uploaded
                                    successfully. AI analysis will be
                                    connected when the backend service
                                    is available.
                                </span>

                            </div>

                        </div>

                    )}


                    {/* =====================================
                        UPLOAD BUTTON
                    ===================================== */}

                    {!uploading &&
                        !uploaded &&
                        selectedFile && (

                            <button
                                type="button"
                                className="pdf-upload-button"
                                onClick={handleUpload}
                            >
                                Upload & Prepare Paper
                                <span>→</span>
                            </button>

                        )}


                    {/* =====================================
                        CHANGE FILE
                    ===================================== */}

                    {!uploading &&
                        uploaded && (

                            <div className="pdf-after-upload-actions">

                                <button
                                    type="button"
                                    className="pdf-secondary-button"
                                    onClick={handleRemoveFile}
                                >
                                    Upload Another Paper
                                </button>

                                <Link
                                    to="/my-research"
                                    className="pdf-upload-button"
                                >
                                    Open My Research
                                    <span>→</span>
                                </Link>

                            </div>

                        )}

                </div>


                {/* =========================================
                    SIDEBAR
                ========================================= */}

                <aside className="pdf-upload-sidebar">


                    {/* WHAT HAPPENS NEXT */}

                    <div className="pdf-sidebar-card">

                        <span className="pdf-sidebar-label">
                            WHAT HAPPENS NEXT
                        </span>


                        <div className="pdf-step">

                            <span>01</span>

                            <div>
                                <strong>
                                    Upload
                                </strong>

                                <p>
                                    Add your research paper
                                    as a PDF.
                                </p>
                            </div>

                        </div>


                        <div className="pdf-step">

                            <span>02</span>

                            <div>
                                <strong>
                                    Analyze
                                </strong>

                                <p>
                                    Prepare the document
                                    for AI analysis.
                                </p>
                            </div>

                        </div>


                        <div className="pdf-step">

                            <span>03</span>

                            <div>
                                <strong>
                                    Understand
                                </strong>

                                <p>
                                    Explore summaries,
                                    findings, and answers.
                                </p>
                            </div>

                        </div>

                    </div>


                    {/* AI CARD */}

                    <div className="pdf-sidebar-card pdf-ai-card">

                        <span className="pdf-sidebar-label">
                            RESEARCH AI
                        </span>

                        <h3>
                            Turn papers into understanding.
                        </h3>

                        <p>
                            Once connected to the backend, uploaded
                            papers can be used for summaries,
                            questions, key findings, and research
                            assistance.
                        </p>

                        <Link
                            to="/chat"
                            className="pdf-ai-link"
                        >
                            Open Research AI →
                        </Link>

                    </div>


                    {/* FILE INFO */}

                    <div className="pdf-sidebar-note">

                        <span>
                            SUPPORTED FILE
                        </span>

                        <strong>
                            PDF documents
                        </strong>

                        <p>
                            Maximum file size is 10 MB.
                            Your document will be processed
                            securely when backend processing
                            is connected.
                        </p>

                    </div>

                </aside>

            </section>


            {/* =========================================
                BOTTOM SECTION
            ========================================= */}

            <section className="pdf-upload-bottom">

                <div>

                    <span>
                        RESEARCH WORKSPACE
                    </span>

                    <h2>
                        Keep your papers organized.
                    </h2>

                    <p>
                        Uploaded documents can become part
                        of your wider research workflow.
                    </p>

                </div>


                <Link
                    to="/my-research"
                    className="pdf-bottom-button"
                >
                    Open My Research →
                </Link>

            </section>

        </main>
    );
}

export default PDFUpload;