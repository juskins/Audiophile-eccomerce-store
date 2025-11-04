import * as React from "react";
import { cn } from "@/lib/utils";

export interface RadioOption {
  value: string;
  label: string;
}

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  error?: string;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ name, options, value, onChange, className, error }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-4", className)} role="radiogroup">
        {options.map((option) => (
          <label
            key={option.value}
            className={cn(
              "flex h-14 cursor-pointer items-center gap-4 rounded-lg border px-4 transition-colors",
              value === option.value
                ? "border-primary bg-white"
                : error
                ? "border-error bg-white hover:border-error/70"
                : "border-input-border bg-white hover:border-primary/50"
            )}
          >
            <div className="relative flex h-5 w-5 items-center justify-center">
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={(e) => onChange?.(e.target.value)}
                className="peer sr-only"
              />
              <div
                className={cn(
                  "h-5 w-5 rounded-full border-2 transition-colors",
                  value === option.value
                    ? "border-primary"
                    : error
                    ? "border-error"
                    : "border-input-border"
                )}
              />
              {value === option.value && (
                <div className="absolute h-2.5 w-2.5 rounded-full bg-primary" />
              )}
            </div>
            <span className="text-sm font-bold tracking-[-0.25px] text-black">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    );
  }
);
RadioGroup.displayName = "RadioGroup";

export { RadioGroup };
