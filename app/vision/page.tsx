export const metadata = {
  title: "رؤيتنا - شركة المحمل",
  description:
    "أن نكون الخيار الأول في تقديم خدمات حج الداخل على مستوى المملكة العربية السعودية.",
};

export default function VisionPage() {
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
          رؤيتنا
        </h1>

        <p className="mt-10 text-[17px] font-medium leading-[2.05] text-[#2b2120] sm:text-[1.125rem] sm:leading-[2.1]">
          أن نكون الخيار الأول في تقديم خدمات حج الداخل على مستوى المملكة
          العربية السعودية من خلال تقديم تجربة ضيافة وخدمات استثنائية ترتكز على
          الجودة والراحة والاحترافية والروحانية والمساهمة في رفع مستوى الخدمات
          بما ينسجم مع تطلعات رؤية المملكة 2030.
        </p>
      </div>
    </main>
  );
}
