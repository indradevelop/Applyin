"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { PlusCircle, Trash2, Brain, Eye, Download, Save, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { useAiService } from "@/lib/ai-service"
import { useRouter } from "next/navigation"
import { generatePDF } from "@/lib/pdf-generator"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { FloatingElements } from "@/components/animations/floating-elements"
import { Editor } from "@/components/editor";
import { HandleDownload } from "@/lib/handle-download"
import { profile } from "console"

export function CVForm() {
  const router = useRouter()
  const { generateSummary, loading: aiLoading } = useAiService()

  const [activeTab, setActiveTab] = useState("personal")
  const [useAI, setUseAI] = useState(false)
  const [saving, setSaving] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const [formData, setFormData] = useState({
    personal: {
      name: "",
      email: "",
      phone: "",
      address: "",
      linkedin: "",
      website: "",
    },
    summary: "",
    experiences: [
      {
        id: 1,
        company: "",
        position: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    education: [
      {
        id: 1,
        institution: "",
        degree: "",
        major: "",
        year: "",
        achievements: "",
      },
    ],
    skills: {
      hard: "",
      soft: "",
    },
    languages: "",
    certificates: "",
    projects: "",
  })

  const formSections = [
    { id: "personal", label: "Data Pribadi" },
    { id: "summary", label: "Ringkasan" },
    { id: "experience", label: "Pengalaman" },
    { id: "education", label: "Pendidikan" },
    { id: "skills", label: "Keterampilan" },
    { id: "languages", label: "Bahasa" },
    { id: "certificates", label: "Sertifikat" },
    { id: "projects", label: "Proyek" },
  ]

  const handleInputChange = (section: string, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value,
      },
    }))
  }

  const handleExperienceChange = (id: number, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      experiences: prev.experiences.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)),
    }))
  }

  const handleEducationChange = (id: number, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)),
    }))
  }

  const addExperience = () => {
    const newId = formData.experiences.length > 0 ? Math.max(...formData.experiences.map((e) => e.id)) + 1 : 1

    setFormData((prev) => ({
      ...prev,
      experiences: [
        ...prev.experiences,
        {
          id: newId,
          company: "",
          position: "",
          location: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }))
  }

  const removeExperience = (id: number) => {
    setFormData((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((e) => e.id !== id),
    }))
  }

  const addEducation = () => {
    const newId = formData.education.length > 0 ? Math.max(...formData.education.map((e) => e.id)) + 1 : 1

    setFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: newId,
          institution: "",
          degree: "",
          major: "",
          year: "",
          achievements: "",
        },
      ],
    }))
  }

  const removeEducation = (id: number) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.filter((e) => e.id !== id),
    }))
  }

  const handleGenerateSummary = async () => {
    try {
      const summary = await generateSummary({
        name: formData.personal.name,
        position: formData.experiences[0]?.position || "",
        experience: formData.experiences.map((exp) => ({
          company: exp.company,
          position: exp.position,
          description: exp.description,
          period: `${exp.startDate} - ${exp.endDate}`,
        })),
        education: formData.education.map((edu) => ({
          institution: edu.institution,
          degree: edu.degree,
          year: edu.year,
        })),
        skills: formData.skills,
      })

      setFormData((prev) => ({
        ...prev,
        summary: summary,
      }))

      toast.success("Ringkasan berhasil dibuat", {
        description: "Ringkasan profesional telah dibuat dengan AI",
      })
    } catch (error) {
      toast.error("Gagal membuat ringkasan", {
        description: "Terjadi kesalahan saat membuat ringkasan. Silakan coba lagi.",
      })
    }
  }

  const handleSaveDraft = () => {
    setSaving(true)

    // Simulate saving to server
    setTimeout(() => {
      // Save to localStorage for demo purposes
      localStorage.setItem("cv-draft", JSON.stringify(formData))

      setSaving(false)
      toast("Draft tersimpan", {
        description: "CV Anda telah berhasil disimpan sebagai draft",
      })
    }, 1500)
  }

  const handlePreview = () => {
    // Save current form data to localStorage before navigating
    localStorage.setItem("cv-draft", JSON.stringify(formData))
    localStorage.setItem("cv-preview-data", JSON.stringify(formData))
    router.push("/preview-cv")
  }

  const handleDownload = async () => {
    localStorage.setItem("cv-draft", JSON.stringify(formData))
    localStorage.setItem("cv-preview-data", JSON.stringify(formData))
    const loading = toast.loading("CV Dalam Proses", {
      description: "CV Anda dalam proses pembuatan. Mohon tunggu sebentar.",
    })

    // setTimeout(() => {
    //   toast.dismiss(loading)
    // }, 2000)
    // console.log("handleDownload formData:", JSON.stringify(formData))
    const status = await HandleDownload({ profileData: JSON.stringify(formData), language: "id", template: "modern" })
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

  const handleDownloadPDF = async () => {
    setDownloading(true)

    // Save current form data to localStorage
    localStorage.setItem("cv-preview-data", JSON.stringify(formData))

    // Create a temporary element to render the CV
    const tempDiv = document.createElement("div")
    tempDiv.id = "temp-cv-content"
    tempDiv.style.position = "absolute"
    tempDiv.style.left = "-9999px"
    tempDiv.style.top = "-9999px"
    document.body.appendChild(tempDiv)

    // Render a simplified version of the CV for PDF generation
    tempDiv.innerHTML = `
      <div style="font-family: Arial, sans-serif; padding: 20mm; width: 210mm;">
        <div style="border-bottom: 1px solid #eee; padding-bottom: 20px; margin-bottom: 20px;">
          <h1 style="font-size: 24px; margin-bottom: 8px;">${formData.personal.name || "Your Name"}</h1>
          <p style="color: #666; margin-bottom: 16px;">${formData.experiences[0]?.position || "Your Position"}</p>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; font-size: 14px;">
            <div>${formData.personal.phone || "Phone Number"}</div>
            <div>${formData.personal.email || "Email Address"}</div>
            <div>${formData.personal.address || "Location"}</div>
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h2 style="font-size: 18px; margin-bottom: 8px; color: #4361ee;">Ringkasan Profesional</h2>
          <p>${formData.summary || "Your professional summary will appear here."}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h2 style="font-size: 18px; margin-bottom: 12px; color: #4361ee;">Pengalaman Kerja</h2>
          ${formData.experiences
        .map(
          (exp) => `
            <div style="margin-bottom: 16px;">
              <div style="display: flex; justify-content: space-between;">
                <div>
                  <h3 style="font-size: 16px; margin: 0;">${exp.position || "Position"}</h3>
                  <div style="font-size: 14px; color: #666;">${exp.company || "Company"}, ${exp.location || "Location"}</div>
                </div>
                <div style="font-size: 14px; color: #666;">${exp.startDate || "Start"} - ${exp.endDate || "End"}</div>
              </div>
              <p style="font-size: 14px; white-space: pre-line; margin-top: 8px;">${exp.description || "Description"}</p>
            </div>
          `,
        )
        .join("")}
        </div>
        
        <div style="margin-bottom: 20px;">
          <h2 style="font-size: 18px; margin-bottom: 12px; color: #4361ee;">Pendidikan</h2>
          ${formData.education
        .map(
          (edu) => `
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <div>
                <h3 style="font-size: 16px; margin: 0;">${edu.degree || "Degree"}</h3>
                <p style="font-size: 14px; color: #666; margin: 0;">${edu.institution || "Institution"}</p>
              </div>
              <div style="font-size: 14px; color: #666;">${edu.year || "Year"}</div>
            </div>
          `,
        )
        .join("")}
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
          <div>
            <h2 style="font-size: 18px; margin-bottom: 8px; color: #4361ee;">Hard Skills</h2>
            <p>${formData.skills.hard || "Your hard skills"}</p>
          </div>
          <div>
            <h2 style="font-size: 18px; margin-bottom: 8px; color: #4361ee;">Soft Skills</h2>
            <p>${formData.skills.soft || "Your soft skills"}</p>
          </div>
        </div>
      </div>
    `

    try {
      await generatePDF("temp-cv-content", `cv-${formData.personal.name || "user"}.pdf`)
    } catch (error) {
      console.error("Error generating PDF:", error)
      toast.error("Error", {
        description: "Failed to generate PDF. Please try again.",
      })
    } finally {
      // Clean up
      document.body.removeChild(tempDiv)
      setDownloading(false)
    }
  }

  // Load draft data if available
  useEffect(() => {
    const savedDraft = localStorage.getItem("cv-draft")
    if (savedDraft) {
      try {
        const parsedData = JSON.parse(savedDraft)
        setFormData(parsedData)
      } catch (e) {
        console.error("Error parsing saved draft:", e)
      }
    }
  }, [])

  return (
    <div className="glassmorphism rounded-xl p-6 md:p-8 soft-shadow relative overflow-hidden">
      <FloatingElements count={8} color="primary" size={10} />
      <Tabs defaultValue="personal" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 md:grid-cols-8 mb-8">
          {formSections.map((section) => (
            <TabsTrigger key={section.id} value={section.id} className="text-xs md:text-sm">
              {section.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="personal" className="space-y-6">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label htmlFor="fullName">Nama Lengkap</Label>
                <Input
                  id="fullName"
                  placeholder="Masukkan nama lengkap"
                  value={formData.personal.name}
                  onChange={(e) => handleInputChange("personal", "name", e.target.value)}
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  value={formData.personal.email}
                  onChange={(e) => handleInputChange("personal", "email", e.target.value)}
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="phone">Nomor Telepon</Label>
                <Input
                  id="phone"
                  placeholder="+62 812 3456 7890"
                  value={formData.personal.phone}
                  onChange={(e) => handleInputChange("personal", "phone", e.target.value)}
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="address">Alamat</Label>
                <Input
                  id="address"
                  placeholder="Kota, Provinsi"
                  value={formData.personal.address}
                  onChange={(e) => handleInputChange("personal", "address", e.target.value)}
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input
                  id="linkedin"
                  placeholder="linkedin.com/in/username"
                  value={formData.personal.linkedin}
                  onChange={(e) => handleInputChange("personal", "linkedin", e.target.value)}
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="website">Website/Portfolio</Label>
                <Input
                  id="website"
                  placeholder="https://yourwebsite.com"
                  value={formData.personal.website}
                  onChange={(e) => handleInputChange("personal", "website", e.target.value)}
                />
              </div>
            </div>
          </ScrollReveal>
        </TabsContent>

        <TabsContent value="summary" className="space-y-6">
          <ScrollReveal>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="summary">Ringkasan Profesional</Label>
                <div className="flex items-center space-x-2">
                  <Switch id="ai-summary" checked={useAI} onCheckedChange={setUseAI} />
                  <Label htmlFor="ai-summary" className="flex items-center cursor-pointer">
                    <Brain className="h-4 w-4 mr-1 text-primary" />
                    Gunakan AI
                  </Label>
                </div>
              </div>
              <Editor
                id="summary"
                defaultValue={formData.summary}
                onChange={(value) => {
                  console.log("Editor value changed:", value)
                  setFormData((prev) => ({ ...prev, summary: value }))
                }}
              />
              {/* <Textarea
                id="summary"
                placeholder="Tuliskan ringkasan profesional Anda dalam 3-5 kalimat yang menggambarkan pengalaman, keahlian, dan tujuan karier Anda."
                rows={6}
                value={formData.summary}
                onChange={(e) => setFormData((prev) => ({ ...prev, summary: e.target.value }))}
              /> */}
              {useAI && (
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-4">
                    <p className="text-sm mb-3">
                      AI akan membantu membuat ringkasan profesional berdasarkan data yang Anda masukkan di bagian lain.
                      Lengkapi data pengalaman dan pendidikan untuk hasil yang lebih baik.
                    </p>
                    <MagneticButton className="w-full">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={handleGenerateSummary}
                        disabled={aiLoading}
                      >
                        {aiLoading ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Generating...
                          </>
                        ) : (
                          <>
                            <Brain className="h-4 w-4 mr-2" />
                            Generate Ringkasan dengan AI
                          </>
                        )}
                      </Button>
                    </MagneticButton>
                  </CardContent>
                </Card>
              )}
            </div>
          </ScrollReveal>
        </TabsContent>

        <TabsContent value="experience" className="space-y-6">
          {formData.experiences.map((exp, index) => (
            <ScrollReveal key={exp.id} delay={index * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 border rounded-lg relative premium-card"
              >
                <div className="absolute top-4 right-4">
                  {formData.experiences.length > 1 && (
                    <Button variant="ghost" size="icon" onClick={() => removeExperience(exp.id)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  )}
                </div>

                <h3 className="font-medium mb-4">Pengalaman Kerja {index + 1}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor={`company-${exp.id}`}>Nama Perusahaan</Label>
                    <Input
                      id={`company-${exp.id}`}
                      placeholder="PT Example Indonesia"
                      value={exp.company}
                      onChange={(e) => handleExperienceChange(exp.id, "company", e.target.value)}
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor={`position-${exp.id}`}>Posisi</Label>
                    <Input
                      id={`position-${exp.id}`}
                      placeholder="Software Engineer"
                      value={exp.position}
                      onChange={(e) => handleExperienceChange(exp.id, "position", e.target.value)}
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor={`location-${exp.id}`}>Lokasi</Label>
                    <Input
                      id={`location-${exp.id}`}
                      placeholder="Jakarta, Indonesia"
                      value={exp.location}
                      onChange={(e) => handleExperienceChange(exp.id, "location", e.target.value)}
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor={`period-${exp.id}`}>Periode</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        id={`start-${exp.id}`}
                        placeholder="Jan 2020"
                        value={exp.startDate}
                        onChange={(e) => handleExperienceChange(exp.id, "startDate", e.target.value)}
                      />
                      <Input
                        id={`end-${exp.id}`}
                        placeholder="Present"
                        value={exp.endDate}
                        onChange={(e) => handleExperienceChange(exp.id, "endDate", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-3 md:col-span-2">
                    <Label htmlFor={`description-${exp.id}`}>Deskripsi Tugas</Label>
                    <Editor
                      id={`description-${exp.id}`}
                      defaultValue={exp.description}
                      onChange={(value) => {
                        console.log("description value changed:", value)
                        handleExperienceChange(exp.id, "description", value)
                      }}
                    />
                    {/* <Textarea
                      id={`description-${exp.id}`}
                      placeholder="Jelaskan tanggung jawab dan pencapaian Anda di posisi ini. Gunakan kata kerja aktif dan sertakan hasil yang terukur."
                      rows={4}
                      value={exp.description}
                      onChange={(e) => handleExperienceChange(exp.id, "description", e.target.value)}
                    /> */}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}

          <MagneticButton className="w-full">
            <Button variant="outline" onClick={addExperience} className="w-full">
              <PlusCircle className="h-4 w-4 mr-2" />
              Tambah Pengalaman Kerja
            </Button>
          </MagneticButton>
        </TabsContent>

        <TabsContent value="education" className="space-y-6">
          {formData.education.map((edu, index) => (
            <ScrollReveal key={edu.id} delay={index * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 border rounded-lg relative premium-card"
              >
                <div className="absolute top-4 right-4">
                  {formData.education.length > 1 && (
                    <Button variant="ghost" size="icon" onClick={() => removeEducation(edu.id)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  )}
                </div>

                <h3 className="font-medium mb-4">Pendidikan {index + 1}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor={`institution-${edu.id}`}>Nama Institusi</Label>
                    <Input
                      id={`institution-${edu.id}`}
                      placeholder="Universitas Indonesia"
                      value={edu.institution}
                      onChange={(e) => handleEducationChange(edu.id, "institution", e.target.value)}
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor={`degree-${edu.id}`}>Jenjang</Label>
                    <Input
                      id={`degree-${edu.id}`}
                      placeholder="S1 / Bachelor's Degree"
                      value={edu.degree}
                      onChange={(e) => handleEducationChange(edu.id, "degree", e.target.value)}
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor={`major-${edu.id}`}>Jurusan</Label>
                    <Input
                      id={`major-${edu.id}`}
                      placeholder="Teknik Informatika"
                      value={edu.major}
                      onChange={(e) => handleEducationChange(edu.id, "major", e.target.value)}
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor={`graduation-${edu.id}`}>Tahun Lulus</Label>
                    <Input
                      id={`graduation-${edu.id}`}
                      placeholder="2022"
                      value={edu.year}
                      onChange={(e) => handleEducationChange(edu.id, "year", e.target.value)}
                    />
                  </div>
                  <div className="space-y-3 md:col-span-2">
                    <Label htmlFor={`achievements-${edu.id}`}>Pencapaian (Opsional)</Label>
                    <Textarea
                      id={`achievements-${edu.id}`}
                      placeholder="Prestasi akademik, kegiatan organisasi, atau proyek penelitian yang relevan."
                      rows={3}
                      value={edu.achievements}
                      onChange={(e) => handleEducationChange(edu.id, "achievements", e.target.value)}
                    />
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}

          <MagneticButton className="w-full">
            <Button variant="outline" onClick={addEducation} className="w-full">
              <PlusCircle className="h-4 w-4 mr-2" />
              Tambah Pendidikan
            </Button>
          </MagneticButton>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <ScrollReveal>
            <div className="space-y-3">
              <Label htmlFor="hard-skills">Hard Skills</Label>
              <Editor
                id="hard-skills"
                defaultValue={formData.skills.hard}
                onChange={(value) => {
                  setFormData((prev) => ({
                    ...prev,
                    skills: { ...prev.skills, hard: value },
                  }))
                }}
              />
              {/* <Textarea
                id="hard-skills"
                placeholder="Masukkan keterampilan teknis Anda, dipisahkan dengan koma. Contoh: Java, Python, SQL, Adobe Photoshop, Microsoft Excel"
                rows={3}
                value={formData.skills.hard}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    skills: { ...prev.skills, hard: e.target.value },
                  }))
                }
              /> */}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="space-y-3">
              <Label htmlFor="soft-skills">Soft Skills</Label>
              <Editor
                id="soft-skills"
                defaultValue={formData.skills.soft}
                onChange={(value) => {
                  setFormData((prev) => ({
                    ...prev,
                    skills: { ...prev.skills, soft: value },
                  }))
                }}
              />
              {/* <Textarea
                id="soft-skills"
                placeholder="Masukkan keterampilan non-teknis Anda, dipisahkan dengan koma. Contoh: Komunikasi, Kepemimpinan, Manajemen Waktu, Pemecahan Masalah"
                rows={3}
                value={formData.skills.soft}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    skills: { ...prev.skills, soft: e.target.value },
                  }))
                }
              /> */}
            </div>
          </ScrollReveal>
        </TabsContent>

        <TabsContent value="languages" className="space-y-6">
          <ScrollReveal>
            <div className="space-y-3">
              <Label htmlFor="languages">Bahasa</Label>
              <Textarea
                id="languages"
                placeholder="Masukkan bahasa yang Anda kuasai beserta tingkat kemampuannya. Contoh: Bahasa Indonesia (Native), English (Professional), 日本語 (Basic)"
                rows={3}
                value={formData.languages}
                onChange={(e) => setFormData((prev) => ({ ...prev, languages: e.target.value }))}
              />
            </div>
          </ScrollReveal>
        </TabsContent>

        <TabsContent value="certificates" className="space-y-6">
          <ScrollReveal>
            <div className="space-y-3">
              <Label htmlFor="certificates">Sertifikat / Pelatihan</Label>
              <Editor
                id="certificates"
                defaultValue={formData.certificates}
                onChange={(value) => {
                  setFormData((prev) => ({ ...prev, certificates: value }))
                }}
              />
              {/* <Textarea
                id="certificates"
                placeholder="Masukkan sertifikat atau pelatihan yang Anda miliki. Format: Nama Sertifikat - Penyelenggara (Tahun). Contoh: AWS Certified Solutions Architect - Amazon Web Services (2022)"
                rows={5}
                value={formData.certificates}
                onChange={(e) => setFormData((prev) => ({ ...prev, certificates: e.target.value }))}
              /> */}
            </div>
          </ScrollReveal>
        </TabsContent>

        <TabsContent value="projects" className="space-y-6">
          <ScrollReveal>
            <div className="space-y-3">
              <Label htmlFor="projects">Proyek / Portofolio</Label>
              <Editor
                id="projects"
                defaultValue={formData.projects}
                onChange={(value) => {
                  setFormData((prev) => ({ ...prev, projects: value }))
                }}
              />
              {/* <Textarea
                id="projects"
                placeholder="Masukkan proyek atau portofolio yang relevan. Format: Nama Proyek - Deskripsi Singkat - Link (opsional). Contoh: E-commerce Website - Mengembangkan website e-commerce menggunakan React dan Node.js - github.com/username/project"
                rows={5}
                value={formData.projects}
                onChange={(e) => setFormData((prev) => ({ ...prev, projects: e.target.value }))}
              /> */}
            </div>
          </ScrollReveal>
        </TabsContent>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <MagneticButton className="flex-1">
            <Button className="w-full rounded-full" onClick={handlePreview}>
              <Eye className="h-4 w-4 mr-2" />
              Pratinjau CV
            </Button>
          </MagneticButton>
          <MagneticButton className="flex-1">
            <Button
              variant="outline"
              className="w-full rounded-full"
              onClick={handleDownload}
              disabled={downloading}
            >
              {downloading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Downloading...
                </>
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </>
              )}
            </Button>
          </MagneticButton>
          <MagneticButton className="flex-1">
            <Button variant="secondary" className="w-full rounded-full" onClick={handleSaveDraft} disabled={saving}>
              {saving ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Menyimpan...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Simpan Draft
                </>
              )}
            </Button>
          </MagneticButton>
        </div>
      </Tabs>
    </div>
  )
}
