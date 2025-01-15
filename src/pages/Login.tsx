import React, { useState } from 'react';

interface LoginFormData {
    username: string;
    password: string;
}

const Login: React.FC = () => {
    const [formData, setFormData] = useState<LoginFormData>({ username: '', password: '' });
    const [error, setError] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.username || !formData.password) {
        setError('Both fields are required.');
        } else {
        setError('');
        console.log('Form submitted:', formData);
        // Handle form submission (API call or authentication logic)
        }
    };

    return (
    <div className="login-container">
        <div className="logo">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0f4bca61-54d2-4724-b6a5-c3b63d4c3050/dg8fqga-fcdd64ea-4bc6-4420-b6d5-e70d7752c4a7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBmNGJjYTYxLTU0ZDItNDcyNC1iNmE1LWMzYjYzZDRjMzA1MFwvZGc4ZnFnYS1mY2RkNjRlYS00YmM2LTQ0MjAtYjZkNS1lNzBkNzc1MmM0YTcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HfNurogvF56SnLCywGNUg3losXKT-dl-1WYFcC5ukp4" alt="Logo" />
        </div>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Email or phone"
            required
            />
            <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            required
            />
            {error && <div className="error">{error}</div>}
            <button type="submit">Next</button>
        </form>
        <div className="footer">
            <span>Forgot email?</span>
            <span>Need help?</span>
        </div>
        <style>
        {`
    .login-container {
    max-width: 360px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    text-align: center;
    }

    .logo img {
    max-width: 180px;
    margin-bottom: 20px;
    }

    h2 {
    font-size: 24px;
    color: #202124;
    margin-bottom: 20px;
    }

    input {
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    box-sizing: border-box;
    }

    button {
    width: 100%;
    padding: 12px;
    background-color: #1a73e8;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
    }

    button:hover {
    background-color: #1558b0;
    }

    .error {
    color: red;
    font-size: 14px;
    margin-top: 10px;
    }

    .footer {
    margin-top: 20px;
    font-size: 14px;
    color: #5f6368;
    }

    .footer span {
    margin: 0 10px;
    cursor: pointer;
    }

    .footer span:hover {
    text-decoration: underline;
    }

        `}
        </style>
    </div>
    );
};

export default Login;
