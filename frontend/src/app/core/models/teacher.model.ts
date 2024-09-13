export interface TeacherModel {
    id?:number;
    name: string;
    email: string;
    status: boolean;
    avatar?: string;
    registerDate: Date;
}