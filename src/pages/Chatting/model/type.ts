export interface Message {
  senderId: number;
  content: string;
  receiverId: number;
  createdAt: Date;
  topicId?: string;
}

export interface Response {
  chatHistoryDtos: Message[];
}
