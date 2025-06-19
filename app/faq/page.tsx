import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlurText } from "@/components/blur-text"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-reb-casual text-4xl md:text-5xl mb-6">
              <BlurText text="Pertanyaan yang" delay={100} />
              <BlurText text=" Sering" className="text-primary" delay={300} />
              <BlurText text=" Ditanyakan" delay={500} />
            </h1>
            <p className="text-lg text-muted-foreground">
              Temukan jawaban untuk pertanyaan umum tentang platform pembuat CV kami.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="glassmorphism rounded-xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-primary/5">
                  Apakah semua template di sini ATS-friendly?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Ya! Semua template telah dirancang khusus agar sesuai dengan sistem pelacak pelamar (ATS). Kami
                  menghindari elemen yang dapat mengganggu pemindaian otomatis seperti tabel kompleks, kolom ganda, dan
                  grafik. Template kami menggunakan struktur linear yang mudah dibaca oleh ATS.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="glassmorphism rounded-xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-primary/5">
                  Apakah saya harus login?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Tidak. Anda dapat menggunakan fitur dasar seperti pembuatan, preview, dan download CV tanpa perlu
                  login. Namun, jika Anda ingin menyimpan CV Anda sebagai draft untuk diedit di lain waktu, Anda perlu
                  membuat akun dan login.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="glassmorphism rounded-xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-primary/5">
                  Apakah bisa digunakan secara gratis?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Ya! Semua fitur inti seperti pembuatan, preview, dan download CV bisa digunakan tanpa biaya. Kami
                  menawarkan beberapa fitur premium untuk pengguna yang membutuhkan lebih banyak template atau fitur
                  lanjutan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="glassmorphism rounded-xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-primary/5">
                  Apakah bisa mengedit ulang CV?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Bisa. Jika Anda login dan menyimpan draft, Anda bisa kembali dan edit CV Anda kapan saja. Semua
                  perubahan akan disimpan secara otomatis, sehingga Anda tidak perlu khawatir kehilangan pekerjaan Anda.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="glassmorphism rounded-xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-primary/5">
                  Apa itu ATS dan mengapa penting?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  ATS (Applicant Tracking System) adalah perangkat lunak yang digunakan oleh perusahaan untuk memfilter
                  dan mengelola lamaran kerja. Sistem ini memindai CV untuk kata kunci dan format tertentu. CV yang
                  tidak ATS-friendly mungkin tidak akan lolos tahap awal seleksi, bahkan jika Anda memiliki kualifikasi
                  yang tepat. Itulah mengapa penting untuk memiliki CV yang dioptimalkan untuk ATS.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="glassmorphism rounded-xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-primary/5">
                  Bagaimana cara kerja fitur AI untuk ringkasan profesional?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Fitur AI kami menganalisis informasi yang Anda masukkan di bagian pengalaman kerja, pendidikan, dan
                  keterampilan untuk menghasilkan ringkasan profesional yang dipersonalisasi. Semakin lengkap informasi
                  yang Anda berikan, semakin baik hasil ringkasan yang dihasilkan. Anda selalu dapat mengedit hasil yang
                  dihasilkan untuk menyesuaikannya dengan preferensi Anda.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="glassmorphism rounded-xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-primary/5">
                  Apakah data saya aman?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Ya, keamanan data Anda adalah prioritas kami. Kami tidak menjual atau membagikan data pribadi Anda
                  kepada pihak ketiga. Data Anda disimpan dengan aman dan hanya digunakan untuk menyediakan layanan
                  kami. Untuk informasi lebih lanjut, silakan baca Kebijakan Privasi kami.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="glassmorphism rounded-xl mb-4 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-primary/5">
                  Dalam format apa saya bisa mengunduh CV saya?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Anda dapat mengunduh CV Anda dalam format PDF, yang merupakan format yang paling umum digunakan dan
                  diterima oleh sebagian besar sistem perekrutan. Format PDF memastikan bahwa CV Anda akan terlihat sama
                  persis seperti yang Anda desain, terlepas dari perangkat atau perangkat lunak yang digunakan untuk
                  membukanya.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
