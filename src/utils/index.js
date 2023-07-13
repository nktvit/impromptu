export default class Utils {
    static generateSentence = () => {
        const nouns = [
            "cat",
            "dog",
            "house",
            "car",
            "tree",
            "book",
            "city",
            "mountain",
            "river",
            "flower"
        ];
        const verbs = [
            "runs",
            "jumps",
            "flies",
            "swims",
            "sings",
            "reads",
            "paints",
            "builds",
            "explore",
            "discovers"
        ];
        const adjectives = [
            "beautiful",
            "majestic",
            "brilliant",
            "peaceful",
            "vibrant",
            "delightful",
            "serene",
            "adventurous",
            "magnificent",
            "captivating"
        ];
        const adverbs = [
            "gracefully",
            "joyfully",
            "eagerly",
            "swiftly",
            "patiently",
            "intently",
            "boldly",
            "gently",
            "curiously",
            "wisely"
        ];
        const prepositions = [
            "in",
            "on",
            "at",
            "above",
            "below",
            "beside",
            "inside",
            "outside",
            "through",
            "along"
        ];

        const getRandomIndex = (array) => Math.floor(Math.random() * array.length);

        const noun1 = nouns[getRandomIndex(nouns)];
        const verb1 = verbs[getRandomIndex(verbs)];
        const adjective1 = adjectives[getRandomIndex(adjectives)];
        const adverb1 = adverbs[getRandomIndex(adverbs)];
        const noun2 = nouns[getRandomIndex(nouns)];
        const adverb2 = adverbs[getRandomIndex(adverbs)];
        const verb2 = verbs[getRandomIndex(verbs)];
        const preposition = prepositions[getRandomIndex(prepositions)];
        const adjective2 = adjectives[getRandomIndex(adjectives)];
        const noun3 = nouns[getRandomIndex(nouns)];
        const adjective3 = adjectives[getRandomIndex(adjectives)];

        return `The ${adjective1} ${noun1} ${adverb1} ${verb1} because some ${noun2} ${adverb2} ${verb2} ${preposition} a ${adjective2} ${noun3}, which became a ${adjective3} ${noun3}.`;
    };
}
