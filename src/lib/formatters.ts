import { keyBy, mapValues } from "es-toolkit";


const intlDate = new Intl.DateTimeFormat(
  'pt-BR',
  { day: '2-digit', month: 'short', year: 'numeric' },
);

const formatDate = (date: Date) => {
  const rawParts = intlDate.formatToParts(date);
  const parts = mapValues(keyBy(rawParts, p => p.type), p => p.value);
  return `${parts.day}/${parts.month}/${parts.year}`;
};

export {
  formatDate,
};
