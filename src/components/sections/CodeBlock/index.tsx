import React from 'react';
import { Box, Typography } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
    code: string; // The code to display
    language: string; // Programming language for syntax highlighting
    title?: string; // Optional title for the code block
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, title }) => {
    return (
        <Box
            sx={{
                backgroundColor: '#1e1e1e',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 3,
                mb: 3
            }}
        >
            {title && (
                <Typography
                    variant="subtitle2"
                    sx={{
                        backgroundColor: '#333',
                        color: '#fff',
                        px: 2,
                        py: 1,
                        borderBottom: '1px solid #444',
                        fontFamily: 'monospace'
                    }}
                >
                    {title}
                </Typography>
            )}
            <SyntaxHighlighter
                language={language}
                style={oneDark}
                customStyle={{
                    margin: 0,
                    padding: '16px',
                    fontSize: '0.875rem'
                }}
            >
                {code}
            </SyntaxHighlighter>
        </Box>
    );
};

export default CodeBlock;
