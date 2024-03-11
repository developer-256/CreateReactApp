import {
  NavigationMenu,
  // NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import MaxWidthWrapper from "../MaxWidthWrapper";

const Navbar = () => {
  return (
    <nav className="bg-gray-200">
      <MaxWidthWrapper>
        <NavigationMenu className="px-10 py-3">
          <NavigationMenuList>
            <NavigationMenuItem>
              <a href="/docs">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
