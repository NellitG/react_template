export default function Card({ title, children }) {
  return (
    <div className="border p-4 rounded-xl shadow">
      <h2 className="font-bold">{title}</h2>
      {children}
    </div>
  );
}