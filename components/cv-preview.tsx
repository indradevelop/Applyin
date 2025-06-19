"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Phone, Mail, MapPin, Linkedin, Globe, Calendar, Building, Download, ArrowLeft, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import Link from "next/link"
import { generatePDF } from "@/lib/pdf-generator"
import { motion } from "framer-motion"
import { CVModern } from "@/components/cv-modern"
import { CVClassic } from "@/components/cv-classic"
import { CVMinimal } from "@/components/cv-minimal"
import { HandleDownload } from "@/lib/handle-download"

export function CVPreview() {
  const [template, setTemplate] = useState("modern")
  const [language, setLanguage] = useState("id")
  const [cvData, setCvData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load CV data from localStorage
    const savedData = localStorage.getItem("cv-preview-data")
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData)
        setCvData(parsedData)
      } catch (e) {
        console.error("Error parsing CV data:", e)
        // Use fallback data if parsing fails
        setCvData(getFallbackData())
      }
    } else {
      // Use fallback data if no saved data exists
      setCvData(getFallbackData())
    }
    setLoading(false)
  }, [])

  const handleDownload = async () => {
    // try {
    //   await generatePDF("cv-content", `cv-${cvData.personal.name || "user"}.pdf`)
    // } catch (error) {
    //   console.error("Error downloading PDF:", error)
    //   toast({
    //     title: "Error",
    //     description: "Failed to download PDF. Please try again.",
    //     variant: "destructive",
    //   })
    // }

    const loading = toast.loading("CV Dalam Proses", {
      description: "CV Anda dalam proses pembuatan. Mohon tunggu sebentar.",
    })

    // setTimeout(() => {
    //   toast.dismiss(loading)
    // }, 2000)
    // console.log("handleDownload formData:", JSON.stringify(formData))
    const status = await HandleDownload({ profileData: JSON.stringify(cvData), language: language, template: template })
    if (status) {
      toast.dismiss(loading)
      toast.success("CV berhasil diunduh", {
        description: "CV Anda telah berhasil diunduh sebagai PDF.",
      })
    } else {
      toast.dismiss(loading)
      toast.error("Gagal mengunduh CV", {
        description: "Terjadi kesalahan saat mengunduh CV. Silakan coba lagi.",
      })
    }
  }

  const handleShare = () => {
    // Create a shareable link (in a real app, this would generate a unique URL)
    const dummyShareableLink = `https://cvats.id/share/${Math.random().toString(36).substring(2, 10)}`

    // Copy to clipboard
    navigator.clipboard
      .writeText(dummyShareableLink)
      .then(() => {
        toast.success("Link Copied", {
          description: "A shareable link to your CV has been copied to clipboard.",
        })
      })
      .catch(() => {
        toast.error("Failed to Copy", {
          description: "Could not copy the link to clipboard.",
        })
      })
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-3 w-full md:w-auto">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild variant="outline" size="sm" className="rounded-full">
              <Link href="/buat-cv">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali Edit
              </Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="sm" className="rounded-full" onClick={handleDownload}>
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </motion.div>
        </div>

        <div className="flex gap-4 w-full md:w-auto">
          <Tabs defaultValue="id" className="w-full md:w-auto">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="id" onClick={() => setLanguage("id")}>
                Indonesia
              </TabsTrigger>
              <TabsTrigger value="en" onClick={() => setLanguage("en")}>
                English
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Tabs defaultValue="modern" className="w-full md:w-auto">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="modern" onClick={() => setTemplate("modern")}>
                Modern
              </TabsTrigger>
              <TabsTrigger value="classic" onClick={() => setTemplate("classic")}>
                Classic
              </TabsTrigger>
              <TabsTrigger value="minimal" onClick={() => setTemplate("minimal")}>
                Minimal
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="modern-glass rounded-xl p-4 soft-shadow overflow-hidden">
          <div className="cv-paper-preview">
            <div className="cv-paper" id="cv-content">
              {template === "modern" && (
                cvData && (
                  <CVModern cvData={cvData} language={language} />
                )
              )}

              {template === "classic" && (
                cvData && (<CVClassic cvData={cvData} language={language} />)
              )}

              {template === "minimal" && (
                cvData && (
                  <CVMinimal cvData={cvData} language={language} />
                )
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex justify-center gap-4">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="outline" className="rounded-full" onClick={handleShare}>
            <Share2 className="h-4 w-4 mr-2" />
            Share CV
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="rounded-full" onClick={handleDownload}>
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export function getFallbackData() {
  return {
    personal: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+62 812 3456 7890",
      address: "Jakarta, Indonesia",
      linkedin: "linkedin.com/in/johndoe",
      website: "johndoe.com",
    },
    summary:
      "Profesional IT berpengalaman 5+ tahun dengan keahlian dalam pengembangan web dan mobile. Memiliki track record dalam memimpin tim dan mengembangkan solusi teknologi yang inovatif untuk meningkatkan efisiensi bisnis dan pengalaman pengguna.",
    experiences: [
      {
        id: 1,
        company: "PT Tech Solutions",
        position: "Senior Software Engineer",
        location: "Jakarta",
        startDate: "Jan 2020",
        endDate: "Present",
        description:
          "• Mengembangkan dan memelihara aplikasi web menggunakan React, Node.js, dan MongoDB\n• Memimpin tim 5 developer dalam proyek e-commerce dengan nilai $500K\n• Meningkatkan performa aplikasi sebesar 40% melalui optimasi kode dan database",
      },
      {
        id: 2,
        company: "PT Digital Indonesia",
        position: "Software Engineer",
        location: "Bandung",
        startDate: "Jun 2018",
        endDate: "Dec 2019",
        description:
          "• Mengembangkan fitur-fitur baru untuk aplikasi mobile menggunakan React Native\n• Berkolaborasi dengan tim desain untuk implementasi UI/UX\n• Mengurangi bug sebesar 30% melalui implementasi unit testing",
      },
    ],
    education: [
      {
        id: 1,
        institution: "Universitas Indonesia",
        degree: "S1 Teknik Informatika",
        major: "Computer Science",
        year: "2018",
        achievements: "GPA 3.8/4.0, Ketua Himpunan Mahasiswa",
      },
    ],
    skills: {
      hard: "JavaScript, React, Node.js, Python, SQL, Git, Docker, AWS",
      soft: "Kepemimpinan, Komunikasi, Manajemen Waktu, Problem Solving",
    },
    languages: "Bahasa Indonesia (Native), English (Professional)",
    certificates: "AWS Certified Solutions Architect (2022), Google Professional Cloud Developer (2021)",
    projects: "E-commerce Platform - Mengembangkan platform e-commerce full-stack dengan fitur pembayaran dan analitik",
  }
}
