/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				yellow: {
					400: "#FFD700",
					500: "#FFC107",
				},
				red: {
					600: "#E53935",
				},
				primary: '#1E40AF', // Deep blue
        secondary: '#9333EA', // Purple
        background: '#111827', // Dark gray background
        surface: '#374151', // Light gray surface
        error: '#DC2626', // Red for errors
        textPrimary: '#F3F4F6', // Light text color
        textSecondary: '#9CA3AF', // Muted gray for secondary text
        muted: '#6B7280', // Muted color for less important text
		},
	},
	plugins: [],
}
};