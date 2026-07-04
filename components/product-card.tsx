"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ShoppingBag, ShoppingCart, Check } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { useCart } from "@/lib/cart-context"
import { STORE_INFO, type Product } from "@/lib/store-data"
import { Badge } from "@/components/ui/badge"

export function ProductCard({ product }: { product: Product }) {
  const router = useRouter()
  const { t } = useLanguage()
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  const handleBuyNow = () => {
    addToCart(product)
    router.push("/checkout")
  }

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
      {/* Badge */}
      {product.badge && (
        <Badge className="absolute start-3 top-3 z-10 bg-accent text-accent-foreground hover:bg-accent/80">
          {t(product.badge)}
        </Badge>
      )}

      {/* Image */}
      <Link href={`/products/${product.id}`} className="block overflow-hidden">
        <div className="relative aspect-square bg-secondary/50">
          <Image
            src={product.image}
            alt={t(product.name)}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
      </Link>

      {/* Info */}
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-sm font-bold text-foreground transition-colors group-hover:text-accent">
            {t(product.name)}
          </h3>
        </Link>
        <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
          {t(product.description)}
        </p>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg font-bold text-gold">
            {product.price} {t({ ar: "ر.س", en: "SAR" })}
          </span>
          {product.oldPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {product.oldPrice} {t({ ar: "ر.س", en: "SAR" })}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="mt-3 flex gap-2">
          <button
            onClick={handleBuyNow}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent px-3 py-2 text-xs font-semibold text-accent-foreground transition-colors hover:bg-accent/90 cursor-pointer"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            {t({ ar: "شراء الآن", en: "Buy Now" })}
          </button>

          {/* Add to Cart button */}
          <button
            onClick={handleAddToCart}
            aria-label={t({ ar: "أضف للسلة", en: "Add to cart" })}
            className={`flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-semibold transition-all duration-300 ${added
                ? "border-green-500 bg-green-500/10 text-green-500"
                : "border-border bg-card text-muted-foreground hover:border-accent/60 hover:bg-accent/5 hover:text-accent"
              }`}
          >
            {added ? (
              <>
                <Check className="h-3.5 w-3.5" />
                {t({ ar: "تمت الإضافة", en: "Added!" })}
              </>
            ) : (
              <>
                <ShoppingCart className="h-3.5 w-3.5" />
                {t({ ar: "السلة", en: "Cart" })}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
