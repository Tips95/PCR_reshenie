export default function Background() {
  return (
    <div 
      className="fixed inset-0 z-[-1]"
      style={{
        background: 'url(/images/background.jpeg) no-repeat center center',
        backgroundSize: 'cover',
        opacity: 0.3,
      }}
    />
  );
} 