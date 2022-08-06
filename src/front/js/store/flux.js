const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      token: null,

      recipes: [],
    },

    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadRecipe: async () => {
        const response = await fetch(process.env.BACKEND_URL + "/api/recipes");
        const data = await response.json();
        console.log(data);
        setStore({ recipes: data });
        return true;
      },

      login: async (email, password) => {
        const opts = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };

        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/login",
            opts
          );
          if (resp.status != 200) {
            alert("User or password incorrect");
            return false;
          }

          const data = await resp.json();
          console.log(data.token);
          localStorage.setItem("token", data.token);
          setStore({ token: data.token });
          return true;
        } catch (error) {
          console.error("there has been an error login in");
        }
      },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      setToken: (token) => {
        setStore({ token: token });
      },
      logout: () => {
        setStore({ token: null });
        localStorage.removeItem("token");
      },
    },
  };
};

export default getState;
