class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();

        if (!this.possibleArticles.hasOwnProperty(articleModel)) {
            throw new Error('This article model is not included in this gallery!');

        }

        const article = this.listOfArticles.find(a => a.name === articleName);

        if (article === undefined) {
            this.listOfArticles.push({
                model: articleModel.toLowerCase(),
                name: articleName,
                quantity: quantity
            });

        } else if (article.model === articleModel.toLowerCase()) {
            article.quantity += quantity;

        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }


    inviteGuest(guestName, personality) {

        let points = 50;
        switch (personality) {
            case 'Vip': points = 500; break;
            case 'Middle': points = 250; break;
            default: points = 50; break;
        }

        if (this.guests.some(g => g.name === guestName)) {
            throw new Error(`${guestName} has already been invited.`);

        }

        this.guests.push({
            name: guestName,
            points: points,
            purchaseArticle: 0
        });

        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {

        const article = this.listOfArticles
            .find(a => a.name === articleName && a.model === articleModel.toLowerCase());

        if (article == undefined) {
            throw new Error('This article is not found.');
        }

        if (article.quantity == 0) {
            return `The ${articleName} is not available.`;
        }

        const guest = this.guests.find(g => g.name === guestName);

        if (guest == undefined) {
            return 'This guest is not invited.';
        }

        const model = article.model;
        const requiredPoints = this.possibleArticles[model];

        if (guest.points < requiredPoints) {
            return 'You need to more points to purchase the article.';

        } else {
            guest.points -= requiredPoints;
            guest.purchaseArticle += 1;
            article.quantity -= 1;
        }

        return `${guestName} successfully purchased the article worth ${requiredPoints} points.`;
    }

    showGalleryInfo(criteria) {
        const result = [];

        if (criteria === 'article') {
            result.push('Articles information:');

            this.listOfArticles.forEach(o => result.push(
                `${o.model} - ${o.name} - ${o.quantity}`
            ));

            return result.join('\n');

        } else if (criteria === 'guest') {

            result.push('Guests information:');

            this.guests.forEach(o => result.push(
                `${o.name} - ${o.purchaseArticle}`
            ));

            return result.join('\n');
        }

    }


}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));


