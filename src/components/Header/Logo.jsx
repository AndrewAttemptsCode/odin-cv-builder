export default function Logo() {
  return (
    <div className="header-logo">
      <h1>
        <span style={{
          background: 'linear-gradient(45deg, #94a3b8, #64748b)',
          WebkitBackgroundClip: 'text',
          color: 'transparent'}}>cv</span>
        <span style={{
          background: 'linear-gradient(45deg, #64748b, #94a3b8)',
          WebkitBackgroundClip: 'text',
          color: 'transparent'}}>Builder</span>
      </h1>
    </div>
  );
}