export function emailAddress(): string {
    const randomString = Math.random().toString(36).substring(7);
    const domain = 'example.com';
    return `user-${randomString}@${domain}`;
}
