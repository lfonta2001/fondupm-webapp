import { signOut } from '../user-managing/signout.js';

export default function SignOutButton() {
  return (
    <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={signOut}>
      Sign Out
    </button>
  );
}