"use client"

import Image from "next/image"
import { Phone, Mail, MapPin, MessageCircle, Clock, Building } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { STORE_INFO } from "@/lib/store-data"
import { Button } from "@/components/ui/button"

export function ContactContent() {
  const { t } = useLanguage()

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">
          {t({ ar: "تواصل معنا", en: "Contact Us" })}
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
          {t({
            ar: "نحن هنا لمساعدتك. تواصل معنا عبر أي من الطرق التالية وسنرد عليك في أسرع وقت.",
            en: "We're here to help. Reach out through any of the following methods and we'll get back to you promptly.",
          })}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Info Cards */}
        <div className="flex flex-col gap-4">
          {/* Store Info */}
          <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
            <Image
              src="/images/arjwan_logo.png"
              alt={t(STORE_INFO.name)}
              width={56}
              height={56}
              className="rounded-lg"
            />
            <div>
              <h2 className="text-lg font-bold text-foreground">{t(STORE_INFO.name)}</h2>
              <p className="text-sm text-muted-foreground">{t(STORE_INFO.tagline)}</p>
            </div>
          </div>

          {/* Phone */}
          <a
            href={`tel:${STORE_INFO.phone}`}
            className="flex items-center gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10">
              <Phone className="h-5 w-5 text-gold" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">
                {t({ ar: "الهاتف", en: "Phone" })}
              </p>
              <p className="text-sm text-muted-foreground" dir="ltr">{STORE_INFO.phone}</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${STORE_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-whatsapp/40 hover:shadow-lg hover:shadow-whatsapp/5"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-whatsapp/10">
              <MessageCircle className="h-5 w-5 text-whatsapp" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">
                {t({ ar: "واتساب", en: "WhatsApp" })}
              </p>
              <p className="text-sm text-muted-foreground" dir="ltr">{STORE_INFO.phone}</p>
            </div>
          </a>

          {/* Emails */}
          {STORE_INFO.emails.map((email) => (
            <a
              key={email}
              href={`mailto:${email}`}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10">
                <Mail className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">
                  {t({ ar: "البريد الإلكتروني", en: "Email" })}
                </p>
                <p className="text-sm text-muted-foreground" dir="ltr">{email}</p>
              </div>
            </a>
          ))}

          {/* Location */}
          <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10">
              <MapPin className="h-5 w-5 text-gold" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">
                {t({ ar: "العنوان", en: "Address" })}
              </p>
              <p className="text-sm text-muted-foreground">{t(STORE_INFO.address)}</p>
              <p className="mt-1 text-xs text-muted-foreground" dir="ltr">
                {t({ ar: "الرمز البريدي", en: "Postal Code" })}: {STORE_INFO.postalCode}
              </p>
            </div>
          </div>

          {/* Building Info */}
          <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10">
              <Building className="h-5 w-5 text-gold" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">
                {t({ ar: "معلومات المبنى", en: "Building Info" })}
              </p>
              <p className="text-sm text-muted-foreground">
                {t({ ar: "رقم المبنى", en: "Building No" })}: {STORE_INFO.buildingNo}
              </p>
              <p className="text-sm text-muted-foreground">
                {t({ ar: "الرقم الإضافي", en: "Additional No" })}: {STORE_INFO.additionalNo}
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10">
              <Clock className="h-5 w-5 text-gold" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">
                {t({ ar: "ساعات العمل", en: "Working Hours" })}
              </p>
              <p className="text-sm text-muted-foreground">
                {t({ ar: "السبت - الخميس: 9 صباحاً - 11 مساءً", en: "Sat - Thu: 9:00 AM - 11:00 PM" })}
              </p>
              <p className="text-sm text-muted-foreground">
                {t({ ar: "الجمعة: 4 عصراً - 11 مساءً", en: "Friday: 4:00 PM - 11:00 PM" })}
              </p>
            </div>
          </div>
        </div>

        {/* Map & CTA */}
        <div className="flex flex-col gap-6">
          {/* Google Maps Embed */}
          <div className="overflow-hidden rounded-xl border border-border">
            <iframe
              title={t({ ar: "موقع المتجر", en: "Store Location" })}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.4!2d39.8!3d21.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDI0JzAwLjAiTiAzOcKwNDgnMDAuMCJF!5e0!3m2!1sar!2ssa!4v1"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="bg-secondary"
            />
          </div>

          {/* CTA Card */}
          <div className="rounded-xl border border-gold/30 bg-gold/5 p-8 text-center">
            <h3 className="text-xl font-bold text-foreground">
              {t({ ar: "هل تحتاج مساعدة؟", en: "Need Help?" })}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {t({
                ar: "فريقنا متاح عبر واتساب للإجابة على جميع استفساراتك",
                en: "Our team is available on WhatsApp to answer all your questions",
              })}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={`https://wa.me/${STORE_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full gap-2 bg-whatsapp text-white hover:bg-whatsapp/90 sm:w-auto">
                  <MessageCircle className="h-4 w-4" />
                  {t({ ar: "تواصل عبر واتساب", en: "Chat on WhatsApp" })}
                </Button>
              </a>
              <a href={`tel:${STORE_INFO.phone}`}>
                <Button variant="outline" className="w-full gap-2 border-gold text-gold hover:bg-gold/10 sm:w-auto">
                  <Phone className="h-4 w-4" />
                  {t({ ar: "اتصل الآن", en: "Call Now" })}
                </Button>
              </a>
            </div>
          </div>

          {/* About Store */}
          <div className="rounded-xl border border-border bg-card p-8">
            <h3 className="text-xl font-bold text-foreground">
              {t({ ar: "عن المؤسسة", en: "About the Establishment" })}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t({
                ar: "مؤسسة سارة خالد الشنبري هي وجهتك المثالية لشراء أحدث الملابس والأحذية وحقائب السفر والإكسسوارات. نحرص على تقديم منتجات عالية الجودة بأسعار تنافسية مع خدمة عملاء متميزة. نوفر شحن سريع لجميع أنحاء المملكة العربية السعودية.",
                en: "Sarah Khalid Al-Shanbari Est. is your ultimate destination for purchasing the latest clothing, shoes, travel bags, and accessories. We ensure high-quality products at competitive prices with excellent customer service. We provide fast shipping across the Kingdom of Saudi Arabia.",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
