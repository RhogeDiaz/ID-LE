import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type RegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

interface RegisterProps {
    status?: string;
}

export default function Register({ status }: RegisterProps) {
    const { data, setData, post, processing, errors } = useForm<Required<RegisterForm>>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <div className="bg-white text-[#1b1b18] min-h-screen flex md:px-8">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-white md:bg-[#2563EB] text-black md:text-white shadow-md z-10">
                <img src="/brandLogo.png" alt="Brand Logo" className="h-8 md:h-10" />
            </header>

            {/* Left Section: Header Content */}
            <div className="hidden lg:flex flex-1 items-center justify-center text-[#0F172A] p-8">
                <h2 className="text-5xl font-semibold">
                    Start Unlocking Effective Learning Techniques With Us.
                </h2>
            </div>
            {/* Right Section: Form */}
            <div className="flex flex-col w-full lg:w-1/2 items-center justify-center p-8">
                <Head title="Register" />
                <form className="flex flex-col w-3/4 gap-6 border-4 p-14 rounded-2xl text-white bg-[#0F172A]" onSubmit={submit}>
                    <div className="grid gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                type="text"
                                required
                                autoFocus
                                tabIndex={1}
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                placeholder="Your Name"
                                className="bg-white rounded-2xl text-black"
                            />
                            <InputError message={errors.name} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="email">Email address</Label>
                            <Input
                                id="email"
                                type="email"
                                required
                                tabIndex={2}
                                autoComplete="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="email@example.com"
                                className="bg-white rounded-2xl text-black"
                            />
                            <InputError message={errors.email} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    tabIndex={3}
                                    autoComplete="new-password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="Password"
                                    className="bg-white rounded-2xl text-black"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            <InputError message={errors.password} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password_confirmation">Confirm Password</Label>
                            <div className="relative">
                                <Input
                                    id="password_confirmation"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    required
                                    tabIndex={4}
                                    autoComplete="new-password"
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    placeholder="Confirm Password"
                                    className="bg-white rounded-2xl text-black"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            <InputError message={errors.password_confirmation} />
                        </div>

                        <Button
                            type="submit"
                            className="rounded-2xl mt-4 w-full bg-[#2563EB] text-white hover:bg-blue-700"
                            tabIndex={5}
                            disabled={processing}
                        >
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                            Register
                        </Button>
                    </div>

                    <div className="text-muted-foreground text-center text-sm">
                        Already have an account?{' '}
                        <TextLink href={route('login')} tabIndex={6}>
                            Log in
                        </TextLink>
                    </div>
                </form>

                {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}
            </div>
        </div>
    );
}
