import { destinations } from "../data/destinations";

const keywordMap = {
  sunny: [
    "beach",
    "sea",
    "ocean",
    "sun",
    "sunny",
    "coast",
    "coastal",
    "island",
    "relax",
    "relaxing",
    "chill",
    "romantic",
  ],
  wild: [
    "mountain",
    "mountains",
    "snow",
    "hiking",
    "trek",
    "trekking",
    "adventure",
    "adventurous",
    "alpine",
    "nature",
  ],
  culture: [
    "culture",
    "cultural",
    "temple",
    "temples",
    "history",
    "historical",
    "food",
    "japan",
    "traditional",
    "art",
  ],
  green: [
    "green",
    "forest",
    "nature",
    "peaceful",
    "peace",
    "quiet",
    "calm",
    "retreat",
    "slow",
    "wellness",
    "rice",
    "jungle",
  ],
};

function normalize(text) {
  return text.toLowerCase().replace(/[₹,]/g, " ");
}

function extractBudget(text) {
  const match = text.match(
    /(?:₹|rs\.?|inr)?\s*(\d+(?:\.\d+)?)\s*(k|thousand|lakh)?/i
  );

  if (!match) return null;

  let amount = Number(match[1]);

  if (match[2]?.toLowerCase() === "k" || match[2]?.toLowerCase() === "thousand") {
    amount *= 1000;
  }

  if (match[2]?.toLowerCase() === "lakh") {
    amount *= 100000;
  }

  return amount;
}

function extractDays(text) {
  const match = text.match(/(\d+)\s*(?:day|days|night|nights)/i);
  return match ? Number(match[1]) : null;
}

function getCategoryScores(text) {
  const scores = {
    sunny: 0,
    wild: 0,
    culture: 0,
    green: 0,
  };

  Object.entries(keywordMap).forEach(([category, keywords]) => {
    keywords.forEach((keyword) => {
      if (text.includes(keyword)) {
        scores[category] += keyword.length > 5 ? 2 : 1;
      }
    });
  });

  return scores;
}

function getBestCategory(scores) {
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  return sorted[0][1] > 0 ? sorted[0][0] : null;
}

function scoreDestination(destination, category, budget, days) {
  let score = 0;

  if (category && destination.category === category) {
    score += 10;
  }

  if (budget) {
    const price = Number(destination.price.replace(/[₹,]/g, ""));

    if (price <= budget) {
      score += 6;
    } else {
      score -= Math.min((price - budget) / 10000, 6);
    }
  }

  if (days) {
    const destinationDays = Number(destination.duration.match(/\d+/)?.[0]);

    if (destinationDays === days) {
      score += 5;
    } else {
      score -= Math.min(Math.abs(destinationDays - days), 4);
    }
  }

  return score;
}

export function findBestDestination(query) {
  const text = normalize(query);
  const budget = extractBudget(text);
  const days = extractDays(text);
  const categoryScores = getCategoryScores(text);
  const category = getBestCategory(categoryScores);

  const ranked = destinations
    .map((destination) => ({
      destination,
      score: scoreDestination(destination, category, budget, days),
    }))
    .sort((a, b) => b.score - a.score);

  const best = ranked[0]?.destination;

  if (!best) {
    return {
      destination: destinations[0],
      category: null,
      budget,
      days,
    };
  }

  return {
    destination: best,
    category,
    budget,
    days,
  };
}