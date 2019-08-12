export class Heart {
    constructor(public isFull: boolean,
                public emptyHeart: string = '/assets/empty_heart.png',
                public fullHeart: string = '/assets/full_heart.png') {

    }

    getHeart(): string {
        if (this.isFull) {
            return this.fullHeart
        } else {
            return this.emptyHeart
        }
      }
}