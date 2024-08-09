import { useEffect, useState } from "react";

const Image = () => {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos1", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setImageURL(response[1].url))
      .catch((error) => setError(error))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000); // Add a delay of 1 second (1000 milliseconds)
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    imageURL && (
      <>
        <img src={imageURL} alt={"placeholder text"} width={200} />
      </>
    )
  );
};

export default Image;
