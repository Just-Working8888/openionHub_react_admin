import { Quiz } from "./IQuetion";

export interface Categories {
    id: number,
    title: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    quetions: Quiz[]
}

