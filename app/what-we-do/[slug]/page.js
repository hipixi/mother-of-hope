import { we } from "@/data/we";

const SingleWhatWedo = ({ params }) => {
  const slug = params.slug.split("-")[0];

  const wedo = we.find((i) =>
    i.title.toLowerCase().includes(slug.toLowerCase())
  );

  return (
    <main
      className="
    w-[95%] px-4 max-w-3xl mx-auto border rounded-2xl my-8 py-8"
    >
      <h1
        className="
      font-semibold text-2xl border-b  py-3 lg:text-4xl"
      >
        {wedo.title}
      </h1>
      <div className="py-3 leading-relaxed">{wedo.content}</div>
    </main>
  );
};

export default SingleWhatWedo;

export async function generateMetadata({ params }) {
  const slug = params.slug.split("-")[0];

  const wedo = we.find((i) =>
    i.title.toLowerCase().includes(slug.toLowerCase())
  );
  return {
    title: `${wedo.title} | Mother of hope foundation uganda`,
    description: `${wedo.content}`,
    openGraph: {
      title: `${wedo.title} `,
      description: `${wedo.content}`,
    },
  };
}
