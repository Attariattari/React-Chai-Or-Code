import React from "react";
function ColorChanger() {
  const colors = [
    // === Neutral / Gray Family ===
    { name: "Deep Navy", code: "#0F172A" },
    { name: "Dark Slate", code: "#1E293B" },
    { name: "Slate Gray", code: "#334155" },
    { name: "Steel Gray", code: "#475569" },
    { name: "Ash Gray", code: "#64748B" },
    { name: "Soft Gray", code: "#94A3B8" },
    { name: "Nord Gray", code: "#3B4252" },
    { name: "Charcoal", code: "#4B5563" },
    { name: "Muted Gray", code: "#6B7280" },
    { name: "Silver Gray", code: "#9CA3AF" },

    // === Blue Family ===
    { name: "Royal Blue", code: "#1E3A8A" },
    { name: "Deep Blue", code: "#1D4ED8" },
    { name: "Bright Blue", code: "#2563EB" },
    { name: "Sky Blue", code: "#3B82F6" },
    { name: "Soft Blue", code: "#60A5FA" },
    { name: "Navy Blue", code: "#1E40AF" },
    { name: "Midnight Blue", code: "#172554" },
    { name: "Ocean Blue", code: "#1C3FAA" },
    { name: "Dark Azure", code: "#2C5282" },
    { name: "Steel Blue", code: "#2B6CB0" },

    // === Indigo / Violet Family ===
    { name: "Indigo Night", code: "#3730A3" },
    { name: "Royal Indigo", code: "#4338CA" },
    { name: "Vivid Indigo", code: "#4F46E5" },
    { name: "Soft Indigo", code: "#6366F1" },
    { name: "Light Indigo", code: "#818CF8" },
    { name: "Deep Violet", code: "#312E81" },
    { name: "Pure Indigo", code: "#5B21B6" },
    { name: "Amethyst", code: "#6D28D9" },
    { name: "Velvet Purple", code: "#7E22CE" },
    { name: "Neon Violet", code: "#9333EA" },

    // === Purple / Magenta ===
    { name: "Dark Plum", code: "#581C87" },
    { name: "Royal Purple", code: "#6B21A8" },
    { name: "Bright Purple", code: "#7C3AED" },
    { name: "Lavender Glow", code: "#8B5CF6" },
    { name: "Soft Purple", code: "#A78BFA" },
    { name: "Deep Orchid", code: "#4C1D95" },
    { name: "Majestic Purple", code: "#5B21B6" },
    { name: "Rich Violet", code: "#7E22CE" },
    { name: "Mystic Purple", code: "#9333EA" },
    { name: "Grape Purple", code: "#A855F7" },

    // === Pink / Rose ===
    { name: "Berry Pink", code: "#831843" },
    { name: "Wine Rose", code: "#9D174D" },
    { name: "Magenta Rose", code: "#BE185D" },
    { name: "Dark Pink", code: "#DB2777" },
    { name: "Bright Pink", code: "#EC4899" },
    { name: "Blush Pink", code: "#F472B6" },
    { name: "Royal Magenta", code: "#701A75" },
    { name: "Orchid Pink", code: "#86198F" },
    { name: "Deep Rose", code: "#9D174D" },
    { name: "Amaranth", code: "#A21CAF" },

    // === Red Family ===
    { name: "Dark Burgundy", code: "#7F1D1D" },
    { name: "Rich Red", code: "#991B1B" },
    { name: "Crimson", code: "#B91C1C" },
    { name: "Scarlet", code: "#DC2626" },
    { name: "Vermilion", code: "#EF4444" },
    { name: "Soft Red", code: "#F87171" },
    { name: "Wine Red", code: "#450A0A" },
    { name: "Dark Cherry", code: "#5C1A1A" },
    { name: "Maroon", code: "#7F1D1D" },
    { name: "Brick Red", code: "#9B1C1C" },

    // === Orange / Amber ===
    { name: "Deep Amber", code: "#78350F" },
    { name: "Burnt Orange", code: "#92400E" },
    { name: "Golden Brown", code: "#B45309" },
    { name: "Warm Orange", code: "#D97706" },
    { name: "Amber Glow", code: "#F59E0B" },
    { name: "Soft Gold", code: "#FBBF24" },
    { name: "Dark Bronze", code: "#451A03" },
    { name: "Rust Brown", code: "#652B02" },
    { name: "Copper", code: "#7C2D12" },
    { name: "Cinnamon", code: "#9A3412" },

    // === Yellow ===
    { name: "Goldenrod", code: "#713F12" },
    { name: "Deep Mustard", code: "#854D0E" },
    { name: "Amber Yellow", code: "#A16207" },
    { name: "Warm Gold", code: "#CA8A04" },
    { name: "Golden Glow", code: "#EAB308" },
    { name: "Soft Yellow", code: "#FACC15" },
    { name: "Brass Yellow", code: "#422006" },
    { name: "Muted Gold", code: "#713F12" },
    { name: "Honey", code: "#854D0E" },
    { name: "Bronze Yellow", code: "#A16207" },

    // === Green ===
    { name: "Dark Forest", code: "#14532D" },
    { name: "Jungle Green", code: "#166534" },
    { name: "Deep Green", code: "#15803D" },
    { name: "Emerald", code: "#16A34A" },
    { name: "Spring Green", code: "#22C55E" },
    { name: "Mint Green", code: "#4ADE80" },
    { name: "Deep Moss", code: "#052E16" },
    { name: "Forest Green", code: "#064E3B" },
    { name: "Dark Teal", code: "#0F766E" },
    { name: "Fresh Green", code: "#15803D" },

    // === Teal / Cyan ===
    { name: "Teal Deep", code: "#134E4A" },
    { name: "Dark Aqua", code: "#115E59" },
    { name: "Sea Teal", code: "#0F766E" },
    { name: "Tropical Teal", code: "#14B8A6" },
    { name: "Aqua Glow", code: "#2DD4BF" },
    { name: "Cool Mint", code: "#5EEAD4" },
    { name: "Ocean Depth", code: "#083344" },
    { name: "Deep Cyan", code: "#0E7490" },
    { name: "Blue Teal", code: "#155E75" },
  ];

  const colorClick = (key) => {
    document.body.style.backgroundColor = key;
  };
  return (
    <div className="w-full h-full flex flex-wrap items-center justify-center gap-2">
      {colors.map((color) => {
        return (
          <button
            onClick={colorClick.bind(this, color.code)}
            key={color.name}
            style={{ backgroundColor: color.code }}
          >
            {color.name}
          </button>
        );
      })}
    </div>
  );
}
export default ColorChanger;
