import { useEffect, useState } from "react";
import { LaravelResponse } from "../models/articleModel";

export const useFetchData = <T = unknown>() => {
  const [isloading, setLoading] = useState(true);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost/api/articles"); //TODO : Mettre l'URL en paramètre
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

    console.log("FETCH REQUEST");
    (async () => await fetchData())();
  }, []);

  return { isloading, data, error };
};

//function to add new article
export const useAddArticle = <T = unknown>() => {
  const [isloading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const addArticle = async (article: T) => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost/api/articles", {
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

//function to delete article
export const useDeleteArticle = <T = unknown>() => {
  const [isloading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteArticle = async (id: number) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost/api/articles/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
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

//function to update article
// export const useUpdateArticle = <T = unknown>() => {
//   const [isloading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const updateArticle = async (article: T) => {
//     try {
//       setLoading(true);
//       const response = await fetch(`http://localhost/api/articles/${article.id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(article),
//       });
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

export default useFetchData;
