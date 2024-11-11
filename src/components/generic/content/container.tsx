import React from "react";

export function ContentContainer({children} : Readonly<{children: React.ReactNode;}>) {
    //Limit the size of the content for center for ultra wide screens
    //jusrt a div with a max-width
    return (
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 bg-red">
            {children}
        </div>
    );
}
