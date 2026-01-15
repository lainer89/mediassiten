'use client'

import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Mail, CheckCircle, Users, Gift, Bell } from "lucide-react"
import { useState } from "react"

const benefits = [
    { icon: Gift, text: "Acceso gratuito de por vida al plan beta" },
    { icon: Bell, text: "Primero en probar nuevas funciones" },
    { icon: Users, text: "Únete a +500 early adopters en LATAM" },
]

export function Waitlist() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!email || !email.includes('@')) {
            setStatus('error')
            setMessage('Por favor ingresa un email válido')
            return
        }

        setStatus('loading')

        // Simular registro (aquí conectaremos con la BD)
        try {
            // TODO: Conectar con API del servidor
            await new Promise(resolve => setTimeout(resolve, 1500))
            setStatus('success')
            setMessage('¡Excelente! Te hemos agregado a la lista. Pronto recibirás noticias.')
            setEmail('')
        } catch (error) {
            setStatus('error')
            setMessage('Hubo un error. Por favor intenta de nuevo.')
        }
    }

    return (
        <section id="waitlist" className="py-24 relative overflow-hidden scroll-mt-20">
            {/* Vibrant Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50"></div>
                <motion.div
                    className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-teal-200/50 to-cyan-200/30 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-pink-200/30 to-orange-200/20 rounded-full blur-3xl"
                    animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.6, 0.4] }}
                    transition={{ duration: 8, repeat: Infinity, delay: 2 }}
                />
            </div>

            <Container className="max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center"
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 bg-white/80 backdrop-blur-sm text-teal-700 rounded-full text-sm font-semibold border border-teal-200 shadow-lg shadow-teal-100/50"
                        animate={{ boxShadow: ["0 10px 40px -10px rgba(20, 184, 166, 0.3)", "0 10px 40px -10px rgba(20, 184, 166, 0.5)", "0 10px 40px -10px rgba(20, 184, 166, 0.3)"] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <Sparkles className="w-4 h-4 text-teal-500" />
                        Cupos Limitados para Beta
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                        ¿Listo para tomar el{" "}
                        <span className="bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                            control
                        </span>
                        ?
                    </h2>

                    <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                        Únete a nuestra lista de espera y sé de los primeros en probar MedAssist.
                        <span className="text-gray-900 font-semibold"> Es gratis durante la beta.</span>
                    </p>
                </motion.div>

                {/* Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-12"
                >
                    <div className="relative p-8 sm:p-12 bg-white rounded-3xl shadow-2xl shadow-teal-100/50 border border-teal-100">
                        {/* Decorative corner */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-100 to-transparent rounded-bl-[100px] rounded-tr-3xl"></div>

                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-8"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", delay: 0.2 }}
                                    className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6"
                                >
                                    <CheckCircle className="w-10 h-10 text-white" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Estás en la lista! 🎉</h3>
                                <p className="text-gray-600">{message}</p>
                            </motion.div>
                        ) : (
                            <>
                                <form onSubmit={handleSubmit} className="relative">
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="flex-1 relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="tu@email.com"
                                                className="w-full h-14 pl-12 pr-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:border-teal-400 focus:bg-white focus:outline-none transition-all"
                                                disabled={status === 'loading'}
                                            />
                                        </div>
                                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                            <Button
                                                type="submit"
                                                size="lg"
                                                disabled={status === 'loading'}
                                                className="w-full sm:w-auto h-14 px-8 text-base font-semibold rounded-2xl bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 shadow-lg shadow-teal-200 hover:shadow-xl hover:shadow-teal-300 transition-all disabled:opacity-70"
                                            >
                                                {status === 'loading' ? (
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                    />
                                                ) : (
                                                    <>
                                                        Unirme a la Beta
                                                        <ArrowRight className="ml-2 h-5 w-5" />
                                                    </>
                                                )}
                                            </Button>
                                        </motion.div>
                                    </div>

                                    {status === 'error' && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-3 text-sm text-red-500"
                                        >
                                            {message}
                                        </motion.p>
                                    )}
                                </form>

                                {/* Benefits */}
                                <div className="mt-8 pt-8 border-t border-gray-100">
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        {benefits.map((benefit, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 + index * 0.1 }}
                                                className="flex items-center gap-3 text-sm text-gray-600"
                                            >
                                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center flex-shrink-0">
                                                    <benefit.icon className="w-4 h-4 text-teal-600" />
                                                </div>
                                                <span>{benefit.text}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </motion.div>

                {/* Privacy note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 text-center text-sm text-gray-500"
                >
                    🔒 No compartiremos tu email. Sin spam, lo prometemos.
                </motion.p>
            </Container>
        </section>
    )
}
