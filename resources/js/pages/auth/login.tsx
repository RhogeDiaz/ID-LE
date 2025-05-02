import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import { FaBars, FaUser, FaSignOutAlt, FaEye, FaEyeSlash } from 'react-icons/fa'; // Import necessary icons
import React, { useState } from 'react'; // Import React and useState

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="bg-white text-[#1b1b18] min-h-screen flex">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-white md:bg-[#2563EB] text-black md:text-white shadow-md z-10">
                <div className="text-xl font-bold">Logo</div>
            </header>

            {/* Left Section: Form */}
            <div className="flex flex-col w-full lg:w-1/2 items-center justify-center p-8">
                <Head title="Log in" />
                <form className="flex flex-col w-3/4 gap-6 border-4 p-14 pt-24 pb-24 rounded-2xl text-white bg-[#0F172A]" onSubmit={submit}>
                    <div className="grid gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email address</Label>
                            <Input
                                id="email"
                                type="email"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="email@example.com"
                                className="bg-white rounded-2xl text-black"
                            />
                            <InputError message={errors.email} />
                        </div>

                        <div className="grid gap-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                {canResetPassword && (
                                    <TextLink href={route('password.request')} className="text-sm" tabIndex={5}>
                                        Forgot password?
                                    </TextLink>
                                )}
                            </div>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'} 
                                    required
                                    tabIndex={2}
                                    autoComplete="current-password"
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

                        <div className="flex items-center space-x-3">
                            <Checkbox
                                id="remember"
                                name="remember"
                                checked={data.remember}
                                onClick={() => setData('remember', !data.remember)}
                                tabIndex={3}
                            />
                            <Label className="text-white" htmlFor="remember">Remember me</Label>
                        </div>

                        <Button
                            type="submit"
                            className=" rounded-2xl mt-4 w-full bg-[#2563EB] text-white hover:bg-blue-700"
                            tabIndex={4}
                            disabled={processing}
                        >
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                            Log in
                        </Button>
                    </div>

                    <div className="text-muted-foreground text-center text-sm">
                        Don't have an account?{' '}
                        <TextLink href={route('register')} tabIndex={5}>
                            Sign up
                        </TextLink>
                    </div>
                </form>

                {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}
            </div>

            {/* Right Section: Header Content */}
            <div className="hidden lg:flex flex-1 items-center justify-center text-[#0F172A] p-8">
                <h2 className=" text-5xl font-semibold">
                    Welcome back! Let's resume where we left off!
                </h2>
            </div>
        </div>
    );
}
