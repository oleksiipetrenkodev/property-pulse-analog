import NotFoundPage from "@/app/not-found";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const PropertyPage = async ({ params }) => {
  try {
    await connectDB();
    const { id } = await params;

    if (!id) NotFoundPage();

    const property = await Property.findById(id).lean();

    if (!property) NotFoundPage();

    return (
      <>
        <PropertyHeaderImage image={property.images[0]} />
        <section>
          <div className="container m-auto py-6 px-6">
            <Link
              href="/properties"
              className="text-blue-500 hover:text-blue-600 flex items-center"
            >
              <FaArrowLeft className="mr-2" />
              Back to Properties
            </Link>
          </div>
        </section>
        <section className="bg-blue-50">
          <div className="container m-auto py-10 px-6">
            <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
              {/* Property Info */}
            </div>
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.error(error);
    notFound();
  }
};

export default PropertyPage;
