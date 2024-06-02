"use client";
import PropertyImageHeader from "@/components/PropertyImageHeader";
import { fetchProperty } from "@/utils/requests";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Spinner from '@/components/Spinner';
import { FaSpinner } from "react-icons/fa";


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
      {loading && <Spinner loading={loading} /> }
      {!loading && property && (<>
        <PropertyImageHeader property={property} image={property.images[0]} />
      </>)}
    </>
  );
};

export default PropertyPage;
