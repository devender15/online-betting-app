import Link from "next/link";


export default function Navbar() {
  return (
    <header className="w-full h-full bg-white">
      <nav className="flex justify-between items-center p-4">
        <div>
          <h1 className="font-semibold">9xr Bet</h1>
        </div>
        <div>
          <ul className="flex gap-x-4">
            <li>
              <Link href="/dashboard">Home</Link>
            </li>
            <li>
              <Link href="#">Wallet</Link>
            </li>
            <li>
              <Link href="/settings">Settings</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
