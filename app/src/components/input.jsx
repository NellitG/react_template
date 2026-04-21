export default function Input({ label, ...props }) {
  return (
    <div>
      <label>{label}</label>
      <input className="border p-2 w-full" {...props} />
    </div>
  );
}