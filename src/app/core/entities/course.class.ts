import { ICourse } from "./course.interface";

let idCounter = 1;

export default class Course implements ICourse {
    public id: number;
    public createdDate: Date;

    constructor(
        public title: string,
        public description: string,
        public duration: number,
        public startDate: Date,
        public topRated: boolean
    ){
        this.id = idCounter++;
        this.createdDate = new Date;
    }
}