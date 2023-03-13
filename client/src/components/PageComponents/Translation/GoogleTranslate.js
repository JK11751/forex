//import { Box } from '@chakra-ui/react';
import React, {useEffect} from 'react'
import './style.css'

const GoogleTranslate = () => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  return (
    <>
     {/* <Box id="google_translate_element" w={'full'} h={50} bgColor={'#fe6600'} alignContent={'center'} ></Box>*/}
    </>
  );
};

export default GoogleTranslate;
