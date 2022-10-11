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
            'Your Pain Is Mine Now': `I know you're scared, but don't cry your eyes out, gatling gun, under your spell now`,
            'In Between': `Constantly in-between, home and where I'll be, light separates the space, I feel the cold against my face`,
            'Head In The Ceiling Fan': `Head in the ceiling, fan goes rolling and missing like bullets, slamming into deer skin`,
            'Safe In Your Skin': `When you're feeling safe in your skin, maybe we'll meet again, when you're feeling down in Kingston, maybe we'll meet again`,
            'Murder Your Memory': `Murder all your memory, let it suffocate, reduce`,
            'Symmetry': `You're a match that can't be lit, spark a flame, burn infinite`,
            'Mrahc': `Whisper, floating kisses from afar, hung your portrait on my wall, out a spiderweb I crawl`,
            'Numb But I Still Feel It': `Everything's so uncertain, can't find the right direction, you look in the mirror and tell me you see clear`,
            'Where Am I?': `This strange routine sometimes weighs down on me, but I wouldn't trade it, not for anything`,
            'Rose Of Sharon': `Stood in one place, restrained, roses like me need rain`,
            'Liar\'s Love': `Don't count on me, I'm not what you need, temporary but can't be erased, pushed away to a darker place`,
            'Hypernight': `Spent my life, trying to make everything right, Hypernight, widened sight to make me realize`,
            'Chlorine': `Poison in your mood, chlorine eyes from you, decorated blue, opening a wound`,
            'Dizzy': `Fumble on a road, blackened backyard, weapon from a trunk, static Recall`
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
                selection = this.hopeful;
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
            case 'content':
                selection = this.content;
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
            //Iterates through lyrics object if song == to the currently indexed key then save value to result
            for (const lyric in this.lyrics) {
                if (lyric === song){
                    result  = this.lyrics[lyric];
                }
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