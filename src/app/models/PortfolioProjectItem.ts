export class PortfolioProjectItem {
    imageUrl: string;
    titleText: string;
    subText: string;

    constructor(imageUrl: string, titleText: string, subText: string) {
        this.imageUrl = imageUrl,
        this.titleText = titleText,
        this.subText = subText
    }
}