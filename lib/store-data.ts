export const STORE_INFO = {
  name: {
    ar: "مؤسسة أرجوان أحمد الشريف",
    en: "Arjwan Ahmed Al-Sharif Est.",
  },
  tagline: {
    ar: "هواتف إلكترونية ومستلزماتها",
    en: "Mobile Phones & Electronics Accessories",
  },
  phone: "0566235108",
  whatsapp: "966566235108",
  emails: ["orjuwanalshar@gmail.com"],
  address: {
    ar: "مكة المكرمة - حي العوالي - شارع مسجد إمام الدعوة",
    en: "Makkah Al-Mukarramah - Al-Awali District - Masjid Imam Ad-Da'wah Street",
  },
  direct_payment_discount: {
    ar: "وفر أكثر مع الدفع المباشر في مؤسسة أرجوان واحصل على خصم تلقائي 5% يصل إلى 500 ريال",
    en: "Save more with direct payment at Arjwan Est.! Get 5% automatic discount up to 500 SAR"
  },

  postalCode: "22476",
  buildingNo: "9410",
  additionalNo: "3388",
} as const

export type Product = {
  id: string
  name: { ar: string; en: string }
  description: { ar: string; en: string }
  price: number
  oldPrice?: number
  category: string
  image: string
  specs?: { ar: string; en: string }[]
  badge?: { ar: string; en: string }
}

export type Category = {
  id: string
  name: { ar: string; en: string }
  icon: string
  image: string
}

export const CATEGORIES: Category[] = [
  { id: "phones", name: { ar: "جوالات", en: "Mobile Phones" }, icon: "Smartphone", image: "https://cdn.salla.sa/Agnay/a1a75efa-36a7-473e-910c-263c003ddf5c-1000x1000-jYjBmyTbrssfVOiUKM6GJUHecJOaBQ5UzCuACuAS.jpg" },
  { id: "accessories", name: { ar: "اكسسوارات", en: "Accessories" }, icon: "Headphones", image: "https://cdn.salla.sa/Agnay/2ccc62b0-ade8-4386-9961-e83dda23fab2-1000x1000-o0P7x5BB8Ji6O8wZkg4fTASVIV8k1FRUViE2a2ms.jpg" },
  { id: "smartwatches", name: { ar: "ساعات وأساور ذكية", en: "Smart Watches & Bands" }, icon: "Watch", image: "https://cdn.salla.sa/Agnay/81494f38-cc59-4713-8fcb-5830f2887ec8-1000x1000-gHrZrWtwRtYMhPTQVEbFoJyzXs5OgNkfMIK7oXCp.jpg" },
  { id: "streaming", name: { ar: "أجهزة بث", en: "Streaming Devices" }, icon: "Tv", image: "https://cdn.salla.sa/Agnay/b3aa9d0a-df2e-4e3f-bed9-645db215f22d-1000x1000-zGJlrAqRf0uq9eA6F1cHHhY7HAcqoWFKSffNUPYo.jpg" },
  { id: "cameras", name: { ar: "كاميرات مراقبة", en: "Security Cameras" }, icon: "Camera", image: "https://cdn.salla.sa/Agnay/06ce3863-e96d-4519-b74d-7610805cea09-1000x1000-iujYN5Qt49UqKYAsAHfzvnaoTluBvSNKrUslbDg7.png" },
  { id: "car", name: { ar: "اكسسوارات السيارة", en: "Car Accessories" }, icon: "Car", image: "https://cdn.salla.sa/Agnay/778f0edc-f1f1-4dea-b8f1-45fc3b1747d8-1000x1000-QVIk8YtYlhahxCKsbSVJuw7BtlQYY0JlFz0pjRON.png" },
]

