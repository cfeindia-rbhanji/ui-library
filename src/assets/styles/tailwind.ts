/* 1. Initial get variables from TailwindCSS - Default */
const tailwindTheme = {
  colors: {
    "tailwind-colors-slate-50": "rgba(248, 250, 252, 1)",
    "tailwind-colors-slate-100": "rgba(241, 245, 249, 1)",
    "tailwind-colors-slate-200": "rgba(226, 232, 240, 1)",
    "tailwind-colors-slate-300": "rgba(203, 213, 225, 1)",
    "tailwind-colors-slate-400": "rgba(148, 163, 184, 1)",
    "tailwind-colors-slate-500": "rgba(100, 116, 139, 1)",
    "tailwind-colors-slate-600": "rgba(71, 85, 105, 1)",
    "tailwind-colors-slate-700": "rgba(51, 65, 85, 1)",
    "tailwind-colors-slate-800": "rgba(30, 41, 59, 1)",
    "tailwind-colors-base-black": "rgba(0, 0, 0, 1)",
    "tailwind-colors-base-white": "rgba(255, 255, 255, 1)",
    "tailwind-colors-slate-900": "rgba(15, 23, 42, 1)",
    "tailwind-colors-base-transparent": "rgba(255, 255, 255, 0)",
    "tailwind-colors-slate-950": "rgba(2, 6, 23, 1)",
    "custom-colors-example-50": "rgba(255, 255, 255, 1)",
    "tailwind-colors-gray-50": "rgba(249, 250, 251, 1)",
    "tailwind-colors-gray-100": "rgba(243, 244, 246, 1)",
    "tailwind-colors-gray-200": "rgba(229, 231, 235, 1)",
    "tailwind-colors-gray-300": "rgba(209, 213, 219, 1)",
    "tailwind-colors-gray-400": "rgba(156, 163, 175, 1)",
    "tailwind-colors-gray-500": "rgba(107, 114, 128, 1)",
    "tailwind-colors-gray-600": "rgba(75, 85, 99, 1)",
    "tailwind-colors-gray-700": "rgba(55, 65, 81, 1)",
    "tailwind-colors-gray-800": "rgba(31, 41, 55, 1)",
    "tailwind-colors-gray-900": "rgba(17, 24, 39, 1)",
    "tailwind-colors-gray-950": "rgba(3, 7, 18, 1)",
    "tailwind-colors-zinc-50": "rgba(250, 250, 250, 1)",
    "tailwind-colors-zinc-100": "rgba(244, 244, 245, 1)",
    "tailwind-colors-zinc-200": "rgba(228, 228, 231, 1)",
    "tailwind-colors-zinc-300": "rgba(212, 212, 216, 1)",
    "tailwind-colors-zinc-400": "rgba(161, 161, 170, 1)",
    "tailwind-colors-zinc-500": "rgba(113, 113, 122, 1)",
    "tailwind-colors-zinc-600": "rgba(82, 82, 91, 1)",
    "tailwind-colors-zinc-700": "rgba(63, 63, 70, 1)",
    "tailwind-colors-zinc-800": "rgba(39, 39, 42, 1)",
    "tailwind-colors-zinc-900": "rgba(24, 24, 27, 1)",
    "tailwind-colors-zinc-950": "rgba(9, 9, 11, 1)",
    "tailwind-colors-neutral-50": "rgba(250, 250, 250, 1)",
    "tailwind-colors-neutral-100": "rgba(245, 245, 245, 1)",
    "tailwind-colors-neutral-200": "rgba(229, 229, 229, 1)",
    "tailwind-colors-neutral-300": "rgba(212, 212, 212, 1)",
    "tailwind-colors-neutral-400": "rgba(163, 163, 163, 1)",
    "tailwind-colors-neutral-500": "rgba(115, 115, 115, 1)",
    "tailwind-colors-neutral-600": "rgba(82, 82, 82, 1)",
    "tailwind-colors-neutral-700": "rgba(64, 64, 64, 1)",
    "tailwind-colors-neutral-800": "rgba(38, 38, 38, 1)",
    "tailwind-colors-neutral-900": "rgba(23, 23, 23, 1)",
    "tailwind-colors-neutral-950": "rgba(10, 10, 10, 1)",
    "tailwind-colors-stone-50": "rgba(250, 250, 249, 1)",
    "tailwind-colors-stone-100": "rgba(245, 245, 244, 1)",
    "tailwind-colors-stone-200": "rgba(231, 229, 228, 1)",
    "tailwind-colors-stone-300": "rgba(214, 211, 209, 1)",
    "tailwind-colors-stone-400": "rgba(168, 162, 158, 1)",
    "tailwind-colors-stone-500": "rgba(120, 113, 108, 1)",
    "tailwind-colors-stone-600": "rgba(87, 83, 78, 1)",
    "tailwind-colors-stone-700": "rgba(68, 64, 60, 1)",
    "tailwind-colors-stone-800": "rgba(41, 37, 36, 1)",
    "tailwind-colors-stone-900": "rgba(28, 25, 23, 1)",
    "tailwind-colors-stone-950": "rgba(12, 10, 9, 1)",
    "tailwind-colors-red-50": "rgba(254, 242, 242, 1)",
    "tailwind-colors-red-100": "rgba(254, 226, 226, 1)",
    "tailwind-colors-red-200": "rgba(254, 202, 202, 1)",
    "tailwind-colors-red-300": "rgba(252, 165, 165, 1)",
    "tailwind-colors-red-400": "rgba(248, 113, 113, 1)",
    "tailwind-colors-red-500": "rgba(239, 68, 68, 1)",
    "tailwind-colors-red-600": "rgba(220, 38, 38, 1)",
    "tailwind-colors-red-700": "rgba(185, 28, 28, 1)",
    "tailwind-colors-red-800": "rgba(153, 27, 27, 1)",
    "tailwind-colors-red-900": "rgba(127, 29, 29, 1)",
    "tailwind-colors-red-950": "rgba(69, 10, 10, 1)",
    "tailwind-colors-orange-50": "rgba(255, 247, 237, 1)",
    "tailwind-colors-orange-100": "rgba(255, 237, 213, 1)",
    "tailwind-colors-orange-200": "rgba(254, 215, 170, 1)",
    "tailwind-colors-orange-300": "rgba(253, 186, 116, 1)",
    "tailwind-colors-orange-400": "rgba(251, 146, 60, 1)",
    "tailwind-colors-orange-500": "rgba(249, 115, 22, 1)",
    "tailwind-colors-orange-600": "rgba(234, 88, 12, 1)",
    "tailwind-colors-orange-700": "rgba(194, 65, 12, 1)",
    "tailwind-colors-orange-800": "rgba(154, 52, 18, 1)",
    "tailwind-colors-orange-900": "rgba(124, 45, 18, 1)",
    "tailwind-colors-orange-950": "rgba(67, 20, 7, 1)",
    "tailwind-colors-amber-50": "rgba(255, 251, 235, 1)",
    "tailwind-colors-amber-100": "rgba(254, 243, 199, 1)",
    "tailwind-colors-amber-200": "rgba(253, 230, 138, 1)",
    "tailwind-colors-amber-300": "rgba(252, 211, 77, 1)",
    "tailwind-colors-amber-400": "rgba(251, 191, 36, 1)",
    "tailwind-colors-amber-500": "rgba(245, 158, 11, 1)",
    "tailwind-colors-amber-600": "rgba(217, 119, 6, 1)",
    "tailwind-colors-amber-700": "rgba(180, 83, 9, 1)",
    "tailwind-colors-amber-800": "rgba(146, 64, 14, 1)",
    "tailwind-colors-amber-900": "rgba(120, 53, 15, 1)",
    "tailwind-colors-amber-950": "rgba(69, 26, 3, 1)",
    "tailwind-colors-yellow-50": "rgba(254, 252, 232, 1)",
    "tailwind-colors-yellow-100": "rgba(254, 249, 195, 1)",
    "tailwind-colors-yellow-200": "rgba(254, 240, 138, 1)",
    "tailwind-colors-yellow-300": "rgba(253, 224, 71, 1)",
    "tailwind-colors-yellow-400": "rgba(250, 204, 21, 1)",
    "tailwind-colors-yellow-500": "rgba(234, 179, 8, 1)",
    "tailwind-colors-yellow-600": "rgba(202, 138, 4, 1)",
    "tailwind-colors-yellow-700": "rgba(161, 98, 7, 1)",
    "tailwind-colors-yellow-800": "rgba(133, 77, 14, 1)",
    "tailwind-colors-yellow-900": "rgba(113, 63, 18, 1)",
    "tailwind-colors-yellow-950": "rgba(66, 32, 6, 1)",
    "tailwind-colors-lime-50": "rgba(247, 254, 231, 1)",
    "tailwind-colors-lime-100": "rgba(236, 252, 203, 1)",
    "tailwind-colors-lime-200": "rgba(217, 249, 157, 1)",
    "tailwind-colors-lime-300": "rgba(190, 242, 100, 1)",
    "tailwind-colors-lime-400": "rgba(163, 230, 53, 1)",
    "tailwind-colors-lime-500": "rgba(132, 204, 22, 1)",
    "tailwind-colors-lime-600": "rgba(101, 163, 13, 1)",
    "tailwind-colors-lime-700": "rgba(77, 124, 15, 1)",
    "tailwind-colors-lime-800": "rgba(63, 98, 18, 1)",
    "tailwind-colors-lime-900": "rgba(54, 83, 20, 1)",
    "tailwind-colors-lime-950": "rgba(26, 46, 5, 1)",
    "tailwind-colors-green-50": "rgba(240, 253, 244, 1)",
    "tailwind-colors-green-100": "rgba(220, 252, 231, 1)",
    "tailwind-colors-green-200": "rgba(187, 247, 208, 1)",
    "tailwind-colors-green-300": "rgba(134, 239, 172, 1)",
    "tailwind-colors-green-400": "rgba(74, 222, 128, 1)",
    "tailwind-colors-green-500": "rgba(34, 197, 94, 1)",
    "tailwind-colors-green-600": "rgba(22, 163, 74, 1)",
    "tailwind-colors-green-700": "rgba(21, 128, 61, 1)",
    "tailwind-colors-green-800": "rgba(22, 101, 52, 1)",
    "tailwind-colors-green-900": "rgba(20, 83, 45, 1)",
    "tailwind-colors-green-950": "rgba(5, 46, 22, 1)",
    "tailwind-colors-emerald-50": "rgba(236, 253, 245, 1)",
    "tailwind-colors-emerald-100": "rgba(209, 250, 229, 1)",
    "tailwind-colors-emerald-200": "rgba(167, 243, 208, 1)",
    "tailwind-colors-emerald-300": "rgba(110, 231, 183, 1)",
    "tailwind-colors-emerald-400": "rgba(52, 211, 153, 1)",
    "tailwind-colors-emerald-500": "rgba(16, 185, 129, 1)",
    "tailwind-colors-emerald-600": "rgba(5, 150, 105, 1)",
    "tailwind-colors-emerald-700": "rgba(4, 120, 87, 1)",
    "tailwind-colors-emerald-800": "rgba(6, 95, 70, 1)",
    "tailwind-colors-emerald-900": "rgba(6, 78, 59, 1)",
    "tailwind-colors-emerald-950": "rgba(2, 44, 34, 1)",
    "tailwind-colors-teal-50": "rgba(240, 253, 250, 1)",
    "tailwind-colors-teal-100": "rgba(204, 251, 241, 1)",
    "tailwind-colors-teal-200": "rgba(153, 246, 228, 1)",
    "tailwind-colors-teal-300": "rgba(94, 234, 212, 1)",
    "tailwind-colors-teal-400": "rgba(45, 212, 191, 1)",
    "tailwind-colors-teal-500": "rgba(20, 184, 166, 1)",
    "tailwind-colors-teal-600": "rgba(13, 148, 136, 1)",
    "tailwind-colors-teal-700": "rgba(15, 118, 110, 1)",
    "tailwind-colors-teal-800": "rgba(17, 94, 89, 1)",
    "tailwind-colors-teal-900": "rgba(19, 78, 74, 1)",
    "tailwind-colors-teal-950": "rgba(4, 47, 46, 1)",
    "tailwind-colors-cyan-50": "rgba(236, 254, 255, 1)",
    "tailwind-colors-cyan-100": "rgba(207, 250, 254, 1)",
    "tailwind-colors-cyan-200": "rgba(165, 243, 252, 1)",
    "tailwind-colors-cyan-300": "rgba(103, 232, 249, 1)",
    "tailwind-colors-cyan-400": "rgba(34, 211, 238, 1)",
    "tailwind-colors-cyan-500": "rgba(6, 182, 212, 1)",
    "tailwind-colors-cyan-600": "rgba(8, 145, 178, 1)",
    "tailwind-colors-cyan-700": "rgba(14, 116, 144, 1)",
    "tailwind-colors-cyan-800": "rgba(21, 94, 117, 1)",
    "tailwind-colors-cyan-900": "rgba(22, 78, 99, 1)",
    "tailwind-colors-cyan-950": "rgba(8, 51, 68, 1)",
    "tailwind-colors-sky-50": "rgba(240, 249, 255, 1)",
    "tailwind-colors-sky-100": "rgba(224, 242, 254, 1)",
    "tailwind-colors-sky-200": "rgba(186, 230, 253, 1)",
    "tailwind-colors-sky-300": "rgba(125, 211, 252, 1)",
    "tailwind-colors-sky-400": "rgba(56, 189, 248, 1)",
    "tailwind-colors-sky-500": "rgba(14, 165, 233, 1)",
    "tailwind-colors-sky-600": "rgba(2, 132, 199, 1)",
    "tailwind-colors-sky-700": "rgba(3, 105, 161, 1)",
    "tailwind-colors-sky-800": "rgba(7, 89, 133, 1)",
    "tailwind-colors-sky-900": "rgba(12, 74, 110, 1)",
    "tailwind-colors-sky-950": "rgba(8, 47, 73, 1)",
    "tailwind-colors-blue-50": "rgba(239, 246, 255, 1)",
    "tailwind-colors-blue-100": "rgba(219, 234, 254, 1)",
    "tailwind-colors-blue-200": "rgba(191, 219, 254, 1)",
    "tailwind-colors-blue-300": "rgba(147, 197, 253, 1)",
    "tailwind-colors-blue-400": "rgba(96, 165, 250, 1)",
    "tailwind-colors-blue-500": "rgba(59, 130, 246, 1)",
    "tailwind-colors-blue-600": "rgba(37, 99, 235, 1)",
    "tailwind-colors-blue-700": "rgba(29, 78, 216, 1)",
    "tailwind-colors-blue-800": "rgba(30, 64, 175, 1)",
    "tailwind-colors-blue-900": "rgba(30, 58, 138, 1)",
    "tailwind-colors-blue-950": "rgba(23, 37, 84, 1)",
    "tailwind-colors-indigo-50": "rgba(238, 242, 255, 1)",
    "tailwind-colors-indigo-100": "rgba(224, 231, 255, 1)",
    "tailwind-colors-indigo-200": "rgba(199, 210, 254, 1)",
    "tailwind-colors-indigo-300": "rgba(165, 180, 252, 1)",
    "tailwind-colors-indigo-400": "rgba(129, 140, 248, 1)",
    "tailwind-colors-indigo-500": "rgba(99, 102, 241, 1)",
    "tailwind-colors-indigo-600": "rgba(79, 70, 229, 1)",
    "tailwind-colors-indigo-700": "rgba(67, 56, 202, 1)",
    "tailwind-colors-indigo-800": "rgba(55, 48, 163, 1)",
    "tailwind-colors-indigo-900": "rgba(49, 46, 129, 1)",
    "tailwind-colors-indigo-950": "rgba(30, 27, 75, 1)",
    "tailwind-colors-violet-50": "rgba(245, 243, 255, 1)",
    "tailwind-colors-violet-100": "rgba(237, 233, 254, 1)",
    "tailwind-colors-violet-200": "rgba(221, 214, 254, 1)",
    "tailwind-colors-violet-300": "rgba(196, 181, 253, 1)",
    "tailwind-colors-violet-400": "rgba(167, 139, 250, 1)",
    "tailwind-colors-violet-500": "rgba(139, 92, 246, 1)",
    "tailwind-colors-violet-600": "rgba(124, 58, 237, 1)",
    "tailwind-colors-violet-700": "rgba(109, 40, 217, 1)",
    "tailwind-colors-violet-800": "rgba(91, 33, 182, 1)",
    "tailwind-colors-violet-900": "rgba(76, 29, 149, 1)",
    "tailwind-colors-violet-950": "rgba(46, 16, 101, 1)",
    "tailwind-colors-purple-50": "rgba(250, 245, 255, 1)",
    "tailwind-colors-purple-100": "rgba(243, 232, 255, 1)",
    "tailwind-colors-purple-200": "rgba(233, 213, 255, 1)",
    "tailwind-colors-purple-300": "rgba(216, 180, 254, 1)",
    "tailwind-colors-purple-400": "rgba(192, 132, 252, 1)",
    "tailwind-colors-purple-500": "rgba(168, 85, 247, 1)",
    "tailwind-colors-purple-600": "rgba(147, 51, 234, 1)",
    "tailwind-colors-purple-700": "rgba(126, 34, 206, 1)",
    "tailwind-colors-purple-800": "rgba(107, 33, 168, 1)",
    "tailwind-colors-purple-900": "rgba(88, 28, 135, 1)",
    "tailwind-colors-purple-950": "rgba(59, 7, 100, 1)",
    "tailwind-colors-fuchsia-50": "rgba(253, 244, 255, 1)",
    "tailwind-colors-fuchsia-100": "rgba(250, 232, 255, 1)",
    "tailwind-colors-fuchsia-200": "rgba(245, 208, 254, 1)",
    "tailwind-colors-fuchsia-300": "rgba(240, 171, 252, 1)",
    "tailwind-colors-fuchsia-400": "rgba(232, 121, 249, 1)",
    "tailwind-colors-fuchsia-500": "rgba(217, 70, 239, 1)",
    "tailwind-colors-fuchsia-600": "rgba(192, 38, 211, 1)",
    "tailwind-colors-fuchsia-700": "rgba(162, 28, 175, 1)",
    "tailwind-colors-fuchsia-800": "rgba(134, 25, 143, 1)",
    "tailwind-colors-fuchsia-900": "rgba(112, 26, 117, 1)",
    "tailwind-colors-fuchsia-950": "rgba(74, 4, 78, 1)",
    "tailwind-colors-pink-50": "rgba(253, 242, 248, 1)",
    "tailwind-colors-pink-100": "rgba(252, 231, 243, 1)",
    "tailwind-colors-pink-200": "rgba(251, 207, 232, 1)",
    "tailwind-colors-pink-300": "rgba(249, 168, 212, 1)",
    "tailwind-colors-pink-400": "rgba(244, 114, 182, 1)",
    "tailwind-colors-pink-500": "rgba(236, 72, 153, 1)",
    "tailwind-colors-pink-600": "rgba(219, 39, 119, 1)",
    "tailwind-colors-pink-700": "rgba(190, 24, 93, 1)",
    "tailwind-colors-pink-800": "rgba(157, 23, 77, 1)",
    "tailwind-colors-pink-900": "rgba(131, 24, 67, 1)",
    "tailwind-colors-pink-950": "rgba(80, 7, 36, 1)",
    "tailwind-colors-rose-50": "rgba(255, 241, 242, 1)",
    "tailwind-colors-rose-100": "rgba(255, 228, 230, 1)",
    "tailwind-colors-rose-200": "rgba(254, 205, 211, 1)",
    "tailwind-colors-rose-300": "rgba(253, 164, 175, 1)",
    "tailwind-colors-rose-400": "rgba(251, 113, 133, 1)",
    "tailwind-colors-rose-500": "rgba(244, 63, 94, 1)",
    "tailwind-colors-rose-600": "rgba(225, 29, 72, 1)",
    "tailwind-colors-rose-700": "rgba(190, 18, 60, 1)",
    "tailwind-colors-rose-800": "rgba(159, 18, 57, 1)",
    "tailwind-colors-rose-900": "rgba(136, 19, 55, 1)",
    "tailwind-colors-rose-950": "rgba(76, 5, 25, 1)",
  },
  fontSize: {
    "font-size-text-xs": "12px",
    "font-size-text-sm": "14px",
    "font-size-text-base": "16px",
    "font-size-text-lg": "18px",
    "font-size-text-xl": "20px",
    "font-size-text-2xl": "24px",
    "font-size-text-3xl": "30px",
    "font-size-text-4xl": "36px",
    "font-size-text-5xl": "48px",
    "font-size-text-6xl": "60px",
    "font-size-text-7xl": "72px",
    "font-size-text-8xl": "96px",
    "font-size-text-9xl": "128px",
  },
  fontWeight: {
    "font-weight-thin": "100",
    "font-weight-extralight": "200",
    "font-weight-light": "300",
    "font-weight-normal": "400",
    "font-weight-medium": "500",
    "font-weight-semibold": "600",
    "font-weight-bold": "700",
    "font-weight-extrabold": "800",
    "font-weight-black": "900",
  },
  borderRadius: {
    "radius-rounded-none": "0px",
    "radius-rounded-sm": "2px",
    "radius-rounded": "4px",
    "radius-rounded-md": "6px",
    "radius-rounded-lg": "8px",
    "radius-rounded-xl": "12px",
    "radius-rounded-2xl": "16px",
    "radius-rounded-3xl": "24px",
    "radius-rounded-4xl": "32px",
    "radius-rounded-full": "9999px",
  },
  lineHeight: {
    "font-line-height-leading-3": "12px",
    "font-line-height-leading-4": "16px",
    "font-line-height-leading-5": "20px",
    "font-line-height-leading-6": "24px",
    "font-line-height-leading-7": "28px",
    "font-line-height-leading-8": "32px",
    "font-line-height-leading-9": "36px",
    "font-line-height-leading-10": "40px",
  },
  letterSpacing: {
    "font-letter-spacing-tighter": "-0.800000011920929px",
    "font-letter-spacing-tight": "-0.4000000059604645px",
    "font-letter-spacing-normal": "0px",
    "font-letter-spacing-wide": "0.4000000059604645px",
    "font-letter-spacing-wider": "0.800000011920929px",
    "font-letter-spacing-widest": "1.600000023841858px",
  },
  spacing: {
    "spacing-0": "0px",
    "width-w-0": "0px",
    "spacing-px": "1px",
    "height-h-0": "0px",
    "height-h-px": "1px",
    "height-h-0,5": "2px",
    "height-h-1": "4px",
    "height-h-1,5": "6px",
    "height-h-2": "8px",
    "height-h-2,5": "10px",
    "height-h-3": "12px",
    "height-h-3,5": "14px",
    "height-h-4": "16px",
    "height-h-5": "20px",
    "height-h-6": "24px",
    "height-h-7": "28px",
    "height-h-8": "32px",
    "height-h-9": "36px",
    "height-h-10": "40px",
    "height-h-11": "44px",
    "height-h-12": "48px",
    "height-h-14": "56px",
    "height-h-16": "64px",
    "height-h-20": "80px",
    "height-h-24": "96px",
    "height-h-28": "112px",
    "height-h-32": "128px",
    "height-h-36": "144px",
    "height-h-44": "176px",
    "height-h-48": "192px",
    "height-h-52": "208px",
    "height-h-56": "224px",
    "height-h-64": "256px",
    "height-h-72": "288px",
    "height-h-80": "320px",
    "height-h-96": "384px",
    "spacing-0-5": "2px",
    "width-w-px": "1px",
    "width-w-0,5": "2px",
    "width-w-1": "4px",
    "width-w-1,5": "6px",
    "width-w-2": "8px",
    "width-w-2,5": "10px",
    "width-w-3": "12px",
    "width-w-3,5": "14px",
    "width-w-4": "16px",
    "width-w-5": "20px",
    "width-w-6": "24px",
    "width-w-7": "28px",
    "width-w-8": "32px",
    "width-w-9": "36px",
    "width-w-10": "40px",
    "width-w-11": "44px",
    "width-w-12": "48px",
    "width-w-14": "56px",
    "width-w-16": "64px",
    "width-w-20": "80px",
    "width-w-24": "96px",
    "width-w-28": "112px",
    "width-w-32": "128px",
    "width-w-36": "144px",
    "width-w-44": "176px",
    "width-w-48": "192px",
    "width-w-52": "208px",
    "width-w-56": "224px",
    "width-w-64": "256px",
    "width-w-72": "288px",
    "width-w-80": "320px",
    "width-w-96": "384px",
    "spacing-1": "4px",
    "spacing-1-5": "6px",
    "spacing-2": "8px",
    "spacing-2-5": "10px",
    "spacing-3": "12px",
    "spacing-3-5": "14px",
    "spacing-4": "16px",
    "spacing-5": "20px",
    "spacing-6": "24px",
    "spacing-7": "28px",
    "spacing-8": "32px",
    "spacing-9": "36px",
    "spacing-10": "40px",
    "spacing-11": "44px",
    "spacing-12": "48px",
    "spacing-14": "56px",
    "spacing-16": "64px",
    "spacing-20": "80px",
    "spacing-24": "96px",
    "spacing-28": "112px",
    "spacing-32": "128px",
    "spacing-36": "144px",
    "spacing-40": "160px",
    "spacing-44": "176px",
    "spacing-48": "192px",
    "spacing-52": "208px",
    "spacing-56": "224px",
    "spacing-60": "240px",
    "spacing-64": "256px",
    "spacing-72": "288px",
    "spacing-80": "320px",
    "spacing-96": "384px",
    "breakpoint-sm": "640px",
    "breakpoint-md": "768px",
    "breakpoint-lg": "1024px",
    "breakpoint-xl": "1280px",
    "breakpoint-2xl": "1536px",
    "border-width-border-0": "0px",
    "border-width-border-1": "1px",
    "border-width-border-2": "2px",
    "border-width-border-4": "4px",
    "border-width-border-8": "8px",
    "max-width-max-w-0": "0px",
    "max-width-max-w-3xs": "256px",
    "max-width-max-w-2xs": "288px",
    "max-width-max-w-xs": "320px",
    "max-width-max-w-sm": "384px",
    "max-width-max-w-md": "448px",
    "max-width-max-w-lg": "512px",
    "max-width-max-w-xl": "576px",
    "max-width-max-w-2xl": "672px",
    "max-width-max-w-3xl": "768px",
    "max-width-max-w-4xl": "896px",
    "max-width-max-w-5xl": "1024px",
    "max-width-max-w-6xl": "1152px",
    "max-width-max-w-7xl": "1280px",
    "opacity-opacity-0": "0px",
    "opacity-opacity-5": "5px",
    "opacity-opacity-10": "10px",
    "opacity-opacity-15": "15px",
    "opacity-opacity-20": "20px",
    "opacity-opacity-25": "25px",
    "opacity-opacity-30": "30px",
    "opacity-opacity-35": "35px",
    "opacity-opacity-40": "40px",
    "opacity-opacity-45": "45px",
    "opacity-opacity-50": "50px",
    "opacity-opacity-55": "55px",
    "opacity-opacity-60": "60px",
    "opacity-opacity-65": "65px",
    "opacity-opacity-70": "70px",
    "opacity-opacity-75": "75px",
    "opacity-opacity-80": "80px",
    "opacity-opacity-85": "85px",
    "opacity-opacity-90": "90px",
    "opacity-opacity-95": "95px",
    "opacity-opacity-100": "100px",
    "blur-blur-none": "0px",
    "blur-blur-sm": "4px",
    "blur-blur": "8px",
    "blur-blur-md": "12px",
    "blur-blur-lg": "16px",
    "blur-blur-xl": "24px",
    "blur-blur-2xl": "40px",
    "blur-blur-3xl": "64px",
    "font-letter-spacing-tighter": "-0.800000011920929px",
    "font-letter-spacing-tight": "-0.4000000059604645px",
    "font-letter-spacing-normal": "0px",
    "font-letter-spacing-wide": "0.4000000059604645px",
    "font-letter-spacing-wider": "0.800000011920929px",
    "font-letter-spacing-widest": "1.600000023841858px",
  },
  customProperties: {
    "font-style-italic": "italic",
    "font-style-not-italic": "normal",
  },
};

module.exports.colors = tailwindTheme.colors;
module.exports.fontSize = tailwindTheme.fontSize;
module.exports.fontWeight = tailwindTheme.fontWeight;
module.exports.lineHeight = tailwindTheme.lineHeight;
module.exports.letterSpacing = tailwindTheme.letterSpacing;
module.exports.borderRadius = tailwindTheme.borderRadius;
module.exports.spacing = tailwindTheme.spacing;
module.exports.customProperties = tailwindTheme.customProperties;
