export function textSeparator(text: string, by: RegExp) {
  return text.trim().split(by);
}
