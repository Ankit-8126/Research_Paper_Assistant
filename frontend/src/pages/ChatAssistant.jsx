import { useState } from "react";
import "../styles/chat-assistant.css";

function ChatAssistant() {
    const [message, setMessage] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const initialMessage = {
        id: 1,
        type: "ai",
        text:
            "Hello! I'm your Research AI Assistant. Ask me anything about your research papers or research topic.",
    };

    const [messages, setMessages] = useState([initialMessage]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const trimmedMessage = message.trim();

        if (!trimmedMessage || isTyping) {
            return;
        }

        const userMessage = {
            id: Date.now(),
            type: "user",
            text: trimmedMessage,
        };

        setMessages((prev) => [...prev, userMessage]);
        setMessage("");
        setIsTyping(true);

        setTimeout(() => {
            const aiMessage = {
                id: Date.now() + 1,
                type: "ai",
                text:
                    "I'm currently running in demo mode. Once the backend is connected, I will provide AI-powered answers based on your research papers.",
            };

            setMessages((prev) => [...prev, aiMessage]);
            setIsTyping(false);
        }, 1000);
    };

    const handleClearChat = () => {
        setMessages([initialMessage]);
        setMessage("");
        setIsTyping(false);
    };

    const handleSuggestion = (suggestion) => {
        setMessage(suggestion);
    };

    return (
        <main className="chat-page">
            <div className="chat-header">
                <div>
                    <span className="chat-label">
                        AI RESEARCH ASSISTANT
                    </span>

                    <h1>Research AI Assistant</h1>

                    <p>
                        Ask questions, understand papers, and get help
                        with your research.
                    </p>
                </div>

                <div className="chat-header-actions">
                    <div className="ai-status">
                        <span></span>
                        AI Assistant
                    </div>

                    <button
                        type="button"
                        className="clear-chat-button"
                        onClick={handleClearChat}
                    >
                        Clear Chat
                    </button>
                </div>
            </div>

            <section className="chat-container">
                <div className="chat-messages">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`message-row ${msg.type}`}
                        >
                            <div className="message-avatar">
                                {msg.type === "ai" ? "🤖" : "👤"}
                            </div>

                            <div className="message-bubble">
                                <p>{msg.text}</p>
                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div className="message-row ai">
                            <div className="message-avatar">
                                🤖
                            </div>

                            <div className="message-bubble typing-bubble">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    )}
                </div>

                <form
                    className="chat-input-area"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        placeholder="Ask something about your research..."
                        value={message}
                        onChange={(e) =>
                            setMessage(e.target.value)
                        }
                        disabled={isTyping}
                    />

                    <button
                        type="submit"
                        disabled={
                            !message.trim() || isTyping
                        }
                    >
                        {isTyping ? "..." : "Send"}
                    </button>
                </form>
            </section>

            <div className="suggestion-section">
                <p>Try asking:</p>

                <div className="suggestions">
                    <button
                        type="button"
                        onClick={() =>
                            handleSuggestion(
                                "Summarize this research paper"
                            )
                        }
                    >
                        Summarize a paper
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            handleSuggestion(
                                "What are the key findings?"
                            )
                        }
                    >
                        Find key findings
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            handleSuggestion(
                                "Explain this research topic"
                            )
                        }
                    >
                        Explain a topic
                    </button>
                </div>
            </div>
        </main>
    );
}

export default ChatAssistant;