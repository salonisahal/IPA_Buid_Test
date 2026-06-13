/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FF7A45',
          dark: '#FF8A5B',
        },
        surface: {
          light: '#F7F7FA',
          dark: '#000000',
        },
        card: {
          light: '#FFFFFF',
          dark: '#1C1C1E',
        },
        muted: {
          light: '#A9A9B0',
          dark: '#8E8E93',
        },
        accent: {
          light: '#4CC788',
          dark: '#32B977',
        },
        danger: {
          light: '#FF3B30',
          dark: '#FF453A',
        },
        success: {
          light: '#34C759',
          dark: '#30D158',
        },
        border: {
          light: '#E6E6EA',
          dark: '#38383A',
        },
        separator: {
          light: '#E5E5EA',
          dark: '#38383A',
        },
        label: {
          light: '#111111',
          dark: '#FFFFFF',
        },
        secondaryLabel: {
          light: '#6C6C70',
          dark: '#AEAEB2',
        },
        tealHero: {
          light: '#0C6B5F',
          dark: '#0A5148',
        },
        purpleCard: {
          light: '#7C86FF',
          dark: '#5D67FF',
        },
        blueCard: {
          light: '#2233A8',
          dark: '#1A2A86',
        },
        orangeCard: {
          light: '#FF8A5B',
          dark: '#FF9B70',
        },
      },
    },
  },
  presets: [require('nativewind/preset')],
};
