class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {

        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;

        } else if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`;

        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;

        }
    }

    like(username) {

        if (this._likes.some(u => u === username)) {
            throw new Error("You can't like the same story twice!");
        }

        if (this.creator === username) {
            throw new Error("You can't like your own story!");
        }

        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {

        if (!this._likes.some(u => u === username)) {
            throw new Error("You can't dislike this story!");

        }

        const index = this._likes.indexOf(username);
        this._likes.splice(index, 1);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {

        const currentComment = this._comments.find(e => e.num === id);

        if (id === undefined || !this._comments.some(c => c.num === id)) {

            const num = this._comments.length + 1;
            this._comments.push({ num, username, content, replies: [] });

            return `${username} commented on ${this.title}`;
        }

        if (currentComment !== undefined) {

            const num = (currentComment.replies.length || 0) + 1;
            const numReplies = `${currentComment.num}.${num}`;
            currentComment.replies.push({ numReplies, username, content });

            return 'You replied successfully';
        }
    }

    toString(sortingType) {

        if (sortingType === 'asc') {
            this._comments.sort((a, b) => a.num - b.num);

        } else if (sortingType === 'desc') {
            this._comments.sort((a, b) => b.num - a.num);

        } else if (sortingType === 'username') {
            this._comments.sort((a, b) => a.username.localeCompare(b.username));

        }

        const result = [
            `Title: ${this.title}`,
            `Creator: ${this.creator}`,
            `Likes: ${this._likes.length}`,
            `Comments:`
        ];

        if (this._comments.length !== 0) {

            this._comments.forEach(e => {
                result.push(`-- ${e.num}. ${e.username}: ${e.content}`);
                e.replies.sort((a, b) => b.numReplies - a.numReplies);
                e.replies.forEach(r => result.push(`--- ${r.numReplies}. ${r.username}: ${r.content}`));
            });
        }
        return result.join('\n');
    }

}



let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log('-------------')
console.log(art.toString('username'));
console.log('--------------')
art.like("Zane");
console.log(art.toString('desc'));