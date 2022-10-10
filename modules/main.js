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
            //Finish Map
            'Mass': `But I'd hate that job as much as you do, if I was stuck between Barton and Binghamton too`,
            'Going To Bed Now': `I'll admit I'm in the same boat caught between my adolescent safety net, and where the world wants me to be`,
            'I Would Hate You If I Could': `I don't want to waste away another cell on a memory, when you're just another meaningless lover`,
            'Cutting My Fingers Off': `And even with that summer without you, I'd rather cut my fingers off`,
            'New Scram': `All I know is something's wrong, because every day, I'm craving that new scream, lusting for more than just old dreams`,
            'Hello Euphoria': `I'm getting old in the face, Everyday there's another new line`,
            'Dizzy On The Comedown': `Up and down like a red rubber ball, you're always back and forth like the clock on the wall, I want to know about you`,
            'Humming': `Chasing you, I'm falling through the rabbit hole, deep down into an old slope`,
            'Diazepam': `Your father doesn't like me, cause I'm not into sports. And your mother won't approve because I'm not of the cross`,
            'Take My Head': `Take my head cause it's what I want, I want to fall asleep with the TV on, and let the house burn down until it's gone with me inside`,
            'Intrapersonal': `There's a fever burning up in me, I'm tangled up inside a sinking feeling, slipping out of touch with the controls. It's all intrapersonal`,
            'Sunshine Type': `You can try all you want, You still won't make things change`,
            'Supernatural': `I could try but I can't explain how I do, I just know it... Something supernatural`,
            'Most Of The Time': `You can find me, drifting slowly, sinking beneath the sea`,
            'New Vision': `Sewn your own faint dream, followed unconditionally, hard to undo, new vision of you`,
            'Blush': `Tell me what's wrong, with forcing myself to write it down. Never made a sound, I never second guess, I'm right the first time`,
            'Wedding Singer': `Said goodbye from the front porch, I always wonder if you're smiling at us or if you're looking away, I'd ask, but either way, I feel sorry for you`,
            'Play Ball!': `This compilation of sayings and tunes means everything to me now`,
            'Timmy Bowers': `Wait a minute 'cause, I've been living more like a piece of shit without you`,
            'Just Another Face': `I'm not just another face, I'm not just another name, Even if you can't see it now, We're proud of what's to come, and you`,
            'Pothole': `And the mops of greasy hair, will romanticize my despair, but they won't know, that I didn't care`,
            'Two Good Things': `But I'm still outside, not doing anything wrong, just walking in circles, replaying high school songs in my head, because it's better than lying awake`,
            'Charlie Black': `Wait a minute, 'cause I've been living, more like a fucking king without you`,
            'The Weekend': `You got a smile that could light this town and we might need it, cause it gets dark around here, real dark around here`,
            'Coals': `Eight hours on the top of a bus just to find out in the end, I will never stop falling in love`,
            'Coding These To Lukens': `Spit fire, spit blood, spit fast, I'm heated, I'm sure this won't linger, longer than it has to`,
            'Re-Do': `I want a complete re-do, maybe change my name, report the losses grab the claim "It's a shame, it's such a shame" we're pissing away our time`,
            'The Waterboy Returns': `Hey man, whatcha thinking about? Not to be blunt, but haven't heard from you in days, are you okay? You can talk to me, do you have anything to say?`,
            'Rock Bottom': `After reading that text from your friends, I start losing all my confidence, so I'll stay tired, I know soon I'll be bailing`,
            'Fine, Great':`I hate worrying about the future, 'cause all my current problems are based around the past`,
            'Your Pain Is Mine Now': ``,
            'In Between': ``,
            'Head In The Ceiling Fan': ``,
            'Safe In Your Skin': ``,
            'Murder Your Memory': ``,
            'Symmetry': ``,
            'Mrahc': ``,
            'Numb But I Still Feel It': ``,
            'Where Am I?': ``,
            'Rose Of Sharon': ``,
            'Liar\'s Love': ``,
            'Hypernight': ``,
            'Chlorine': ``,
            'Dizzy': ``
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
                result = this.lyrics["I Would Hate You If I Could"];//NEED TO FINISH SWITCH STATEMENT
                break;
            case 'Cutting My Fingers Off':
                result = this.lyrics["Cutting My Fingers Off"];
                break;
            case 'Going To Bed Now':
                result = this.lyrics["Going To Bed Now"];
                break;
            case 'Mass':
                result = this.lyrics["Mass"];
                break;
            case 'New Vision':
                result = this.lyrics["New Vision"];
                break;
            case 'Blush':
                result = this.lyrics["Blush"];
                break;
            case 'Most Of The Time':
                result = this.lyrics["Most Of The Time"];
                break;
            case 'Wedding Sinegr':
                result = this.lyrics["Wedding Sinegr"];
                break;
            case 'Play Ball!':
                result = this.lyrics["Play Ball!"];
                break;
            case 'Take My Head':
                result = this.lyrics["Take My Head"];
                break;
            case 'Timmy Bowers':
                result = this.lyrics["Timmy Bowers"];
                break;
            case 'Just Another Face':
                result = this.lyrics["Just Another Face"];
                break;
            }
        let artist = ''
        for (const [key, value]of Object.entries(selection)) {
            if(value === selection2) {
                artist = key
                break;
            }
        }
        return `You want ${inp} music. Your song is ${song} by ${artist}. Some lyrics: ${result}`;
    }   
}

const songs = new Selector();
module.exports = songs;