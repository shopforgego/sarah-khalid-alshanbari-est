"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { STORE_INFO } from "@/lib/store-data"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const { lang, t } = useLanguage()
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight

  return (
    <section className="relative overflow-hidden bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Content */}
          <div className="relative z-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium text-gold">
              {t({ ar: "عروض حصرية", en: "Exclusive Offers" })}
            </div>
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {t({
                ar: "أحدث الهواتف الذكية",
                en: "Latest Smartphones",
              })}
              <br />
              <span className="text-gold">
                {t({
                  ar: "وملحقاتها",
                  en: "& Accessories",
                })}
              </span>
            </h1>
            <p className="mt-4 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              {t({
                ar: "اكتشف أحدث الهواتف الذكية والإلكترونيات بأفضل الأسعار في مكة المكرمة. منتجات أصلية مع ضمان وشحن سريع.",
                en: "Discover the latest smartphones & electronics at the best prices in Makkah. Genuine products with warranty and fast shipping.",
              })}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/products">
                <Button className="gap-2 bg-gold text-foreground hover:bg-gold-light">
                  {t({ ar: "تسوق الآن", en: "Shop Now" })}
                  <Arrow className="h-4 w-4" />
                </Button>
              </Link>
              <a href={`tel:${STORE_INFO.phone}`}>
                <Button variant="outline" className="gap-2 border-border text-foreground hover:border-gold hover:text-gold">
                  <Phone className="h-4 w-4" />
                  {t({ ar: "اتصل بنا", en: "Call Us" })}
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 flex gap-8">
              <div>
                <p className="text-2xl font-bold text-gold">500+</p>
                <p className="text-xs text-muted-foreground">{t({ ar: "منتج متوفر", en: "Products Available" })}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gold">1000+</p>
                <p className="text-xs text-muted-foreground">{t({ ar: "عميل سعيد", en: "Happy Customers" })}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gold">100%</p>
                <p className="text-xs text-muted-foreground">{t({ ar: "منتجات أصلية", en: "Genuine Products" })}</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/hero-phones.jpg"
                alt={t({ ar: "أحدث الهواتف الذكية", en: "Latest Smartphones" })}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
            </div>
            {/* Promo badge */}
            <div className="absolute -bottom-4 start-4 rounded-xl bg-gold px-5 py-3 text-center shadow-lg sm:start-8">
              <p className="text-2xl font-bold text-foreground">
                {t({ ar: "خصم حتى", en: "Up to" })}
              </p>
              <p className="text-3xl font-black text-foreground">72%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
