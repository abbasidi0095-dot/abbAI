export interface IAbbAIBrain {
  sendMessage(message: string): Promise<string>;
}

export class GeminiBrain implements IAbbAIBrain {
  private apiKey: string;

  constructor() {
    this.apiKey = process.env.GEMINI_API_KEY || '';
  }

  async sendMessage(message: string): Promise<string> {
    // Implement API call to Gemini
    return `Simulated response to: ${message}`;
  }
}
