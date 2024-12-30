export interface TarotCard {
  name: string;
  image: string;
  meaningUpright: string;
  meaningReversed: string;
  description: string;
}

export const tarotDeck: TarotCard[] = [
  {
    name: "The Fool",
    image: "./cards/the_fool.jpg",
    meaningUpright: "New beginnings, innocence, spontaneity",
    meaningReversed: "Recklessness, risk-taking, inconsideration",
    description: "The Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner's luck, improvisation and believing in the universe."
  },
  {
    name: "The Magician",
    image: "./cards/the_magician.jpg",
    meaningUpright: "Manifestation, resourcefulness, power, inspiration",
    meaningReversed: "Manipulation, poor planning, untapped talents",
    description: "The Magician represents your ability to utilize all of your skills, tools, and resources to manifest your desires and make things happen."
  },
  {
    name: "The High Priestess",
    image: "./cards/the_high_priestess.jpg",
    meaningUpright: "Intuition, mystery, spirituality, higher power",
    meaningReversed: "Secrets, disconnection from intuition, withdrawal",
    description: "The High Priestess represents intuition, sacred knowledge, divine feminine, and the subconscious mind."
  },
  {
    name: "The Empress",
    image: "./cards/the_empress.jpg",
    meaningUpright: "Nurturing, fertility, life in bloom",
    meaningReversed: "Dependence on others, smothering",
    description: "The Empress represents nurturing, fertility, life in bloom, and femininity."
  },
  {
    name: "The Emperor",
    image: "./cards/the_emperor.jpg",
    meaningUpright: "Authority, structure, control",
    meaningReversed: "Rigidity, lack of discipline, too much control",
    description: "The Emperor represents authority, structure, control, and a father figure."
  },
  {
    name: "The Hierophant",
    image: "./cards/the_hierophant.jpg",
    meaningUpright: "Tradition, conformity, morality, ethics",
    meaningReversed: "Rebellion, subversiveness",
    description: "The Hierophant represents tradition, conformity, morality, ethics, and doing what is expected."
  },
  {
    name: "The Lovers",
    image: "./cards/the_lovers.jpg",
    meaningUpright: "Love, harmony, choices",
    meaningReversed: "Indecision, imbalance, one-sided love",
    description: "The Lovers represents love, harmony, choices, and crossroads."
  },
  {
    name: "The Chariot",
    image: "./cards/the_chariot.jpg",
    meaningUpright: "Control, willpower, victory",
    meaningReversed: "Lack of control, lack of direction, aggression",
    description: "The Chariot represents control, willpower, success, assertion, and determination."
  },
  {
    name: "Strength",
    image: "./cards/strength.jpg",
    meaningUpright: "Courage, persuasion, influence",
    meaningReversed: "Weakness, self-doubt, low energy",
    description: "Strength represents courage, persuasion, influence, compassion, and understanding of your raw power."
  },
  {
    name: "The Hermit",
    image: "./cards/the_hermit.jpg",
    meaningUpright: "Soul-searching, introspection, being alone",
    meaningReversed: "Loneliness, isolation",
    description: "The Hermit represents soul-searching, introspection, being alone, and inner guidance."
  },
  {
    name: "Wheel of Fortune",
    image: "./cards/wheel_of_fortune.jpg",
    meaningUpright: "Change, cycles, destiny",
    meaningReversed: "Bad luck, resistance to change",
    description: "The Wheel of Fortune represents change, cycles, destiny, ups and downs, and unexpected developments."
  },
  {
    name: "Justice",
    image: "./cards/justice.jpg",
    meaningUpright: "Fairness, truth, law",
    meaningReversed: "Unfairness, lack of accountability, dishonesty",
    description: "Justice represents fairness, truth, law, and the search for truth and justice."
  },
  {
    name: "The Hanged Man",
    image: "./cards/the_hanged_man.jpg",
    meaningUpright: "Pause, surrender, letting go",
    meaningReversed: "Resistance, delay, indecision",
    description: "The Hanged Man represents pause, surrender, letting go, and new perspectives."
  },
  {
    name: "Death",
    image: "./cards/death.jpg",
    meaningUpright: "Endings, transitions, change",
    meaningReversed: "Resistance to change, stagnation",
    description: "Death represents endings, transitions, change, and transformation."
  },
  {
    name: "Temperance",
    image: "./cards/temperance.jpg",
    meaningUpright: "Balance, moderation, purpose",
    meaningReversed: "Imbalance, excess, lack of long-term vision",
    description: "Temperance represents balance, moderation, purpose, meaning, and higher purpose."
  },
  {
    name: "The Devil",
    image: "./cards/the_devil.jpg",
    meaningUpright: "Attachment, materialism, addiction",
    meaningReversed: "Freedom, release, detachment",
    description: "The Devil represents attachment, materialism, addiction, and being trapped."
  },
  {
    name: "The Tower",
    image: "./cards/the_tower.jpg",
    meaningUpright: "Sudden change, upheaval, chaos",
    meaningReversed: "Avoidance of change, fear of change",
    description: "The Tower represents sudden change, upheaval, chaos, revelation, and unexpected events."
  },
  {
    name: "The Star",
    image: "./cards/the_star.jpg",
    meaningUpright: "Hope, inspiration, positivity",
    meaningReversed: "Lack of faith, despair, pessimism",
    description: "The Star represents hope, inspiration, positivity, and renewal."
  },
  {
    name: "The Moon",
    image: "./cards/the_moon.jpg",
    meaningUpright: "Illusion, intuition, dreams",
    meaningReversed: "Confusion, fear, anxiety",
    description: "The Moon represents illusion, intuition, dreams, the subconscious, and the unknown."
  },
  {
    name: "The Sun",
    image: "./cards/the_sun.jpg",
    meaningUpright: "Success, positivity, warmth",
    meaningReversed: "Temporariness, delays in success",
    description: "The Sun represents success, positivity, warmth, and greatness."
  },
  {
    name: "Judgement",
    image: "./cards/judgement.jpg",
    meaningUpright: "Reflection, reckoning, awakening",
    meaningReversed: "Lack of self-awareness, regret",
    description: "Judgement represents reflection, reckoning, awakening, and self-realization."
  },
  {
    name: "The World",
    image: "./cards/the_world.jpg",
    meaningUpright: "Completion, accomplishment, travel",
    meaningReversed: "Lack of closure, delays in completion",
    description: "The World represents completion, accomplishment, travel, achievement, and integration."
  },
  {
    name: "Ace of Wands",
    image: "./cards/ace_of_wands.jpg",
    meaningUpright: "Creation, willpower, inspiration",
    meaningReversed: "Lack of inspiration, creativity blocked",
    description: "The Ace of Wands represents creation, willpower, inspiration, and the spark of a new idea."
  },
  {
    name: "Two of Wands",
    image: "./cards/two_of_wands.jpg",
    meaningUpright: "Planning, making decisions, leaving home",
    meaningReversed: "Lack of foresight, impulsiveness",
    description: "The Two of Wands represents planning, making decisions, leaving home, and future planning."
  },
  {
    name: "Three of Wands",
    image: "./cards/three_of_wands.jpg",
    meaningUpright: "Preparation, foresight, enterprise",
    meaningReversed: "Lack of foresight, limited perspective",
    description: "The Three of Wands represents preparation, foresight, enterprise, and expansion."
  },
  {
    name: "Four of Wands",
    image: "./cards/four_of_wands.jpg",
    meaningUpright: "Celebration, joy, harmony",
    meaningReversed: "Lack of harmony, frustration",
    description: "The Four of Wands represents celebration, joy, harmony, and community."
  },
  {
    name: "Five of Wands",
    image: "./cards/five_of_wands.jpg",
    meaningUpright: "Conflict, disagreements, competition",
    meaningReversed: "Avoidance of conflict, cooperation",
    description: "The Five of Wands represents conflict, disagreements, competition, and strife."
  },
  {
    name: "Six of Wands",
    image: "./cards/six_of_wands.jpg",
    meaningUpright: "Victory, success, public reward",
    meaningReversed: "Lack of recognition, delay in success",
    description: "The Six of Wands represents victory, success, public reward, and accomplishment."
  },
  {
    name: "Seven of Wands",
    image: "./cards/seven_of_wands.jpg",
    meaningUpright: "Challenge, competition, perseverance",
    meaningReversed: "Avoidance of competition, giving up",
    description: "The Seven of Wands represents challenge, competition, perseverance, and holding one's own."
  },
  {
    name: "Eight of Wands",
    image: "./cards/eight_of_wands.jpg",
    meaningUpright: "Rapid change, communication, action",
    meaningReversed: "Delays, frustration, lack of action",
    description: "The Eight of Wands represents rapid change, communication, action, and swift change."
  },
  {
    name: "Nine of Wands",
    image: "./cards/nine_of_wands.jpg",
    meaningUpright: "Resilience, grit, last stand",
    meaningReversed: "Giving up, weakness",
    description: "The Nine of Wands represents resilience, grit, last stand, and perseverance."
  },
  {
    name: "Ten of Wands",
    image: "./cards/ten_of_wands.jpg",
    meaningUpright: "Burden, responsibility, hard work",
    meaningReversed: "Avoidance of responsibility, delegation",
    description: "The Ten of Wands represents burden, responsibility, hard work, and shouldering too much."
  },
  {
    name: "Page of Wands",
    image: "./cards/page_of_wands.jpg",
    meaningUpright: "Enthusiasm, exploration, discovery",
    meaningReversed: "Lack of direction, procrastination",
    description: "The Page of Wands represents enthusiasm, exploration, discovery, and free spirit."
  },
  {
    name: "Knight of Wands",
    image: "./cards/knight_of_wands.jpg",
    meaningUpright: "Action, adventure, impulsiveness",
    meaningReversed: "Haste, scattered energy",
    description: "The Knight of Wands represents action, adventure, impulsiveness, and energy."
  },
  {
    name: "Queen of Wands",
    image: "./cards/queen_of_wands.jpg",
    meaningUpright: "Confidence, independence, social",
    meaningReversed: "Dependence, insecurity",
    description: "The Queen of Wands represents confidence, independence, social, and popularity."
  },
  {
    name: "King of Wands",
    image: "./cards/king_of_wands.jpg",
    meaningUpright: "Vision, leadership, overcoming challenges",
    meaningReversed: "Impulsiveness, haste",
    description: "The King of Wands represents vision, leadership, overcoming challenges, and big picture thinking."
  },
  {
    name: "Ace of Cups",
    image: "./cards/ace_of_cups.jpg",
    meaningUpright: "Love, compassion, creativity",
    meaningReversed: "Emotional loss, blocked creativity",
    description: "The Ace of Cups represents love, compassion, creativity, and overflowing emotions."
  },
  {
    name: "Two of Cups",
    image: "./cards/two_of_cups.jpg",
    meaningUpright: "Connection, harmony, partnership",
    meaningReversed: "Imbalance, disconnection",
    description: "The Two of Cups represents connection, harmony, partnership, and mutual attraction."
  },
  {
    name: "Three of Cups",
    image: "./cards/three_of_cups.jpg",
    meaningUpright: "Friendship, community, happiness",
    meaningReversed: "Loneliness, isolation",
    description: "The Three of Cups represents friendship, community, happiness, and emotional support."
  },
  {
    name: "Four of Cups",
    image: "./cards/four_of_cups.jpg",
    meaningUpright: "Contemplation, apathy, disconnectedness",
    meaningReversed: "Awareness, renewed perspective",
    description: "The Four of Cups represents contemplation, apathy, disconnectedness, and re-evaluating your situation."
  },
  {
    name: "Five of Cups",
    image: "./cards/five_of_cups.jpg",
    meaningUpright: "Loss, regret, disappointment",
    meaningReversed: "Acceptance, moving forward",
    description: "The Five of Cups represents loss, regret, disappointment, and focusing on the negative."
  },
  {
    name: "Six of Cups",
    image: "./cards/six_of_cups.jpg",
    meaningUpright: "Nostalgia, familiarity, home",
    meaningReversed: "Living in the past, stagnation",
    description: "The Six of Cups represents nostalgia, familiarity, home, and childhood memories."
  },
  {
    name: "Seven of Cups",
    image: "./cards/seven_of_cups.jpg",
    meaningUpright: "Illusions, choices, wishful thinking",
    meaningReversed: "Disillusionment, clarity",
    description: "The Seven of Cups represents illusions, choices, wishful thinking, and daydreaming."
  },
  {
    name: "Eight of Cups",
    image: "./cards/eight_of_cups.jpg",
    meaningUpright: "Disappointment, abandonment, withdrawal",
    meaningReversed: "Avoidance, indecision",
    description: "The Eight of Cups represents disappointment, abandonment, withdrawal, and disillusionment."
  },
  {
    name: "Nine of Cups",
    image: "./cards/nine_of_cups.jpg",
    meaningUpright: "Contentment, satisfaction, gratitude",
    meaningReversed: "Dissatisfaction, lack of fulfillment",
    description: "The Nine of Cups represents contentment, satisfaction, gratitude, and emotional fulfillment."
  },
  {
    name: "Ten of Cups",
    image: "./cards/ten_of_cups.jpg",
    meaningUpright: "Harmony, happiness, peace",
    meaningReversed: "Disharmony, disconnection",
    description: "The Ten of Cups represents harmony, happiness, peace, and emotional security."
  },
  {
    name: "Page of Cups",
    image: "./cards/page_of_cups.jpg",
    meaningUpright: "Emotional exploration, curiosity, intuition",
    meaningReversed: "Emotional immaturity, insecurity",
    description: "The Page of Cups represents emotional exploration, curiosity, intuition, and emotional discovery."
  },
  {
    name: "Knight of Cups",
    image: "./cards/knight_of_cups.jpg",
    meaningUpright: "Romance, charm, imagination",
    meaningReversed: "Moodiness, jealousy",
    description: "The Knight of Cups represents romance, charm, imagination, and following your heart."
  },
  {
    name: "Queen of Cups",
    image: "./cards/queen_of_cups.jpg",
    meaningUpright: "Emotional awareness, nurturing, intuition",
    meaningReversed: "Emotional insecurity, martyrdom",
    description: "The Queen of Cups represents emotional awareness, nurturing, intuition, and emotional security."
  },
  {
    name: "King of Cups",
    image: "./cards/king_of_cups.jpg",
    meaningUpright: "Emotional balance, compassion, control",
    meaningReversed: "Emotional detachment, avoidance",
    description: "The King of Cups represents emotional balance, compassion, control, and emotional maturity."
  },
  {
    name: "Ace of Swords",
    image: "./cards/ace_of_swords.jpg",
    meaningUpright: "Breakthrough, clarity, new ideas",
    meaningReversed: "Confusion, lack of clarity",
    description: "The Ace of Swords represents breakthrough, clarity, new ideas, and the truth."
  },
  {
    name: "Two of Swords",
    image: "./cards/two_of_swords.jpg",
    meaningUpright: "Indecision, choices, truce",
    meaningReversed: "Confusion, stalemate",
    description: "The Two of Swords represents indecision, choices, truce, and avoiding the truth."
  },
  {
    name: "Three of Swords",
    image: "./cards/three_of_swords.jpg",
    meaningUpright: "Heartache, suffering, grief",
    meaningReversed: "Healing, forgiveness",
    description: "The Three of Swords represents heartache, suffering, grief, and emotional pain."
  },
  {
    name: "Four of Swords",
    image: "./cards/four_of_swords.jpg",
    meaningUpright: "Rest, contemplation, relaxation",
    meaningReversed: "Restlessness, burnout",
    description: "The Four of Swords represents rest, contemplation, relaxation, and taking a break."
  },
  {
    name: "Five of Swords",
    image: "./cards/five_of_swords.jpg",
    meaningUpright: "Conflict, tension, competition",
    meaningReversed: "Avoidance of conflict, cooperation",
    description: "The Five of Swords represents conflict, tension, competition, and winning at any cost."
  },
  {
    name: "Six of Swords",
    image: "./cards/six_of_swords.jpg",
    meaningUpright: "Transition, change, leaving behind",
    meaningReversed: "Stagnation, resistance to change",
    description: "The Six of Swords represents transition, change, leaving behind, and moving on."
  },
  {
    name: "Seven of Swords",
    image: "./cards/seven_of_swords.jpg",
    meaningUpright: "Betrayal, deception, getting away with something",
    meaningReversed: "Coming clean, honesty",
    description: "The Seven of Swords represents betrayal, deception, getting away with something, and acting alone."
  },
  {
    name: "Eight of Swords",
    image: "./cards/eight_of_swords.jpg",
    meaningUpright: "Feeling trapped, restriction, imprisonment",
    meaningReversed: "Freedom, release",
    description: "The Eight of Swords represents feeling trapped, restriction, imprisonment, and self-imposed limitations."
  },
  {
    name: "Nine of Swords",
    image: "./cards/nine_of_swords.jpg",
    meaningUpright: "Anxiety, worry, fear",
    meaningReversed: "Hope, release of anxiety",
    description: "The Nine of Swords represents anxiety, worry, fear, and nightmares."
  },
  {
    name: "Ten of Swords",
    image: "./cards/ten_of_swords.jpg",
    meaningUpright: "Defeat, crisis, betrayal",
    meaningReversed: "Recovery, resilience",
    description: "The Ten of Swords represents defeat, crisis, betrayal, and feeling overwhelmed."
  },
  {
    name: "Page of Swords",
    image: "./cards/page_of_swords.jpg",
    meaningUpright: "Curiosity, restlessness, communication",
    meaningReversed: "Haste, disregard for others",
    description: "The Page of Swords represents curiosity, restlessness, communication, and new ideas."
  },
  {
    name: "Knight of Swords",
    image: "./cards/knight_of_swords.jpg",
    meaningUpright: "Change, communication, directness",
    meaningReversed: "Impulsiveness, disregard for others",
    description: "The Knight of Swords represents change, communication, directness, and action."
  },
  {
    name: "Queen of Swords",
    image: "./cards/queen_of_swords.jpg",
    meaningUpright: "Clarity, perceptiveness, independence",
    meaningReversed: "Coldness, isolation",
    description: "The Queen of Swords represents clarity, perceptiveness, independence, and unbiased judgment."
  },
  {
    name: "King of Swords",
    image: "./cards/king_of_swords.jpg",
    meaningUpright: "Clear thinking, intellectual power, authority",
    meaningReversed: "Manipulation, cruelty",
    description: "The King of Swords represents clear thinking, intellectual power, authority, and truth."
  },
  {
    name: "Ace of Pentacles",
    image: "./cards/ace_of_pentacles.jpg",
    meaningUpright: "Opportunity, prosperity, new venture",
    meaningReversed: "Lost opportunity, missed chance",
    description: "The Ace of Pentacles represents opportunity, prosperity, new venture, and manifestation."
  },
  {
    name: "Two of Pentacles",
    image: "./cards/two_of_pentacles.jpg",
    meaningUpright: "Balance, adaptability, time management",
    meaningReversed: "Disorganization, overwhelm",
    description: "The Two of Pentacles represents balance, adaptability, time management, and prioritization."
  },
  {
    name: "Three of Pentacles",
    image: "./cards/three_of_pentacles.jpg",
    meaningUpright: "Teamwork, learning, implementation",
    meaningReversed: "Lack of teamwork, misalignment",
    description: "The Three of Pentacles represents teamwork, learning, implementation, and collaboration."
  },
  {
    name: "Four of Pentacles",
    image: "./cards/four_of_pentacles.jpg",
    meaningUpright: "Control, possession, blockages",
    meaningReversed: "Letting go, release",
    description: "The Four of Pentacles represents control, possession, blockages, and conserving energy."
  },
  {
    name: "Five of Pentacles",
    image: "./cards/five_of_pentacles.jpg",
    meaningUpright: "Isolation, insecurity, worry",
    meaningReversed: "Recovery, spiritual support",
    description: "The Five of Pentacles represents isolation, insecurity, worry, and financial loss."
  },
  {
    name: "Six of Pentacles",
    image: "./cards/six_of_pentacles.jpg",
    meaningUpright: "Giving, receiving, kindness",
    meaningReversed: "Imbalance in giving and receiving",
    description: "The Six of Pentacles represents giving, receiving, kindness, and generosity."
  },
  {
    name: "Seven of Pentacles",
    image: "./cards/seven_of_pentacles.jpg",
    meaningUpright: "Vision, perseverance, sustainable results",
    meaningReversed: "Lack of long-term vision, impatience",
    description: "The Seven of Pentacles represents vision, perseverance, sustainable results, and long-term view."
  },
  {
    name: "Eight of Pentacles",
    image: "./cards/eight_of_pentacles.jpg",
    meaningUpright: "Apprenticeship, repetition, mastery",
    meaningReversed: "Lack of commitment, boredom",
    description: "The Eight of Pentacles represents apprenticeship, repetition, mastery, and skill development."
  },
  {
    name: "Nine of Pentacles",
    image: "./cards/nine_of_pentacles.jpg",
    meaningUpright: "Gratitude, luxury, self-sufficiency",
    meaningReversed: "Overindulgence, isolation",
    description: "The Nine of Pentacles represents gratitude, luxury, self-sufficiency, and financial independence."
  },
  {
    name: "Ten of Pentacles",
    image: "./cards/ten_of_pentacles.jpg",
    meaningUpright: "Wealth, financial security, family",
    meaningReversed: "Financial insecurity, disconnection from family",
    description: "The Ten of Pentacles represents wealth, financial security, family, and long-term financial success."
  },
  {
    name: "Page of Pentacles",
    image: "./cards/page_of_pentacles.jpg",
    meaningUpright: "Manifestation, financial opportunity, skill development",
    meaningReversed: "Lack of planning, procrastination",
    description: "The Page of Pentacles represents manifestation, financial opportunity, skill development, and ambition."
  },
  {
    name: "Knight of Pentacles",
    image: "./cards/knight_of_pentacles.jpg",
    meaningUpright: "Efficiency, routine, conservatism",
    meaningReversed: "Lack of method, boredom",
    description: "The Knight of Pentacles represents efficiency, routine, conservatism, and methodical approach."
  },
  {
    name: "Queen of Pentacles",
    image: "./cards/queen_of_pentacles.jpg",
    meaningUpright: "Nurturing, practicality, financial security",
    meaningReversed: "Financial insecurity, smothering",
    description: "The Queen of Pentacles represents nurturing, practicality, financial security, and resourcefulness."
  },
  {
    name: "King of Pentacles",
    image: "./cards/king_of_pentacles.jpg",
    meaningUpright: "Wealth, business, leadership, security",
    meaningReversed: "Financial risks, poor management",
    description: "The King of Pentacles represents wealth, business, leadership, security, and discipline."
  }
];
