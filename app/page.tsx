"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, FileText, Zap, Globe, Brain, ChevronRight, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { FloatingElements } from "@/components/animations/floating-elements"
import { TextReveal } from "@/components/animations/text-reveal"
import { ParallaxScroll } from "@/components/animations/parallax-scroll"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { GradientText } from "@/components/animations/gradient-text"
import { Card3D } from "@/components/animations/3d-card"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { HeroText } from "@/components/animations/hero-text"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <FloatingElements count={15} color="primary" size={20} />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="relative">
                <h1 className="font-bb-casual text-4xl md:text-5xl lg:text-6xl leading-tight">
                  <HeroText delay={0.1}>
                    <span className="inline-block">
                      Buat{" "}
                      <span className="relative">
                        <span className="relative z-10">CV</span>
                        <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/30 rounded-md -z-0"></span>
                      </span>
                    </span>
                  </HeroText>
                  <br />
                  <HeroText delay={0.3}>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary bg-size-200 animate-gradient-x">
                      ATS-Friendly
                    </span>
                  </HeroText>
                  <br />
                  <HeroText delay={0.5}>
                    <span className="inline-block">Profesional Dalam</span>
                  </HeroText>
                  <br />
                  <HeroText delay={0.7}>
                    <span className="inline-block">Hitungan Menit</span>
                  </HeroText>
                </h1>
                <div className="absolute -top-10 -right-10 w-24 h-24 text-primary/10 rotate-12">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                    <path d="M7.5 12H16.5" />
                    <path d="M12 7.5V16.5" />
                  </svg>
                </div>
              </div>
              <TextReveal delay={0.3}>
                <p className="text-lg text-muted-foreground">
                  Tingkatkan peluangmu lolos seleksi kerja dengan CV yang disukai sistem rekrutmen (ATS). Mudah dibuat,
                  profesional, dan gratis!
                </p>
              </TextReveal>
              <TextReveal delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <MagneticButton>
                    <Button
                      asChild
                      size="lg"
                      className="rounded-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 group"
                    >
                      <Link href="/buat-cv" className="flex items-center">
                        Buat CV Sekarang
                        <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </MagneticButton>
                </div>
              </TextReveal>
              <TextReveal delay={0.7}>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Lebih dari 10,000+ CV berhasil dibuat</span>
                </div>
              </TextReveal>
            </div>
            <div className="relative perspective-container">
              <Card3D className="glassmorphism p-6 soft-shadow">
                <div className="template-preview-container">
                  <div className="template-preview">
                    <div className="cv-paper">
                      <div className="flex flex-col space-y-6">
                        <div className="border-b pb-6">
                          <h1 className="text-3xl font-bold mb-2">Akhyar Nasrullah Adilian</h1>
                          <p className="text-gray-600 mb-4">Software Engineer</p>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center">
                              <Phone className="h-4 w-4 mr-2 text-primary" />
                              <span>+62 857 8355 4819</span>
                            </div>
                            <div className="flex items-center">
                              <Mail className="h-4 w-4 mr-2 text-primary" />
                              <span>akhyarnasrullah8@gmail.com</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h2 className="text-lg font-bold mb-2 text-primary">Ringkasan Profesional</h2>
                          <p>
                            Profesional IT berpengalaman 3+ tahun dengan keahlian dalam pengembangan web dan mobile...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card3D>
              <motion.div
                className="absolute -bottom-6 -right-6 glassmorphism rounded-xl p-4 soft-shadow"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-green-500 rounded-full p-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium">100% ATS Compatible</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
        <FloatingElements count={10} color="primary" size={15} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-60 -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <TextReveal>
              <h2 className="font-bb-casual text-3xl md:text-4xl mb-4">
                <GradientText>Mengapa CV dari Kami Lebih Unggul?</GradientText>
              </h2>
            </TextReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
                title: "100% ATS-Compatible",
                description: "CV kamu bisa dibaca dengan baik oleh sistem pelacak pelamar (ATS).",
              },
              {
                icon: <FileText className="h-10 w-10 text-primary" />,
                title: "Desain Minimalis Profesional",
                description: "Bebas dari elemen yang menghambat pemindaian otomatis seperti grafik, tabel, dan kolom.",
              },
              {
                icon: <Zap className="h-10 w-10 text-primary" />,
                title: "Mudah Digunakan & Cepat",
                description: "Cukup isi form, pilih template, dan download PDF-nya.",
              },
              {
                icon: <Globe className="h-10 w-10 text-primary" />,
                title: "Multi-bahasa (Indo/English)",
                description: "Cocok untuk lamaran kerja lokal maupun internasional.",
              },
              {
                icon: <Brain className="h-10 w-10 text-primary" />,
                title: "Ringkasan Otomatis Berbasis AI",
                description: "Fitur bantu otomatis untuk menulis ringkasan profesional kamu secara instan.",
              },
              {
                icon: <FileText className="h-10 w-10 text-primary" />,
                title: "Template Profesional",
                description: "Pilihan template yang sudah dioptimasi untuk ATS dan terlihat profesional.",
              },
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card3D className="premium-card p-6 h-full">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <ParallaxScroll className="py-16 md:py-24 relative overflow-hidden" speed={0.2}>
        <FloatingElements count={8} color="primary" size={12} />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <TextReveal>
              <h2 className="font-bb-casual text-3xl md:text-4xl mb-4">
                <GradientText from="from-primary" to="to-purple-500">
                  Hanya 3 Langkah untuk Buat CV ATS-Friendly
                </GradientText>
              </h2>
            </TextReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Isi Informasi Diri",
                description: "Masukkan data pribadi, pengalaman kerja, pendidikan, dan keahlian.",
                image: "/images/cv-step-1.jpg",
              },
              {
                step: "2",
                title: "Pilih Template ATS",
                description: "Pilih dari template profesional yang telah diuji kompatibilitasnya dengan ATS.",
                image: "/images/cv-step-2.jpg",
              },
              {
                step: "3",
                title: "Preview & Download",
                description: "Lihat hasilnya langsung, lalu download dalam format PDF.",
                image: "/images/cv-step-1.jpg",
              },
            ].map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full premium-gradient flex items-center justify-center text-white text-2xl font-bold mb-6 animated-border">
                    {step.step}
                  </div>
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxScroll>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
        <FloatingElements count={10} color="primary" size={15} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-60 -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <TextReveal>
              <h2 className="font-bb-casual text-3xl md:text-4xl mb-4">
                <GradientText from="from-primary" to="to-blue-400">
                  Apa Kata Mereka yang Sudah Menggunakannya?
                </GradientText>
              </h2>
            </TextReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Lolos ke 3 interview setelah pakai CV ini!",
                name: "Rudi",
                position: "Data Analyst",
                avatar: "/images/author-1.png",
              },
              {
                quote: "Simple, to the point, dan langsung ATS-friendly.",
                name: "Ana",
                position: "Fresh Graduate",
                avatar: "/images/author-2.png",
              },
              {
                quote: "Auto tertolong fitur AI-nya, nulis summary jadi gampang.",
                name: "Kevin",
                position: "UI/UX Designer",
                avatar: "/images/author-3.png",
              },
            ].map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card3D className="premium-card p-6 h-full">
                  <div className="mb-4 text-4xl text-gradient">"</div>
                  <p className="text-lg mb-6">{testimonial.quote}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg?height=60&width=60"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <FloatingElements count={12} color="primary" size={18} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-60 -z-10"></div>
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <Card3D className="premium-card p-8 md:p-12 text-center max-w-4xl mx-auto glow-effect">
              <h2 className="font-bb-casual text-3xl md:text-4xl mb-4">
                <GradientText from="from-primary" to="to-purple-500">
                  Siap Lolos Screening CV?
                </GradientText>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Buat CV ATS-friendly gratis dan tingkatkan peluang kariermu sekarang juga!
              </p>
              <MagneticButton>
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 group"
                >
                  <Link href="/buat-cv" className="flex items-center">
                    Mulai Buat CV Gratis
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </MagneticButton>
            </Card3D>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
