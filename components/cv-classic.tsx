import { Building, Calendar, Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";


interface CVClassicProps {
  language: string
  cvData: any
}

export function CVClassic({ language, cvData }: CVClassicProps) {
  return (
    <div className="flex flex-col space-y-6">
      {/* Header - Classic Style */}
      <div className="text-center border-b pb-6">
        <h1 className="text-3xl font-bold uppercase mb-2">{cvData.personal.name || "John Doe"}</h1>
        <p className="text-gray-600 mb-4">
          {cvData.experiences[0]?.position || "Senior Software Engineer"}
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-gray-600" />
            <span>{cvData.personal.phone || "+62 812 3456 7890"}</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2 text-gray-600" />
            <span>{cvData.personal.email || "john.doe@example.com"}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-gray-600" />
            <span>{cvData.personal.address || "Jakarta, Indonesia"}</span>
          </div>
        </div>
      </div>

      {/* Rest of the sections with classic styling */}
      <div>
        <h2 className="text-lg font-bold uppercase mb-2 border-b">
          {language === "id" ? "Ringkasan Profesional" : "Professional Summary"}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: cvData.summary || "Profesional IT berpengalaman 5+ tahun dengan keahlian dalam pengembangan web dan mobile. Memiliki track record dalam memimpin tim dan mengembangkan solusi teknologi yang inovatif untuk meningkatkan efisiensi bisnis dan pengalaman pengguna." }} />

        {/* <p>
          {cvData.summary ||
            "Profesional IT berpengalaman 5+ tahun dengan keahlian dalam pengembangan web dan mobile. Memiliki track record dalam memimpin tim dan mengembangkan solusi teknologi yang inovatif untuk meningkatkan efisiensi bisnis dan pengalaman pengguna."}
        </p> */}
      </div>

      <div>
        <h2 className="text-lg font-bold uppercase mb-3 border-b">
          {language === "id" ? "Pengalaman Kerja" : "Work Experience"}
        </h2>

        <div className="space-y-4">
          {(cvData.experiences || []).map((exp: any, index: number) => (
            <div key={index}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold">{exp.position || "Software Engineer"}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <span>
                      {exp.company || "PT Tech Solutions"}, {exp.location || "Jakarta"}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <span>{`${exp.startDate || "Jan 2020"} - ${exp.endDate || "Present"}`}</span>
                </div>
              </div>
              <div className="mt-2 whitespace-normal text-sm"
                dangerouslySetInnerHTML={{
                  __html:
                    exp.description.replace(/<ul(?![^>]*class=)/g, '<ul class="pl-4 list-disc space-y-2 mt-2"').replace(/<ol(?![^>]*class=)/g, '<ol class="pl-4 list-decimal space-y-2 mt-2"') ||
                    `<ul class="pl-4 list-disc space-y-2 mt-2">
                        <li>Mengembangkan dan memelihara aplikasi web menggunakan React, Node.js, dan MongoDB</li>
                        <li>Memimpin tim 5 developer dalam proyek e-commerce</li>
                        <li>Meningkatkan performa aplikasi sebesar 40% melalui optimasi kode dan database</li>
                      </ul>`
                }} />
              {/* <p className="mt-2 whitespace-pre-line text-sm">
                {exp.description ||
                  "• Mengembangkan dan memelihara aplikasi web menggunakan React, Node.js, dan MongoDB\n• Memimpin tim 5 developer dalam proyek e-commerce\n• Meningkatkan performa aplikasi sebesar 40% melalui optimasi kode dan database"}
              </p> */}
            </div>
          ))}
        </div>
      </div>

      {/* Other sections follow the same pattern */}
      <div>
        <h2 className="text-lg font-bold uppercase mb-3 border-b">
          {language === "id" ? "Pendidikan" : "Education"}
        </h2>
        <div className="space-y-2">
          {(cvData.education || []).map((edu: any, index: number) => (
            <div key={index} className="flex justify-between">
              <div>
                <h3 className="font-bold">{edu.degree || "S1 Teknik Informatika"}</h3>
                <p className="text-sm text-gray-600">{edu.institution || "Universitas Indonesia"}</p>
              </div>
              <div className="text-sm text-gray-600">{edu.year || "2018"}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}