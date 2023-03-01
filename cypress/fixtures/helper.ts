
export function emailAddress(): string {
    const emailPrefix = Math.random().toString(36).substring(7);
    return `${emailPrefix}@example.com`;
}
