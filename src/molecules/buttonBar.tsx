import React from "react";

interface ButtonBarType {
    children: React.ReactNode,
    className?: string,
}

const ButtonBar = ({ children, className }: ButtonBarType) => {

    return (
        <div className={className}>
            {children}
        </div>
    )
}

export {ButtonBar};