'use client'

import { Container } from "@/components/layout/container"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { AlertTriangle } from "lucide-react"

const faqs = [
    {
        question: "¿MedAssist reemplaza a mi médico?",
        answer: "No. MedAssist es una herramienta informativa para ayudarte a entender tus resultados. Siempre consulta con un profesional de la salud para diagnósticos y tratamientos.",
        important: true
    },
    {
        question: "¿Qué tan segura está mi información?",
        answer: "Usamos cifrado AES-256, el mismo estándar de los bancos. Tus datos se almacenan en servidores seguros y ningún humano accede a tus exámenes."
    },
    {
        question: "¿Qué tipos de exámenes puedo analizar?",
        answer: "Hemogramas, química sanguínea, perfiles lipídicos, glucosa, función hepática, función renal, tiroides y más. Puedes subir PDFs o fotos claras."
    },
    {
        question: "¿Cuánto cuesta?",
        answer: "Durante la beta es completamente gratis. Después mantendremos un plan básico gratuito con opciones premium."
    },
    {
        question: "¿Tengo control sobre mis datos?",
        answer: "Sí. Puedes descargar todo tu historial o eliminar tu cuenta y datos permanentemente cuando quieras."
    },
]

export function FAQ() {
    return (
        <section id="faq" className="py-20 bg-white scroll-mt-20">
            <Container className="max-w-3xl">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Preguntas Frecuentes
                    </h2>
                </div>

                <div className="mt-10">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem
                                key={i}
                                value={`item-${i}`}
                                className={`bg-white rounded-lg border ${faq.important ? 'border-orange-300' : 'border-gray-200'} px-6`}
                            >
                                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-4">
                                    <div className="flex items-center gap-2">
                                        {faq.important && <AlertTriangle className="w-4 h-4 text-orange-500" />}
                                        <span className="text-gray-900">{faq.question}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-700 pb-4">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <div className="mt-10 p-6 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="flex gap-4">
                        <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold text-gray-900">Aviso Importante</h4>
                            <p className="mt-1 text-sm text-gray-600">
                                MedAssist es una herramienta informativa. No proporciona diagnósticos médicos.
                                Siempre consulta a un profesional de la salud.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
