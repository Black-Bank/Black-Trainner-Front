// src/pages/User.tsx
import { useLocation } from 'react-router-dom'; 
import React from 'react';
import './User.css'; // Importando o arquivo CSS

const User = () => {
    const location = useLocation();
    const { user } = location.state as { user: User };

    return (
        <div className="user-container">
            <div className="user-header">
                <h1>User Page</h1>
            </div>
            {user ? (
                <div className="user-details">
                    <p><strong>Nome:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Endereço:</strong> {user.address.street}, {user.address.city}</p>
                    <p><strong>Telefone:</strong> {user.phone}</p>
                </div>
            ) : (
                <p>Nenhum usuário encontrado.</p>
            )}
        </div>
    );
};

export default User;
