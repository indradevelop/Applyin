import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlurText } from "@/components/blur-text"
import { Globe, Cloud, Lock } from "lucide-react"
import Image from "next/image"

export default function FiturPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-bb-casual text-4xl md:text-5xl mb-6">
              <BlurText text="Fitur Unggulan" delay={100} />
              <BlurText text=" Kami" className="text-primary" delay={300} />
            </h1>
            <p className="text-lg text-muted-foreground">
              Kami menyediakan berbagai fitur untuk membantu Anda membuat CV yang profesional dan ATS-friendly dengan
              mudah.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="glassmorphism rounded-2xl p-6 soft-shadow">
                <Image
                  src="/images/cv-step-1.jpg"
                  alt="Template ATS-Friendly"
                  width={500}
                  height={400}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                Template ATS-Friendly
              </div>
              <h2 className="text-3xl font-bold">Desain yang Dioptimasi untuk ATS</h2>
              <p className="text-muted-foreground">
                Semua template kami dirancang khusus agar sesuai dengan struktur linear yang dikenali oleh Applicant
                Tracking System (ATS). Kami menghindari elemen yang dapat mengganggu pemindaian otomatis seperti tabel
                kompleks, kolom ganda, dan grafik.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-primary">✓</div>
                  <span>Format yang mudah dibaca oleh ATS</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-primary">✓</div>
                  <span>Struktur yang jelas dan terorganisir</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-primary">✓</div>
                  <span>Desain profesional dan modern</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1 space-y-6">
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                Editor Real-Time
              </div>
              <h2 className="text-3xl font-bold">Lihat Perubahan Secara Langsung</h2>
              <p className="text-muted-foreground">
                Dengan editor real-time kami, Anda dapat melihat perubahan pada CV Anda secara langsung saat Anda
                mengetik. Tidak perlu menunggu atau mengklik tombol preview berulang kali.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-primary">✓</div>
                  <span>Preview CV secara real-time</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-primary">✓</div>
                  <span>Antarmuka yang intuitif dan mudah digunakan</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-primary">✓</div>
                  <span>Pengalaman pengguna yang mulus</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="glassmorphism rounded-2xl p-6 soft-shadow">
                <Image
                  src="/images/cv-step-2.jpg"
                  alt="Editor Real-Time"
                  width={500}
                  height={400}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="glassmorphism rounded-2xl p-6 soft-shadow">
                <Image
                  src="/images/cv-step-1.jpg"
                  alt="AI Summary Generator"
                  width={500}
                  height={400}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                Ringkasan Profesional AI
              </div>
              <h2 className="text-3xl font-bold">Biarkan AI Membantu Anda</h2>
              <p className="text-muted-foreground">
                Kesulitan menulis ringkasan profesional yang menarik? Gunakan teknologi AI kami untuk membantu Anda
                membuat ringkasan yang profesional berdasarkan pengalaman dan keahlian Anda.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-primary">✓</div>
                  <span>Ringkasan yang dipersonalisasi</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-primary">✓</div>
                  <span>Hemat waktu dan usaha</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-primary">✓</div>
                  <span>Hasil yang profesional dan menarik</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glassmorphism rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1 soft-shadow">
              <div className="mb-4">
                <Globe className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Multi-bahasa</h3>
              <p className="text-muted-foreground">
                Ganti antara Bahasa Indonesia dan Inggris dengan mudah. Cocok untuk lamaran kerja lokal maupun
                internasional.
              </p>
            </div>

            <div className="glassmorphism rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1 soft-shadow">
              <div className="mb-4">
                <Cloud className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Penyimpanan Cloud</h3>
              <p className="text-muted-foreground">
                Simpan draft CV Anda untuk diedit di lain waktu. Akses CV Anda dari mana saja dan kapan saja.
              </p>
            </div>

            <div className="glassmorphism rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1 soft-shadow">
              <div className="mb-4">
                <Lock className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Privasi Terjamin</h3>
              <p className="text-muted-foreground">
                Data Anda aman dan tidak kami bagikan ke pihak manapun. Kami memprioritaskan keamanan dan privasi Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
