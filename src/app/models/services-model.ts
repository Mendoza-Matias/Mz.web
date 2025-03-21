export class Service {
    id: number;
    title: string;
    description: string;
    icon: string;

    constructor(id: number, title: string, description: string, icon: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.icon = icon
    }
}