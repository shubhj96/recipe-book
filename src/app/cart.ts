export interface Ingredient {
    requiredQty: number;
    quantity: string;
    name: string;
    type: string;
}

export interface ICart {
    name: string;
    ingredients: Ingredient[];
    steps: string[];
    imageURL: string;
    originalURL: string;
}
