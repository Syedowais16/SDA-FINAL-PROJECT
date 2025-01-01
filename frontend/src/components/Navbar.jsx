import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const Navbar = () => {
	const { user, logout } = useUserStore();
	const isAdmin = user?.role === "admin";
	const { cart } = useCartStore();

	return (
		<header className='fixed top-0 left-0 w-full bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-800 text-white shadow-md z-50'>
			<div className='container mx-auto px-6 py-4'>
				<div className='flex justify-between items-center'>
					{/* Logo Section */}
					<Link to='/' className='text-3xl font-extrabold flex items-center space-x-2'>
						<span className='bg-blue-500 text-white rounded-full p-2'>
							<ShoppingCart size={24} />
						</span>
						<span className='hidden sm:inline'>Clothing Haven</span>
					</Link>

					{/* Navigation Links */}
					<nav className='hidden md:flex items-center space-x-6'>
						<Link
							to='/'
							className='hover:text-yellow-400 transition duration-300 text-lg font-medium'
						>
							Home
						</Link>
						{user && (
							<Link
								to='/cart'
								className='relative hover:text-yellow-400 transition duration-300 text-lg font-medium'
							>
								Cart
								{cart.length > 0 && (
									<span className='absolute -top-2 -right-3 bg-yellow-500 text-white rounded-full px-2 py-0.5 text-xs'>
										{cart.length}
									</span>
								)}
							</Link>
						)}
						{isAdmin && (
							<Link
								to='/secret-dashboard'
								className='hover:text-yellow-400 transition duration-300 text-lg font-medium flex items-center'
							>
								<Lock className='mr-1' size={18} />
								Dashboard
							</Link>
						)}
					</nav>

					{/* User Actions */}
					<div className='flex items-center space-x-4'>
						{user ? (
							<button
								className='bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg flex items-center text-sm font-semibold'
								onClick={logout}
							>
								<LogOut size={18} />
								<span className='ml-2'>Logout</span>
							</button>
						) : (
							<>
								<Link
									to='/signup'
									className='bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm font-semibold flex items-center'
								>
									<UserPlus className='mr-2' size={18} />
									Sign Up
								</Link>
								<Link
									to='/login'
									className='bg-white hover:bg-gray-200 text-black px-4 py-2 rounded-lg text-sm font-semibold flex items-center'
								>
									<LogIn className='mr-2' size={18} />
									Login
								</Link>
							</>
						)}
					</div>
				</div>

				{/* Mobile Navigation */}
				<nav className='md:hidden mt-4 flex flex-wrap justify-center space-x-4'>
					<Link
						to='/'
						className='hover:text-yellow-400 transition duration-300 text-sm font-medium'
					>
						Home
					</Link>
					{user && (
						<Link
							to='/cart'
							className='relative hover:text-yellow-400 transition duration-300 text-sm font-medium'
						>
							Cart
							{cart.length > 0 && (
								<span className='absolute -top-2 -right-3 bg-yellow-500 text-white rounded-full px-2 py-0.5 text-xs'>
									{cart.length}
								</span>
							)}
						</Link>
					)}
					{isAdmin && (
						<Link
							to='/secret-dashboard'
							className='hover:text-yellow-400 transition duration-300 text-sm font-medium'
						>
							Dashboard
						</Link>
					)}
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
