 export class Quiz {
    id:number;
    question: string;
    answers1: string;
    answers2: string;
    answers3: string;
    answers4: string;

    

    constructor(question: string, answers1:  string, answers2: string, answers3: string,
        answers4: string) {
        
        this.id = Math.floor(Math.random() * 100000000)+1;
        this.question = question;
        this.answers1 = answers1;
        this.answers2 = answers2;
        this.answers3 = answers3;
        this.answers4 = answers4;

        
    }

    
}