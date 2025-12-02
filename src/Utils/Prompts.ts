import { AIDoctorAgents } from "./Agents";
export const suggestAgentsPrompt = (notes: string): string => {
  // console.log(JSON.stringify(AIDoctorAgents));
  return `You are an AI trained to suggest doctors from a list based on user notes and symptoms.
    Task:
    -Suggest list of doctors based on the user notes and symptoms.
    -List of doctors: ${JSON.stringify(AIDoctorAgents)}
    -User notes/symptoms: ${notes}

    Important: Return ONLY VALID JSON and NO OTHER TEXT.`;
};
