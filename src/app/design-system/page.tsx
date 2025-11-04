"use client";

import { useState } from "react";
import { Button, Input, RadioGroup, NumberInput } from "@/components/ui";

export default function DesignSystemPage() {
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("e-money");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    
    // Basic email validation
    if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError("Wrong format");
    } else {
      setEmailError("");
    }
  };

  return (
    <main className="min-h-screen bg-gray p-8">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-black">
            Audiophile Design System
          </h1>
          <p className="mt-2 text-black/60">
            UI Components built from Figma design specifications
          </p>
        </div>

        {/* Buttons Section */}
        <section className="space-y-6 rounded-lg bg-white p-8">
          <h2 className="text-2xl font-bold text-black">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">See Product</Button>
            <Button variant="secondary">See Product</Button>
            <Button variant="outline">See Product</Button>
            <Button variant="ghost">Shop &gt;</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="sm">
              Small Button
            </Button>
            <Button variant="primary" size="lg">
              Large Button
            </Button>
          </div>
        </section>

        {/* Form Elements Section */}
        <section className="space-y-6 rounded-lg bg-white p-8">
          <h2 className="text-2xl font-bold text-black">Form Elements</h2>
          
          {/* Text Input - Default */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Text Input</h3>
            <Input label="Name" placeholder="Alexei Ward" />
            
            {/* Text Input - Active State */}
            <Input 
              label="Email Address" 
              type="email"
              value={email}
              onChange={handleEmailChange}
              error={emailError}
              placeholder="alexei@mail.com"
            />
            
            {/* Text Input - Error State */}
            <Input 
              label="Name" 
              placeholder="Insert your name" 
              error="Wrong format"
            />
          </div>

          {/* Radio Group */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Payment Method</h3>
            <RadioGroup
              name="payment"
              value={paymentMethod}
              onChange={setPaymentMethod}
              options={[
                { value: "e-money", label: "e-Money" },
                { value: "cash", label: "Cash on Delivery" },
              ]}
            />
          </div>

          {/* Number Input */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Quantity Selector</h3>
            <NumberInput value={quantity} onChange={setQuantity} />
          </div>
        </section>

        {/* Typography Section */}
        <section className="space-y-6 rounded-lg bg-white p-8">
          <h2 className="text-2xl font-bold text-black">Typography</h2>
          <div className="space-y-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[10px] text-primary">
                New Product
              </p>
            </div>
            <h1 className="text-[56px] font-bold uppercase leading-[58px] tracking-[2px] text-black">
              XX99 Mark II Headphones
            </h1>
            <h2 className="text-[40px] font-bold uppercase leading-[44px] tracking-[1.5px] text-black">
              Bringing you the best audio gear
            </h2>
            <h3 className="text-[32px] font-bold uppercase leading-[36px] tracking-[1.15px] text-black">
              Featured Products
            </h3>
            <h4 className="text-[28px] font-bold uppercase leading-[38px] tracking-[2px] text-black">
              ZX9 Speaker
            </h4>
            <h5 className="text-2xl font-bold uppercase leading-[33px] tracking-[1.7px] text-black">
              You may also like
            </h5>
            <h6 className="text-lg font-bold uppercase leading-[25px] tracking-[1.3px] text-black">
              In the box
            </h6>
            <p className="text-sm font-medium leading-[25px] text-black/50">
              Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.
            </p>
          </div>
        </section>

        {/* Color Palette */}
        <section className="space-y-6 rounded-lg bg-white p-8">
          <h2 className="text-2xl font-bold text-black">Colors</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-primary"></div>
              <p className="text-sm font-bold">Primary</p>
              <p className="text-xs text-black/60">#D87D4A</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-primary-light"></div>
              <p className="text-sm font-bold">Primary Light</p>
              <p className="text-xs text-black/60">#FBAF85</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-black"></div>
              <p className="text-sm font-bold">Black</p>
              <p className="text-xs text-black/60">#000000</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg border bg-white"></div>
              <p className="text-sm font-bold">White</p>
              <p className="text-xs text-black/60">#FFFFFF</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-gray-light"></div>
              <p className="text-sm font-bold">Gray Light</p>
              <p className="text-xs text-black/60">#F1F1F1</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-gray"></div>
              <p className="text-sm font-bold">Gray</p>
              <p className="text-xs text-black/60">#FAFAFA</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
