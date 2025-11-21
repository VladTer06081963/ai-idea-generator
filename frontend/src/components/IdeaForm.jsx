import React, { useState } from 'react';
import axios from 'axios';

const IdeaForm = ({ onResult, onError }) => {
    const [problem, setProblem] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!problem.trim()) return;

        setLoading(true);
        onResult(null); // Clear previous result
        onError(null);

        try {
            const response = await axios.post('/brainstorm', { problem });
            console.log('API Response:', response.data);

            if (response.data && response.data.success) {
                onResult(response.data);
            } else {
                console.error('Invalid response format:', response.data);
                onError('Failed to generate idea. Invalid response format.');
            }
        } catch (err) {
            console.error('API Error:', err);
            onError(err.response?.data?.message || err.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="idea-form-container">
            <form onSubmit={handleSubmit} className="idea-form">
                <div className="input-group">
                    <label htmlFor="problem">What problem do you want to solve?</label>
                    <textarea
                        id="problem"
                        value={problem}
                        onChange={(e) => setProblem(e.target.value)}
                        placeholder="e.g., How to make learning programming fun for cats..."
                        rows={3}
                        disabled={loading}
                    />
                </div>
                <button type="submit" disabled={loading || !problem.trim()} className="submit-btn">
                    {loading ? (
                        <span className="loading-text">Brainstorming... 🧠</span>
                    ) : (
                        'Generate Ideas 🚀'
                    )}
                </button>
            </form>
        </div>
    );
};

export default IdeaForm;
