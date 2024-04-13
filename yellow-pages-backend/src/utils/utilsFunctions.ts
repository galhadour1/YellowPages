export function calculateAge(birthDateString: string): number {
  const birthDate = new Date(birthDateString);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

export function extractNumbers(word: string): string {
  return word.replace(/\D/g, "");
}

export function removeSpecialChars(sentence: string): string {
  return sentence.replace(/[^\w\s]/g, "");
}
