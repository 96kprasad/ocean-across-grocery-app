interface Props {
  title: string;
  onSeeAll?: () => void;
  seeAllLabel?: string;
}

export default function SectionHeader({ title, onSeeAll, seeAllLabel = "See all" }: Props) {
  return (
    <div className="flex items-center justify-between mb-3">
      <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      {onSeeAll && (
        <button
          onClick={onSeeAll}
          aria-label={`${seeAllLabel} ${title}`}
          className="text-green-500 text-sm font-medium hover:text-green-600 transition-colors"
        >
          {seeAllLabel}
        </button>
      )}
    </div>
  );
}
