export function TaskInfoCard({ title, status }: any) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Status: {status}</p>
    </div>
  );
}

export function TaskItem({ label }: any) {
  return <li>{label}</li>;
}
