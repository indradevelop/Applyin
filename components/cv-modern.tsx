import { Building, Calendar, Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";


interface CVModernProps {
  language: string
  cvData: any
}

export function CVModern({ language, cvData }: CVModernProps) {
  return (
    <div className="flex flex-col space-y-6">
      {/* Header */}
      <div className="border-b pb-6">
        <h1 className="text-3xl font-bold mb-2">{cvData.personal.name || "John Doe"}</h1>
        <p className="text-gray-600 mb-4">
          {cvData.experiences[0]?.position || "Senior Software Engineer"}
        </p>

        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-primary" />
            <span>{cvData.personal.phone || "+62 812 3456 7890"}</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2 text-primary" />
            <span>{cvData.personal.email || "john.doe@example.com"}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            <span>{cvData.personal.address || "Jakarta, Indonesia"}</span>
          </div>
          <div className="flex items-center">
            <Linkedin className="h-4 w-4 mr-2 text-primary" />
            <span>{cvData.personal.linkedin || "linkedin.com/in/johndoe"}</span>
          </div>
          {cvData.personal.website && (
            <div className="flex items-center">
              <Globe className="h-4 w-4 mr-2 text-primary" />
              <span>{cvData.personal.website}</span>
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-lg font-bold mb-2 text-primary">
          {language === "id" ? "Ringkasan Profesional" : "Professional Summary"}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: cvData.summary || "Profesional IT berpengalaman 5+ tahun dengan keahlian dalam pengembangan web dan mobile. Memiliki track record dalam memimpin tim dan mengembangkan solusi teknologi yang inovatif untuk meningkatkan efisiensi bisnis dan pengalaman pengguna." }} />

      </div>

      {/* Experience */}
      <div>
        <h2 className="text-lg font-bold mb-3 text-primary">
          {language === "id" ? "Pengalaman Kerja" : "Work Experience"}
        </h2>

        <div className="space-y-4">
          {(cvData.experiences || []).map((exp: any, index: number) => (
            <div key={index}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold">{exp.position || "Software Engineer"}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <Building className="h-3 w-3 mr-1" />
                    <span>
                      {exp.company || "PT Tech Solutions"}, {exp.location || "Jakarta"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{`${exp.startDate || "Jan 2020"} - ${exp.endDate || "Present"}`}</span>
                </div>
              </div>
              <div className="mt-2 whitespace-normal text-sm"
                dangerouslySetInnerHTML={{
                  __html: exp.description.replace(/<ul(?![^>]*class=)/g, '<ul class="pl-4 list-disc space-y-2 mt-2"').replace(/<ol(?![^>]*class=)/g, '<ol class="pl-4 list-decimal space-y-2 mt-2"') ||
                    `<ul class="pl-4 list-disc space-y-2 mt-2">
                        <li>Mengembangkan dan memelihara aplikasi web menggunakan React, Node.js, dan MongoDB</li>
                        <li>Memimpin tim 5 developer dalam proyek e-commerce</li>
                        <li>Meningkatkan performa aplikasi sebesar 40% melalui optimasi kode dan database</li>
                      </ul>`
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-lg font-bold mb-3 text-primary">
          {language === "id" ? "Pendidikan" : "Education"}
        </h2>

        <div className="space-y-2">
          {(cvData.education || []).map((edu: any, index: number) => (
            <div key={index} className="flex justify-between">
              <div>
                <h3 className="font-bold">{edu.degree || "S1 Teknik Informatika"}</h3>
                <p className="text-sm text-gray-600">{edu.institution || "Universitas Indonesia"}</p>
                {edu.achievements && <p className="text-sm text-gray-600 mt-1">{edu.achievements}</p>}
              </div>
              <div className="text-sm text-gray-600">{edu.year || "2018"}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <div>
          <h2 className="text-lg font-bold mb-2 text-primary">
            {language === "id" ? "Hard Skills" : "Hard Skills"}
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: cvData.skills?.hard.replace(/<ul(?![^>]*class=)/g, '<ul class="pl-4 list-disc space-y-2 mt-2"').replace(/<ol(?![^>]*class=)/g, '<ol class="pl-4 list-decimal space-y-2 mt-2"') ||
                `JavaScript, React, Node.js, Python, SQL, Git, Docker, AWS`
            }}
          />
          {/* <p>{cvData.skills?.hard || "JavaScript, React, Node.js, Python, SQL, Git, Docker, AWS"}</p> */}
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-lg font-bold mb-2 text-primary">
            {language === "id" ? "Soft Skills" : "Soft Skills"}
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: cvData.skills?.soft.replace(/<ul(?![^>]*class=)/g, '<ul class="pl-4 list-disc space-y-2 mt-2"').replace(/<ol(?![^>]*class=)/g, '<ol class="pl-4 list-decimal space-y-2 mt-2"') ||
                `Kepemimpinan, Komunikasi, Manajemen Waktu, Problem Solving`
            }}
          />
          {/* <p>{cvData.skills?.soft || "Kepemimpinan, Komunikasi, Manajemen Waktu, Problem Solving"}</p> */}
        </div>
      </div>

      {/* Languages */}
      {(cvData.languages || "").length > 0 && (
        <div>
          <h2 className="text-lg font-bold mb-2 text-primary">
            {language === "id" ? "Bahasa" : "Languages"}
          </h2>
          <p>{cvData.languages || "Bahasa Indonesia (Native), English (Professional)"}</p>
        </div>
      )}

      {/* Certificates */}
      {(cvData.certificates || "").length > 0 && (
        <div>
          <h2 className="text-lg font-bold mb-2 text-primary">
            {language === "id" ? "Sertifikat" : "Certificates"}
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: cvData.certificates.replace(/<ul(?![^>]*class=)/g, '<ul class="pl-4 list-disc space-y-2 mt-2"').replace(/<ol(?![^>]*class=)/g, '<ol class="pl-4 list-decimal space-y-2 mt-2"') ||
                `AWS Certified Solutions Architect (2022), Google Professional Cloud Developer (2021)`
            }}
          />
          {/* <p>
                        {cvData.certificates ||
                          "AWS Certified Solutions Architect (2022), Google Professional Cloud Developer (2021)"}
                      </p> */}
        </div>
      )}

      {/* Projects */}
      {(cvData.projects || "").length > 0 && (
        <div>
          <h2 className="text-lg font-bold mb-2 text-primary">
            {language === "id" ? "Proyek" : "Projects"}
          </h2>
          <div className="columns-2">
            <div
              dangerouslySetInnerHTML={{
                __html: cvData.projects.replace(/<ul(?![^>]*class=)/g, '<ul class="pl-4 list-disc space-y-2 mt-2"').replace(/<ol(?![^>]*class=)/g, '<ol class="pl-4 list-decimal space-y-2 mt-2"') ||
                  `E-commerce Platform - Mengembangkan platform e-commerce full-stack dengan fitur pembayaran dan analitik`
              }}
            />
          </div>
          {/* <p>
                        {cvData.projects ||
                          "E-commerce Platform - Mengembangkan platform e-commerce full-stack dengan fitur pembayaran dan analitik"}
                      </p> */}
        </div>
      )}
    </div>
  )
}