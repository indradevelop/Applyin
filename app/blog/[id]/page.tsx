"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

// Sample blog data
const blogPosts = [
  {
    id: "1",
    title: "10 Tips Membuat CV yang Lolos ATS untuk Fresh Graduate",
    excerpt: "Panduan lengkap untuk fresh graduate dalam membuat CV yang lolos sistem ATS...",
    content: `
      <h2>10 Tips Membuat CV yang Lolos ATS untuk Fresh Graduate</h2>
      
      <p>Sebagai fresh graduate, mencari pekerjaan pertama bisa menjadi tantangan tersendiri. Salah satu rintangan terbesar adalah membuat CV yang bisa lolos dari Applicant Tracking System (ATS) - sistem yang digunakan perusahaan untuk menyaring lamaran secara otomatis.</p>
      
      <h3>1. Gunakan Format yang Sederhana</h3>
      <p>ATS kesulitan membaca CV dengan desain yang rumit. Gunakan format sederhana dengan font standar seperti Arial, Calibri, atau Times New Roman. Hindari header, footer, tabel, dan grafik yang kompleks.</p>
      
      <h3>2. Sesuaikan Kata Kunci dengan Deskripsi Pekerjaan</h3>
      <p>Analisis deskripsi pekerjaan dan sertakan kata kunci yang relevan dalam CV Anda. Misalnya, jika posisi membutuhkan "analisis data", pastikan frasa ini muncul dalam CV Anda jika Anda memang memiliki keterampilan tersebut.</p>
      
      <h3>3. Gunakan Judul Bagian Standar</h3>
      <p>Gunakan judul bagian yang mudah dikenali seperti "Pendidikan", "Pengalaman Kerja", "Keterampilan", dan "Sertifikasi". Hindari judul kreatif yang mungkin membingungkan ATS.</p>
      
      <h3>4. Fokus pada Pencapaian Terukur</h3>
      <p>Meskipun sebagai fresh graduate pengalaman kerja Anda mungkin terbatas, fokuslah pada pencapaian terukur dari magang, proyek kuliah, atau kegiatan ekstrakurikuler. Misalnya: "Meningkatkan efisiensi proses sebesar 20% melalui implementasi sistem baru".</p>
      
      <h3>5. Sertakan Bagian Keterampilan yang Jelas</h3>
      <p>Buat bagian keterampilan yang jelas dengan daftar kemampuan teknis dan soft skill yang relevan dengan posisi yang dilamar.</p>
      
      <h3>6. Hindari Penggunaan Singkatan yang Tidak Umum</h3>
      <p>Gunakan bentuk lengkap dari singkatan pada penggunaan pertama, terutama untuk istilah teknis atau spesifik industri.</p>
      
      <h3>7. Gunakan Format File yang Tepat</h3>
      <p>Simpan CV dalam format PDF atau .docx, kecuali jika perusahaan secara khusus meminta format lain.</p>
      
      <h3>8. Jangan Gunakan Header untuk Informasi Penting</h3>
      <p>Beberapa ATS mungkin mengabaikan informasi dalam header dan footer. Pastikan informasi kontak dan detail penting lainnya berada dalam badan utama dokumen.</p>
      
      <h3>9. Hindari Penggunaan Template Online yang Rumit</h3>
      <p>Banyak template CV online yang terlihat menarik tetapi tidak kompatibel dengan ATS. Gunakan template sederhana atau buat sendiri dengan format yang bersih.</p>
      
      <h3>10. Periksa dengan ATS Checker</h3>
      <p>Gunakan alat pengecekan ATS online untuk mengevaluasi CV Anda sebelum mengirimkannya. Alat ini dapat membantu mengidentifikasi masalah potensial yang mungkin menyebabkan CV Anda ditolak.</p>
      
      <h3>Kesimpulan</h3>
      <p>Sebagai fresh graduate, membuat CV yang lolos ATS adalah langkah penting dalam mencari pekerjaan. Dengan mengikuti tips di atas, Anda dapat meningkatkan peluang CV Anda untuk lolos dari penyaringan awal dan sampai ke tangan recruiter manusia. Ingat, tujuan utama CV adalah mendapatkan wawancara, bukan pekerjaan secara langsung. Jadi, pastikan CV Anda cukup menarik untuk membuat recruiter ingin bertemu dengan Anda secara langsung.</p>
    `,
    author: "Sarah Wijaya",
    authorImage: "/images/author-1.png",
    date: "12 April 2023",
    readTime: "8 min read",
    coverImage: "/images/blog-cover-1.jpg",
    tags: ["CV", "ATS", "Fresh Graduate", "Job Hunting"],
  },
  {
    id: "2",
    title: "Perbedaan CV untuk Melamar di Startup vs Perusahaan Besar",
    excerpt: "Mengenal perbedaan strategi pembuatan CV untuk melamar di startup dan perusahaan besar...",
    content: `
      <h2>Perbedaan CV untuk Melamar di Startup vs Perusahaan Besar</h2>
      
      <p>Melamar pekerjaan di startup dan perusahaan besar memerlukan pendekatan yang berbeda, termasuk dalam pembuatan CV. Artikel ini akan membahas perbedaan utama dan strategi yang perlu Anda terapkan untuk meningkatkan peluang sukses di kedua jenis perusahaan tersebut.</p>
      
      <h3>Startup: Fokus pada Fleksibilitas dan Inovasi</h3>
      
      <h4>1. Tonjolkan Kemampuan Multitasking</h4>
      <p>Startup biasanya memiliki tim yang lebih kecil dengan peran yang lebih fleksibel. Tunjukkan pengalaman Anda menangani berbagai tanggung jawab sekaligus dan kemampuan beradaptasi dengan cepat.</p>
      
      <h4>2. Tekankan Keterampilan Problem-Solving</h4>
      <p>Startup menghadapi tantangan unik dan sering berubah. Sertakan contoh konkret bagaimana Anda mengidentifikasi masalah dan mengembangkan solusi inovatif.</p>
      
      <h4>3. Tunjukkan Passion dan Inisiatif</h4>
      <p>Startup menghargai kandidat yang memiliki passion dan dapat mengambil inisiatif. Ceritakan proyek sampingan, kontribusi open source, atau kegiatan yang menunjukkan motivasi intrinsik Anda.</p>
      
      <h4>4. Sesuaikan dengan Budaya Perusahaan</h4>
      <p>Riset budaya startup yang Anda lamar dan sesuaikan CV Anda untuk menunjukkan kecocokan nilai. Startup sering mencari "culture fit" sebanyak mereka mencari keterampilan teknis.</p>
      
      <h3>Perusahaan Besar: Fokus pada Struktur dan Spesialisasi</h3>
      
      <h4>1. Gunakan Kata Kunci yang Tepat</h4>
      <p>Perusahaan besar sering menggunakan ATS (Applicant Tracking System) untuk menyaring CV. Analisis deskripsi pekerjaan dan sertakan kata kunci yang relevan dalam CV Anda.</p>
      
      <h4>2. Tekankan Pencapaian Terukur</h4>
      <p>Perusahaan besar menghargai hasil yang terukur. Gunakan angka dan persentase untuk menggambarkan pencapaian Anda, misalnya: "Meningkatkan efisiensi proses sebesar 30% yang menghasilkan penghematan $50,000 per tahun".</p>
      
      <h4>3. Tunjukkan Kemampuan Bekerja dalam Struktur</h4>
      <p>Perusahaan besar memiliki hierarki dan proses yang jelas. Tunjukkan pengalaman Anda bekerja dalam tim besar, mengikuti protokol, dan berkomunikasi secara efektif dalam struktur organisasi.</p>
      
      <h4>4. Sesuaikan dengan Posisi Spesifik</h4>
      <p>Perusahaan besar mencari spesialis untuk peran tertentu. Fokuskan CV Anda pada keterampilan dan pengalaman yang paling relevan dengan posisi yang dilamar.</p>
      
      <h3>Persamaan: Apa yang Dibutuhkan Kedua Jenis Perusahaan</h3>
      
      <h4>1. Profesionalisme</h4>
      <p>Baik startup maupun perusahaan besar mengharapkan CV yang profesional, bebas dari kesalahan ejaan dan tata bahasa, serta diformat dengan rapi.</p>
      
      <h4>2. Relevansi</h4>
      <p>Selalu sesuaikan CV Anda dengan posisi spesifik yang Anda lamar, terlepas dari jenis perusahaannya.</p>
      
      <h4>3. Kejelasan</h4>
      <p>Gunakan bahasa yang jelas dan langsung. Hindari jargon yang berlebihan atau kalimat yang terlalu panjang.</p>
      
      <h3>Kesimpulan</h3>
      <p>Memahami perbedaan antara startup dan perusahaan besar dapat membantu Anda menyesuaikan CV dengan lebih efektif. Untuk startup, tunjukkan fleksibilitas, inovasi, dan kecocokan budaya. Untuk perusahaan besar, fokus pada spesialisasi, pencapaian terukur, dan kemampuan bekerja dalam struktur. Dengan pendekatan yang tepat, Anda dapat meningkatkan peluang untuk mendapatkan wawancara di kedua jenis perusahaan tersebut.</p>
    `,
    author: "Budi Santoso",
    authorImage: "/images/author-2.png",
    date: "5 Mei 2023",
    readTime: "10 min read",
    coverImage: "/images/blog-cover-1.jpg",
    tags: ["CV", "Startup", "Corporate", "Career Strategy"],
  },
  {
    id: "3",
    title: "Cara Menulis Ringkasan Profesional yang Menarik Perhatian Recruiter",
    excerpt: "Panduan lengkap menulis ringkasan profesional yang membuat recruiter terkesan...",
    content: `
      <h2>Cara Menulis Ringkasan Profesional yang Menarik Perhatian Recruiter</h2>
      
      <p>Ringkasan profesional adalah bagian pertama yang dibaca oleh recruiter dalam CV Anda. Bagian ini berfungsi sebagai "elevator pitch" yang memberikan gambaran singkat tentang siapa Anda sebagai profesional dan apa yang Anda tawarkan. Berikut adalah panduan lengkap untuk menulis ringkasan profesional yang efektif dan menarik perhatian recruiter.</p>
      
      <h3>Mengapa Ringkasan Profesional Penting?</h3>
      
      <p>Menurut penelitian, recruiter hanya menghabiskan sekitar 6-7 detik untuk scanning CV pada tahap awal. Ringkasan profesional yang kuat dapat membuat mereka tertarik untuk membaca lebih lanjut. Selain itu, ringkasan yang baik dapat:</p>
      
      <ul>
        <li>Menonjolkan kualifikasi utama Anda</li>
        <li>Menunjukkan kecocokan Anda dengan posisi yang dilamar</li>
        <li>Membedakan Anda dari kandidat lain</li>
      </ul>
      
      <h3>Struktur Ringkasan Profesional yang Efektif</h3>
      
      <h4>1. Mulai dengan Identifikasi Profesional</h4>
      <p>Mulailah dengan menyebutkan identitas profesional Anda, misalnya: "Digital Marketing Specialist dengan pengalaman 5 tahun" atau "Fresh Graduate Teknik Informatika dengan keahlian dalam pengembangan web".</p>
      
      <h4>2. Sebutkan Keahlian Utama</h4>
      <p>Identifikasi 3-4 keahlian utama yang paling relevan dengan posisi yang Anda lamar. Pastikan keahlian ini didukung oleh pengalaman atau pendidikan Anda.</p>
      
      <h4>3. Tonjolkan Pencapaian Penting</h4>
      <p>Sertakan 1-2 pencapaian penting yang menunjukkan nilai yang Anda bawa. Gunakan angka dan hasil terukur jika memungkinkan.</p>
      
      <h4>4. Akhiri dengan Tujuan Karier</h4>
      <p>Tunjukkan bagaimana posisi yang Anda lamar sesuai dengan tujuan karier Anda dan bagaimana Anda dapat berkontribusi pada perusahaan.</p>
      
      <h3>Tips Menulis Ringkasan Profesional yang Menarik</h3>
      
      <h4>1. Sesuaikan dengan Posisi yang Dilamar</h4>
      <p>Jangan gunakan ringkasan yang sama untuk semua lamaran. Sesuaikan dengan kebutuhan spesifik dari posisi dan perusahaan yang Anda lamar.</p>
      
      <h4>2. Gunakan Kata Kerja Aktif</h4>
      <p>Mulai kalimat dengan kata kerja aktif seperti "mengembangkan", "mengelola", "meningkatkan", atau "menciptakan" untuk menunjukkan tindakan dan hasil.</p>
      
      <h4>3. Singkat dan Padat</h4>
      <p>Batasi ringkasan Anda menjadi 3-5 kalimat atau 4-6 baris. Recruiter tidak memiliki waktu untuk membaca paragraf panjang.</p>
      
      <h4>4. Sertakan Kata Kunci Industri</h4>
      <p>Gunakan kata kunci yang relevan dengan industri dan posisi untuk membantu CV Anda lolos dari sistem ATS.</p>
      
      <h4>5. Hindari Klise dan Generalisasi</h4>
      <p>Hindari frasa umum seperti "pekerja keras" atau "pemain tim". Sebaliknya, tunjukkan kualitas ini melalui contoh konkret.</p>
      
      <h3>Contoh Ringkasan Profesional</h3>
      
      <h4>Untuk Profesional Berpengalaman:</h4>
      <p>"Digital Marketing Manager dengan pengalaman 7 tahun dalam mengembangkan strategi pemasaran digital yang komprehensif. Ahli dalam SEO, SEM, dan analisis data dengan rekam jejak meningkatkan traffic website sebesar 150% dan konversi sebesar 40%. Mencari posisi yang memungkinkan penggunaan keahlian analitis dan kreatif untuk mendorong pertumbuhan bisnis."</p>
      
      <h4>Untuk Fresh Graduate:</h4>
      <p>"Lulusan baru Teknik Informatika dengan keahlian dalam pengembangan web (HTML, CSS, JavaScript, React) dan analisis data. Memiliki pengalaman magang di startup teknologi dan berhasil mengembangkan aplikasi web yang meningkatkan efisiensi proses internal sebesar 25%. Mencari posisi Junior Developer untuk mengembangkan keterampilan dan berkontribusi pada proyek inovatif."</p>
      
      <h3>Kesimpulan</h3>
      <p>Ringkasan profesional yang efektif dapat menjadi pembeda utama dalam CV Anda. Dengan mengikuti struktur dan tips di atas, Anda dapat membuat ringkasan yang menarik perhatian recruiter dan meningkatkan peluang untuk dipanggil wawancara. Ingat untuk selalu menyesuaikan ringkasan Anda dengan setiap posisi yang Anda lamar untuk hasil terbaik.</p>
    `,
    author: "Dian Permata",
    authorImage: "/images/author-3.png",
    date: "20 Juni 2023",
    readTime: "7 min read",
    coverImage: "/images/blog-cover-1.jpg",
    tags: ["CV", "Professional Summary", "Job Application"],
  },
  {
    id: "4",
    title: "5 Kesalahan Fatal dalam CV yang Sering Dilakukan Pencari Kerja",
    excerpt: "Menghindari kesalahan umum yang bisa menggagalkan lamaran kerja Anda...",
    content: `
      <h2>5 Kesalahan Fatal dalam CV yang Sering Dilakukan Pencari Kerja</h2>
      
      <p>Curriculum Vitae (CV) adalah pintu gerbang pertama Anda menuju karier impian. Namun, banyak pencari kerja yang tidak menyadari bahwa mereka melakukan kesalahan fatal yang bisa langsung menggagalkan lamaran mereka. Artikel ini akan membahas lima kesalahan umum dalam CV dan bagaimana cara menghindarinya.</p>
      
      <h3>1. Menggunakan Template yang Tidak ATS-Friendly</h3>
      
      <p>Kesalahan: Menggunakan template CV dengan desain yang rumit, banyak grafik, atau format kolom ganda yang sulit dibaca oleh Applicant Tracking System (ATS).</p>
      
      <p>Dampak: CV Anda mungkin tidak pernah sampai ke tangan recruiter manusia karena ditolak oleh sistem ATS.</p>
      
      <p>Solusi:</p>
      <ul>
        <li>Gunakan format CV yang sederhana dan bersih</li>
        <li>Hindari header dan footer untuk informasi penting</li>
        <li>Gunakan format file yang standar (.docx atau .pdf)</li>
        <li>Hindari tabel, grafik, dan gambar yang kompleks</li>
        <li>Gunakan font standar seperti Arial, Calibri, atau Times New Roman</li>
      </ul>
      
      <h3>2. Tidak Menyesuaikan CV dengan Posisi yang Dilamar</h3>
      
      <p>Kesalahan: Mengirimkan CV yang sama untuk semua posisi tanpa penyesuaian.</p>
      
      <p>Dampak: CV Anda terlihat generik dan tidak menunjukkan kecocokan spesifik dengan posisi yang dilamar.</p>
      
      <p>Solusi:</p>
      <ul>
        <li>Analisis deskripsi pekerjaan untuk setiap posisi yang Anda lamar</li>
        <li>Sesuaikan bagian ringkasan profesional untuk mencerminkan kebutuhan posisi</li>
        <li>Tonjolkan pengalaman dan keterampilan yang paling relevan</li>
        <li>Gunakan kata kunci dari deskripsi pekerjaan (secara alami, bukan sekadar copy-paste)</li>
        <li>Ubah urutan informasi untuk menonjolkan kualifikasi yang paling relevan</li>
      </ul>
      
      <h3>3. Fokus pada Tugas, Bukan Pencapaian</h3>
      
      <p>Kesalahan: Hanya mendaftar tugas dan tanggung jawab tanpa menunjukkan pencapaian konkret.</p>
      
      <p>Dampak: CV Anda tidak menunjukkan nilai tambah yang Anda berikan dan terkesan seperti deskripsi pekerjaan biasa.</p>
      
      <p>Solusi:</p>
      <ul>
        <li>Gunakan format STAR (Situation, Task, Action, Result) untuk mendeskripsikan pengalaman</li>
        <li>Sertakan angka dan persentase untuk menunjukkan dampak kerja Anda</li>
        <li>Fokus pada bagaimana Anda melampaui ekspektasi, bukan hanya memenuhi tugas</li>
        <li>Gunakan kata kerja aktif yang kuat seperti "meningkatkan", "mengoptimalkan", "mengurangi"</li>
        <li>Tunjukkan bagaimana kontribusi Anda mempengaruhi bottom line perusahaan</li>
      </ul>
      
      <h3>4. Kesalahan Ejaan dan Tata Bahasa</h3>
      
      <p>Kesalahan: Membiarkan kesalahan ejaan, tata bahasa, atau inkonsistensi format dalam CV.</p>
      
      <p>Dampak: Menunjukkan ketidaktelitian dan kurangnya perhatian terhadap detail, yang bisa menjadi red flag bagi recruiter.</p>
      
      <p>Solusi:</p>
      <ul>
        <li>Periksa CV Anda beberapa kali dengan teliti</li>
        <li>Gunakan alat pemeriksaan ejaan dan tata bahasa</li>
        <li>Minta orang lain untuk membaca dan memberikan feedback</li>
        <li>Pastikan format konsisten (ukuran font, spasi, bullet points, dll.)</li>
        <li>Baca CV Anda dengan keras untuk menangkap kesalahan yang mungkin terlewat</li>
      </ul>
      
      <h3>5. CV Terlalu Panjang atau Terlalu Pendek</h3>
      
      <p>Kesalahan: Membuat CV yang terlalu panjang (lebih dari 2 halaman) atau terlalu pendek (kurang dari 1 halaman penuh).</p>
      
      <p>Dampak: CV yang terlalu panjang mungkin tidak dibaca seluruhnya, sementara CV yang terlalu pendek bisa mengesankan kurangnya pengalaman atau upaya.</p>
      
      <p>Solusi:</p>
      <ul>
        <li>Untuk profesional dengan pengalaman kurang dari 10 tahun, batasi CV menjadi 1-2 halaman</li>
        <li>Fokus pada pengalaman dalam 10 tahun terakhir yang paling relevan</li>
        <li>Hilangkan informasi yang tidak relevan dengan posisi yang dilamar</li>
        <li>Gunakan format yang efisien dengan bullet points dan kalimat singkat</li>
        <li>Untuk fresh graduate, sertakan magang, proyek akademik, dan kegiatan ekstrakurikuler yang relevan</li>
      </ul>
      
      <h3>Kesimpulan</h3>
      <p>Menghindari kelima kesalahan fatal ini dapat secara signifikan meningkatkan peluang CV Anda untuk lolos seleksi awal dan sampai ke tahap wawancara. Ingat bahwa CV adalah alat pemasaran diri Anda, jadi berikan waktu dan upaya yang cukup untuk membuatnya seefektif mungkin. Dengan CV yang kuat dan relevan, Anda satu langkah lebih dekat menuju karier impian Anda.</p>
    `,
    author: "Andi Pratama",
    authorImage: "/images/author-4.png",
    date: "8 Juli 2023",
    readTime: "9 min read",
    coverImage: "/images/blog-cover-1.jpg",
    tags: ["CV", "Job Application", "Common Mistakes"],
  },
  {
    id: "5",
    title: "Cara Mengoptimalkan CV untuk Karier di Bidang Teknologi",
    excerpt: "Panduan khusus untuk profesional IT dalam membuat CV yang menonjol...",
    content: `
      <h2>Cara Mengoptimalkan CV untuk Karier di Bidang Teknologi</h2>
      
      <p>Industri teknologi memiliki karakteristik unik yang mempengaruhi bagaimana CV harus disusun dan dipresentasikan. Artikel ini akan membahas strategi khusus untuk mengoptimalkan CV Anda jika Anda mengejar karier di bidang teknologi, baik sebagai developer, data scientist, product manager, atau posisi tech lainnya.</p>
      
      <h3>Memahami Keunikan Industri Teknologi</h3>
      
      <p>Industri teknologi bergerak cepat, berorientasi pada keterampilan, dan sangat kompetitif. Recruiter tech biasanya mencari kombinasi dari:</p>
      <ul>
        <li>Keterampilan teknis yang spesifik dan up-to-date</li>
        <li>Bukti pembelajaran berkelanjutan dan adaptabilitas</li>
        <li>Pengalaman dengan metodologi dan tools tertentu</li>
        <li>Kontribusi pada proyek nyata dan hasil terukur</li>
      </ul>
      
      <h3>Struktur CV untuk Profesional Teknologi</h3>
      
      <h4>1. Bagian Keterampilan Teknis yang Komprehensif</h4>
      
      <p>Untuk posisi teknologi, bagian keterampilan teknis harus lebih menonjol dan terperinci:</p>
      <ul>
        <li>Kelompokkan keterampilan berdasarkan kategori (Programming Languages, Frameworks, Databases, Tools, dll.)</li>
        <li>Indikasikan tingkat keahlian Anda (misalnya dengan tahun pengalaman atau skala profisiensi)</li>
        <li>Prioritaskan keterampilan yang disebutkan dalam deskripsi pekerjaan</li>
        <li>Sertakan versi spesifik dari teknologi yang Anda kuasai (misalnya "React 18" bukan hanya "React")</li>
      </ul>
      
      <p>Contoh:</p>
      <pre>
TECHNICAL SKILLS
Programming Languages: Python (5 years), JavaScript (4 years), Java (2 years), SQL (3 years)
Frameworks & Libraries: React 18, Node.js, Django, Flask, TensorFlow
Databases: PostgreSQL, MongoDB, Redis
DevOps & Tools: Docker, Kubernetes, AWS (EC2, S3, Lambda), CI/CD, Git
Methodologies: Agile/Scrum, TDD, Microservices Architecture
      </pre>
      
      <h4>2. Portfolio dan Link Proyek</h4>
      
      <p>Untuk posisi teknologi, "showing" lebih penting daripada "telling":</p>
      <ul>
        <li>Sertakan link ke GitHub, portfolio online, atau proyek yang dapat diakses</li>
        <li>Tambahkan QR code yang mengarah ke portfolio Anda (untuk CV cetak)</li>
        <li>Berikan ringkasan singkat tentang proyek terbaik Anda dan teknologi yang digunakan</li>
      </ul>
      
      <h4>3. Pengalaman Kerja dengan Fokus Teknis</h4>
      
      <p>Deskripsikan pengalaman kerja Anda dengan fokus pada aspek teknis dan hasil:</p>
      <ul>
        <li>Sebutkan teknologi dan metodologi yang digunakan dalam setiap peran</li>
        <li>Fokus pada masalah teknis yang Anda pecahkan dan bagaimana Anda memecahkannya</li>
        <li>Sertakan metrik kinerja seperti peningkatan performa, pengurangan bug, atau optimasi</li>
      </ul>
      
      <p>Contoh:</p>
      <pre>
Full Stack Developer | TechCorp Inc. | Jan 2020 - Present
• Developed scalable microservices architecture using Node.js and Express that reduced API response time by 40%
• Implemented CI/CD pipeline with GitHub Actions and Docker, cutting deployment time from 2 hours to 15 minutes
• Refactored legacy codebase to React 18, resulting in 30% improvement in application performance
• Technologies: JavaScript, TypeScript, React, Node.js, MongoDB, Docker, AWS
      </pre>
      
      <h4>4. Sertifikasi dan Pembelajaran Berkelanjutan</h4>
      
      <p>Industri teknologi sangat menghargai pembelajaran berkelanjutan:</p>
      <ul>
        <li>Sertakan sertifikasi teknis yang relevan (AWS, Google Cloud, Microsoft, Cisco, dll.)</li>
        <li>Tambahkan kursus online yang telah Anda selesaikan (Udemy, Coursera, edX)</li>
        <li>Sebutkan hackathon, workshop, atau konferensi yang Anda ikuti</li>
      </ul>
      
      <h3>Tips Khusus untuk Berbagai Peran Teknologi</h3>
      
      <h4>Untuk Software Developers:</h4>
      <ul>
        <li>Tonjolkan kontribusi pada proyek open source</li>
        <li>Sertakan metrik kode seperti code coverage, pengurangan technical debt, atau optimasi performa</li>
        <li>Tunjukkan pengalaman dengan berbagai paradigma pemrograman</li>
      </ul>
      
      <h4>Untuk Data Scientists:</h4>
      <ul>
        <li>Fokus pada proyek analisis data dan machine learning dengan hasil bisnis yang jelas</li>
        <li>Sertakan pengalaman dengan dataset besar dan teknik optimasi</li>
        <li>Tunjukkan kemampuan komunikasi data melalui visualisasi dan presentasi</li>
      </ul>
      
      <h4>Untuk UX/UI Designers:</h4>
      <ul>
        <li>Sertakan link ke portfolio visual</li>
        <li>Fokus pada metrik user engagement dan conversion</li>
        <li>Tunjukkan pengalaman dengan design systems dan collaborative tools</li>
      </ul>
      
      <h4>Untuk Product Managers:</h4>
      <ul>
        <li>Tonjolkan produk yang Anda kelola dan metrik pertumbuhannya</li>
        <li>Tunjukkan pemahaman tentang teknologi dan kemampuan bekerja dengan tim teknis</li>
        <li>Sertakan pengalaman dengan metodologi product development</li>
      </ul>
      
      <h3>Hindari Kesalahan Umum dalam CV Teknologi</h3>
      
      <ul>
        <li>Jangan mencantumkan setiap teknologi yang pernah Anda gunakan - fokus pada yang Anda kuasai</li>
        <li>Hindari jargon berlebihan yang mungkin tidak dipahami oleh recruiter non-teknis</li>
        <li>Jangan hanya mendaftar tugas - tunjukkan dampak dan hasil</li>
        <li>Hindari klaim yang tidak dapat diverifikasi - bersiaplah untuk diuji pada wawancara teknis</li>
      </ul>
      
      <h3>Kesimpulan</h3>
      <p>CV untuk karier di bidang teknologi harus menunjukkan kombinasi dari keterampilan teknis yang kuat, pengalaman proyek nyata, dan kemampuan untuk terus belajar dan beradaptasi. Dengan mengoptimalkan CV Anda menggunakan tips di atas, Anda dapat meningkatkan peluang untuk menonjol di industri yang sangat kompetitif ini dan mendapatkan peran teknologi yang Anda inginkan.</p>
    `,
    author: "Rini Wijaya",
    authorImage: "/images/author-5.png",
    date: "15 Agustus 2023",
    readTime: "11 min read",
    coverImage: "/images/blog-cover-1.jpg",
    tags: ["CV", "Tech Career", "IT Professional"],
  },
  {
    id: "6",
    title: "Bagaimana AI Mengubah Proses Rekrutmen dan Apa Artinya untuk CV Anda",
    excerpt: "Memahami dampak AI dalam rekrutmen dan cara menyesuaikan CV Anda...",
    content: `
      <h2>Bagaimana AI Mengubah Proses Rekrutmen dan Apa Artinya untuk CV Anda</h2>
      
      <p>Kecerdasan buatan (AI) telah merevolusi berbagai industri, dan rekrutmen tidak terkecuali. Dari sistem pelacakan pelamar (ATS) hingga algoritma pencocokan kandidat yang canggih, AI kini memainkan peran penting dalam menentukan siapa yang dipanggil untuk wawancara. Artikel ini akan membahas bagaimana AI mengubah proses rekrutmen dan strategi untuk menyesuaikan CV Anda agar berhasil dalam era rekrutmen berbasis AI.</p>
      
      <h3>Bagaimana AI Digunakan dalam Rekrutmen</h3>
      
      <h4>1. Penyaringan CV Otomatis</h4>
      <p>Sistem ATS tradisional telah berkembang menjadi alat yang lebih canggih yang tidak hanya mencari kata kunci, tetapi juga menganalisis konteks, relevansi, dan bahkan prediksi kecocokan kandidat dengan budaya perusahaan.</p>
      
      <h4>2. Analisis Prediktif</h4>
      <p>AI dapat menganalisis data dari karyawan sukses sebelumnya untuk memprediksi kandidat mana yang kemungkinan besar akan berhasil dalam peran tertentu, berdasarkan pola dalam pengalaman, keterampilan, dan latar belakang pendidikan.</p>
      
      <h4>3. Chatbot dan Asisten Virtual</h4>
      <p>Banyak perusahaan kini menggunakan chatbot AI untuk melakukan penyaringan awal dan wawancara berbasis teks, mengevaluasi respons kandidat berdasarkan parameter yang telah ditentukan.</p>
      
      <h4>4. Analisis Video</h4>
      <p>Beberapa perusahaan menggunakan AI untuk menganalisis wawancara video, menilai bahasa tubuh, nada suara, dan pola bicara untuk mengidentifikasi kandidat potensial.</p>
      
      <h4>5. Pencocokan Berbasis Keterampilan</h4>
      <p>Algoritma AI dapat mencocokkan keterampilan kandidat dengan persyaratan pekerjaan dengan tingkat presisi yang lebih tinggi, melihat melampaui kata kunci sederhana untuk memahami keahlian yang sebenarnya.</p>
      
      <h3>Strategi Menyesuaikan CV Anda untuk Era AI</h3>
      
      <h4>1. Optimalkan untuk NLP (Natural Language Processing)</h4>
      
      <p>AI modern menggunakan NLP untuk memahami konteks dan semantik, bukan hanya kata kunci:</p>
      <ul>
        <li>Gunakan bahasa alami dan hindari keyword stuffing yang jelas</li>
        <li>Sertakan sinonim dan variasi dari keterampilan kunci (misalnya "analisis data" dan "data analytics")</li>
        <li>Gunakan terminologi industri standar yang akan dikenali oleh sistem AI</li>
      </ul>
      
      <h4>2. Struktur yang Jelas dan Konsisten</h4>
      
      <p>AI memproses informasi lebih efektif ketika disajikan dalam format yang terstruktur:</p>
      <ul>
        <li>Gunakan judul bagian standar (Ringkasan, Pengalaman, Pendidikan, Keterampilan)</li>
        <li>Pertahankan format tanggal yang konsisten (MM/YYYY atau bulan lengkap dan tahun)</li>
        <li>Gunakan bullet points untuk daftar pencapaian dan tanggung jawab</li>
        <li>Hindari tabel kompleks, grafik, atau elemen desain yang mungkin membingungkan AI</li>
      </ul>
      
      <h4>3. Kuantifikasi Pencapaian</h4>
      
      <p>AI sering dilatih untuk mencari hasil terukur:</p>
      <ul>
        <li>Sertakan angka, persentase, dan metrik spesifik untuk menunjukkan dampak</li>
        <li>Gunakan format yang konsisten untuk menyajikan metrik (misalnya "Meningkatkan X sebesar Y%, menghasilkan Z")</li>
        <li>Fokus pada hasil bisnis, bukan hanya aktivitas</li>
      </ul>
      
      <h4>4. Sesuaikan dengan Deskripsi Pekerjaan</h4>
      
      <p>AI sering membandingkan CV dengan deskripsi pekerjaan untuk menilai kecocokan:</p>
      <ul>
        <li>Analisis deskripsi pekerjaan untuk mengidentifikasi keterampilan dan kualifikasi kunci</li>
        <li>Gunakan terminologi yang sama dengan deskripsi pekerjaan (jika Anda memang memiliki keterampilan tersebut)</li>
        <li>Prioritaskan pengalaman yang paling relevan dengan posisi yang dilamar</li>
      </ul>
      
      <h4>5. Hindari "Trik" yang Sudah Ketinggalan Zaman</h4>
      
      <p>AI modern lebih canggih daripada sistem ATS lama:</p>
      <ul>
        <li>Hindari teks tersembunyi atau teks berwarna putih dengan kata kunci</li>
        <li>Jangan berlebihan dengan kata kunci yang tidak mencerminkan pengalaman sebenarnya</li>
        <li>Hindari format yang terlalu kreatif yang mungkin membingungkan AI</li>
      </ul>
      
      <h4>6. Gunakan Format File yang Tepat</h4>
      
      <p>Format file dapat mempengaruhi bagaimana AI memproses CV Anda:</p>
      <ul>
        <li>Gunakan .docx atau .pdf (pastikan PDF Anda dapat dicari/searchable)</li>
        <li>Hindari gambar atau scan dari dokumen cetak</li>
        <li>Jika menggunakan PDF, pastikan itu dibuat dari dokumen digital, bukan scan</li>
      </ul>
      
      <h3>Masa Depan Rekrutmen AI dan Implikasinya</h3>
      
      <h4>Personalisasi vs. Standarisasi</h4>
      <p>Saat AI menjadi lebih canggih, terdapat ketegangan antara kebutuhan untuk menstandarisasi CV Anda agar dibaca mesin dan keinginan untuk menunjukkan kepribadian unik Anda. Solusinya adalah menemukan keseimbangan: struktur yang jelas dengan konten yang personal dan otentik.</p>
      
      <h4>Keterampilan Lunak (Soft Skills)</h4>
      <p>AI semakin mampu mengidentifikasi indikator keterampilan lunak dari bahasa yang Anda gunakan. Sertakan contoh konkret yang menunjukkan keterampilan seperti kepemimpinan, kolaborasi, atau pemecahan masalah.</p>
      
      <h4>Pembelajaran Berkelanjutan</h4>
      <p>Algoritma rekrutmen terus berkembang. Tetap up-to-date dengan tren terbaru dalam rekrutmen AI dan sesuaikan strategi CV Anda sesuai kebutuhan.</p>
      
      <h3>Kesimpulan</h3>
      <p>AI telah mengubah cara perusahaan merekrut dan menyeleksi kandidat. Dengan memahami bagaimana teknologi ini bekerja dan menyesuaikan CV Anda untuk mengoptimalkan pembacaan dan analisis AI, Anda dapat meningkatkan peluang untuk melewati penyaringan awal dan sampai ke tahap wawancara. Ingat bahwa tujuan akhirnya adalah menyajikan kualifikasi Anda dengan cara yang dapat diproses secara efektif oleh AI sambil tetap otentik dan akurat dalam representasi keterampilan dan pengalaman Anda.</p>
    `,
    author: "Fajar Ramadhan",
    authorImage: "/images/author-6.png",
    date: "3 September 2023",
    readTime: "12 min read",
    coverImage: "/images/blog-cover-1.jpg",
    tags: ["CV", "AI", "Recruitment", "Job Application"],
  },
]

export default function BlogPost() {
  const params = useParams()
  const id = params.id as string

  const post = blogPosts.find((post) => post.id === id)

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-16 flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Artikel tidak ditemukan</h1>
            <p className="mb-6">Maaf, artikel yang Anda cari tidak tersedia.</p>
            <Button asChild>
              <Link href="/blog">Kembali ke Blog</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/blog" className="inline-flex items-center text-primary hover:underline mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali ke Blog
              </Link>

              <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
                <Image
                  src={post.coverImage || "/placeholder.svg?height=400&width=800"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <ScrollReveal>
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </ScrollReveal>

            <div className="mt-12 pt-8 border-t">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={post.authorImage || "/placeholder.svg?height=60&width=60"}
                      alt={post.author}
                      width={60}
                      height={60}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold">{post.author}</p>
                    <p className="text-sm text-muted-foreground">Penulis</p>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  Bagikan Artikel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
