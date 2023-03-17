export class ContactRequest {
    name: string;
    email: string;
    phone: string;
    websiteUrl: string;
    budget: string;
    projectDescription: string;
    businessSource: string;

    constructor(
        name: string,
        email: string,
        phone: string,
        websiteUrl: string,
        budget: string,
        projectDescription: string,
        businessSource: string
    ){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.websiteUrl = websiteUrl;
        this.budget = budget;
        this.projectDescription = projectDescription;
        this.businessSource = businessSource;
    }

}