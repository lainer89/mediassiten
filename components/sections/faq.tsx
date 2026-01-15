'use client'

import { Container } from "@/components/layout/container"
import { motion } from "framer-motion"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle, MessageCircle } from "lucide-react"

const faqs = [
    {
        question: "¿MedAssist me da diagnósticos médicos?",
        answer: "No. MedAssist es una herramienta informativa que te ayuda a entender tus resultados en un lenguaje más simple. Nunca reemplaza el criterio de un profesional de la salud. Siempre consulta con tu médico para decisiones sobre tu tratamiento.",
    },
    {
        question: "¿Mi información está realmente segura?",
        answer: "Sí. Utilizamos los mismos estándares de seguridad que usan los bancos (cifrado AES-256). Tus datos se almacenan de forma encriptada y solo tú tienes acceso a ellos. No compartimos ni vendemos tu información a terceros.",
    },
    {
        question: "¿Qué tipos de exámenes puedo subir?",
        answer: "Actualmente soportamos la mayoría de exámenes de laboratorio clínico: hemogramas, química sanguínea, perfiles lipídicos, glucosa, entre otros. Puedes subir archivos PDF o fotos (JPG, PNG). Estamos trabajando en agregar más tipos de estudios.",
    },
    {
        question: "¿Cuánto cuesta usar MedAssist?",
        answer: "Durante la fase Beta, MedAssist es completamente gratuito. Para el lanzamiento oficial, tendremos un plan básico gratuito y planes premium con características adicionales como mayor almacenamiento e integración con WhatsApp.",
    },
    {
        question: "¿Puedo eliminar mi información cuando quiera?",
        answer: "Absolutamente. Tienes control total sobre tus datos. Puedes eliminar documentos individuales o borrar tu cuenta completa junto con todo tu historial en cualquier momento desde la configuración de tu perfil.",
    },
    {
        question: "¿Funciona sin conexión a internet?",
        answer: "MedAssist necesita internet para procesar y analizar tus documentos de forma segura. Sin embargo, estamos desarrollando la opción de guardar documentos en tu dispositivo para que puedas revisarlos sin conexión.",
    },
]

export function FAQ() {
    return (
        <section id="faq" className="py-28 bg-muted/30 scroll-mt-20">
            <Container className="max-w-4xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        <HelpCircle className="w-4 h-4" />
                        Preguntas frecuentes
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                        ¿Tienes dudas?
                    </h2>

                    <p className="mt-6 text-lg text-muted-foreground">
                        Aquí respondemos las preguntas más comunes sobre MedAssist.
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
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-background rounded-2xl border border-border px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg transition-all"
                            >
                                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-16 text-center"
                >
                    <p className="text-muted-foreground mb-4">¿No encontraste lo que buscabas?</p>
                    <a
                        href="mailto:contacto@medassist.lat"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                    >
                        <MessageCircle className="w-4 h-4" />
                        Escríbenos directamente
                    </a>
                </motion.div>
            </Container>
        </section>
    )
}
