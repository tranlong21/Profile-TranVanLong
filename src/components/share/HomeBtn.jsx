import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const HomeButton = ({ x, y, label, link, icon }) => {
    return (
        <Link
            to={"/"}
            target={"_self"}
            className="text-foreground rounded-full flex items-center justify-center 
                       custom-bg fixed top-4 left-4 w-fit self-start"
            aria-label={"home"}
            name={"home"}
        >
            <span className="relative w-14 h-14 p-4 hover:text-accent">
                <FaHome className="w-full h-auto" strokeWidth={1.5}/>
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2
                            bg-background text-foreground rounded-md text-sm shadow-lg whitespace-nowrap z-20"
                    style={{
                        fontWeight: "600",
                        textShadow: "0px 0px 2px rgba(0, 0, 0, 0.5)",
                    }}>
                    Home
                </span>
            </span>
        </Link>
    );
};

export default HomeButton;