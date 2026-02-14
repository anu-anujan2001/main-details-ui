"use client";

type FieldProps = {
  label: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  error?: string;
  type?: 'text' | 'number' | 'select' | 'phone';
  options?: string[];
  countryCode?: string;
  onCountryCodeChange?: (code: string) => void;
};

const countryCodes = [
  { code: '+1', country: 'US', flag: '🇺🇸' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+91', country: 'IN', flag: '🇮🇳' },
  { code: '+94', country: 'LK', flag: '🇱🇰' },
  { code: '+61', country: 'AU', flag: '🇦🇺' },
  { code: '+81', country: 'JP', flag: '🇯🇵' },
  { code: '+86', country: 'CN', flag: '🇨🇳' },
  { code: '+49', country: 'DE', flag: '🇩🇪' },
  { code: '+33', country: 'FR', flag: '🇫🇷' },
  { code: '+971', country: 'AE', flag: '🇦🇪' },
  { code: '+65', country: 'SG', flag: '🇸🇬' },
  { code: '+60', country: 'MY', flag: '🇲🇾' },
  { code: '+66', country: 'TH', flag: '🇹🇭' },
  { code: '+62', country: 'ID', flag: '🇮🇩' },
  { code: '+63', country: 'PH', flag: '🇵🇭' },
];

export default function Field({
  label,
  required,
  placeholder,
  value,
  onChange,
  error,
  type = 'text',
  options = [],
  countryCode = '+94',
  onCountryCodeChange,
}: FieldProps) {
  const baseClasses = [
    "w-full px-4 py-2.5 bg-white",
    "border border-gray-300 rounded-lg",
    "text-sm text-gray-800 placeholder:text-gray-400",
    "outline-none",
    "focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500",
  ].join(" ");

  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-medium text-gray-700">
        {label} {required ? <span className="text-red-500">*</span> : null}
      </label>

      {type === 'phone' ? (
        <div className="flex gap-2">
          {/* Country Code Selector */}
          <select
            value={countryCode}
            onChange={(e) => onCountryCodeChange?.(e.target.value)}
            className="w-24 px-2 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          >
            {countryCodes.map((item) => (
              <option key={item.code} value={item.code}>
                {item.flag} {item.code}
              </option>
            ))}
          </select>

          {/* Phone Number Input */}
          <input
            type="tel"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={baseClasses}
          />
        </div>
      ) : type === 'select' ? (
        <select
          value={value}
          onChange={onChange}
          className={baseClasses}
        >
          <option value="">{placeholder || `Select ${label.toLowerCase()}`}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={baseClasses}
        />
      )}

      {error ? <div className="text-xs text-red-500">{error}</div> : null}
    </div>
  );
}
