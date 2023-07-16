export default class Utils {
    static generateSentence = () => {
        const descriptions = {
            characters: [
                'a mysterious individual with dark, piercing eyes',
                'a jovial character teeming with unparalleled vivaciousness',
                'a somber character with a haunted past',
                'an enigmatic figure shrouded in silence',
                'a vivacious character brimming with energy',
                'a serene figure radiating calm and peace',
                'a stern warrior with a gaze as sharp as their blade',
                'a whimsical creature with unpredictable behaviors',
                'an eccentric wizard with a gleaming staff',
                'a timid elf hiding behind an ancient oak',
                'a majestic queen with regal bearing',
                'a rugged adventurer with a roguish charm',
                'an aged scholar deep in thought',
                'a lively bard serenading the crowd',
                'an intimidating ogre with thunderous steps',
                'a delicate princess with a heart of gold',
                'an agile thief disappearing into the shadows',
                'a resolute knight charging into battle',
                'a wizened sage filled with ancient knowledge',
                'a vibrant nymph dancing in the moonlight'
            ],

            landscapes: [
                'a sprawling, verdant valley bathed in the golden sunset',
                'a desolate, eerie moors under the ghostly moonlight',
                'an ethereal beach with turquoise waters shimmering under the fiery sun',
                'a quaint village nestled between towering mountains',
                'an expansive desert with dunes as far as the eye can see',
                'a bustling cityscape with soaring skyscrapers',
                'a secluded forest with canopies blocking the sun',
                'a serene lakeside with willows dipping their branches into the water',
                'a snow-laden tundra under the stark night sky',
                'a trail winding through an autumn-colored forest',
                'a moonlit graveyard enveloped in fog',
                'a peaceful farmland spread out under the azure sky',
                'a mystical waterfall pouring down into a crystal-clear lake',
                'an enchanted meadow lit by the stars',
                'a grand castle perched upon a hill overlooking the kingdom',
                'an ancient ruin weathered by time',
                'a sleepy port town waking up to the morning fog',
                'a bustling marketplace alive with color and noise',
                'a towering peak capped with snow',
                'a dense jungle full of life\'s whispers',
            ],

            styles: [
                'impressionistic, capturing ephemeral moments of light and color',
                'surrealistic, with dreamlike scenes and nonsensical juxtapositions',
                'realistic, with meticulous attention to detail',
                'romantic, depicting dramatic and emotional scenes',
                'cubist, with objects broken up and reassembled in abstract form',
                'expressionist, reflecting a subjective perspective',
                'minimalist, using sparse elements to create depth',
                'pop art, employing bold colors and graphics',
                'fauvist, with vivid colors and wild brush work',
                'classical, well-balanced and proportioned',
                'mannerist, with elongated figures and subjective space',
                'baroque, with exaggerated motion and clear detail',
                'rococo, with intricate ornaments and playful themes',
                'neoclassical, inspired by the culture of ancient Greece and Rome',
                'art nouveau, with complex patterns and curvy lines',
                'Art Deco, with geometric shapes and ornamental style',
                'Abstract expressionist, with spontaneous and subconscious creation',
                'Dadaist, rejecting logic and reason and embracing nonsense',
                'Futurist, emphasizing speed and technological advancement',
                'Constructivist, with a focus on construction and materiality'
            ]
        };

        function getRandElem(arr) {
            const randIndex = Math.floor(Math.random() * arr.length);
            return arr[randIndex];
        }

        let sentence;

        if (Math.random() > 0.5) {
            const charDesc = getRandElem(descriptions.characters);
            const styleDesc = getRandElem(descriptions.styles);
            sentence = `The character is ${charDesc} in a ${styleDesc} style.`;
        } else {
            const landDesc = getRandElem(descriptions.landscapes);
            const styleDesc = getRandElem(descriptions.styles);
            sentence = `The landscape shows ${landDesc} in a ${styleDesc} style.`;
        }
        return sentence;
    };
}
