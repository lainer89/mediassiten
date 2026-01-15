'use client'

import Link from "next/link"
import { Container } from "@/components/layout/container"
import { ShieldCheck, Heart, Mail, MapPin } from "lucide-react"

const footerLinks = {
    navegacion: [
        { label: "Nuestra misión", href: "#mision" },
        { label: "El problema", href: "#problema" },
        { label: "Cómo funciona", href: "#como-funciona" },
        { label: "Seguridad", href: "#seguridad" },
        { label: "Preguntas frecuentes", href: "#faq" },
    ],
    legal: [
        { label: "Política de Privacidad", href: "/privacy-policy" },
        { label: "Términos de Uso", href: "/terms-of-use" },
    ],
}

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
            <Container>
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-teal-400 rounded-xl flex items-center justify-center">
                                <ShieldCheck className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">MedAssist</span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed max-w-md mb-8">
                            Tu historial médico inteligente y seguro. Diseñado para que entiendas
                            tu salud sin complicaciones, cuando lo necesites.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                            <MapPin className="w-4 h-4" />
                            <span>Hecho con</span>
                            <Heart className="w-4 h-4 text-rose-500" />
                            <span>para Latinoamérica</span>
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Navegación</h3>
                        <ul className="space-y-3">
                            {footerLinks.navegacion.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-slate-400 hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Legal</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-slate-400 hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Medical Disclaimer */}
                <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 mb-10">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" />
                        Aviso importante
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        MedAssist es una herramienta informativa diseñada para ayudarte a comprender mejor tus resultados de laboratorio.
                        <strong className="text-slate-300"> No proporciona diagnóstico, tratamiento ni asesoramiento médico profesional.</strong> La información
                        generada puede contener imprecisiones. Ante cualquier duda o decisión sobre tu salud, consulta siempre con un
                        profesional de la salud calificado. No ignores ni demores el consejo médico profesional por información obtenida aquí.
                    </p>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">
                        &copy; {new Date().getFullYear()} MedAssist. Todos los derechos reservados.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="mailto:contacto@medassist.lat" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            contacto@medassist.lat
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
