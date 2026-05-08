export const metadata = {
  title: "من نحن - حملة المحمل",
  description:
    "\"أغلى 99 ساعة\" شعار حملة المحمل الذي اعتمدته منهاجًا في خدمة ضيوف بيت الله الحرام.",
};

export default function AboutPage() {
  return (
    <main className="relative isolate mt-4 overflow-hidden px-5 pt-4 pb-10 sm:px-8">
      <div
        className="pointer-events-none absolute left-1/2 top-[42%] z-0 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-[min(78vw,22rem)] w-[min(78vw,22rem)] rotate-45 rounded-[2.75rem] bg-[#e8dccb]/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-lg text-right">
        <h1 className="inline-block border-b-[3px] border-[#c9a263] pb-1 text-[2.25rem] font-extrabold leading-tight tracking-tight text-[#7a1f3d] sm:text-5xl">
          من نحن
        </h1>

        <h2 className="mt-10 text-2xl font-bold text-[#7a1f3d] sm:text-[1.625rem]">
          حملة المحمل
        </h2>

        <div className="mt-10 space-y-7 text-[17px] font-medium leading-[2.05] text-[#2b2120] sm:text-[1.125rem] sm:leading-[2.1]">
          <p>
            <strong className="font-extrabold text-[#7a1f3d]">
              &quot;أغلى 99 ساعة&quot;
            </strong>{" "}
            هذا هو شعار شركة حملة المحمل الذي تعتز به واعتمدته كأساس ومنهاج
            لعملها منذ انطلاقتها في خدمة حجاج بيت الله الحرام، وما زالت تسعى
            بشكل دائم ومستمر من أجل الحفاظ عليه والعمل على تطوير وتقديم كل ما من
            شأنه خدمة هذا الشعار حتى يتمكن ضيوف بيت الله الحرام من استثمار هذه
            الـ 99 ساعة في العبادة دون الانشغال في أي أمر آخر متعلق بالحج.
          </p>
        </div>

        <section className="relative z-10 mt-12 rounded-2xl bg-white px-5 py-4 shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
          <h3 className="text-[11px] font-bold text-stone-500">المطوّرة</h3>
          <p className="mt-0.5 text-sm font-extrabold text-[#7a1f3d]">
            ساره السبيعي
          </p>
        </section>
      </div>
    </main>
  );
}
