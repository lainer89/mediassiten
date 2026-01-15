'use client'

import { Container } from "@/components/layout/container"
import { Lock, EyeOff, Server, KeyRound, Shield } from "lucide-react"

const features = [
    {
        icon: Lock,
        title: "Cifrado AES-256",
        description: "Tus datos protegidos con el mismo estándar que usan los bancos."
    },
    {
        icon: EyeOff,
        title: "Privacidad Total",
        description: "Ningún humano en MedAssist ve tus exámenes. El análisis es automático."
    },
    {
        icon: Server,
        title: "Servidores Seguros",
        description: "Infraestructura con respaldos automáticos y redundancia."
    },
    {
        icon: KeyRound,
        title: "Tu Control",
        description: "Descarga o elimina tus datos permanentemente cuando quieras."
    },
]

export function Security() {
    return (
        <section id="seguridad" className="py-20 bg-gray-50 scroll-mt-20">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-100 rounded-2xl mb-6">
                        <Shield className="w-7 h-7 text-teal-600" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Tu información protegida
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        La seguridad es el fundamento de nuestra plataforma.
                        Tanto para personas como para empresas.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl border border-gray-200">
                            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                                <feature.icon className="w-5 h-5 text-teal-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                            <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <p className="text-sm text-gray-500">
                        Arquitectura basada en HIPAA • Diseñado para cumplir GDPR • Datos alojados en LATAM
                    </p>
                </div>
            </Container>
        </section>
    )
}
