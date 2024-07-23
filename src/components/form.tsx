'use client';

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from './Form.module.css';

const schema = z.object({
    name: z.string().min(3, 'Nome Inválido'),
    Email: z.string().email('Email Inválido'),
    Password: z.string().min(8, 'Senha muito fraca')
});

export default function FormPaga() {
    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
        mode: "all",
        criteriaMode: "all",
        defaultValues: {
            name: '',
            Email: '',
            Password: ''
        }
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.Container}>
            <div>
                <h2>Formulário</h2>
                <input {...register("name")} placeholder="Nome" />
                {errors.name && <p className={styles.Error}>{errors.name.message}</p>}

                <input {...register("Email")} placeholder="Email" />
                {errors.Email && <p className={styles.Error}>{errors.Email.message}</p>}

                <input {...register("Password")} type="password" placeholder="Password" />
                {errors.Password && <p className={styles.Error}>{errors.Password.message}</p>}

                <button type="submit">Enviar</button>
            </div>
        </form>
    );
}
