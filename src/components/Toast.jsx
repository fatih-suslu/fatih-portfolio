import { ToastContainer, toast } from "react-toastify";
import { useEffect, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LanguageContext } from "../contexts/LanguageContext";
import { API } from "../api/api";
import useLocalStorage from "../hooks/useLocalStorage";
import "react-toastify/dist/ReactToastify.css";

export default function Toast() {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [token, setToken] = useLocalStorage("token", null);

  useEffect(() => {
    if (token) {
      // Token varsa "Tekrar Hoşgeldiniz" mesajı ver
      const message =
        language === "en" ? "Welcome back! :D" : "Tekrar Hoşgeldin! :D";
      toast.info(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      // Token yoksa API'ye POST isteği at ve token al
      API.post("/login", {
        email: "fatihportfolio@reqres.in",
        password: "portfolio",
      })
        .then((response) => {
          //const newToken = response.data.token; token dönmüyor: undefined
          const newToken = response.data.id;
          setToken(newToken); // Token'i useLocalStorage ile kaydet
          console.log("Gelen API: ", response.data);

          const message =
            language === "en" ? "Welcome to my page!" : "Sayfama Hoşgeldiniz!";
          toast.success(message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((error) => {
          console.error("API Hatası:", error);
          toast.error(
            language === "en"
              ? "An error occurred while loading the page."
              : "Sayfa yüklenirken bir hata oluştu.",
            {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        });
    }
  }, []);
  // darkmode
  return <ToastContainer theme={darkMode ? "dark" : "light"} />;
}
