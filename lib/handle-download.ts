'use client'

import { neon } from "@neondatabase/serverless"
import { v4 as uuidv4 } from 'uuid'

interface HandleDownloadProps {
  profileData: string
  language: string
  template: string
}

export async function HandleDownload({profileData, language, template}: HandleDownloadProps): Promise<boolean> {
    
    const sql = neon(`${process.env.NEXT_PUBLIC_DATABASE_URL}`)
    await sql`CREATE TABLE IF NOT EXISTS profiles (id UUID PRIMARY KEY, profile TEXT)`
    
    let profileId = localStorage.getItem("uuid")
    
    if(profileId == null){
      profileId = uuidv4()
      localStorage.setItem("uuid", profileId)
    }

    const result = await sql`SELECT COUNT(*) FROM profiles WHERE id = ${profileId}`
    const count = result[0].count
    console.log("Count of profiles with id 1:", count)

    if (count == 0) {
      console.log(`Inserting new profile with id ${profileId}`)
      await sql`INSERT INTO profiles (id, profile) VALUES (${profileId}, ${profileData})`
    } else {
      console.log(`Updating existing profile with id ${profileId}`)
      await sql`UPDATE profiles SET profile = ${profileData} WHERE id = ${profileId}`
    }
    
    const downloadUrl = `/api/download?profileId=${profileId}&language=${language}&template=${template}`
    const res = await fetch(downloadUrl)
    if(res.status !== 200) {
      return false
    }
    const blob = await res.blob()

    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.download = 'document.pdf'
    link.click()
    link.remove()

    return true

  }