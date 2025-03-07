const { GoogleGenerativeAI } = require("@google/generative-ai");

require('dotenv').config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Main function to generate AI response
async function generateAIResponse(prompt) {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error('Error generating content:', error);
    return 'Sorry, there was an error generating the response.';
  }
}

// Execute the function
async function main() {
  const prompt = "Explain how AI works";
  const response = await generateAIResponse(prompt);
  console.log(response);
}

main().catch(console.error);