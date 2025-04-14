import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CVForm } from "@/components/cv-form"

export default function BuatCVPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-bb-casual text-3xl md:text-4xl mb-6 text-center">Lengkapi Data CV Kamu</h1>
            <p className="text-muted-foreground text-center mb-10">
              Masukkan informasi berikut untuk menghasilkan CV yang terstruktur dan lolos ATS.
            </p>

            <CVForm />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
