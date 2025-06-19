import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlurText } from "@/components/blur-text"
import Image from "next/image"

export default function TentangPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-reb-casual text-4xl md:text-5xl mb-6">
              <BlurText text="Tentang" delay={100} />
              <BlurText text=" Platform" className="text-primary" delay={300} />
              <BlurText text=" Ini" delay={500} />
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="glassmorphism rounded-2xl p-6 soft-shadow">
                <Image
                  src="/images/cv-hero.jpg"
                  alt="Tim Kami"
                  width={500}
                  height={400}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Siapa Kami</h2>
              <p className="text-muted-foreground">
                Kami adalah tim developer dan desainer yang peduli dengan masa depan kariermu. Website ini dibuat agar
                semua orang bisa membuat CV berkualitas tinggi tanpa perlu bayar mahal atau belajar desain.
              </p>
              <p className="text-muted-foreground">
                Kami percaya bahwa <span className="font-bold">CV yang baik bisa membuka pintu karier terbaik.</span>{" "}
                Karena itu, kami mengembangkan alat ini dengan fitur-fitur unggulan dan berbasis kebutuhan industri.
              </p>
              <p className="text-muted-foreground">
                Tim kami terdiri dari profesional yang berpengalaman dalam bidang rekrutmen, desain, dan pengembangan
                web. Kami memahami apa yang dicari oleh perekrut dan sistem ATS, dan kami menggunakan pengetahuan ini
                untuk membantu Anda membuat CV yang menonjol.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="text-3xl font-bold">Misi Kami</h2>
              <p className="text-muted-foreground">
                Misi kami adalah membantu pencari kerja di Indonesia untuk meningkatkan peluang mereka dalam mendapatkan
                pekerjaan impian dengan menyediakan alat pembuat CV yang mudah digunakan, profesional, dan dioptimalkan
                untuk ATS.
              </p>
              <p className="text-muted-foreground">
                Kami ingin mendemokratisasi akses ke alat pembuatan CV berkualitas tinggi, sehingga semua orang,
                terlepas dari latar belakang atau kemampuan desain mereka, dapat membuat CV yang menonjol dan
                meningkatkan peluang karier mereka.
              </p>
              <p className="text-muted-foreground">
                Kami juga berkomitmen untuk terus memperbarui platform kami dengan fitur-fitur baru dan template yang
                sesuai dengan tren industri terkini, sehingga pengguna kami selalu memiliki keunggulan dalam persaingan
                kerja.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="glassmorphism rounded-2xl p-6 soft-shadow">
                <Image
                  src="/images/cv-step-1.jpg"
                  alt="Misi Kami"
                  width={500}
                  height={400}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Nilai-Nilai Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="glassmorphism rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1 soft-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Aksesibilitas</h3>
                <p className="text-muted-foreground">
                  Kami percaya bahwa semua orang berhak mendapatkan akses ke alat pembuatan CV berkualitas tinggi.
                </p>
              </div>

              <div className="glassmorphism rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1 soft-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Kualitas</h3>
                <p className="text-muted-foreground">
                  Kami berkomitmen untuk menyediakan template dan fitur berkualitas tinggi yang memenuhi standar
                  industri.
                </p>
              </div>

              <div className="glassmorphism rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1 soft-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Inovasi</h3>
                <p className="text-muted-foreground">
                  Kami terus berinovasi untuk meningkatkan platform kami dan memberikan pengalaman terbaik bagi
                  pengguna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
