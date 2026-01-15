'use client'

import { Container } from "@/components/layout/container"
import { motion, useScroll, useTransform } from "framer-motion"
import { Lock, EyeOff, FileText, KeyRound, Shield, Server, CheckCircle2 } from "lucide-react"
import { useRef } from "react"

const securityFeatures = [
    {
        icon: Lock,
        title: "Cifrado de Grado Bancario",
        description: "Tus datos están protegidos con cifrado AES-256, el mismo estándar que usan los bancos más seguros del mundo. Cada archivo se cifra antes de salir de tu dispositivo.",
        badge: "AES-256",
        color: "blue"
    },
    {
        icon: EyeOff,
        title: "Privacidad por Diseño",
        description: "Ningún humano en MedAssist ve tus exámenes. El análisis es 100% automatizado por IA. Tu información médica es solo tuya.",
        badge: "Zero-Access",
        color: "purple"
    },
    {
        icon: Server,
        title: "Infraestructura Segura",
        description: "Servidores certificados con estándares de seguridad internacionales. Respaldos automáticos y redundancia para garantizar que nunca pierdas tu información.",
        badge: "SOC 2",
        color: "emerald"
    },
    {
        icon: KeyRound,
        title: "Autenticación Robusta",
        description: "Protección de cuentas con autenticación moderna. Solo tú puedes acceder a tu bóveda de salud, desde cualquier dispositivo autorizado.",
        badge: "OAuth 2.0",
        color: "amber"
    },
]

const certifications = [
    "HIPAA Compliant Architecture",
    "GDPR Ready",
    "ISO 27001 Standards",
    "Datos en LATAM"
]

export function Security() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const scanLineX = useTransform(scrollYProgress, [0.2, 0.8], ["-100%", "200%"])

    return (
        <section
            ref={containerRef}
            id="seguridad"
            className="py-32 relative overflow-hidden scroll-mt-20"
        >
            {/* Dark Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>

            {/* Animated scan line */}
            <motion.div
                className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-blue-500/5 to-transparent pointer-events-none"
                style={{ x: scanLineX }}
            />

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

            <motion.div
                className="absolute top-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity, delay: 2 }}
            />

            <Container className="relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold border border-blue-500/30"
                        animate={{ boxShadow: ["0 0 20px rgba(59, 130, 246, 0.2)", "0 0 40px rgba(59, 130, 246, 0.4)", "0 0 20px rgba(59, 130, 246, 0.2)"] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <Shield className="w-4 h-4" />
                        Seguridad de Nivel Empresarial
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                        Tu información médica{" "}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                                blindada
                            </span>
                            <motion.div
                                className="absolute -inset-2 bg-blue-500/20 rounded-lg blur-xl -z-10"
                                animate={{ opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </span>
                    </h2>

                    <p className="mt-8 text-lg sm:text-xl text-slate-300 leading-relaxed">
                        La seguridad no es una característica adicional.{" "}
                        <span className="text-white font-semibold">Es el fundamento de nuestra plataforma.</span>{" "}
                        Cada decisión técnica prioriza la protección de tus datos.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {securityFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <motion.div
                                className="h-full p-8 bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 group relative overflow-hidden"
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.2)"
                                }}
                            >
                                {/* Animated border glow */}
                                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10"></div>

                                <div className="relative flex gap-6">
                                    <div className="flex-shrink-0">
                                        <motion.div
                                            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/30"
                                            whileHover={{ rotate: 5, scale: 1.1 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <feature.icon className="h-8 w-8 text-blue-400" />
                                        </motion.div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                                            <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs font-mono rounded border border-blue-500/30">
                                                {feature.badge}
                                            </span>
                                        </div>
                                        <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16"
                >
                    <div className="p-8 bg-slate-800/30 backdrop-blur-sm rounded-3xl border border-slate-700/50">
                        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                    className="flex items-center gap-2 text-slate-300"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                                    <span className="font-medium">{cert}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Data ownership message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full border border-emerald-500/30">
                        <FileText className="w-5 h-5 text-emerald-400" />
                        <p className="text-lg text-slate-300">
                            <span className="text-white font-semibold">Tus datos te pertenecen.</span>{" "}
                            Descárgalos o elimínalos permanentemente cuando quieras.
                        </p>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
