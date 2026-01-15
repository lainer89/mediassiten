'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { ShieldCheck, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

const navLinks = [
    { label: "Nuestra misión", href: "#mision" },
    { label: "El problema", href: "#problema" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Seguridad", href: "#seguridad" },
    { label: "Preguntas", href: "#faq" },
]

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("")

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)

            // Detect active section
            const sections = navLinks.map(link => link.href.replace('#', ''))
            for (const section of sections.reverse()) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 100) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
                    ? "bg-background/95 backdrop-blur-xl border-b shadow-sm"
                    : "bg-background/50 backdrop-blur-sm"
                }`}
        >
            <Container className="flex h-16 lg:h-18 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 group">
                    <div className="w-9 h-9 bg-gradient-to-br from-primary to-teal-400 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-md shadow-primary/20">
                        <ShieldCheck className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-foreground">
                        MedAssist
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className={`px-4 py-2 text-sm font-medium transition-all rounded-full ${activeSection === link.href.replace('#', '')
                                    ? "text-primary bg-primary/10"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="flex items-center gap-3">
                    <Button
                        size="sm"
                        className="hidden sm:flex h-10 px-6 rounded-full font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105"
                    >
                        Unirme a la Beta
                    </Button>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                        <span className="sr-only">Menú</span>
                    </Button>
                </div>
            </Container>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b shadow-lg animate-in slide-in-from-top-2 duration-200">
                    <Container className="py-4">
                        <nav className="flex flex-col gap-1">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className={`px-4 py-3 text-sm font-medium rounded-xl transition-colors ${activeSection === link.href.replace('#', '')
                                            ? "text-primary bg-primary/10"
                                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                        }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Button className="mt-4 w-full rounded-full font-semibold h-12">
                                Unirme a la Beta
                            </Button>
                        </nav>
                    </Container>
                </div>
            )}
        </header>
    )
}
