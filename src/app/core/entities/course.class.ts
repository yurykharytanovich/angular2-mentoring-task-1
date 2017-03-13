import { ICourse } from "./course.interface";

let idCounter = 1;

export default class Course implements ICourse {
    public id: number;

    constructor(
        public title: string,
        public description: string,
        public duration: number,
        public startDate: Date
    ){
        this.id = idCounter++;
    }
}