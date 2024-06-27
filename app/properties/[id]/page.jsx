"use client";
import PropertyImageHeader from "@/components/PropertyImageHeader";
import { fetchProperty } from "@/utils/requests";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Spinner from '@/components/Spinner';
import { FaSpinner } from "react-icons/fa";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyImages from "@/components/PropertyImages";
import BookmarkButton from "@/components/BookmarkButton";
import ShareButtons from "@/components/ShareButtons";
import PropertyContactForm from "@/components/PropertyContactForm";


const PropertyPage = () => {
  const {id}=useParams();
  const [property, setProperty]=useState(null);
  const [loading, setLoading]=useState(true);

  useEffect(()=>{
    const fetchPropertyData= async()=>{
      if(!id) return;
      try{
        const property= await fetchProperty(id);
        setProperty(property);
      }
      catch(error){
        console.log("Error fetching property: ", error);
      }
      finally{
        setLoading(false);
      }
    }

    if(property===null){
      fetchPropertyData();
    }
  },[id, property])

  if(!property && !loading){
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Property Not Found!
      </h1>
    )
  }

  return (
    <>
      {loading && <Spinner loading={loading} />}
      {!loading && property && (
        <>
          <PropertyImageHeader property={property} image={property.images[0]} />

          <section className="bg-blue-50">
            <div className="container m-auto py-10 px-6">
              <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                <PropertyDetails property={property} />

                {/* <!-- Sidebar --> */}
                <aside className="space-y-4">
                  <BookmarkButton property={property} />
                  <ShareButtons property={property} />

                  {/* <!-- Contact Form --> */}
                  <PropertyContactForm property={property} />
                </aside>
              </div>
            </div>
          </section>

          <PropertyImages images={property.images} />
        </>
      )}
    </>
  );
};

export default PropertyPage;
