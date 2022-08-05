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
        const response = await fetch(
          "https://3001-deboradiazper-cinnamoon-x66favfbk3o.ws-eu59.gitpod.io" +
            "/api/recipes"
        );
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
          if (resp.status === 200) {
            alert("There has been some error");
            return false;
          }

          const data = await resp.json();
          console.log(data.token);
          localStorage.setItem("token", data.token);
          actions.setToken(data.token);
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
    },
  };
};

export default getState;
