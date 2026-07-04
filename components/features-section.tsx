"use client"

import { Truck, Shield, Headphones, CreditCard } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const FEATURES = [
  {
    icon: Truck,
    title: { ar: "شحن سريع", en: "Fast Shipping" },
    description: { ar: "توصيل سريع لجميع مناطق المملكة", en: "Quick delivery across all regions of KSA" },
  },
  {
    icon: Shield,
    title: { ar: "جودة عالية", en: "Premium Quality" },
    description: { ar: "جميع منتجاتنا عالية الجودة ومختارة بعناية", en: "All our products are premium quality and carefully selected" },
  },
  {
    icon: Headphones,
    title: { ar: "دعم متواصل", en: "24/7 Support" },
    description: { ar: "فريق دعم متاح عبر واتساب والهاتف", en: "Support team available via WhatsApp & phone" },
  },
  {
    icon: CreditCard,
    title: { ar: "دفع آمن", en: "Secure Payment" },
    description: { ar: "طرق دفع متعددة وآمنة", en: "Multiple secure payment methods" },
  },
]

export function FeaturesSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 text-sm font-bold text-foreground">
                {t(feature.title)}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {t(feature.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
