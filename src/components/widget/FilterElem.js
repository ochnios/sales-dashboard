export default function FilterElem({ title, onClick, isSelected }) {
  return (
    <div className="filter-elem text-center">
      <a onClick={onClick} className={isSelected ? "filter-active" : ""}>
        {title}
      </a>
    </div>
  );
}
