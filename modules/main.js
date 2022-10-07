class Selector {
    constructor() {
        this.upbeat = {
            ModernBaseball: ['Wedding Singer','Play Ball!'],
            TitleFight:  ['Your Pain Is Mine Now','In Between'],
            Turnover: ['Take My Head','Most Of The Time']        
        }
        this.emotional = {
            TitleFight: ['Head In The Ceiling Fan', 'Safe In Your Skin'],
            ModernBaseball: ['Timmy Bowers','Just Another Face'],
            Turnover: ['Humming','Intrapersonal']
        }
        this.melancholic = {
            ModernBaseball: ['Pothole','Two Good Things'],
            TitleFight: ['Murder Your Memory', 'Symmetry'],
            Turnover: ['Dizzy On The Comedown','Diazepam']
        }
        this.hopeful = {
            ModernBaseball: ['Coals','Coding These To Lukens'],
            TitleFight: ['Mrahc', 'Numb But I Still Feel It'],
            Turnover: ['Intrapersonal', 'Super Natural']
        }
        this.content = {
            ModernBaseball: ['Charlie Black','The Weekend'],
            TitleFight: ['Where Am I?','Rose Of Sharon'],
            Turnover: ['Sunshine Type','Super Natural']
        }
        this.sad = {
            ModernBaseball: ['Re-Do','The Waterboy Returns'],
            TitleFight: ['Liar\'s Love', 'Hypernight'],
            Turnover: ['Cutting My Fingers Off','I Would Hate You If I Could']
        }
        this.anxious = {
            ModernBaseball: ['Rock Bottom','Fine, Great'],
            TitleFight: ['Chlorine','Dizzy'],
            Turnover: ['New Scream','Hello Euphoria']
        }
        this.angsty = {
            ModernBaseball: ['Mass', 'Going To Bed Now'],
            TitleFight: ['New Vision', 'Blush'],
            Turnover: ['I Would Hate You If I Could','Cutting My Fingers Off']
        }
        this.mood = [this.upbeat,this.emotional,this.melancholic,this.hopeful,this.content,this.sad,this.anxious,this.angsty];
        this.lyrics = {
            'Mass': `But I'd hate that job as much as you do, if I was stuck between Barton and Binghamton too`,
            'Going To Bed Now': `I'll admit I'm in the same boat caught between my adolescent safety net, and where the world wants me to be`,
            'I Would Hate You If I Could': `I don't want to waste away another cell on a memory, when you're just another meaningless lover`,

        }
    }
    getSong(inp) {
        let num = Math.floor(Math.random() * 3);
        let selection = ''
        switch (inp) {
            case 'upbeat':
                selection = this.upbeat;
                break;
            case 'emotional':
                selection = this.emotional;
                break;
            case 'melancholic':
                selection = this.melancholic;
                break;
            case 'hopeful':
                selection = this.content;
                break;
            case 'sad':
                selection = this.sad;
                break;
            case 'anxious':
                selection = this.anxious;
                break;
            case 'angsty':
                selection = this.angsty;
                break;
            default:
                break;
        }
        let selection2 = ''
        switch (num) {
            case 0:
                selection2 = selection.ModernBaseball;
                break;
            case 1:
                selection2 = selection.TitleFight;
            case 2:
                selection2 = selection.Turnover;
            default:
                break;
        }
        let num2 = Math.floor(Math.random() * selection2.length) 
        const song = selection2[num2];
        let result = '';
        switch (song) {
            case 'I Would Hate You If I Could':
                console.log(this.lyrics["I Would Hate You If I Could"])//NEED TO FINISH SWITCH STATEMENT
                break;
        }
    }   
}


const songs = new Selector();
let i = 0;
while  (i < 11) {
    i++
}
console.log(songs.getSong('angsty'));
