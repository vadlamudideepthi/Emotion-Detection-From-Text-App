function detectEmotion() {

```
let text = document.getElementById("textInput").value.toLowerCase();

let result = document.getElementById("resultText");
let emoji = document.getElementById("emoji");

if (text.trim() === "") {

    result.innerHTML = "⚠️ Please enter some text.";
    emoji.innerHTML = "😐";

    return;
}

// Emotion keywords
let emotions = {

    happy: [
        "happy",
        "joy",
        "joyful",
        "excited",
        "great",
        "good",
        "wonderful",
        "amazing",
        "love",
        "smile",
        "laugh",
        "fun",
        "pleased",
        "fantastic",
        "awesome"
    ],

    sad: [
        "sad",
        "unhappy",
        "cry",
        "crying",
        "lonely",
        "depressed",
        "hurt",
        "pain",
        "upset",
        "miss",
        "miss you",
        "disappointed",
        "tears"
    ],

    angry: [
        "angry",
        "anger",
        "hate",
        "furious",
        "annoyed",
        "irritated",
        "mad",
        "rage",
        "stupid",
        "terrible",
        "worst",
        "frustrated"
    ],

    fear: [
        "afraid",
        "fear",
        "scared",
        "frightened",
        "worried",
        "worry",
        "danger",
        "nervous",
        "terrified",
        "panic"
    ],

    surprise: [
        "wow",
        "surprise",
        "surprised",
        "shocked",
        "amazing",
        "unexpected",
        "unbelievable",
        "really",
        "suddenly"
    ],

    love: [
        "love",
        "lovely",
        "romantic",
        "care",
        "caring",
        "dear",
        "heart",
        "beautiful",
        "sweet"
    ]
};

// Count emotion scores
let scores = {
    happy: 0,
    sad: 0,
    angry: 0,
    fear: 0,
    surprise: 0,
    love: 0
};

// Check words
for (let emotion in emotions) {

    emotions[emotion].forEach(function(word) {

        if (text.includes(word)) {
            scores[emotion]++;
        }

    });
}

// Find highest score
let detectedEmotion = "neutral";
let highestScore = 0;

for (let emotion in scores) {

    if (scores[emotion] > highestScore) {

        highestScore = scores[emotion];
        detectedEmotion = emotion;
    }
}

// Display result
if (detectedEmotion === "happy") {

    emoji.innerHTML = "😊";
    result.innerHTML = "Emotion: HAPPY";

} else if (detectedEmotion === "sad") {

    emoji.innerHTML = "😢";
    result.innerHTML = "Emotion: SAD";

} else if (detectedEmotion === "angry") {

    emoji.innerHTML = "😡";
    result.innerHTML = "Emotion: ANGRY";

} else if (detectedEmotion === "fear") {

    emoji.innerHTML = "😨";
    result.innerHTML = "Emotion: FEAR";

} else if (detectedEmotion === "surprise") {

    emoji.innerHTML = "😲";
    result.innerHTML = "Emotion: SURPRISE";

} else if (detectedEmotion === "love") {

    emoji.innerHTML = "❤️";
    result.innerHTML = "Emotion: LOVE";

} else {

    emoji.innerHTML = "😐";
    result.innerHTML = "Emotion: NEUTRAL";
}
```

}

// Clear text
function clearText() {

```
document.getElementById("textInput").value = "";

document.getElementById("emoji").innerHTML = "😐";

document.getElementById("resultText").innerHTML =
    "Enter some text to detect the emotion.";
```

}

// Set example text
function setExample(text) {

```
document.getElementById("textInput").value = text;

detectEmotion();
```

}
