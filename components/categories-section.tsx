"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { CATEGORIES } from "@/lib/store-data"

export function CategoriesSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
            {t({ ar: "تسوق حسب القسم", en: "Shop by Category" })}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {t({
              ar: "اختر من بين مجموعة واسعة من الأقسام",
              en: "Choose from a wide range of categories",
            })}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.id}`}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="relative aspect-square">
                <Image
                  src={cat.image}
                  alt={t(cat.name)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-3 text-center">
                <p className="text-sm font-bold text-foreground">
                  {t(cat.name)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
