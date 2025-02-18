import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles.css";
import { MakeupAccessorie } from "../Api.js";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

export default function MakeupAccessories() {
  const navigat = useNavigate();
  const {cardData,setCardData} = useContext(AppContext)
  const handleData = (id,name,price,image,off,rating) => {
    setCardData({"id":id,"name":name,"price":price,"image":image,"off":off,"rating":rating})
    // console.log("sabkuch",id,name,price,image,off)
    navigat("/singlePage/" + id);
  };

  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={false}
        mousewheel={true}
        slidesPerView={4}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {MakeupAccessorie?.map((i) => (
          <SwiperSlide backgroundColor="rgb(239,239,239)">
            <Box
              onClick={() => handleData(i.id,i.name,i.price,i.image,i.off,i.rating)}
              key={i.id}
            
              margin="8px"
            >
              <img src={i.image} width="220" height="220" alt={i.id} />
              <Text fontSize="sm">{i.name}</Text>
              <Box textAlign="right" fontSize="13px" margin="10px"  borderBottom="1px solid lightgray">
                <button
                  style={{
                    backgroundColor: "rgb(60,193,1)",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    color: "white",
                  }}
                >
                  {i.rating} ☆
                </button>
              </Box>
              <Flex  justifyContent="space-between">
                 <Text color="rgb(251,176,104)">₹ {i.price}</Text> <Text fontSize='md' color="rgb(46,151,69)">{i.off}</Text>
              </Flex>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
