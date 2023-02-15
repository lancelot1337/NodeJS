class Book {
   
    constructor(private title:string, private price?:number) {
    }

    public getTitle(): string {
        return this.title;
    }

    getPrice(): number {
        if(this.price) {
            return this.price;
        }
        return 0;
    }
    setPrice(p:number): void {
        this.price = p;
    }
}

let b:Book = new Book("Mastering TS", 1200.00);
console.log(b.getTitle());
