'use client'

import { Container } from "@/components/layout/container"
import { motion } from "framer-motion"
import { UploadCloud, Sparkles, TrendingUp, MessageCircle, ArrowRight, Lightbulb } from "lucide-react"

const steps = [
    {
        number: "01",
        icon: UploadCloud,
        title: "Sube tu examen",
        description: "Toma una foto o sube el PDF de tus resultados. Acepta los formatos más comunes de laboratorios en LATAM.",
        detail: "La imagen o documento se procesa de forma segura y se almacena cifrado en tu bóveda personal.",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        number: "02",
        icon: Sparkles,
        title: "Recibe explicaciones claras",
        description: "Nuestra inteligencia artificial analiza cada valor y te explica qué significa en palabras simples.",
        detail: "No más googlear términos médicos. Entiende al instante si algo está normal, alto o bajo, y por qué importa.",
        gradient: "from-violet-500 to-purple-500",
    },
    {
        number: "03",
        icon: TrendingUp,
        title: "Compara tu evolución",
        description: "Visualiza cómo han cambiado tus valores a lo largo del tiempo con gráficos claros y alertas útiles.",
        detail: "Detecta tendencias positivas o negativas antes de que se conviertan en problemas.",
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        number: "04",
        icon: MessageCircle,
        title: "Consulta cuando quieras",
        description: "Accede a tu historial desde cualquier dispositivo. Pronto disponible vía WhatsApp y Telegram.",
        detail: "Prepara mejor tus consultas médicas con información organizada y preguntas sugeridas.",
        gradient: "from-orange-500 to-amber-500",
        badge: "Próximamente",
    },
]

export function Solution() {
    return (
        <section id="como-funciona" className="py-28 relative overflow-hidden scroll-mt-20">
            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        <Lightbulb className="w-4 h-4" />
                        La solución
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
                        Simple, rápido y seguro
                    </h2>

                    <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                        Transforma documentos médicos confusos en información clara y accionable.
                        Sin complicaciones.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="space-y-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-10 p-8 lg:p-10 bg-background rounded-3xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-xl group">
                                {/* Number & Icon */}
                                <div className="flex-shrink-0 flex items-start gap-6">
                                    <span className="text-6xl lg:text-7xl font-bold text-muted/30 group-hover:text-primary/20 transition-colors">
                                        {step.number}
                                    </span>
                                    <div className={`relative w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                                        <step.icon className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                                        {step.badge && (
                                            <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-amber-500 text-white text-[10px] font-bold rounded-full">
                                                {step.badge}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                                    <p className="text-lg text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                                    <p className="text-muted-foreground/80 leading-relaxed flex items-start gap-2">
                                        <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        {step.detail}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
