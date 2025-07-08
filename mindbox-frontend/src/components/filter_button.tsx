import React from "react";

import { Button } from "@/components/ui/button";

import { type Filter } from "@/lib/types";

interface FilterButtonProps {
    title: string;
    type: Filter;
    setType: React.Dispatch<React.SetStateAction<Filter>>;
    currentFilter: Filter;
}

function FilterButton({ title, type, setType, currentFilter }: FilterButtonProps) {
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        setType(type);
    };

    const variant = type === currentFilter ? "default" : "ghost"

    return (
        <Button variant={variant} onClick={onClick}>
            {title}
        </Button>
    );
}

export default FilterButton;
