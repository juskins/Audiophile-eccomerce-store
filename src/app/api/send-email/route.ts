import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { orderId, order } = body;

    // Create transporter (configure with your SMTP settings)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Create HTML email template
    const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Order Confirmation</title>
  <style>
    body {
      font-family: 'Manrope', Arial, sans-serif;
      background-color: #FAFAFA;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #FFFFFF;
      border-radius: 8px;
      overflow: hidden;
    }
    .header {
      background-color: #D87D4A;
      padding: 40px 20px;
      text-align: center;
    }
    .header h1 {
      color: #FFFFFF;
      margin: 0;
      font-size: 32px;
      font-weight: 700;
      letter-spacing: 1.15px;
      text-transform: uppercase;
    }
    .content {
      padding: 40px 30px;
    }
    .greeting {
      font-size: 16px;
      color: #000000;
      margin-bottom: 20px;
      line-height: 1.6;
    }
    .order-id {
      background-color: #F1F1F1;
      padding: 15px;
      border-radius: 4px;
      margin-bottom: 30px;
    }
    .order-id strong {
      color: #D87D4A;
      font-size: 18px;
    }
    .section-title {
      font-size: 18px;
      font-weight: 700;
      color: #000000;
      margin: 30px 0 15px;
      text-transform: uppercase;
      letter-spacing: 1.29px;
    }
    .items-list {
      background-color: #FAFAFA;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 20px;
    }
    .item {
      display: flex;
      align-items: center;
      padding: 15px 0;
      border-bottom: 1px solid #E0E0E0;
    }
    .item:last-child {
      border-bottom: none;
    }
    .item-image {
      width: 64px;
      height: 64px;
      background-color: #F1F1F1;
      border-radius: 8px;
      margin-right: 15px;
      object-fit: cover;
    }
    .item-details {
      flex: 1;
    }
    .item-name {
      font-weight: 700;
      font-size: 15px;
      color: #000000;
      margin-bottom: 5px;
    }
    .item-price {
      font-size: 14px;
      color: #808080;
      font-weight: 700;
    }
    .item-quantity {
      font-size: 15px;
      color: #808080;
      font-weight: 700;
    }
    .totals {
      margin-top: 20px;
    }
    .total-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      font-size: 15px;
    }
    .total-label {
      color: #808080;
      text-transform: uppercase;
    }
    .total-value {
      font-weight: 700;
      color: #000000;
    }
    .grand-total {
      background-color: #D87D4A;
      color: #FFFFFF;
      padding: 15px 20px;
      border-radius: 8px;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .grand-total .label {
      text-transform: uppercase;
      font-size: 15px;
    }
    .grand-total .value {
      font-size: 18px;
      font-weight: 700;
    }
    .shipping-info {
      background-color: #F1F1F1;
      padding: 20px;
      border-radius: 8px;
      margin-top: 20px;
    }
    .shipping-row {
      margin-bottom: 10px;
      font-size: 15px;
    }
    .shipping-row:last-child {
      margin-bottom: 0;
    }
    .shipping-label {
      color: #808080;
      margin-right: 10px;
    }
    .shipping-value {
      color: #000000;
      font-weight: 700;
    }
    .button {
      display: inline-block;
      background-color: #D87D4A;
      color: #FFFFFF;
      text-decoration: none;
      padding: 15px 40px;
      border-radius: 0;
      font-weight: 700;
      font-size: 13px;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-top: 30px;
    }
    .button:hover {
      background-color: #FBAF85;
    }
    .footer {
      background-color: #101010;
      color: #FFFFFF;
      padding: 30px;
      text-align: center;
    }
    .footer p {
      margin: 5px 0;
      font-size: 15px;
      color: #808080;
    }
    .footer strong {
      color: #FFFFFF;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>audiophile</h1>
    </div>
    
    <div class="content">
      <p class="greeting">
        Hi ${order.customerName},<br><br>
        Thank you for your order! We're excited to confirm that we've received your purchase.
      </p>
      
      <div class="order-id">
        <strong>Order ID:</strong> ${orderId}
      </div>
      
      <h2 class="section-title">Order Summary</h2>
      
      <div class="items-list">
        ${order.items
          .map(
            (item: { shortName: string; price: number; quantity: number }) => `
        <div class="item">
          <div class="item-details">
            <div class="item-name">${item.shortName}</div>
            <div class="item-price">$ ${item.price.toLocaleString()}</div>
          </div>
          <div class="item-quantity">x${item.quantity}</div>
        </div>
        `
          )
          .join("")}
      </div>
      
      <div class="totals">
        <div class="total-row">
          <span class="total-label">Subtotal</span>
          <span class="total-value">$ ${order.subtotal.toLocaleString()}</span>
        </div>
        <div class="total-row">
          <span class="total-label">Shipping</span>
          <span class="total-value">$ ${order.shipping.toLocaleString()}</span>
        </div>
        <div class="total-row">
          <span class="total-label">VAT (Included)</span>
          <span class="total-value">$ ${order.vat.toLocaleString()}</span>
        </div>
      </div>
      
      <div class="grand-total">
        <span class="label">Grand Total</span>
        <span class="value">$ ${order.grandTotal.toLocaleString()}</span>
      </div>
      
      <h2 class="section-title">Shipping Details</h2>
      
      <div class="shipping-info">
        <div class="shipping-row">
          <span class="shipping-label">Name:</span>
          <span class="shipping-value">${order.customerName}</span>
        </div>
        <div class="shipping-row">
          <span class="shipping-label">Email:</span>
          <span class="shipping-value">${order.customerEmail}</span>
        </div>
        <div class="shipping-row">
          <span class="shipping-label">Phone:</span>
          <span class="shipping-value">${order.customerPhone}</span>
        </div>
        <div class="shipping-row">
          <span class="shipping-label">Address:</span>
          <span class="shipping-value">${order.shippingAddress}</span>
        </div>
        <div class="shipping-row">
          <span class="shipping-label">City:</span>
          <span class="shipping-value">${order.shippingCity}, ${order.shippingZip}</span>
        </div>
        <div class="shipping-row">
          <span class="shipping-label">Country:</span>
          <span class="shipping-value">${order.shippingCountry}</span>
        </div>
        <div class="shipping-row">
          <span class="shipping-label">Payment Method:</span>
          <span class="shipping-value">${order.paymentMethod === "e-money" ? "e-Money" : "Cash on Delivery"}</span>
        </div>
      </div>
      
      <p class="greeting" style="margin-top: 30px;">
        We'll send you a shipping confirmation email as soon as your order ships.
      </p>
    </div>
    
    <div class="footer">
      <p><strong>audiophile</strong></p>
      <p>Bringing you the best audio gear</p>
      <p style="margin-top: 15px;">© 2025 Audiophile. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
    `;

    // Send email
    await transporter.sendMail({
      from: `"Audiophile" <${process.env.SMTP_USER}>`,
      to: order.customerEmail,
      subject: `Order Confirmation - ${orderId}`,
      html: htmlTemplate,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
