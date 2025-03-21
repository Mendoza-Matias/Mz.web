export class Plan {
    id: number;
    plan_name: string;
    subtitle: string;
    description: string;

    constructor(id: number, plan_name: string, subtitle: string, description: string) {
        this.id = id;
        this.plan_name = plan_name;
        this.subtitle = subtitle;
        this.description = description;
    }
}