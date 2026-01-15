'use client'

import { Container } from "@/components/layout/container"
import { motion } from "framer-motion"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle, MessageCircle, Mail, AlertTriangle } from "lucide-react"

const faqs = [
    {
        question: "¿MedAssist reemplaza a mi médico?",
        answer: "No, de ninguna manera. MedAssist es una herramienta informativa y educativa diseñada para ayudarte a entender tus resultados de laboratorio en un lenguaje más accesible. Siempre consulta con un profesional de la salud calificado para diagnósticos, tratamientos y decisiones médicas importantes.",
        important: true
    },
    {
        question: "¿Qué tan segura está mi información médica?",
        answer: "Tu privacidad es nuestra máxima prioridad. Utilizamos cifrado AES-256 (el mismo estándar que los bancos) tanto en tránsito como en reposo. Tus datos se almacenan en servidores seguros y ningún humano en MedAssist accede a tus exámenes. Cumplimos con estándares internacionales de protección de datos sanitarios.",
    },
    {
        question: "¿Qué tipos de exámenes puedo analizar?",
        answer: "Actualmente soportamos la mayoría de exámenes de laboratorio clínico comunes en Latinoamérica: hemogramas completos, química sanguínea, perfiles lipídicos, glucosa, función hepática, función renal, tiroides, y más. Puedes subir archivos PDF o fotos claras (JPG, PNG). Estamos expandiendo constantemente nuestra cobertura.",
    },
    {
        question: "¿Cuánto cuesta usar MedAssist?",
        answer: "Durante nuestra fase Beta, MedAssist es completamente gratuito para usuarios en Latinoamérica. Para el lanzamiento oficial, mantendremos un plan básico gratuito generoso, con planes premium opcionales que incluirán mayor almacenamiento, integraciones con WhatsApp/Telegram, y análisis familiares compartidos.",
    },
    {
        question: "¿Tengo control total sobre mis datos?",
        answer: "Absolutamente. Tus datos te pertenecen. Puedes descargar todo tu historial en cualquier momento, eliminar documentos individuales, o borrar tu cuenta completa junto con toda tu información de forma permanente. Sin letra chica ni procesos complicados.",
    },
    {
        question: "¿MedAssist funciona con laboratorios de mi país?",
        answer: "Sí. Nuestro sistema de reconocimiento está optimizado para los formatos de laboratorios más comunes en México, Chile, Colombia, Argentina, Perú y el resto de Latinoamérica. Si tu laboratorio no es reconocido automáticamente, nuestro sistema aprende y mejora constantemente.",
    },
    {
        question: "¿Cómo sé que el análisis de IA es confiable?",
        answer: "Nuestro modelo de IA está entrenado con guías clínicas internacionales actualizadas y validado por profesionales médicos. Cada interpretación incluye referencias a rangos normales establecidos. Sin embargo, siempre recomendamos usar MedAssist como complemento informativo, no como sustituto del criterio médico profesional.",
    },
]

export function FAQ() {
    return (
        <section id="faq" className="py-32 relative overflow-hidden scroll-mt-20">
            {/* Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-background to-background"></div>

            <Container className="max-w-4xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20"
                        whileHover={{ scale: 1.05 }}
                    >
                        <HelpCircle className="w-4 h-4" />
                        Preguntas Frecuentes
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                        Resolvemos tus{" "}
                        <span className="bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">
                            dudas
                        </span>
                    </h2>

                    <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Las respuestas a las preguntas más comunes sobre seguridad, funcionamiento y uso de MedAssist.
                    </p>
                </motion.div>

                {/* Accordion */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + index * 0.05 }}
                            >
                                <AccordionItem
                                    value={`item-${index}`}
                                    className={`bg-background rounded-2xl border ${faq.important ? 'border-amber-500/30' : 'border-border'} px-6 data-[state=open]:border-primary/40 data-[state=open]:shadow-xl data-[state=open]:shadow-primary/5 transition-all duration-300 hover:border-primary/20`}
                                >
                                    <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6 group">
                                        <div className="flex items-center gap-3">
                                            {faq.important && (
                                                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                            )}
                                            <span className="group-hover:text-primary transition-colors">
                                                {faq.question}
                                            </span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </motion.div>

                {/* Medical Disclaimer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-12"
                >
                    <div className="p-6 bg-amber-500/5 rounded-2xl border border-amber-500/20">
                        <div className="flex items-start gap-4">
                            <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold text-foreground mb-2">Aviso Importante</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    MedAssist es una herramienta de información y educación sobre salud. No proporciona diagnósticos médicos,
                                    tratamientos ni consejos médicos profesionales. Siempre consulta a un profesional de la salud calificado
                                    para cualquier pregunta sobre condiciones médicas o tratamientos.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-muted-foreground mb-4">¿Tienes una pregunta que no está aquí?</p>
                    <motion.a
                        href="mailto:hola@medassist.lat"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary font-semibold rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Mail className="w-5 h-5" />
                        Escríbenos a hola@medassist.lat
                    </motion.a>
                </motion.div>
            </Container>
        </section>
    )
}
