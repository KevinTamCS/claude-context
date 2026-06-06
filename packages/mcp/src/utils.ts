import * as path from "path";

export function generateLineNumbers(content: string, startLine: number): string {
    const lines = content.split('\n');
    const numberedLines = lines.map((line, index) => {
        if (Number.isNaN(Number(startLine))) return line;
        const lineNumber = Number(startLine) + index;
        return `${lineNumber}: ${line}`;
    });
    return numberedLines.join('\n');
}

/**
 * Truncate content to specified length
 */
export function truncateContent(content: string, maxLength: number): string {
    if (content.length <= maxLength) {
        return content;
    }
    return content.substring(0, maxLength) + '[...TRUNCATED]';
}

/**
 * Ensure path is absolute. If relative path is provided, resolve it properly.
 */
export function ensureAbsolutePath(inputPath: string): string {
    // If already absolute, return as is
    if (path.isAbsolute(inputPath)) {
        return inputPath;
    }

    // For relative paths, resolve to absolute path
    const resolved = path.resolve(inputPath);
    return resolved;
}

export function trackCodebasePath(codebasePath: string): void {
    const absolutePath = ensureAbsolutePath(codebasePath);
    console.log(`[TRACKING] Tracked codebase path: ${absolutePath} (not marked as indexed)`);
} 

export function shuffle(array: any[]) {
  // Loop backwards through the array
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    
    // Swap elements array[i] and array[j] using destructuring
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}