export const PRODUCTS: Product[] = [
  // === File 1: Mobile Phones ===
  {
    id: "tecno-pova-curve-2",
    name: { ar: "تكنو بوفا كيرف 2 الجيل الخامس 256 جيجابايت رام 12 جيجابايت", en: "Tecno Pova Curve 2 5G 256GB RAM 12GB" },
    description: { ar: "جوال تكنو بوفا كيرف 2 بشاشة منحنية وأداء قوي", en: "Tecno Pova Curve 2 with curved display and powerful performance" },
    price: 1499,
    category: "phones",
    image: "https://cdn.salla.sa/Agnay/a1a75efa-36a7-473e-910c-263c003ddf5c-1000x1000-jYjBmyTbrssfVOiUKM6GJUHecJOaBQ5UzCuACuAS.jpg",
    specs: [
      { ar: "256 جيجابايت سعة تخزين", en: "256GB Storage" },
      { ar: "12 جيجابايت رام", en: "12GB RAM" },
      { ar: "الجيل الخامس 5G", en: "5G Connectivity" },
    ],
    badge: { ar: "جديد", en: "New" },
  },
  {
    id: "tecno-spark-go-3",
    name: { ar: "تكنو سبارك جو 3 الجيل الرابع 128 جيجابايت رام 4 جيجابايت", en: "Tecno Spark Go 3 4G 128GB RAM 4GB" },
    description: { ar: "جوال اقتصادي بأداء ممتاز", en: "Budget-friendly phone with excellent performance" },
    price: 399,
    oldPrice: 449,
    category: "phones",
    image: "https://cdn.salla.sa/Agnay/44a6285e-b681-4c86-8104-f92303c4a5cc-1000x1000-7OnT6mkRq3o9xBx7eOSSMcSng8iM5k6vhl1RLxmx.jpg",
    specs: [
      { ar: "128 جيجابايت سعة تخزين", en: "128GB Storage" },
      { ar: "4 جيجابايت رام", en: "4GB RAM" },
      { ar: "الجيل الرابع 4G", en: "4G Connectivity" },
    ],
  },
  {
    id: "infinix-note-edge-5g",
    name: { ar: "انفينيكس نوت إيدج الجيل الخامس 256 جيجابايت رام 8 جيجابايت", en: "Infinix Note Edge 5G 256GB RAM 8GB" },
    description: { ar: "جوال انفينيكس بشاشة كبيرة وبطارية قوية", en: "Infinix with large display and powerful battery" },
    price: 1049,
    oldPrice: 1149,
    category: "phones",
    image: "https://cdn.salla.sa/Agnay/2df67877-e9a9-40e0-842f-4a1dd70ee2f1-1000x1000-NW5StrWvXL2vliPSXrfYC21uE24VnW4DT5MBAapj.jpg",
    specs: [
      { ar: "256 جيجابايت سعة تخزين", en: "256GB Storage" },
      { ar: "8 جيجابايت رام", en: "8GB RAM" },
      { ar: "الجيل الخامس 5G", en: "5G Connectivity" },
    ],
  },
  {
    id: "oppo-reno-15-5g",
    name: { ar: "أوبو رينو 15 الجيل الخامس 512 جيجابايت رام 12 جيجابايت", en: "Oppo Reno 15 5G 512GB RAM 12GB" },
    description: { ar: "جوال أوبو رينو 15 بسعة تخزين ضخمة وأداء فائق", en: "Oppo Reno 15 with massive storage and superior performance" },
    price: 2469,
    oldPrice: 2599,
    category: "phones",
    image: "https://cdn.salla.sa/Agnay/57ba1a38-b503-4f74-aa7b-1a11d5542e2d-1000x1000-zIEKI52mGzJ7WallVCXGy257hjiCBEsPLqTAYG6O.jpg",
    specs: [
      { ar: "512 جيجابايت سعة تخزين", en: "512GB Storage" },
      { ar: "12 جيجابايت رام", en: "12GB RAM" },
      { ar: "الجيل الخامس 5G", en: "5G Connectivity" },
    ],
    badge: { ar: "الأكثر مبيعاً", en: "Best Seller" },
  },
  {
    id: "oppo-a6x-4g",
    name: { ar: "اوبو A6x الجيل الرابع 128 جيجابايت رام 4 جيجابايت", en: "Oppo A6x 4G 128GB RAM 4GB" },
    description: { ar: "جوال أوبو اقتصادي بمواصفات جيدة", en: "Budget Oppo phone with solid specs" },
    price: 529,
    oldPrice: 589,
    category: "phones",
    image: "https://cdn.salla.sa/Agnay/773fd4e2-6d46-4b92-b972-f7c14dd66021-1000x1000-AXhts1yiiIUQNAmSZYht7uABfdhclBS5ISycMBjf.jpg",
    specs: [
      { ar: "128 جيجابايت سعة تخزين", en: "128GB Storage" },
      { ar: "4 جيجابايت رام", en: "4GB RAM" },
      { ar: "الجيل الرابع 4G", en: "4G Connectivity" },
    ],
  },
  {
    id: "xiaomi-redmi-note-15-pro-plus",
    name: { ar: "شاومي ريدمي نوت 15 برو بلس الجيل الخامس 512 جيجابايت رام 12 جيجابايت", en: "Xiaomi Redmi Note 15 Pro Plus 5G 512GB RAM 12GB" },
    description: { ar: "جوال شاومي بمواصفات رائدة وسعر منافس", en: "Xiaomi flagship specs at competitive price" },
    price: 1719,
    oldPrice: 1799,
    category: "phones",
    image: "https://cdn.salla.sa/Agnay/79992dd3-0433-4db9-a80d-84b75f16b95d-1000x1000-nKcboLecbbuhVRPLEGo14fOrwDZNrBbpSKIUle12.jpg",
    specs: [
      { ar: "512 جيجابايت سعة تخزين", en: "512GB Storage" },
      { ar: "12 جيجابايت رام", en: "12GB RAM" },
      { ar: "الجيل الخامس 5G", en: "5G Connectivity" },
    ],
  },
  {
    id: "xiaomi-redmi-note-15-pro",
    name: { ar: "شاومي ريدمي نوت 15 برو الجيل الخامس 256 جيجابايت رام 8 جيجابايت", en: "Xiaomi Redmi Note 15 Pro 5G 256GB RAM 8GB" },
    description: { ar: "أداء ممتاز مع كاميرا احترافية", en: "Excellent performance with pro camera" },
    price: 1329,
    oldPrice: 1439,
    category: "phones",
    image: "https://cdn.salla.sa/Agnay/9f9b1324-dfaf-4852-bf67-f39fffdf07c8-1000x1000-GLK6BvpIcGVCHK7cUUQsHnLj8DD7vCxHnur00FAb.jpg",
    specs: [
      { ar: "256 جيجابايت سعة تخزين", en: "256GB Storage" },
      { ar: "8 جيجابايت رام", en: "8GB RAM" },
      { ar: "الجيل الخامس 5G", en: "5G Connectivity" },
    ],
  },
  {
    id: "xiaomi-redmi-note-15",
    name: { ar: "شاومي ريدمي نوت 15 الجيل الخامس 256 جيجابايت رام 8 جيجابايت", en: "Xiaomi Redmi Note 15 5G 256GB RAM 8GB" },
    description: { ar: "جوال شاومي متوسط بمواصفات رائعة", en: "Xiaomi mid-range with great specs" },
    price: 999,
    oldPrice: 1099,
    category: "phones",
    image: "https://cdn.salla.sa/Agnay/02db7b24-c551-4b66-93f2-749cfd150811-1000x1000-UlXvwiG1wWIgyTPWQEJwVNMLX0HYd0DvJYHB4fXG.jpg",
    specs: [
      { ar: "256 جيجابايت سعة تخزين", en: "256GB Storage" },
      { ar: "8 جيجابايت رام", en: "8GB RAM" },
      { ar: "الجيل الخامس 5G", en: "5G Connectivity" },
    ],
  },
  {
    id: "oppo-reno-15f",
    name: { ar: "اوبو رينو 15F سعة 256 جيجابايت رام 12 جيجابايت", en: "Oppo Reno 15F 256GB RAM 12GB" },
    description: { ar: "تصميم أنيق مع أداء سلس", en: "Elegant design with smooth performance" },
    price: 1719,
    oldPrice: 1799,
    category: "phones",
    image: "https://cdn.salla.sa/Agnay/70a94745-52e1-4a9b-92e7-1fac970de094-1000x1000-YcoXpUi0uSliAjCAP9BYLe4exXIOS5Egpa6mAbaJ.jpg",
    specs: [
      { ar: "256 جيجابايت سعة تخزين", en: "256GB Storage" },
      { ar: "12 جيجابايت رام", en: "12GB RAM" },
    ],
  },
  {
    id: "oukitel-p1-pro",
    name: { ar: "اوكيتل P1 pro سعة 512 جيجابايت رام 8 جيجابايت - 4G", en: "Oukitel P1 Pro 512GB RAM 8GB - 4G" },
    description: { ar: "جوال متين بسعة تخزين كبيرة", en: "Rugged phone with large storage" },
    price: 789,
    oldPrice: 849,
    category: "phones",
    image: "https://cdn.salla.sa/Agnay/881e4991-d4dc-4464-a4e5-05e5e7c9c8a3-1000x1000-tIaYu7Ad0SZRFMbgRvAGtPs3rXt8DxXsMTnD5HAV.jpg",
    specs: [
      { ar: "512 جيجابايت سعة تخزين", en: "512GB Storage" },
      { ar: "8 جيجابايت رام", en: "8GB RAM" },
      { ar: "الجيل الرابع 4G", en: "4G Connectivity" },
    ],
  },
  {
    id: "oukitel-c2",
    name: { ar: "اوكيتل C2 سعة 64 جيجابايت رام 4+12 جيجابايت - 4G", en: "Oukitel C2 64GB RAM 4+12GB - 4G" },
    description: { ar: "جوال اقتصادي للاستخدام اليومي", en: "Budget phone for daily use" },
    price: 269,
    oldPrice: 299,
    category: "phones",
    image: "https://cdn.salla.sa/Agnay/cb579d11-f1bc-4036-a95d-e111ebce3ee7-1000x1000-Ix0M8c1iwsNk31Hc8o06bk8m3tN5Y7CAT6Ico17J.jpg",
    specs: [
      { ar: "64 جيجابايت سعة تخزين", en: "64GB Storage" },
      { ar: "4+12 جيجابايت رام", en: "4+12GB RAM" },
      { ar: "الجيل الرابع 4G", en: "4G Connectivity" },
    ],
  },
  {
    id: "vivo-y04s",
    name: { ar: "فيفو Y04s سعة 256 جيجابايت رام 6 جيجابايت - 4G", en: "Vivo Y04s 256GB RAM 6GB - 4G" },
    description: { ar: "جوال فيفو بتصميم عصري", en: "Vivo phone with modern design" },
    price: 499,
    oldPrice: 549,
    category: "phones",
    image: "https://cdn.salla.sa/Agnay/3863b9bd-0cfe-42e0-91a1-0c3423bb5839-1000x1000-6aHaEYdqpeZgm0PzNF22sk8C2twrtyGqy00HRVkP.jpg",
    specs: [
      { ar: "256 جيجابايت سعة تخزين", en: "256GB Storage" },
      { ar: "6 جيجابايت رام", en: "6GB RAM" },
      { ar: "الجيل الرابع 4G", en: "4G Connectivity" },
    ],
  },
  {
    id: "oppo-a6-pro-5g",
    name: { ar: "اوبو A6 برو الجيل الخامس سعة 256 جيجابايت رام 8 جيجابايت", en: "Oppo A6 Pro 5G 256GB RAM 8GB" },
    description: { ar: "جوال أوبو بتقنية الجيل الخامس", en: "Oppo phone with 5G technology" },
    price: 1199,
    oldPrice: 1249,
    category: "phones",
    image: "https://cdn.salla.sa/Agnay/f9510bf2-99e9-4016-8cef-c7e93a1b1248-1000x1000-sTHyP8bv12sOxU83D6XMfFoJVvfETu0m89XNnf1N.jpg",
    specs: [
      { ar: "256 جيجابايت سعة تخزين", en: "256GB Storage" },
      { ar: "8 جيجابايت رام", en: "8GB RAM" },
      { ar: "الجيل الخامس 5G", en: "5G Connectivity" },
    ],
  },
  {
    id: "oppo-a5-pro-5g",
    name: { ar: "اوبو A5 برو الجيل الخامس 256 جيجابايت رام 8 جيجابايت", en: "Oppo A5 Pro 5G 256GB RAM 8GB" },
    description: { ar: "أداء متميز بسعر مناسب", en: "Outstanding performance at a great price" },
    price: 899,
    oldPrice: 939,
    category: "phones",
    image: "https://cdn.salla.sa/Agnay/cf400a92-04ef-4be2-a5e4-d6c2645f7cac-1000x1000-GAsH04TXeJWI14wEmkyXmv9PChmtMAtifErlTrmf.jpg",
    specs: [
      { ar: "256 جيجابايت سعة تخزين", en: "256GB Storage" },
      { ar: "8 جيجابايت رام", en: "8GB RAM" },
      { ar: "الجيل الخامس 5G", en: "5G Connectivity" },
    ],
  },
  {
    id: "oppo-a5-5g",
    name: { ar: "اوبو A5 الجيل الخامس 128 جيجابايت رام 6 جيجابايت", en: "Oppo A5 5G 128GB RAM 6GB" },
    description: { ar: "جوال أوبو بسعر اقتصادي ودعم 5G", en: "Budget Oppo with 5G support" },
    price: 649,
    oldPrice: 719,
    category: "phones",
    image: "https://cdn.salla.sa/Agnay/28e8bea1-0aae-4e02-a197-19824abbca3f-1000x1000-xtFBp8Inhm8C7Ex2AP2kktV0HSRkECbayt5LLkpJ.jpg",
    specs: [
      { ar: "128 جيجابايت سعة تخزين", en: "128GB Storage" },
      { ar: "6 جيجابايت رام", en: "6GB RAM" },
      { ar: "الجيل الخامس 5G", en: "5G Connectivity" },
    ],
  },
  {
    id: "nokia-215-hmd",
    name: { ar: "جوال نوكيا 215 شريحتين HMD - أسود", en: "Nokia 215 Dual SIM HMD - Black" },
    description: { ar: "جوال كلاسيكي بتصميم متين وبطارية طويلة", en: "Classic phone with durable design and long battery" },
    price: 149,
    oldPrice: 179,
    category: "phones",
    image: "https://cdn.salla.sa/Agnay/2f660ce2-4b21-4d3d-88e0-0e062f525f7a-1000x1000-PJhspKnhkWS4dmYjaa1bjxibkbusVlhWuQwoSa4z.png",
    specs: [
      { ar: "شريحتين اتصال", en: "Dual SIM" },
      { ar: "بطارية طويلة الأمد", en: "Long-lasting Battery" },
    ],
  },
  {
    id: "motorola-moto-g06",
    name: { ar: "موتورولا موتو جي 06 سعة 128 جيجابايت رام 4 جيجابايت", en: "Motorola Moto G06 128GB RAM 4GB" },
    description: { ar: "جوال موتورولا بشاشة واسعة وكاميرا جيدة", en: "Motorola with wide display and good camera" },
    price: 339,
    oldPrice: 389,
    category: "phones",
    image: "https://cdn.salla.sa/Agnay/a19cb829-19b3-40b2-871a-449a3b07ca05-1000x1000-n6hGFLanniqXo5Sv5ek6y1vJ9j1kRhm0S3JWT5YT.jpg",
    specs: [
      { ar: "128 جيجابايت سعة تخزين", en: "128GB Storage" },
      { ar: "4 جيجابايت رام", en: "4GB RAM" },
    ],
  },
  {
    id: "motorola-moto-g56-5g",
    name: { ar: "موتورولا موتو جي 56 الجيل الخامس سعة 256 جيجابايت رام 12 جيجابايت", en: "Motorola Moto G56 5G 256GB RAM 12GB" },
    description: { ar: "جوال موتورولا بالجيل الخامس ورام كبيرة", en: "Motorola 5G with large RAM" },
    price: 759,
    oldPrice: 799,
    category: "phones",
    image: "https://cdn.salla.sa/Agnay/8504a772-8a26-4017-bdea-ac4a9b4f3270-1000x1000-M9Cv5f9DcTv4RsHr5sTQq98ILlQdMoHZmy96UhMj.jpg",
    specs: [
      { ar: "256 جيجابايت سعة تخزين", en: "256GB Storage" },
      { ar: "12 جيجابايت رام", en: "12GB RAM" },
      { ar: "الجيل الخامس 5G", en: "5G Connectivity" },
    ],
  },
  // === File 2: Accessories ===
  {
    id: "iqibla-air-ring",
    name: { ar: "خاتم تسبيح إلكتروني iQIBLA Air - فضي", en: "iQIBLA Air Electronic Tasbih Ring - Silver" },
    description: { ar: "خاتم تسبيح إلكتروني ذكي", en: "Smart electronic tasbih ring" },
    price: 129,
    oldPrice: 179,
    category: "accessories",
    image: "https://cdn.salla.sa/Agnay/e8ee92e5-4487-4e24-9895-2530183bc4ba-500x500-gmwxd2tLS6rTwEQkwzYm5QddujhFVjCS2s1MmzGd.jpg",
    specs: [
      { ar: "تصميم أنيق وخفيف", en: "Elegant and lightweight design" },
      { ar: "عداد إلكتروني", en: "Electronic counter" },
    ],
    badge: { ar: "عرض خاص", en: "Special Offer" },
  },
  {
    id: "mojmax-carplay-adapter",
    name: { ar: "موج ماكس كار بلاي محول USB ذكي قطعة تحويل شاشة السيارة MX-Al001", en: "MojMax CarPlay Smart USB Adapter MX-Al001" },
    description: { ar: "محول كار بلاي ذكي لشاشة السيارة", en: "Smart CarPlay adapter for car screen" },
    price: 209,
    oldPrice: 349,
    category: "car",
    image: "https://cdn.salla.sa/Agnay/778f0edc-f1f1-4dea-b8f1-45fc3b1747d8-1000x1000-QVIk8YtYlhahxCKsbSVJuw7BtlQYY0JlFz0pjRON.png",
    specs: [
      { ar: "توصيل USB", en: "USB Connection" },
      { ar: "متوافق مع Apple CarPlay", en: "Compatible with Apple CarPlay" },
    ],
    badge: { ar: "خصم 40%", en: "40% Off" },
  },
  {
    id: "baseus-bowie-mz10",
    name: { ar: "بيسوس سماعة أذن لاسلكية Bowie MZ10 - أسود", en: "Baseus Bowie MZ10 Wireless Earbuds - Black" },
    description: { ar: "سماعة لاسلكية بصوت نقي وبطارية طويلة", en: "Wireless earbuds with pure sound and long battery" },
    price: 89,
    oldPrice: 199,
    category: "accessories",
    image: "https://cdn.salla.sa/Agnay/2ccc62b0-ade8-4386-9961-e83dda23fab2-1000x1000-o0P7x5BB8Ji6O8wZkg4fTASVIV8k1FRUViE2a2ms.jpg",
    specs: [
      { ar: "بلوتوث لاسلكي", en: "Wireless Bluetooth" },
      { ar: "عزل ضوضاء", en: "Noise Isolation" },
    ],
    badge: { ar: "خصم 55%", en: "55% Off" },
  },
  {
    id: "xiaomi-tv-stick-4k",
    name: { ar: "جهاز بث شاومي فائق الدقة - xiaomi TV stick 4K", en: "Xiaomi TV Stick 4K" },
    description: { ar: "جهاز بث بدقة 4K مع نظام أندرويد TV", en: "4K streaming device with Android TV" },
    price: 179,
    oldPrice: 229,
    category: "streaming",
    image: "https://cdn.salla.sa/Agnay/b3aa9d0a-df2e-4e3f-bed9-645db215f22d-1000x1000-zGJlrAqRf0uq9eA6F1cHHhY7HAcqoWFKSffNUPYo.jpg",
    specs: [
      { ar: "دقة 4K Ultra HD", en: "4K Ultra HD Resolution" },
      { ar: "نظام Android TV", en: "Android TV System" },
    ],
  },
  {
    id: "tapo-camera-2k",
    name: { ar: "كاميرا تيلو برو فيجن 4 ميجابكسل 2k واي فاي ثنائي النطاق - أبيض", en: "Tapo Pro Vision 4MP 2K WiFi Dual Band Camera - White" },
    description: { ar: "كاميرا مراقبة ذكية بدقة 2K", en: "Smart security camera with 2K resolution" },
    price: 69,
    oldPrice: 249,
    category: "cameras",
    image: "https://cdn.salla.sa/Agnay/06ce3863-e96d-4519-b74d-7610805cea09-1000x1000-iujYN5Qt49UqKYAsAHfzvnaoTluBvSNKrUslbDg7.png",
    specs: [
      { ar: "دقة 2K - 4 ميجابكسل", en: "2K Resolution - 4MP" },
      { ar: "واي فاي ثنائي النطاق", en: "Dual Band WiFi" },
    ],
    badge: { ar: "خصم 72%", en: "72% Off" },
  },
  {
    id: "xiaomi-band-10",
    name: { ar: "شاومي سوار ذكي باند 10 بشاشة اموليد 1.75 بوصة", en: "Xiaomi Smart Band 10 AMOLED 1.75\"" },
    description: { ar: "سوار ذكي بشاشة اموليد وتتبع صحي متقدم", en: "Smart band with AMOLED display and advanced health tracking" },
    price: 159,
    oldPrice: 199,
    category: "smartwatches",
    image: "https://cdn.salla.sa/Agnay/81494f38-cc59-4713-8fcb-5830f2887ec8-1000x1000-gHrZrWtwRtYMhPTQVEbFoJyzXs5OgNkfMIK7oXCp.jpg",
    specs: [
      { ar: "شاشة AMOLED 1.75 بوصة", en: "1.75\" AMOLED Display" },
      { ar: "تتبع صحي متقدم", en: "Advanced Health Tracking" },
    ],
  },
  {
    id: "huawei-freebuds-se2",
    name: { ar: "سماعة بلوتوث هواوي FreeBuds SE2 لاسلكية - أبيض", en: "Huawei FreeBuds SE2 Wireless - White" },
    description: { ar: "سماعة هواوي لاسلكية بتصميم مريح", en: "Huawei wireless earbuds with comfortable design" },
    price: 79,
    oldPrice: 149,
    category: "accessories",
    image: "https://cdn.salla.sa/Agnay/7435ee0f-2143-4d87-bd97-d845b6b750f5-1000x1000-EKJjgXDvhX0QKr13NjB3rR4qD4qQu31Rc5dVPBFa.png",
    specs: [
      { ar: "بلوتوث 5.3", en: "Bluetooth 5.3" },
      { ar: "بطارية تدوم حتى 24 ساعة", en: "Up to 24h battery life" },
    ],
  },
  {
    id: "jibl-incense-burner",
    name: { ar: "جيبل مبخرة الكترونية محمولة للسيارة والمنزل JE-B404", en: "JIBL Electronic Incense Burner JE-B404" },
    description: { ar: "مبخرة الكترونية محمولة للسيارة والمنزل", en: "Portable electronic incense burner for car and home" },
    price: 59,
    oldPrice: 99,
    category: "car",
    image: "https://cdn.salla.sa/Agnay/f16ccb98-dee6-497b-aa43-29db2f8d89aa-1000x1000-x3XCuxbylltlLbVWPBjzCu9Wzggya5PfaBJYimMO.png",
    specs: [
      { ar: "محمولة وقابلة للشحن", en: "Portable and rechargeable" },
      { ar: "مناسبة للسيارة والمنزل", en: "Suitable for car and home" },
    ],
  },
  {
    id: "eone-phone-cooler",
    name: { ar: "مروحة تبريد للجوال EONE", en: "EONE Phone Cooling Fan" },
    description: { ar: "مروحة تبريد للجوال لتحسين الأداء أثناء الألعاب", en: "Phone cooling fan for better gaming performance" },
    price: 39,
    oldPrice: 99,
    category: "accessories",
    image: "https://cdn.salla.sa/Agnay/ee086244-4e05-4313-8c18-86640bbcb81e-1000x1000-d1wRSmD5kqiwM42TMZyayfy72T6gf8uQS56ELJ96.png",
    specs: [
      { ar: "تبريد سريع", en: "Fast cooling" },
      { ar: "متوافق مع جميع الجوالات", en: "Compatible with all phones" },
    ],
    badge: { ar: "خصم 60%", en: "60% Off" },
  },
  {
    id: "dash-cam-sonic",
    name: { ar: "داش كام امامي FHD - SONIC", en: "Dash Cam Front FHD - SONIC" },
    description: { ar: "كاميرا سيارة امامية بدقة عالية", en: "Front car camera with full HD resolution" },
    price: 49,
    oldPrice: 129,
    category: "car",
    image: "https://cdn.salla.sa/Agnay/ddae2ca3-554b-4fec-9c24-8fcea9aeb137-500x500-K2ksCUMPurz6a86NKyuWnKxb7ncsca6o4Df9ZaHY.png",
    specs: [
      { ar: "دقة Full HD", en: "Full HD Resolution" },
      { ar: "تسجيل مستمر", en: "Continuous recording" },
    ],
    badge: { ar: "خصم 62%", en: "62% Off" },
  },
  {
    id: "xiaomi-tv-box-s-4k",
    name: { ar: "جهاز بث شاومي فائق الدقة الجيل الثالث الجديد Xiaomi MI TV Box S 4K Ultra-HD", en: "Xiaomi MI TV Box S 4K Ultra-HD Gen 3" },
    description: { ar: "جهاز بث شاومي الجيل الثالث بدقة 4K", en: "Xiaomi Gen 3 streaming box with 4K resolution" },
    price: 219,
    oldPrice: 349,
    category: "streaming",
    image: "https://cdn.salla.sa/Agnay/9d8b8f4a-8ff5-4a68-9878-d2ed8fd7597b-1000x1000-pfQtBotknOC4twlQBDAjrDyc0aI1n578d0GtJj96.png",
    specs: [
      { ar: "دقة 4K Ultra HD", en: "4K Ultra HD Resolution" },
      { ar: "نظام Android TV", en: "Android TV System" },
      { ar: "بلوتوث + واي فاي", en: "Bluetooth + WiFi" },
    ],
  },
  {
    id: "xiaomi-tv-stick-fhd",
    name: { ar: "جهاز بث شاومي Mi TV Stick FHD", en: "Xiaomi Mi TV Stick FHD" },
    description: { ar: "جهاز بث صغير الحجم بدقة FHD", en: "Compact streaming device with FHD resolution" },
    price: 149,
    oldPrice: 199,
    category: "streaming",
    image: "https://cdn.salla.sa/Agnay/b3aa9d0a-df2e-4e3f-bed9-645db215f22d-1000x1000-zGJlrAqRf0uq9eA6F1cHHhY7HAcqoWFKSffNUPYo.jpg",
    specs: [
      { ar: "دقة Full HD 1080p", en: "Full HD 1080p Resolution" },
      { ar: "نظام Android TV", en: "Android TV System" },
    ],
  },
]
