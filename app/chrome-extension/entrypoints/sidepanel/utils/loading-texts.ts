/**
 * Random Loading texts
 * Used by TimelineStatusStep component for fun waiting hints
 */

const loadingTexts = [
  // Classic
  "Taking it slow and steady",
  "Rushing but still rolling",
  "I know you're in a hurry, but please wait a moment",
  "Dog-paddling in the ocean of knowledge",
  "Letting the bullet fly a bit longer",
  "Hand-crafting your answer",
  "Summoning the mountain spirits",
  "Don't rush — already writing (new folder)",
  "Sweating through deep thought",
  "CPU is about to overheat",
  // Cozy vibes
  "Slow-roasting the good stuff, needs time",
  "Flipping the knowledge pancake",
  "Cheers to yourself — almost ready",
  "Putting inspiration in the oven",
  "Letting the answer steep a little longer",
  "Emotional support at max",
  "Knitting you a sweater of words",
  // Creative
  "Neurons are dancing",
  "The night owl is thinking",
  "Coloring in the answer",
  "Frantically flipping through the knowledge base",
  "The brain circus is in session",
  "Molding 0s and 1s together",
  "Charging up the big move",
  "Magnifier is foggy — wiping it clean",
  "Trying to make sense of this wild request",
  // Fantasy
  "Casting a spell — do not disturb",
  "Waking up the silicon friend",
  "Connecting to the wisdom of cyberspace",
  "Fellow traveler, please wait — divining now",
  "Crossing the knowledge black hole",
  "Reverse-engineering human intent",
  "Crystal ball is blurry — tapping it twice",
  // Workplace
  "Code running faster than a reporter",
  "Host is online — please hold",
  "Riding fast to get to you",
  "Teleporting knowledge at lightspeed",
  "Placing the final puzzle piece",
  "Answer is about to wrap",
  "Launch countdown",
  "Target locked",
];

/**
 * Get a random loading text
 */
export function getRandomLoadingText(): string {
  return loadingTexts[Math.floor(Math.random() * loadingTexts.length)];
}
