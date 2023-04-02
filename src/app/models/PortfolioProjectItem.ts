export class PortfolioProjectItem {
    imageUrl: string;
    projectUrl: string;
    githubUrl: string;
    titleText: string;
    subText: string;

    constructor(imageUrl: string, projectUrl: string, githubUrl: string, titleText: string, subText: string) {
        this.imageUrl = imageUrl,
        this.githubUrl = githubUrl,
        this.projectUrl = projectUrl,
        this.titleText = titleText,
        this.subText = subText
    }
}