
const commonWordsList = [
    "the", "and", "you", "i", "he", "she", "it", "we", "they", "is",
    "are", "have", "do", "can", "was", "were", "not", "that", "this", "here",
    "there", "now", "but", "or", "for", "to", "with", "from", "in", "on",
    "at", "by", "about", "into", "over", "under", "between", "among", "through",
    "before", "after", "during", "above", "below", "next", "last", "first",
    "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "good", "bad", "happy", "sad", "big", "small", "new", "old",
    "hot", "cold", "high", "low", "day", "night", "sun", "moon", "water",
    "fire", "air", "earth", "food", "love", "hate", "friend", "enemy", "work",
    "play", "study", "learn", "eat", "drink", "sleep", "run", "walk", "talk",
    "listen", "see", "hear", "touch", "feel", "think", "know", "believe",
    "here", "now", "but", "or", "with", "from", "in", "on", "at", "by",
    "about", "into", "over", "under", "before", "after", "above", "below",
    "next", "last", "first", "good", "bad", "happy", "sad", "big", "small",
    "new", "old", "hot", "cold", "high", "low", "day", "night", "sun", "moon",
    "water", "fire", "air", "earth", "food", "love", "hate", "friend", "enemy",
    "work", "play", "study", "learn", "eat", "drink", "sleep", "run", "walk",
    "talk", "listen", "see", "hear", "touch", "feel", "think", "know", "believe"
  ];  
const rarerWordsList = [
"aberration", "obfuscate", "perspicacious", "quixotic", "recalcitrant",
"sycophant", "verisimilitude", "zeitgeist", "abstruse", "capricious",
"dearth", "ebullient", "facetious", "garrulous", "harangue", "ineffable",
"juxtapose", "kowtow", "languid", "mellifluous", "nebulous", "ostracize",
"pernicious", "quotidian", "reticent", "sagacious", "tenuous", "ubiquitous",
"vacillate", "wistful", "xenophobe", "yuxtaposition", "zephyr",
"acquiesce", "bombastic", "cacophony", "disparate", "ephemeral", "fecund",
"garrulity", "harbinger", "ineffable", "juxtaposition", "kleptomaniac",
"labyrinthine", "mellifluous", "nebulous", "obsequious", "pernicious",
"quixotry", "rhapsody", "salient", "trepidation", "ubiquity", "verbose",
"whimsical", "xenophile", "yearn", "zenith",
"loquacious", "serendipity", "panacea", "ephemeral", "effervescent", "quintessential", "aberrant", "luminous", "ambivalent", "cacophony",
"serendipitous", "magnanimous", "melancholy", "vicarious", "perfidious", "ineffable", "ephemeral", "resplendent", "ubiquity", "insidious"
];
const commonWords = commonWordsList.map(word => word + " ");
const rarerWords = rarerWordsList.map(word => word + " ");
