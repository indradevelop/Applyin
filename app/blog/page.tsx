"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Search, User, TagIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { motion, AnimatePresence } from "framer-motion"
import { GradientText } from "@/components/animations/gradient-text"
import { FloatingElements } from "@/components/animations/floating-elements"

// Sample blog data
const blogPosts = [
  {
    id: "1",
    title: "10 Tips Membuat CV yang Lolos ATS untuk Fresh Graduate",
    excerpt: "Panduan lengkap untuk fresh graduate dalam membuat CV yang lolos sistem ATS...",
    author: "Sarah Wijaya",
    date: "12 April 2023",
    readTime: "8 min read",
    coverImage: "/images/blog-cover-1.jpg",
    tags: ["CV", "ATS", "Fresh Graduate", "Job Hunting"],
  },
  {
    id: "2",
    title: "Perbedaan CV untuk Melamar di Startup vs Perusahaan Besar",
    excerpt: "Mengenal perbedaan strategi pembuatan CV untuk melamar di startup dan perusahaan besar...",
    author: "Budi Santoso",
    date: "5 Mei 2023",
    readTime: "10 min read",
    coverImage: "/images/blog-cover-1.jpg",
    tags: ["CV", "Startup", "Corporate", "Career Strategy"],
  },
  {
    id: "3",
    title: "Cara Menulis Ringkasan Profesional yang Menarik Perhatian Recruiter",
    excerpt: "Panduan lengkap menulis ringkasan profesional yang membuat recruiter terkesan...",
    author: "Dian Permata",
    date: "20 Juni 2023",
    readTime: "7 min read",
    coverImage: "/images/blog-cover-1.jpg",
    tags: ["CV", "Professional Summary", "Job Application"],
  },
  {
    id: "4",
    title: "5 Kesalahan Fatal dalam CV yang Sering Dilakukan Pencari Kerja",
    excerpt: "Menghindari kesalahan umum yang bisa menggagalkan lamaran kerja Anda...",
    author: "Andi Pratama",
    date: "8 Juli 2023",
    readTime: "9 min read",
    coverImage: "/images/blog-cover-1.jpg",
    tags: ["CV", "Job Application", "Common Mistakes"],
  },
  {
    id: "5",
    title: "Cara Mengoptimalkan CV untuk Karier di Bidang Teknologi",
    excerpt: "Panduan khusus untuk profesional IT dalam membuat CV yang menonjol...",
    author: "Rini Wijaya",
    date: "15 Agustus 2023",
    readTime: "11 min read",
    coverImage: "/images/blog-cover-1.jpg",
    tags: ["CV", "Tech Career", "IT Professional"],
  },
  {
    id: "6",
    title: "Bagaimana AI Mengubah Proses Rekrutmen dan Apa Artinya untuk CV Anda",
    excerpt: "Memahami dampak AI dalam rekrutmen dan cara menyesuaikan CV Anda...",
    author: "Fajar Ramadhan",
    date: "3 September 2023",
    readTime: "12 min read",
    coverImage: "/images/blog-cover-1.jpg",
    tags: ["CV", "AI", "Recruitment", "Job Application"],
  },
]

// All unique tags from blog posts
const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags))).sort()

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  // Filter posts based on search query and selected tag
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true

    return matchesSearch && matchesTag
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 relative">
            <FloatingElements count={8} color="primary" size={12} />
            <h1 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
              <GradientText from="from-primary" to="to-purple-500">
                Blog & Artikel
              </GradientText>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto relative z-10">
              Tips dan panduan lengkap untuk membuat CV yang profesional dan lolos ATS
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-3xl mx-auto mb-12">
            <div
              className={`relative mb-6 transition-all duration-300 ${isSearchFocused ? "ring-2 ring-primary/50 rounded-lg" : ""}`}
            >
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Cari artikel..."
                className="pl-10 pr-4 py-2 rounded-lg border-muted bg-background/50 backdrop-blur-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedTag === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(null)}
                className={
                  selectedTag === null
                    ? "bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                    : ""
                }
              >
                Semua
              </Button>
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(tag)}
                  className={
                    selectedTag === tag
                      ? "bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                      : ""
                  }
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog Posts */}
          <AnimatePresence>
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <ScrollReveal>
                      <Link href={`/blog/${post.id}`} className="group block">
                        <div className="rounded-xl overflow-hidden bg-card border transition-all duration-300 hover:shadow-md">
                          <div className="relative h-48 w-full overflow-hidden">
                            <Image
                              src={post.coverImage || "/placeholder.svg?height=200&width=400"}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-3">
                              {post.tags.slice(0, 2).map((tag) => (
                                <Badge
                                  key={tag}
                                  variant="outline"
                                  className="bg-primary/10 text-primary border-primary/20"
                                >
                                  {tag}
                                </Badge>
                              ))}
                              {post.tags.length > 2 && (
                                <Badge variant="outline" className="bg-muted/50 text-muted-foreground">
                                  +{post.tags.length - 2}
                                </Badge>
                              )}
                            </div>
                            <h2 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                              {post.title}
                            </h2>
                            <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                            <div className="flex flex-wrap items-center text-xs text-muted-foreground gap-4">
                              <div className="flex items-center">
                                <Calendar className="h-3 w-3 mr-1" />
                                <span>{post.date}</span>
                              </div>
                              <div className="flex items-center">
                                <User className="h-3 w-3 mr-1" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </ScrollReveal>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="text-center py-12"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                  <TagIcon className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground mb-4">Tidak ada artikel yang sesuai dengan pencarian Anda.</p>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedTag(null)
                  }}
                  className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                >
                  Reset Pencarian
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  )
}
