import { Link } from "react-router-dom"
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
    return (
        <header className="bg-amber-50 border-b border-amber-200 shadow-sm">
            <div className="container mx-auto px-4 py-5 flex justify-between items-center">
                <Link to="/">
                    <h1 className="text-3xl font-bold text-amber-800 cursor-pointer">Mental Health Support</h1>
                </Link>

                <NavigationMenu>
                    <NavigationMenuList className="flex items-center gap-4 cursor-pointer">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link to="/dashboard">Dashboard</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>


                        <NavigationMenuItem className="relative cursor-pointer">
                            <NavigationMenuTrigger className="cursor-pointer">Features</NavigationMenuTrigger>
                            <NavigationMenuContent className="absolute left-0 bg-white rounded-md shadow-md p-4">
                                <ul className="space-y-1 w-48">
                                    {[
                                        { name: "Check Mood", path: "/mood" },
                                        { name: "Manage Stress", path: "/stress" },
                                        { name: "Self-Care Routine", path: "/routine" },
                                    ].map((item) => (
                                        <li key={item.name}>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    to={item.path}
                                                    className="block text-sm text-gray-700 hover:text-amber-700 transition"
                                                >
                                                    {item.name}
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>


                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link to="/peers">Peers</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    )
}
