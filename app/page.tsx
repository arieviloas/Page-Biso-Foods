import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChefHat, Heart, Truck, Star, Phone, MapPin, Instagram, Facebook } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BisoFoodsLanding() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg sticky top-0 z-50 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-mostarda" />
            <span className="text-2xl font-bold text-white" style={{ fontFamily: "Baloo 2, cursive" }}>
              Biso Foods
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#sobre"
              className="text-gray-300 hover:text-mostarda transition-colors"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Sobre
            </Link>
            <Link
              href="#produtos"
              className="text-gray-300 hover:text-mostarda transition-colors"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Produtos
            </Link>
            <Link
              href="#depoimentos"
              className="text-gray-300 hover:text-mostarda transition-colors"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Depoimentos
            </Link>
            <Link
              href="#contato"
              className="text-gray-300 hover:text-mostarda transition-colors"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Contato
            </Link>
          </nav>

          <Button
            className="bg-vermelho hover:bg-vermelho/90 text-white rounded-full px-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Peça Agora
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: "Baloo 2, cursive" }}>
                Sabor que abraça!
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8" style={{ fontFamily: "Poppins, sans-serif" }}>
                Receitas artesanais, carinho de verdade.
              </p>
              <Button
                className="bg-vermelho hover:bg-vermelho/90 text-white rounded-full px-8 py-3 text-lg"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Ver Cardápio
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Deliciosos alimentos da Biso Foods"
                  width={400}
                  height={400}
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ fontFamily: "Baloo 2, cursive" }}>
            Sobre a Biso Foods
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12" style={{ fontFamily: "Raleway, sans-serif" }}>
            Feito com carinho, como se fosse pra nossa própria família. A Biso Foods combina ingredientes fresquinhos,
            sabor marcante e cuidado em cada detalhe.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Heart className="h-10 w-10 text-vermelho" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                Qualidade
              </h3>
              <p className="text-gray-400" style={{ fontFamily: "Raleway, sans-serif" }}>
                Ingredientes selecionados com muito cuidado
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Truck className="h-10 w-10 text-verde" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                Entrega
              </h3>
              <p className="text-gray-400" style={{ fontFamily: "Raleway, sans-serif" }}>
                Rapidez e cuidado até sua mesa
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <ChefHat className="h-10 w-10 text-mostarda" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                Sabor
              </h3>
              <p className="text-gray-400" style={{ fontFamily: "Raleway, sans-serif" }}>
                Receitas que despertam sorrisos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos Section */}
      <section id="produtos" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
            style={{ fontFamily: "Baloo 2, cursive" }}
          >
            Nossos Produtos
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-gray-700 border border-gray-600">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Salgados artesanais"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-verde text-white rounded-full">Salgados</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Salgados Artesanais
                </h3>
                <p className="text-gray-300" style={{ fontFamily: "Raleway, sans-serif" }}>
                  Coxinhas, pastéis e empadas feitos com massa caseira e recheios especiais.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-gray-700 border border-gray-600">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Doces caseiros"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-rosa text-white rounded-full">Doces</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Doces Caseiros
                </h3>
                <p className="text-gray-300" style={{ fontFamily: "Raleway, sans-serif" }}>
                  Brigadeiros gourmet, bolos e tortas que derretem na boca.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-gray-700 border border-gray-600">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Marmitas saudáveis"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-mostarda text-white rounded-full">Marmitas</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Marmitas Saudáveis
                </h3>
                <p className="text-gray-300" style={{ fontFamily: "Raleway, sans-serif" }}>
                  Refeições completas e balanceadas para seu dia a dia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Selo de Confiança */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gray-800 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Star className="h-16 w-16 text-mostarda" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "Baloo 2, cursive" }}>
            Delícia de Verdade
          </h2>
          <p className="text-xl text-gray-300" style={{ fontFamily: "Poppins, sans-serif" }}>
            Aprovado por quem ama comer bem!
          </p>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
            style={{ fontFamily: "Baloo 2, cursive" }}
          >
            O que nossos clientes dizem
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-3xl p-6 shadow-lg bg-gray-700 border border-gray-600">
              <CardContent className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-mostarda fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4" style={{ fontFamily: "Raleway, sans-serif" }}>
                  "Nunca comi um salgado tão bom! A massa é perfeita e o recheio é generoso."
                </p>
                <p className="font-semibold text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                  - Maria Silva
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl p-6 shadow-lg bg-gray-700 border border-gray-600">
              <CardContent className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-mostarda fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4" style={{ fontFamily: "Raleway, sans-serif" }}>
                  "Sabor de comida feita com carinho! Lembra a comida da minha avó."
                </p>
                <p className="font-semibold text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                  - João Santos
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl p-6 shadow-lg bg-gray-700 border border-gray-600">
              <CardContent className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-mostarda fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4" style={{ fontFamily: "Raleway, sans-serif" }}>
                  "As marmitas são uma salvação! Comida saudável e saborosa todos os dias."
                </p>
                <p className="font-semibold text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                  - Ana Costa
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-mostarda py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "Baloo 2, cursive" }}>
            Bateu a fome? A gente entrega o sabor!
          </h2>
          <Button
            className="bg-vermelho hover:bg-vermelho/90 text-white rounded-full px-8 py-4 text-lg"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <Phone className="mr-2 h-5 w-5" />
            Falar com a Biso no WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ChefHat className="h-8 w-8 text-mostarda" />
                <span className="text-2xl font-bold" style={{ fontFamily: "Baloo 2, cursive" }}>
                  Biso Foods
                </span>
              </div>
              <p className="text-gray-300" style={{ fontFamily: "Raleway, sans-serif" }}>
                Do nosso forno direto pra sua mesa.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                Contato
              </h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-mostarda" />
                  <span className="text-gray-300" style={{ fontFamily: "Raleway, sans-serif" }}>
                    Rua das Delícias, 123 - Centro
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-mostarda" />
                  <span className="text-gray-300" style={{ fontFamily: "Raleway, sans-serif" }}>
                    (11) 99999-9999
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                Redes Sociais
              </h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-300 hover:text-mostarda transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-mostarda transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400" style={{ fontFamily: "Raleway, sans-serif" }}>
              © 2024 Biso Foods. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
