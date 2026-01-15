'use client'

import { Container } from "@/components/layout/container"
import { Heart, Lightbulb, Users } from "lucide-react"

export function Mission() {
    return (
        <section id="mision" className="py-20 bg-white scroll-mt-20">
            <Container className="max-w-4xl">
                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-2xl mb-6">
                        <Heart className="w-8 h-8 text-teal-600" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Nuestro Propósito
                    </h2>

                    <p className="mt-6 text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        Creemos que la <strong>inteligencia artificial no debe ser exclusiva de grandes empresas</strong>.
                        Nuestra misión es acortar la barrera entre la tecnología y las personas,
                        para que la IA mejore la vida de todos.
                    </p>

                    <p className="mt-4 text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        Queremos <strong>democratizar el conocimiento médico</strong>. Que cualquier persona
                        pueda entender su salud sin depender de tecnicismos incomprensibles.
                    </p>
                </div>

                <div className="mt-16 grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl">
                        <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                            <Lightbulb className="w-6 h-6 text-teal-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Tecnología para todos</h3>
                        <p className="mt-3 text-gray-600 leading-relaxed">
                            La IA debe integrarse en nuestra vida cotidiana para hacerla mejor,
                            no ser una herramienta inalcanzable. Hacemos que el cambio se note.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl">
                        <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                            <Users className="w-6 h-6 text-teal-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Democratizar el conocimiento</h3>
                        <p className="mt-3 text-gray-600 leading-relaxed">
                            Transformamos información médica compleja en explicaciones claras.
                            Porque entender tu salud es un derecho, no un privilegio.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    )
}
