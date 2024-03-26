import {Inter,Khmer} from 'next/font/google'
import localFont from "next/font/local"

export const localCustomFont = localFont({
    src: "./font/osaka-re.ttf",
    variable: "--font-osaka-re",
})
export const inter = Inter({
	weight: ["400", "500", "600", "700"], // you can pass multiple weights
	subsets : ["latin"], 
	display: "swap", // swap means font will be displayed immediately. 
    variable: "--font-inter", // you can pass custom css variable name
});

export const Khmer = Khmer({
	weight: ["400"], // you can pass multiple weights
	subsets : ["khmer"], 
	display: "swap", // swap means font will be displayed immediately. 
    variable: "--font-khmer", // you can pass custom css variable name
});