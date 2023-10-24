class Tamilmovie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    title(){
        console.log(`the title of the movie is"${this.title}"`)
    }
    studio(){
        console.log(`this studio the made movu  "${this.title}" is - "${this.studio}"`)
    }
    rating(){
        console.log(`this movie ratiing  "${this.title}" is -"${this.rating}"`);
    }
}
let movieA=new Tamilmovie("leo","seven scren studio","PG");
movieA.title();
movieA.studio();
movieA.rating();
//out put
//the movie title leo
//the studio the made of movie seven screen studio
//the class pro property ratin "PG" as default no rating provide


class Malayalam{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    title(){
        console.log(`the title of the movie is"${this.title}"`)
    }
    studio(){
        console.log(`this studio the made movu  "${this.title}" is - "${this.studio}"`)
    }
    rating(){
        console.log(`this movie ratiing  "${this.title}" is -"${this.rating}"`);
    }
}
let movieB=new Malayalam("KING kotha","Way fare films and zee studio");
movieB.title();
movieB.studio();
movieB.rating();



class Malayalam{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    title(){
        console.log(`the title of the movie is"${this.title}"`)
    }
    studio(){
        console.log(`this studio the made movu  "${this.title}" is - "${this.studio}"`)
    }
    rating(){
        console.log(`this movie ratiing  "${this.title}" is -"${this.rating}"`);
    }
}
class movieNew extends Malayalam{
    getPG(){
    console.log(`only PG rating movies is "${this.title}"rating is"${this.rating}" `)
}
}
let movieC=new Malayalam("bangalore days","anwar rasheed entertainment","PG");
movieC.title();
movieC.studio();
movieC.rating();
movieC.getPG();


class Hollywoodmovie{
        constructor(title,studio,rating="PG"){
            this.title=title;
            this.studio=studio;
            this.rating=rating;

        }
        }
            let movieD=new Hollywoodmovie(`"casino Royal","eon production","PG`)

        console.log(movieD)