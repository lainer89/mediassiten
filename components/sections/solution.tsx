'use client'

import { Container } from "@/components/layout/container"
import { motion, useScroll, useTransform } from "framer-motion"
import { UploadCloud, Sparkles, TrendingUp, MessageCircle, ArrowRight, Lightbulb, Zap, Brain, BarChart3, Bell } from "lucide-react"
import { useRef } from "react"

const steps = [
    {
        number: "01",
        icon: UploadCloud,
        title: "Sube tu Examen",
        subtitle: "En segundos, no minutos",
        description: "Toma una foto o sube el PDF de tus resultados. Nuestro sistema reconoce automáticamente los formatos de los principales laboratorios de Latinoamérica.",
        features: [
            "Reconocimiento óptico inteligente (OCR)",
            "Compatible con +50 laboratorios LATAM",
            "Cifrado inmediato al subir"
        ],
        gradient: "from-blue-500 to-cyan-500",
        bgGradient: "from-blue-500/10 to-cyan-500/5",
    },
    {
        number: "02",
        icon: Brain,
        title: "IA Analiza tus Resultados",
        subtitle: "Interpretación clínica avanzada",
        description: "Nuestra inteligencia artificial, entrenada con estándares médicos internacionales, analiza cada biomarcador y genera explicaciones personalizadas.",
        features: [
            "Basado en guías clínicas actualizadas",
            "Contextualiza según tu perfil",
            "Identifica valores fuera de rango"
        ],
        gradient: "from-violet-500 to-purple-500",
        bgGradient: "from-violet-500/10 to-purple-500/5",
    },
    {
        number: "03",
        icon: BarChart3,
        title: "Visualiza tu Evolución",
        subtitle: "Tendencias que importan",
        description: "Gráficos claros muestran cómo han cambiado tus valores en el tiempo. Detecta patrones antes de que se conviertan en problemas.",
        features: [
            "Gráficos interactivos por biomarcador",
            "Alertas de tendencias anormales",
            "Comparación histórica automática"
        ],
        gradient: "from-emerald-500 to-teal-500",
        bgGradient: "from-emerald-500/10 to-teal-500/5",
    },
    {
        number: "04",
        icon: Bell,
        title: "Acceso Inteligente 24/7",
        subtitle: "Tu salud, donde la necesites",
        description: "Consulta tu historial desde cualquier dispositivo. Recibe recordatorios de exámenes pendientes y prepara tus consultas médicas con información organizada.",
        features: [
            "App web responsive",
            "Próximamente: WhatsApp y Telegram",
            "Exportación para tu médico"
        ],
        gradient: "from-orange-500 to-amber-500",
        bgGradient: "from-orange-500/10 to-amber-500/5",
        badge: "Próximamente",
    },
]

export function Solution() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"])

    return (
        <section
            ref={containerRef}
            id="como-funciona"
            className="py-32 relative overflow-hidden scroll-mt-20"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                <motion.div
                    className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                    animate={{ x: [-50, 50, -50] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
                    animate={{ x: [50, -50, 50] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto mb-24"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 bg-gradient-to-r from-primary/20 to-teal-500/20 text-primary rounded-full text-sm font-semibold border border-primary/30"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Zap className="w-4 h-4" />
                        Cómo Funciona
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                        De la confusión a la{" "}
                        <span className="bg-gradient-to-r from-primary via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                            claridad total
                        </span>
                    </h2>

                    <p className="mt-8 text-lg sm:text-xl text-muted-foreground leading-relaxed">
                        Un proceso simple de <span className="text-foreground font-semibold">4 pasos</span> que transforma
                        documentos médicos complejos en información que puedes entender y usar.
                    </p>
                </motion.div>

                {/* Steps with connecting line */}
                <div className="relative">
                    {/* Animated connecting line */}
                    <div className="hidden lg:block absolute left-[140px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-muted-foreground/20 to-transparent">
                        <motion.div
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-teal-400 to-emerald-500"
                            style={{ height: lineHeight }}
                        />
                    </div>

                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <motion.div
                                    className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 p-8 lg:p-10 bg-gradient-to-br from-background to-muted/20 rounded-3xl border border-border hover:border-primary/30 transition-all duration-300 group"
                                    whileHover={{
                                        scale: 1.01,
                                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)"
                                    }}
                                >
                                    {/* Background glow on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                    {/* Number & Icon */}
                                    <div className="relative flex-shrink-0 flex items-start gap-6 lg:gap-8">
                                        <motion.span
                                            className="text-7xl lg:text-8xl font-bold text-muted/20 group-hover:text-primary/20 transition-colors duration-300"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            {step.number}
                                        </motion.span>
                                        <motion.div
                                            className={`relative w-20 h-20 lg:w-24 lg:h-24 rounded-3xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-xl`}
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                                        >
                                            <step.icon className="h-10 w-10 lg:h-12 lg:w-12 text-white" />
                                            {step.badge && (
                                                <span className="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                                                    {step.badge}
                                                </span>
                                            )}
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative flex-1">
                                        <div className="mb-2 text-sm font-semibold text-primary uppercase tracking-wider">
                                            {step.subtitle}
                                        </div>
                                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                                            {step.title}
                                        </h3>
                                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                            {step.description}
                                        </p>

                                        {/* Features list */}
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                            {step.features.map((feature, featureIndex) => (
                                                <motion.div
                                                    key={featureIndex}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.3 + featureIndex * 0.1 }}
                                                    className="flex items-center gap-2 text-sm text-muted-foreground"
                                                >
                                                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.gradient}`}></div>
                                                    {feature}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 text-center"
                >
                    <p className="text-xl text-muted-foreground mb-6">
                        <span className="text-foreground font-semibold">¿Listo para tomar el control?</span>{" "}
                        Comienza en menos de 2 minutos.
                    </p>
                    <motion.button
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-teal-500 text-white font-semibold rounded-full shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Probar MedAssist Gratis
                        <ArrowRight className="w-5 h-5" />
                    </motion.button>
                </motion.div>
            </Container>
        </section>
    )
}
