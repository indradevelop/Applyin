import { Building, Calendar, Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";


interface CVMinimalProps {
  language: string
  cvData: any
}

export function CVMinimal({ language, cvData }: CVMinimalProps) {
  return (
    <div className="flex flex-col space-y-6">
      {/* Minimal template content */}
      <div>
        <h1 className="text-2xl font-bold mb-1">{cvData.personal.name || "John Doe"}</h1>
        <p className="text-gray-600 text-sm mb-4">
          {cvData.experiences[0]?.position || "Senior Software Engineer"}
        </p>

        <div className="flex flex-wrap gap-3 text-xs">
          <span>{cvData.personal.email || "john.doe@example.com"}</span>
          <span>•</span>
          <span>{cvData.personal.phone || "+62 812 3456 7890"}</span>
          <span>•</span>
          <span>{cvData.personal.address || "Jakarta, Indonesia"}</span>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="text-sm" dangerouslySetInnerHTML={{ __html: cvData.summary || "Profesional IT berpengalaman 5+ tahun dengan keahlian dalam pengembangan web dan mobile. Memiliki track record dalam memimpin tim dan mengembangkan solusi teknologi yang inovatif untuk meningkatkan efisiensi bisnis dan pengalaman pengguna." }} />

        {/* <p className="text-sm">
          {cvData.summary ||
            "Profesional IT berpengalaman 5+ tahun dengan keahlian dalam pengembangan web dan mobile. Memiliki track record dalam memimpin tim dan mengembangkan solusi teknologi yang inovatif untuk meningkatkan efisiensi bisnis dan pengalaman pengguna."}
        </p> */}
      </div>

      <div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">
          {language === "id" ? "Pengalaman" : "Experience"}
        </h2>
        <div className="space-y-3">
          {(cvData.experiences || []).map((exp: any, index: number) => (
            <div key={index}>
              <div className="flex justify-between items-baseline">
                <h3 className="font-medium">{exp.position || "Software Engineer"}</h3>
                <span className="text-xs text-gray-500">{`${exp.startDate || "Jan 2020"} - ${exp.endDate || "Present"}`}</span>
              </div>
              <p className="text-xs text-gray-600">{exp.company || "PT Tech Solutions"}</p>
              <div className="mt-1 text-xs whitespace-normal"
                dangerouslySetInnerHTML={{
                  __html:
                    exp.description.replace(/<ul(?![^>]*class=)/g, '<ul class="pl-4 list-disc space-y-2 mt-2"').replace(/<ol(?![^>]*class=)/g, '<ol class="pl-4 list-decimal space-y-2 mt-2"') ||
                    `<ul class="pl-4 list-disc space-y-2 mt-2">
                        <li>Mengembangkan dan memelihara aplikasi web menggunakan React, Node.js, dan MongoDB</li>
                        <li>Memimpin tim 5 developer dalam proyek e-commerce</li>
                        <li>Meningkatkan performa aplikasi sebesar 40% melalui optimasi kode dan database</li>
                      </ul>`
                }} />
              {/* <p className="mt-1 text-xs whitespace-pre-line">
                {exp.description ||
                  "• Mengembangkan dan memelihara aplikasi web menggunakan React, Node.js, dan MongoDB\n• Memimpin tim 5 developer dalam proyek e-commerce\n• Meningkatkan performa aplikasi sebesar 40% melalui optimasi kode dan database"}
              </p> */}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">
          {language === "id" ? "Pendidikan" : "Education"}
        </h2>
        <div className="space-y-2">
          {(cvData.education || []).map((edu: any, index: number) => (
            <div key={index} className="flex justify-between">
              <div>
                <h3 className="font-medium">{edu.degree || "S1 Teknik Informatika"}</h3>
                <p className="text-xs text-gray-600">{edu.institution || "Universitas Indonesia"}</p>
              </div>
              <div className="text-xs text-gray-500">{edu.year || "2018"}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Skills</h2>
        <div className="text-xs"
          dangerouslySetInnerHTML={{
            __html:
              cvData.skills?.hard.replace(/<ul(?![^>]*class=)/g, '<ul class="pl-4 list-disc space-y-2 mt-2"').replace(/<ol(?![^>]*class=)/g, '<ol class="pl-4 list-decimal space-y-2 mt-2"') ||
              `JavaScript, React, Node.js, Python, SQL, Git, Docker, AWS`
          }} />
        {/* <p className="text-xs">
          {cvData.skills?.hard || "JavaScript, React, Node.js, Python, SQL, Git, Docker, AWS"}
        </p> */}
      </div>
      <div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Languages</h2>
        <p className="text-xs">
          {cvData.languages || "Bahasa Indonesia (Native), English (Professional)"}
        </p>
      </div>
    </div>
  )
}