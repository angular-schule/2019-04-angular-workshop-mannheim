
export class Test {
    constructor(private zahl: number) {

        var x = () => this.zahl;
        console.log('Die Antwort auf die Frage lautet', this.zahl)
    }
}
