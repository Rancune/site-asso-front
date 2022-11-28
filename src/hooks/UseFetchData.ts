import { useEffect, useState } from "react";
import { LaravelResponse, Article } from "../models/articleModel";

// This is a custom hook that will be used to fetch data from the API
//GET ALL ARTICLES
export const useFetchData = <T = unknown>() => {
  const [isloading, setLoading] = useState(true);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.jeuxcestas.fr/api/articles"); //TODO : Mettre l'URL en paramètre
        const payload: LaravelResponse<T> = await response.json();
        console.log(payload.data);
        setData(payload.data);
      } catch (error) {
        const _error = error as Error;
        setError(_error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    console.log("FETCH REQUEST ALL ARTICLES");
    (async () => await fetchData())();
  }, []);

  return { isloading, data, error };
};

//POST ARTICLE
export const useAddArticle = <T = unknown>() => {
  const [isloading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const addArticle = async (article: T) => {
    try {
      setLoading(true);
      const response = await fetch("https://api.jeuxcestas.fr/api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(article),
      });
      const result = await response.json();
      console.log(result);
      setMessage(result.message);
    } catch (error) {
      const _error = error as Error;
      setError(_error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { isloading, message, error, addArticle };
};

//DELETE ARTICLE
export const useDeleteArticle = <T = unknown>() => {
  const [isloading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteArticle = async (id: number) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.jeuxcestas.fr/api/articles/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const payload: LaravelResponse<T> = await response.json();
      console.log(payload);
    } catch (error) {
      const _error = error as Error;
      setError(_error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { isloading, error, deleteArticle };
};

//UPADTE ARTICLE
// export const useUpdateArticle = <T = unknown>() => {
//   const [isloading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const updateArticle = async (article: T) => {
//     try {
//       setLoading(true);
//       const response = await fetch(
//         `https://api.jeuxcestas.fr/api/articles/${article.id}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(article),
//         }
//       );
//       const payload: LaravelResponse<T> = await response.json();
//       console
//     } catch (error) {
//       const _error = error as Error;
//       setError(_error.message);
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { isloading, error, updateArticle };
// };

//GET ARTICLE BY ID
// export const useFetchArticle = () => {
//   const [isloading, setLoading] = useState(true);
//   const [data, setData] = useState<Article>();
//   const [error, setError] = useState<string | null>(null);

//   const fetchArticle = async (id: number) => {
//     try {
//       setLoading(true);
//       const response = await fetch(
//         `https://api.jeuxcestas.fr/api/articles/${id}`
//       );
//       const payload: Article = await response.json();
//       console.log("voici le return de l'api" + payload);
//       setData(payload);
//     } catch (error) {
//       const _error = error as Error;
//       setError(_error.message);
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { isloading, data, error, fetchArticle };
// };

// GET ARTICLE BY ID 
export const useFetchArticleById = <Article>() => {
  const [isloading, setLoading] = useState(true);
  const [data, setData] = useState<Article>();
  const [error, setError] = useState<string | null>(null);

  const fetchArticleById = async (id
: number) => {

    try {
      setLoading(true);
      const response = await fetch(
        `https://api.jeuxcestas.fr/api/articles/${id}`
      );
      const payload: Article = await response.json();
      console.log("voici le return de l'api" + payload);
      setData(payload);
    } catch (error) {
      const _error = error as Error;
      setError(_error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { isloading, data, error, fetchArticleById };
};


export default useFetchData;
