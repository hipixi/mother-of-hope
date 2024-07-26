import { getConfirmedPartners } from "@/app/actions/partner";

const Partners = async () => {
  const partners = await getConfirmedPartners();

  return (
    <section className="py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-screen-xl">
        <h2 className="font-bold text-3xl md:text-4xl mb-8 text-center">
          Our Partners
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {`We're proud to work with these amazing organizations to make a
          difference in our community.`}
        </p>
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div key={partner._id}>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={partner.logo}
                    className="w-full max-h-20 lg:max-h-24 object-contain"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
