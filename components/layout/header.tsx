'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { ShieldCheck, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

const navLinks = [
    { label: "Propósito", href: "#mision" },
    { label: "Para Personas", href: "#personas" },
    { label: "Para Empresas", href: "#empresas" },
    { label: "Seguridad", href: "#seguridad" },
    { label: "FAQ", href: "#faq" },
]

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const scrollToWaitlist = () => {
        document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
        setIsMobileMenuOpen(false)
    }

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={`fixed top-0 z-50 w-full transition-all duration-200 ${isScrolled ? "bg-white shadow-sm" : "bg-white/80 backdrop-blur-sm"}`}>
            <Container className="flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                        <ShieldCheck className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-bold text-gray-900">MedAssist</span>
                </Link>

                <nav className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link, i) => (
                        <Link
                            key={i}
                            href={link.href}
                            className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <Button
                        size="sm"
                        onClick={scrollToWaitlist}
                        className="hidden sm:flex btn-primary h-9 px-4 text-sm font-semibold rounded-lg"
                    >
                        Unirme a la Beta
                    </Button>

                    <button
                        className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </Container>

            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t">
                    <Container className="py-4">
                        <nav className="flex flex-col gap-1">
                            {navLinks.map((link, i) => (
                                <Link
                                    key={i}
                                    href={link.href}
                                    className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Button
                                onClick={scrollToWaitlist}
                                className="mt-4 btn-primary h-10 font-semibold rounded-lg"
                            >
                                Unirme a la Beta
                            </Button>
                        </nav>
                    </Container>
                </div>
            )}
        </header>
    )
}
