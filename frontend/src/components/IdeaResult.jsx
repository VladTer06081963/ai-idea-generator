import React from 'react';
import ReactMarkdown from 'react-markdown';

const IdeaResult = ({ result }) => {
    if (!result) return null;

    return (
        <div className="idea-result-card">
            <div className="result-header">
                <h3>✨ Innovation Generated</h3>
                <div className="original-problem">
                    <strong>Problem:</strong> {result.originalProblem}
                </div>
            </div>
            <div className="result-content">
                <ReactMarkdown>{result.finalSolution}</ReactMarkdown>
            </div>
            <div className="result-footer">
                Session ID: {result.sessionId}
            </div>
        </div>
    );
};

export default IdeaResult;
