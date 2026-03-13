'use client';

export function NavBar() {
  // TODO: wire up auth store for login/logout state
  return (
    <nav className="flex items-center justify-between py-4">
      <a href="/" className="text-xl font-bold">Tracker</a>
      <div className="flex gap-4">
        <a href="/tracked">Tracked</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </nav>
  );
}
