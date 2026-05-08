import Link from "next/link";
import { notFound } from "next/navigation";
import { getStageDetails, dayDetails } from "@/data/dayDetails";
import DescriptionCard from "@/app/components/DescriptionCard";
import TasksList from "@/app/components/TasksList";
import DuasSection from "@/app/components/DuasSection";

export function generateStaticParams() {
  return dayDetails.map((d) => ({ id: String(d.id) }));
}

export default async function DayPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const stageId = Number.parseInt(id, 10);
  if (Number.isNaN(stageId)) notFound();

  const details = getStageDetails(stageId);
  if (!details) notFound();

  return (
    <main className="pb-10">
      <header className="-mt-6 px-5 pt-0 pb-4 text-center">
        <p className="text-sm font-semibold text-stone-600">
          أنت الآن تشاهد
        </p>
        <h1 className="mt-1 inline-block border-b-2 border-[#c9a263] pb-1 text-2xl font-extrabold leading-tight text-[#7a1f3d] sm:text-3xl">
          {details.title}
        </h1>
        <p className="mt-2 text-sm font-bold text-stone-700">
          من رحلة الحج
        </p>
      </header>

      <div className="flex flex-col gap-5 px-5">
        <DescriptionCard description={details.description} />

        <TasksList stageId={stageId} tasks={details.tasks} />

        <DuasSection duas={details.duas} />

        <Link
          href="/"
          className="mt-2 flex items-center justify-center gap-3 rounded-2xl bg-[linear-gradient(135deg,#7a1f3d,#9c2c52)] px-5 py-4 text-base font-bold text-white shadow-[0_10px_24px_rgba(122,31,61,0.18)] transition-all hover:brightness-110 active:scale-[0.99]"
        >
          <span>العودة للصفحة الرئيسية</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                d="M14 6l-6 6 6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </div>
    </main>
  );
}
