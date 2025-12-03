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

export const generateMedicalReportPrompt = (
  sessionId: string,
  transcript: JSON,
  sessionDetails: JSON
) => {
  return `You are an AI Medical Voice Agent that just finished a voice conversation with a user. Based on the transcript, generate a structured report with the following fields:

1. sessionId: a unique session identifier
2. agent: the medical specialist name (e.g., "General Physician AI")
3. user: name of the patient or "Anonymous" if not provided
4. timestamp: current date and time in ISO format
5. chiefComplaint: one-sentence summary of the main health concern
6. summary: a 2-3 sentence summary of the conversation, symptoms, and recommendations
7. symptoms: list of symptoms mentioned by the user
8. duration: how long the user has experienced the symptoms
9. severity: mild, moderate, or severe
10. medicationsMentioned: list of any medicines mentioned
11. recommendations: list of AI suggestions (e.g., rest, see a doctor)
Return the result in this JSON format:
{
 "sessionId": "string",
 "agent": "string",
 "user": "string",
 "timestamp": "ISO Date string",
 "chiefComplaint": "string",
 "summary": "string",
 "symptoms": ["symptom1", "symptom2"],
 "duration": "string",
 "severity": "string",
 "medicationsMentioned": ["med1", "med2"],
 "recommendations": ["rec1", "rec2"],
}

Only include valid fields. NO OTHER TEXT.

Resources:
Transcript: ${JSON.stringify(transcript)}\n\n
Session Details: ${JSON.stringify(sessionDetails)}\n\n
Session ID: ${sessionId}\n\n

`;
};
