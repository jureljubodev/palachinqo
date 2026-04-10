export default function Loader({ done }: { done: boolean }) {
  return (
    <div className={`loader-overlay ${done ? "loader-overlay--hide" : ""}`}>
      <div className="spinner"></div>
    </div>
  );
}
