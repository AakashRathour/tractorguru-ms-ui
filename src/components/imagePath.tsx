export function getImageUrl(fileName: string) {
    const base = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "";
    return base + fileName;
}
