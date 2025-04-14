import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CVPreview } from "@/components/cv-preview"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

export default function PreviewCVPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
              <h1 className="font-bb-casual text-3xl md:text-4xl mb-4 sm:mb-0">Pratinjau CV Kamu</h1>
              <div className="flex gap-3">
                <Button asChild variant="outline" size="sm">
                  <Link href="/buat-cv">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Kembali Edit
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="#">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Link>
                </Button>
              </div>
            </div>

            <CVPreview />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
