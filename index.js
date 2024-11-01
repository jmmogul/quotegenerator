const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking. -Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. - Oprah Winfrey",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
    "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one. - John Lennon",
    "You must be the change you wish to see in the world. -Mahatma Gandhi",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. - Martin Luther King Jr",
    "Do one thing every day that scares you. - Eleanor Roosevelt",
    "Well done is better than well said. - Benjamin Franklin",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "It is during our darkest moments that we must focus to see the light. - Aristotle",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "Be yourself; everyone else is already taken. - Oscar Wilde",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate: only love can do that. - Martin Luther King Jr.",
    "Do one thing every day that scares you. - Eleanor Roosevelt",
    "Well done is better than well said. - Benjamin Franklin",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. – Helen Keller",
    "It is during our darkest moments that we must focus to see the light. – Aristotle",
    "Do not go where the path may lead; go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
    "You will face many defeats in life, but never let yourself be defeated. - Maya Angelou",
    "Go confidently in the direction of your dreams! Live the life you've imagined. - Henry David Thoreau",
    "Go confidently in the direction of your dreams! Live the life you've imagined. - Henry David Thoreau",
    "Never let the fear of striking out keep you from playing the game. - Babe Ruth",
    "In this life we cannot do great things. We can only do small things with great love. - Mother Teresa",
    "Many of life's failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison",
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. - Dr. Seuss",
    "If life were predictable, it would cease to be life and be without flavor.– Eleanor Roosevelt",
    " In the end, it‘s not the years in your life that count. It’s the life in your years. – Abraham Lincoln",
    " Life is a succession of lessons which must be lived to be understood. – Ralph Waldo Emerson",
    "Life is never fair, and perhaps it is a good thing for most of us that it is not. – Oscar Wilde",
    "The only impossible journey is the one you never begin. – Tony Robbins",
    " In this life, we cannot do great things. We can only do small things with great love. – Mother Teresa",
    "Only a life lived for others is a life worthwhile. – Albert Einstein",
    "The purpose of our lives is to be happy. – Dalai Lama",
    "You may say I‘m a dreamer, but I’m not the only one. I hope someday you'll join us. And the world will live as one. – John Lennon",
    "You only live once, but if you do it right, once is enough. – Mae West",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
    "Don't worry when you are not recognized but strive to be worthy of recognition. – Abraham Lincoln",
    " The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
    "Life is really simple, but we insist on making it complicated. – Confucius",
    " May you live all the days of your life. – Jonathan Swift",
    "Life itself is the most wonderful fairy tale. – Hans Christian Andersen",
    "Do not let making a living prevent you from making a life. – John Wooden",
    "Go confidently in the direction of your dreams! Live the life you've imagined. – Henry David Thoreau",
    "Keep smiling, because life is a beautiful thing and there's so much to smile about. – Marilyn Monroe",
    "In the depth of winter, I finally learned that within me there lay an invincible summer. – Albert Camus",
    "In three words, I can sum up everything I've learned about life: it goes on. – Robert Frost",
    "So we beat on, boats against the current, borne back ceaselessly into the past. – F. Scott Fitzgerald",
    "Life is either a daring adventure or nothing. – Helen Keller",
    " You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.– Dr. Seuss",
    "Life is made of ever so many partings welded together. – Charles Dickens",
    "Your time is limited, so don‘t waste it living someone else’s life. Don‘t be trapped by dogma — which is living with the results of other people’s thinking. – Steve Jobs",
    "Life is trying things to see if they work. – Ray Bradbury",
    " Many of life's failures are people who did not realize how close they were to success when they gave up. – Thomas A. Edison",
    "Success is not final; failure is not fatal: It is the courage to continue that count. – Winston S. Churchi",
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    "Don't be distracted by criticism. Remember — the only taste of success some people get is to take a bite out of you. – Zig Ziglar",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "Everything you can imagine is real. – Pablo Picasso",
    "If you want to make your dreams come true, the first thing you have to do is wake up. – J.M. Power",
    "There are no secrets to success. It is the result of preparation, hard work, and learning from failure. – Colin Powell",
    "The real test is not whether you avoid this failure, because you won‘t. It’s whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere. – Barack Obama",
    ".The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "It is better to fail in originality than to succeed in imitation. – Herman Melville",
    "he future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt"
]   
    



const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
}
