// import React from 'react';
import Navbar from "./Navbar";
// import CrouselThrough from "./CrouselThrough";
// import Calender from "./Calender";
// import Paginationn from "./Paginationn";
// import NavbarTailwind from "./NavbarTailwind";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const About = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const showData = async (): Promise<void> => {
    try {
      const response = await axios.get<Product[]>(
        "https://fakestoreapi.com/products"
      );

      setProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };
  useEffect(() => {
    showData();
  }, []);
  return (
    <>
      <Navbar />

      {/* <div className="w-fit">
        <div className="mt-20 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            This is About Page
          </h1>
          <CrouselThrough />
          <Calender />
          <Paginationn />
          <NavbarTailwind />
        </div>
      </div> */}
      <div className="grid relative top-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 ">
        {products.map((prod) => (
          <div
            key={prod.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src={prod.image}
              alt={prod.title}
              className="w-full h-52 object-contain p-4 bg-gray-100"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{prod.title}</h3>
              <p className="text-gray-700 text-sm mb-2">
                {prod.description.slice(0, 100)}...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-bold">${prod.price}</span>
                <span className="text-yellow-500">⭐ {prod.rating.rate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="m-15">
        {" "}
        <Select>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select a timezone" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>North America</SelectLabel>
              <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
              <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
              <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
              <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
              <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
              <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Europe & Africa</SelectLabel>
              <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
              <SelectItem value="cet">Central European Time (CET)</SelectItem>
              <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
              <SelectItem value="west">
                Western European Summer Time (WEST)
              </SelectItem>
              <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
              <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Asia</SelectLabel>
              <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
              <SelectItem value="ist">India Standard Time (IST)</SelectItem>
              <SelectItem value="cst_china">
                China Standard Time (CST)
              </SelectItem>
              <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
              <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
              <SelectItem value="ist_indonesia">
                Indonesia Central Standard Time (WITA)
              </SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Australia & Pacific</SelectLabel>
              <SelectItem value="awst">
                Australian Western Standard Time (AWST)
              </SelectItem>
              <SelectItem value="acst">
                Australian Central Standard Time (ACST)
              </SelectItem>
              <SelectItem value="aest">
                Australian Eastern Standard Time (AEST)
              </SelectItem>
              <SelectItem value="nzst">
                New Zealand Standard Time (NZST)
              </SelectItem>
              <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>South America</SelectLabel>
              <SelectItem value="art">Argentina Time (ART)</SelectItem>
              <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
              <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
              <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default About;
