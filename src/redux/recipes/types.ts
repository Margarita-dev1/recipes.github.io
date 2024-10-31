import {TFile} from "../../Components/Main/ModalAddRecipe/helpers";

export type TInitialState = {
    recipesArray: TRecipeItem[]
}

export type TRecipeItem ={
    id: string,
    name: string,
    text: string,
    timeHours: number,
    timeMins: number,
    difficulty: number,
    images: TFile[],
    timeTotal:number,
}