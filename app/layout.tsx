import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Noto_Kufi_Arabic } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/lib/language-context'
import { CartProvider } from '@/lib/cart-context'
import { CartDrawer } from '@/components/cart-drawer'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const _notoKufiArabic = Noto_Kufi_Arabic({ subsets: ["arabic"], variable: "--font-noto-kufi-arabic", weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: 'Sarah Khalid Al-Shanbari Est. | مؤسسة سارة خالد الشنبري',
  description: 'مؤسسة سارة خالد الشنبري - ملابس وإكسسوارات وحقائب | Sarah Khalid Al-Shanbari Est. - Clothing, Accessories & Bags in Saudi Arabia',
  generator: 'v0.app',
  keywords: ['ملابس', 'أحذية', 'حقائب', 'إكسسوارات', 'clothing', 'shoes', 'bags', 'accessories', 'Saudi Arabia', 'سعودية'],
  icons: {
    icon: '/images/arjwan_logo.png',
    apple: '/images/arjwan_logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#3b82f6',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${_geist.variable} ${_geistMono.variable} ${_notoKufiArabic.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <CartProvider>
              {children}
              <CartDrawer />
            </CartProvider>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
