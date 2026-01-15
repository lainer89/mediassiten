'use client'

import { Container } from "@/components/layout/container"
import { motion } from "framer-motion"
import { Lock, EyeOff, FileText, KeyRound, Shield } from "lucide-react"

const securityFeatures = [
    {
        icon: Lock,
        title: "Tus datos viajan y descansan seguros",
        description: "Utilizamos cifrado de nivel bancario (AES-256) tanto cuando subes un archivo como cuando lo almacenamos. Nadie más puede acceder a tu información.",
    },
    {
        icon: EyeOff,
        title: "Privacidad desde el diseño",
        description: "Nadie en MedAssist revisa tus exámenes. El análisis es completamente automatizado y existe únicamente para ayudarte a entender mejor tu salud.",
    },
    {
        icon: FileText,
        title: "Tú decides qué hacer con tu información",
        description: "Tu historial te pertenece. Puedes revisarlo, descargarlo o eliminarlo permanentemente cuando quieras. Sin letra chica ni sorpresas.",
    },
    {
        icon: KeyRound,
        title: "Acceso protegido",
        description: "Tu cuenta está protegida con estándares modernos de autenticación. Solo tú puedes acceder a tu bóveda, incluso si usas distintos dispositivos.",
    },
]

export function Security() {
    return (
        <section id="seguridad" className="py-28 relative overflow-hidden scroll-mt-20">
            {/* Dark Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800"></div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

            <Container className="relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
                        <Shield className="w-4 h-4" />
                        Seguridad y privacidad
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                        La seguridad no es un extra.
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Es lo que hace posible esta ayuda.
                        </span>
                    </h2>

                    <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                        Construimos MedAssist pensando en la privacidad desde el primer día.
                        Tu tranquilidad es nuestra prioridad.
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
                            <div className="h-full flex gap-6 p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:bg-slate-800/70">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/20">
                                        <feature.icon className="h-7 w-7 text-blue-400" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
