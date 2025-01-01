import { BarChart, PlusCircle, ShoppingBasket, FileText } from "lucide-react";  // Import FileText icon for Orders tab
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


import CreateProductForm from "../components/CreateProductForm";
import ProductsList from "../components/ProductsList";
import { useProductStore } from "../stores/useProductStore";

const tabs = [
	{ id: "create", label: "Create Product", icon: PlusCircle },
	{ id: "products", label: "Products", icon: ShoppingBasket },
	
];

const AdminPage = () => {
	const [activeTab, setActiveTab] = useState("create");
	const { fetchAllProducts } = useProductStore();

	useEffect(() => {
		fetchAllProducts();
	}, [fetchAllProducts]);

	return (
		<div className="min-h-screen relative overflow-hidden">
			<div className="relative z-10 container mx-auto px-4 py-16">
				<motion.h1
					className="text-4xl font-bold mb-8 text-blue-400 text-center"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					Admin Dashboard
				</motion.h1>

				<div className="flex justify-center mb-8">
					{tabs.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className={`flex items-center px-4 py-2 mx-2 rounded-md transition-colors duration-200 ${
								activeTab === tab.id
									? "bg-blue-600 text-white"
									: "bg-gray-800 text-gray-300 hover:bg-gray-700"
							}`}
						>
							<tab.icon className="mr-2 h-5 w-5" />
							{tab.label}
						</button>
					))}
				</div>

				{/* Render the tab content */}
				{activeTab === "create" && <CreateProductForm />}
				{activeTab === "products" && <ProductsList />}
				
			</div>
		</div>
	);
};

export default AdminPage;