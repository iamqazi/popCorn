export default function ErrorMessage({ message }) {
  return (
    <p className="error">
      {message}
      <span>😞</span>
    </p>
  );
}
