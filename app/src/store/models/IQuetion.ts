export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
    categoryId: number | null;
    quetionId: number | null; // Возможно опечатка в "questionId"?
    createdAt: string; // Можно рассмотреть использование Date вместо string
    updatedAt: string; // Можно рассмотреть использование Date вместо string
}

export interface Quiz {
    id: number;
    title: string;
    image: string;
    description: string
    userId: number | null;
    createdAt: string; // Можно рассмотреть использование Date вместо string
    updatedAt: string; // Можно рассмотреть использование Date вместо string
    questions: Question[];
}
