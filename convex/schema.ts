import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    id: v.string(),
    slug: v.string(),
    name: v.string(),
    category: v.string(),
    isNew: v.boolean(),
    price: v.number(),
    description: v.string(),
    features: v.string(),
    includes: v.array(
      v.object({
        quantity: v.number(),
        item: v.string(),
      })
    ),
    images: v.object({
      product: v.string(),
      categoryPreview: v.string(),
      gallery: v.array(v.string()),
    }),
    recommendations: v.array(
      v.object({
        slug: v.string(),
        name: v.string(),
        image: v.string(),
      })
    ),
  }).index("by_slug", ["slug"]),

  orders: defineTable({
    // Customer details
    customerName: v.string(),
    customerEmail: v.string(),
    customerPhone: v.string(),

    // Shipping details
    shippingAddress: v.string(),
    shippingZip: v.string(),
    shippingCity: v.string(),
    shippingCountry: v.string(),

    // Payment details
    paymentMethod: v.string(), // "e-money" or "cash-on-delivery"
    eMoneyNumber: v.optional(v.string()),
    eMoneyPin: v.optional(v.string()),

    // Order items
    items: v.array(
      v.object({
        id: v.string(),
        name: v.string(),
        shortName: v.string(),
        price: v.number(),
        quantity: v.number(),
        image: v.string(),
      })
    ),

    // Totals
    subtotal: v.number(),
    shipping: v.number(),
    vat: v.number(),
    grandTotal: v.number(),

    // Order metadata
    status: v.string(), // "pending", "confirmed", "shipped", "delivered"
    createdAt: v.number(),
  }).index("by_email", ["customerEmail"]),
});
