import { useState } from "react"
import AddCategory from "./components/AddCategory";
import GiftGrid from "./components/GiftGrid";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Zelda']);

    const onAddCategory = (newCategory: any) => {
        if (categories.includes(newCategory.trim())) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>
                Gift Expert App
            </h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />



            {categories.map((category) => (
                <GiftGrid
                    key={category}
                    category={category}
                />
            ))}


        </>
    )
}
