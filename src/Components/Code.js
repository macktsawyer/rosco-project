import React, { useEffect } from 'react';
import Prism from 'prismjs';

export default function Code ({ code, language }) {
    useEffect(() => {
        Prism.highlightAll();
    },[]);

    return (
        <div>
            <h2>
                Code syntax in {language}
            </h2>
            <pre>
                <code className={`language-${language}`}>{code}</code>
            </pre>
        </div>
    )
}

