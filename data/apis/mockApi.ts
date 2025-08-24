export type Message = {
    id: string;
    role: "user" | "assistant";
    content: string;
    type?: "text" | "image" | "file";
};

export async function sendMessageToMockAPI(
    prompt: string,
    type: "text" | "image" | "file" = "text"
): Promise<Message> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: Date.now().toString(),
                role: "assistant",
                content: `Mock response for: ${prompt}`,
                type,
            });
        }, 800);
    });
}
