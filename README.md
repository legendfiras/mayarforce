# MAYAR FORCE — Hunt & Honey

Demonstration website for Mayar Force, a local business in Akkar: hunting clothing, camping accessories, and honey. Arabic is the default language. English is available from the language switch.

There is no checkout. Prices, a phone number, opening hours, and a map pin stay empty until they are added in the business file.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4

## Run locally

```bash
npm install
npm run dev
```

Arabic: [http://localhost:3000/ar](http://localhost:3000/ar). English: [http://localhost:3000/en](http://localhost:3000/en).

```bash
npm run build
npm start
```

The site is marked `noindex` until it is approved for publication.

## Edit content

| What | Where |
| --- | --- |
| Name, location, TikTok, WhatsApp, hours, image paths | `src/content/business.ts` |
| Page copy | `src/content/site.ts` |
| Demonstration catalog | `src/content/products.ts` |

Leave `whatsappE164` empty until the number is verified. A product inquiry then opens the contact section and names the product. When a number is set, the same inquiry opens WhatsApp with that product name in the message.

Put photographs in `public` and point to them from `business.images`. Empty paths use the built-in placeholders.
