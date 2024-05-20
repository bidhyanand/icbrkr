import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen border-2 border-black  ">
      <Link href={"/dashboard/analytics"}  className="border-2 border-green-600 p-4 shadow-lg uppercase shadow-green-500 ">
        Dashboard
      </Link >
    </div>
  );
}
