import React, { useContext } from "react";
import RecipeFav from "./recipeFav";

const RecipeFavList = () => {
  return (
    <div className="scroll-container d-flex">
      <div className="col-12 col-md-3 px-2">
        <RecipeFav
          image={
            "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVjZXRhJTIwYmF0aWRvfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          }
        />
      </div>
      <div className="col-12 col-md-3 px-2">
        <RecipeFav
          image={
            "https://images.unsplash.com/photo-1645783916385-1c99860a2a42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVjZXRhJTIwYmF0aWRvfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          }
        />
      </div>
      <div className="col-12 col-md-3 px-2">
        <RecipeFav
          image={
            "https://images.unsplash.com/photo-1546554137-f86b9593a222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHJlY2V0YSUyMGVuc2FsYWRhfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=600"
          }
        />
      </div>
      <div className="col-12 col-md-3 px-2">
        <RecipeFav
          image={
            "https://images.unsplash.com/photo-1518567140117-409f863963bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVjZXRhJTIwdG9tYXRlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          }
        />
      </div>
      <div className="col-12 col-md-3 px-2">
        <RecipeFav
          image={
            "https://images.unsplash.com/photo-1596818531679-96ef98b9a497?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVjZXRhJTIwdG9tYXRlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          }
        />
      </div>
      <div className="col-12 col-md-3 px-2">
        <RecipeFav
          image={
            "https://images.unsplash.com/photo-1519148246701-3dc1897a7a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVjZXRhJTIwbnVlY2VzfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          }
        />
      </div>
      <div className="col-12 col-md-3 px-2">
        <RecipeFav
          image={
            "https://images.unsplash.com/photo-1651256785597-4efe48fd71f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlY2V0YSUyMG51ZWNlc3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60"
          }
        />
      </div>
    </div>
  );
};

export default RecipeFavList;
