import React from 'react';

type Props = {
  title: string;
  subInfo: string;
  color: 'rose' | 'teal' | 'blue' | 'yellow';
  score: string;
};
const DomainCardInfoBox: React.FC<Props> = ({
  title,
  subInfo,
  color,
  score,
}) => {
  let boxColorClass;
  let scoreColorClass;

  switch (color) {
    case 'blue':
      boxColorClass = 'bg-sky-300';
      scoreColorClass = 'bg-sky-200';
      break;
    case 'rose':
      boxColorClass = 'bg-rose-300';
      scoreColorClass = 'bg-rose-200';
      break;
    case 'teal':
      boxColorClass = 'bg-teal-300';
      scoreColorClass = 'bg-teal-200';
      break;
    case 'yellow':
      boxColorClass = 'bg-amber-300';
      scoreColorClass = 'bg-amber-200';
      break;

    default:
      break;
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 p-4 text-center rounded-lg ${boxColorClass}`}
    >
      <p className="text-sm font-bold uppercase">{title}</p>
      <div className={`px-4 py-2 ${scoreColorClass}`}>{score}</div>
      <p className="text-xs">{subInfo}</p>
    </div>
  );
};

export default DomainCardInfoBox;
