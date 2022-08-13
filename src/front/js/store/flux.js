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
      user: null,
      auth: false,
      userInfo: {},
      searchRecipes: [],
      recipesfavorites: [],
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
        setStore({
          recipes: data,
        });
        return true;
      },
      loadRecipeCategory: async (category) => {
        const response = await fetch(
          process.env.BACKEND_URL + "/api/recipesbycategory/" + category
        );
        const data = await response.json();
        console.log(data);

        return data;
      },
      addFavorites: (id) => {
        const store = getStore();

        fetch(process.env.BACKEND_URL + "/api/recipesfavorites", {
          method: "POST",
          body: JSON.stringify({
            recipe_id: id,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
          .then((resp) => {
            return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
          })
          .then((data) => {
            //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
            console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
          })
          .catch((error) => {
            //manejo de errores
            console.log(error);
          });
      },

      loadUser: async () => {
        const response = await fetch(process.env.BACKEND_URL + "/api/user");
        const data = await response.json();
        console.log(data);
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
            return false;
          }

          const data = await resp.json();
          console.log(data.user);
          setStore({ user: data.user.name });
          setStore({ userInfo: data.user });

          localStorage.setItem("user", data.user.name);

          console.log(data.token);
          setStore({ auth: true });
          localStorage.setItem("token", data.token);
          setStore({ token: data.token });
          return true;
        } catch (error) {
          console.error("there has been an error login in");
        }
      },

      search: async (search) => {
        const store = getStore();
        const opts = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            data: store.searchRecipes ? store.searchRecipes : search,
          }),
        };
        const response = await fetch(
          process.env.BACKEND_URL + "/api/searchbar",
          opts
        );
        const dataRecipes = await response.json();
        console.log(dataRecipes);
        return dataRecipes;
      },

      cleanSearch: () => {
        setStore({ searchRecipes: null });
      },

      setSearch: (search) => {
        setStore({ searchRecipes: search });
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
      setToken: (token, user) => {
        setStore({ token: token });
        setStore({ user: user });
      },
      logout: () => {
        setStore({ token: null });
        setStore({ auth: false });

        localStorage.removeItem("token");
      },
      loadFavoritesRecipes: async () => {
        const store = getStore();

        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/recipesfavorites",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );

          if (response.status === 200) {
            const data = await response.json();
            setStore({
              recipesfavorites: data,
            }); //esto imprimirá en la consola el objeto exacto recibido del servidor
          } else if (response.status === 404) {
            console.log("No hay recipes favoritos");
          }
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
