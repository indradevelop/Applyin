import puppeteerCore from "puppeteer-core";
import chromium from "@sparticuz/chromium-min";

export async function GET(request: Request) {
    try {
        console.log('Starting PDF generation...');
        
        let browser;
        
        const remoteExecutablePath = "https://github.com/Sparticuz/chromium/releases/download/v121.0.0/chromium-v121.0.0-pack.tar"

        
        if (process.env.NEXT_PUBLIC_VERCEL_ENVIRONMENT === "production") {
            browser = await puppeteerCore.launch({
                args: chromium.args,
                executablePath: await chromium.executablePath(remoteExecutablePath),
                defaultViewport: null,
                headless: true,
            })
        }else{
            browser = await puppeteerCore.launch({
                args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                ],
                executablePath: '/Applications/Chromium.app/Contents/MacOS/Chromium',
                headless: true,
            })
        }
        
        const page = await browser.newPage()
        
        // Build the target URL
        const url = new URL(request.url)
        const profileId = url.searchParams.get('profileId') || '1'
        const language = url.searchParams.get('language') || 'id'
        const template = url.searchParams.get('template') || 'modern'
        const targetUrl = `${url.protocol}//${url.host}/download/${profileId}/${language}/${template}`
        
        console.log('Navigating to:', targetUrl)
        
        await page.goto(targetUrl, {
            waitUntil: 'networkidle0'
        });
        
        
        console.log('Page loaded, generating PDF...');
        
        const pdfBuffer = await page.pdf({
            format: "A4",
            printBackground: false,
            margin: {
                top: "1in",
                bottom: "1in",
                left: "1in",
                right: "1in",
            },
            landscape: false,
            preferCSSPageSize: false,
            scale: 1.0,
        });
        
        await browser.close();
        console.log('PDF generated successfully')
        
        return new Response(pdfBuffer, {
            status: 200,
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": "attachment; filename=document.pdf",
            },
        })
        
    } catch (error: any) {
        console.error('PDF Generation Error:', error)
        return new Response(JSON.stringify({
            error: 'Failed to generate PDF',
            details: error.message,
            suggestion: 'Try installing Google Chrome or run: pnpm add @sparticuz/chromium',
            timestamp: new Date().toISOString()
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        })
    }
}