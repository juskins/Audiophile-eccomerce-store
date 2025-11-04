"use server";

export interface OrderData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: string;
  shippingZip: string;
  shippingCity: string;
  shippingCountry: string;
  paymentMethod: string;
  eMoneyNumber?: string;
  eMoneyPin?: string;
  items: {
    id: string;
    name: string;
    shortName: string;
    price: number;
    quantity: number;
    image: string;
  }[];
  subtotal: number;
  shipping: number;
  vat: number;
  grandTotal: number;
}

export async function createOrder(orderData: OrderData) {
  try {
    // Save order to Convex via HTTP API
    const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
    
    if (!convexUrl) {
      throw new Error("NEXT_PUBLIC_CONVEX_URL is not configured");
    }

    // Call Convex mutation via HTTP
    const response = await fetch(`${convexUrl}/api/mutation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        path: "orders:create",
        args: orderData,
        format: "json",
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Convex error response:", errorText);
      throw new Error(`Failed to create order in Convex: ${response.status}`);
    }

    const result = await response.json();
    const convexOrderId = result.value || result;
    
    console.log("Order saved to Convex with ID:", convexOrderId);
    
    // Generate friendly order ID for display
    const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;

    // Send confirmation email
    try {
      const emailResponse = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderId,
            order: orderData,
          }),
        }
      );

      if (!emailResponse.ok) {
        console.error("Failed to send confirmation email");
      }
    } catch (emailError) {
      console.error("Email error:", emailError);
      // Don't fail the order if email fails
    }

    return { success: true, orderId, convexId: convexOrderId };
  } catch (error) {
    console.error("Order creation error:", error);
    return { success: false, error: "Failed to create order" };
  }
}

export async function getOrder(orderId: string) {
  // This would query Convex by order ID
  // For now, return null as we're using Convex directly
  return null;
}
