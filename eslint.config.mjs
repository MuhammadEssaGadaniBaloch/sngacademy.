const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // global rules
    },
  },
  {
    files: ["src/app/components/*.tsx"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@next/next/no-img-element": "off",
    },
  },
  {
    files: ["src/app/main/result/page.tsx"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];
