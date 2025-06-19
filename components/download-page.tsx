'use client'

import { CVModern } from "@/components/cv-modern"
import { getFallbackData } from "@/components/cv-preview"
import { neon } from "@neondatabase/serverless"
import { useEffect, useState } from "react"
import { CVClassic } from "./cv-classic"
import { CVMinimal } from "./cv-minimal"


interface DownloadPageProps {
    profileId: string
    language: string
    template: string
}
export function DownloadPage({ profileId, language, template }: DownloadPageProps) {

    const [cvData, setCvData] = useState<any>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const sql = neon(`${process.env.NEXT_PUBLIC_DATABASE_URL}`)
                const result = await sql`SELECT * FROM profiles WHERE id = ${profileId}`;
                if (result.length > 0) {
                    setCvData(JSON.parse(`${result[0].profile}`));
                } else {
                    // Use fallback data if no data is found
                    setCvData(getFallbackData());
                }
            } catch (e) {
                console.error("Error fetching CV data:", e);
                // Use fallback data if fetching fails
                setCvData(getFallbackData());
            }
        };
        fetchData();
    }, [profileId]);

    return cvData ?
        template == 'modern' ? <CVModern language={language} cvData={cvData} /> :
            template == 'classic' ? <CVClassic language={language} cvData={cvData} /> :
                template == 'minimal' ? <CVMinimal language={language} cvData={cvData} /> : "" : ""

}
