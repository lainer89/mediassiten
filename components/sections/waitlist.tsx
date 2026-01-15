'use client'

import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, CheckCircle, Gift, Bell, Users } from "lucide-react"
import { useState } from "react"

const benefits = [
    { icon: Gift, text: "Acceso gratuito de por vida al plan beta" },
    { icon: Bell, text: "Primero en probar nuevas funciones" },
    { icon: Users, text: "Sé parte de la comunidad fundadora" },
]

export function Waitlist() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!email || !email.includes('@') || !email.includes('.')) {
            setStatus('error')
            setMessage('Por favor ingresa un email válido')
            return
        }

        setStatus('loading')

        const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK

        try {
            if (webhookUrl) {
                await fetch(webhookUrl, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, source: 'Landing Page Beta' })
                })
            }

            setStatus('success')
            setMessage('¡Te hemos agregado a la lista!')
            setEmail('')
        } catch {
            setStatus('error')
            setMessage('Hubo un error. Por favor intenta de nuevo.')
        }
    }

    return (
        <section id="waitlist" className="py-20 bg-teal-50 scroll-mt-20">
            <Container className="max-w-2xl">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Únete a la Beta
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Sé de los primeros en probar MedAssist. Es gratis durante la beta.
                    </p>
                </div>

                <div className="mt-10 bg-white p-8 rounded-xl shadow-sm">
                    {status === 'success' ? (
                        <div className="text-center py-4">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-8 h-8 text-teal-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">¡Estás en la lista!</h3>
                            <p className="mt-2 text-gray-600">{message}</p>
                        </div>
                    ) : (
                        <>
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-1 relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="tu@email.com"
                                        className="w-full h-12 pl-12 pr-4 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:outline-none"
                                        disabled={status === 'loading'}
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="btn-primary h-12 px-6 font-semibold rounded-lg"
                                >
                                    {status === 'loading' ? 'Enviando...' : 'Unirme'}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </form>

                            {status === 'error' && (
                                <p className="mt-3 text-sm text-red-600">{message}</p>
                            )}

                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <div className="grid sm:grid-cols-3 gap-4">
                                    {benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <benefit.icon className="w-4 h-4 text-teal-600" />
                                            <span>{benefit.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>

                <p className="mt-4 text-center text-sm text-gray-500">
                    No compartiremos tu email. Sin spam.
                </p>
            </Container>
        </section>
    )
}
