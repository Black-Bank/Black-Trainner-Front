// src/components/FormPaga.tsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate do react-router-dom
import styles from './Form.module.css';

const schema = z.object({
    name: z.string().min(3, 'Nome Inválido'),
    Email: z.string().email('Email Inválido'),
    Password: z.string().min(8, 'Senha muito fraca')
});

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        city: string;
    };
    phone: string;
};

export default function FormPaga() {
    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
        mode: 'all',
        criteriaMode: 'all',
        defaultValues: {
            name: '',
            Email: '',
            Password: ''
        }
    });

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const onSubmit = async (data: any) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const result: User[] = await response.json();
            const user = result.find((user) => user.email === data.Email);

            if (user) {
                navigate('/user', { state: { user } });
            } else {
                setError('Usuário não encontrado.');
            }
        } catch (err) {
            setError('Erro ao buscar dados do usuário.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.Container}>
                <div>
                    <h2>Formulário</h2>
                    <input {...register('name')} placeholder="Nome" />
                    {errors.name && <p className={styles.Error}>{errors.name.message}</p>}

                    <input {...register('Email')} placeholder="Email" />
                    {errors.Email && <p className={styles.Error}>{errors.Email.message}</p>}

                    <input {...register('Password')} type="password" placeholder="Password" />
                    {errors.Password && <p className={styles.Error}>{errors.Password.message}</p>}
                    <button type="submit">Buscar Usuario</button>
                </div>
            </form>

            {loading && <p>Carregando...</p>}
            {error && <p className={styles.Error}>{error}</p>}
        </div>
    );
}
