
import { DownloadPage } from "@/components/download-page"

export default async function Download({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {

  const { slug } = await params
  console.log("Download slug:", slug)
  console.log("Download profileId:", slug[0])
  console.log("Download language:", slug[1])
  console.log("Download template:", slug[2])
  return (<DownloadPage profileId={slug[0]} language={slug[1]} template={slug[2]} />)
}
