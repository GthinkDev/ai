import {
  Inter,
  Lusitana,
  Manrope,
  Noto_Sans_SC,
  Poppins,
} from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const fontManrope = Manrope({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const fontNotoSansSC = Noto_Sans_SC({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const fontPoppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
