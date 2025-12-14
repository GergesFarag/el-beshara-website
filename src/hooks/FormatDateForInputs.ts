export const formatDateTime = (dateString: string) => {
  if (!dateString) return "";

  const date = new Date(dateString);

  // تحويله لصيغة datetime-local المطلوبة
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate()) +
    "T" +
    pad(date.getHours()) +
    ":" +
    pad(date.getMinutes())
  );
};
